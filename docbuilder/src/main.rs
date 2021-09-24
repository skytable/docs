mod doc;
mod util;
use crate::doc::Document;
use std::collections::HashMap;
use std::process::Command;

fn main() {
    // download the file
    let _dlfile = Command::new("wget")
        .arg("https://raw.githubusercontent.com/skytable/skytable/docs/subactions/actiondoc.yml")
        .output()
        .unwrap();
    let output = Command::new("cat").arg("actiondoc.yml").output().unwrap();
    let output = String::from_utf8_lossy(&output.stdout);
    let _rmfile = Command::new("rm").arg("actiondoc.yml").output().unwrap();

    // now parse it
    parse_into_actiondoc(&output);
}

fn parse_into_actiondoc(output: &str) {
    let v: Document = serde_yaml::from_str(output).unwrap();
    let list = init_type_linklist();
    v.write_and_finish(&list).unwrap();
}

pub fn init_type_linklist() -> HashMap<&'static str, &'static str> {
    let mut hm = HashMap::new();
    hm.insert("Rcode 0", "protocol/response-codes.md");
    hm.insert("Rcode 1", "protocol/response-codes.md");
    hm.insert("Rcode 2", "protocol/response-codes.md");
    hm.insert("Rcode 3", "protocol/response-codes.md");
    hm.insert("Rcode 4", "protocol/response-codes.md");
    hm.insert("Rcode 5", "protocol/response-codes.md");
    hm.insert("Rcode 6", "protocol/response-codes.md");
    hm.insert("Rcode 7", "protocol/response-codes.md");
    hm.insert("Rcode 8", "protocol/response-codes.md");
    hm.insert("Rcode 9", "protocol/response-codes.md");
    hm.insert("Error String", "protocol/errors.md#table-of-errors");
    hm.insert("err-snapshot-busy", "protocol/errors.md#table-of-errors");
    hm.insert(
        "err-invalid-snapshot-name",
        "protocol/errors.md#table-of-errors",
    );
    hm.insert(
        "err-snapshot-disabled",
        "protocol/errors.md#table-of-errors",
    );
    hm.insert("list-bad-index", "protocol/errors.md#table-of-errors");
    hm.insert("list-is-empty", "protocol/errors.md#table-of-errors");
    hm.insert("bad-list-index", "protocol/errors.md#table-of-errors");
    hm.insert("AnyArray", "protocol/data-types.md#any-array");
    hm.insert("Flat Array", "protocol/data-types.md#flat-array");
    hm.insert("Typed Array", "protocol/data-types.md#typed-array");
    hm.insert("String", "protocol/skyhash.md#strings-");
    hm.insert("Binstr", "protocol/skyhash.md#strings-");
    hm.insert("binstr", "protocol/skyhash.md#strings-");
    hm.insert("Integer", "protocol/skyhash.md#unsigned-integers-");
    hm
}
