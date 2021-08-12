mod document;
use crate::document::Document;
use serde_hjson::Value;
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
            .as_array()
            .unwrap()
            .iter()
            .map(|v| v.as_str().unwrap().to_owned())
            .collect::<Vec<String>>()
    };
}

fn main() {
    // download the file
    let _dlfile = Command::new("wget")
        .arg("https://raw.githubusercontent.com/skytable/skytable/next/actions.jsonc")
        .output()
        .unwrap();
    let output = Command::new("cat").arg("actions.jsonc").output().unwrap();
    let output = String::from_utf8_lossy(&output.stdout);
    let _rmfile = Command::new("rm").arg("actions.jsonc").output().unwrap();
    let json: Value = serde_hjson::from_str(&output).unwrap();
    let json = json.as_array().unwrap();

    // now parse it
    let mut actlist = Vec::new();
    let mut docs = Vec::new();
    for item in json {
        let obj = item.as_object().unwrap();
        let name = getstr!(obj, "name");
        let complexity = getstr!(obj, "complexity");
        let accept_ty = getstr!(obj, "accept");
        let return_ty = getstr!(obj, "return");
        let syntax = get_str_array!(obj, "syntax");
        let returns = get_str_array!(obj, "returns");
        let description = getstr!(obj, "description");
        actlist.push(name.clone());
        let doc = Document::new(
            name,
            complexity,
            accept_ty,
            return_ty,
            description,
            syntax,
            returns,
        );
        docs.push(doc);
    }

    // write the docs
    let mut file = File::create("docs/6.all-actions.md").unwrap();
    file.write_all(gen_action_list(actlist).as_bytes()).unwrap();
    for doc in docs {
        let (path, doc) = doc.into_md();
        let mut file = File::create(path).unwrap();
        file.write_all(doc.as_bytes()).unwrap();
    }
}

fn gen_action_list(list: Vec<String>) -> String {
    let mut act = "
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
