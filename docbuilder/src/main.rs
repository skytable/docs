mod document;
use crate::document::Document;
use serde_yaml::Value;
use std::borrow::Cow;
use std::collections::HashMap;
use std::fs::File;
use std::io::Write;
use std::process::Command;

macro_rules! getstr {
    ($in:expr, $name:expr) => {
        $in.get($name).unwrap().as_str().unwrap().to_owned()
    };
}

macro_rules! get_str_array {
    ($in:expr, $name:expr) => {
        $in.get($name)
            .unwrap()
            .as_sequence()
            .unwrap()
            .iter()
            .map(|v| v.as_str().unwrap().to_owned())
            .collect::<Vec<String>>()
    };
}

fn main() {
    // download the file
    let _dlfile = Command::new("wget")
        .arg("https://raw.githubusercontent.com/skytable/skytable/next/actiondoc.yml")
        .output()
        .unwrap();
    let output = Command::new("cat").arg("actiondoc.yml").output().unwrap();
    let output = String::from_utf8_lossy(&output.stdout);
    let _rmfile = Command::new("rm").arg("actiondoc.yml").output().unwrap();

    // now parse it
    parse_into_actiondoc(output)
}

fn parse_into_actiondoc(output: Cow<'_, str>) {
    let yml: Value = serde_yaml::from_str(&output).unwrap();
    let yml = yml.as_sequence().unwrap();
    let mut actlist = Vec::new();
    let mut docs = Vec::new();
    let linklist = init_type_linklist();
    for map in yml.iter() {
        let name = getstr!(map, "name");
        let complexity = getstr!(map, "complexity");
        println!("{:?}", map.get("accept").unwrap());
        let accept_ty = get_str_array!(map, "accept");
        let return_ty = get_str_array!(map, "return");
        let syntax = get_str_array!(map, "syntax");
        let description = getstr!(map, "desc");
        actlist.push(name.clone());
        let doc = Document::new(name, complexity, accept_ty, return_ty, description, syntax);
        docs.push(doc);
    }

    docs.sort();
    actlist.sort();

    // write the docs
    let mut file = File::create("docs/6.all-actions.md").unwrap();
    file.write_all(gen_action_list(actlist).as_bytes()).unwrap();
    for doc in docs {
        let (path, doc) = doc.into_md(&linklist);
        let mut file = File::create(path).unwrap();
        file.write_all(doc.as_bytes()).unwrap();
    }
}

fn gen_action_list(list: Vec<String>) -> String {
    let mut act = "\
---
id: all-actions
title: Index of actions
---

Skytable currently supports the following actions:

"
    .to_owned();
    let linklist: String = list
        .into_iter()
        .map(|v| {
            format!("- [{}](actions/{}.md)\n", v, v)
                .chars()
                .collect::<Vec<_>>()
        })
        .flatten()
        .collect();
    act.push_str(&linklist);
    act
}

pub fn init_type_linklist() -> HashMap<&'static str, &'static str> {
    let mut hm = HashMap::new();
    hm.insert("Rcode 0", "protocol/response-codes");
    hm.insert("Rcode 1", "protocol/response-codes");
    hm.insert("Rcode 2", "protocol/response-codes");
    hm.insert("Rcode 3", "protocol/response-codes");
    hm.insert("Rcode 4", "protocol/response-codes");
    hm.insert("Rcode 5", "protocol/response-codes");
    hm.insert("Rcode 6", "protocol/response-codes");
    hm.insert("Rcode 7", "protocol/response-codes");
    hm.insert("Rcode 8", "protocol/response-codes");
    hm.insert("Rcode 9", "protocol/response-codes");
    hm.insert("Error String", "protocol/errors#table-of-errors");
    hm.insert("err-snapshot-busy", "protocol/errors/#table-of-errors");
    hm.insert(
        "err-invalid-snapshot-name",
        "protocol/errors/#table-of-errors",
    );
    hm.insert("err-snapshot-disabled", "protocol/errors/#table-of-errors");
    hm.insert("AnyArray", "protocol/data-types#any-array");
    hm.insert("Flat Array", "protocol/data-types#flat-array");
    hm.insert("Typed Array", "protocol/data-types#typed-array");
    hm.insert("String", "skyhash#strings-");
    hm.insert("Binstr", "skyhash#strings-");
    hm.insert("Integer", "skyhash#unsigned-integers-");
    hm
}

#[test]
fn render_doc() {
    let doc = Document::new(
        "GET".to_owned(),
        "O(1)".to_owned(),
        vec!["AnyArray".to_owned()],
        vec![
            "Rcode 1".to_string(),
            "String".to_string(),
            "Binstr".to_string(),
        ],
        "Get the value of a key".to_owned(),
        vec!["GET <key>".to_string()],
    );
    let init = init_type_linklist();
    let (_path, md) = doc.into_md(&init);
    assert_eq!(md, include_str!("../out.md"));
}
