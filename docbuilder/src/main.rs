use serde_hjson::{self, Value};
use std::io::prelude::*;
use std::process;
fn main() {
    let _dlfile = process::Command::new("wget")
        .arg("https://raw.githubusercontent.com/terrabasedb/terrabase/next/actions.jsonc")
        .output()
        .unwrap();
    let output = process::Command::new("cat")
        .arg("actions.jsonc")
        .output()
        .unwrap();
    let output = output.stdout;
    let _rmfile = process::Command::new("rm")
        .arg("actions.jsonc")
        .output()
        .unwrap();
    let json: Value =
        serde_hjson::from_str(&String::from_utf8_lossy(&output).to_owned().to_string()).unwrap();
    let json = json.as_array().unwrap();
    let mut actioncol = Vec::new();
    for val in json {
        create_action_file(val, &mut actioncol);
    }
    create_list(actioncol);
}

pub fn create_list(list: Vec<String>) {
    let mut filetop = "# List Of Actions\n".to_owned();
    filetop.push_str("TerrabaseDB currently supports the following actions: \n\n");
    for action in list {
        filetop.push_str(&format!("* [{}](Actions/{}.md)\n", action, action));
    }
    let mut file = std::fs::File::create("../docs/List-Of-Actions.md").unwrap();
    file.write_all(filetop.as_bytes()).unwrap();
}

pub fn create_action_file(obj: &Value, actioncol: &mut Vec<String>) {
    let action = obj.as_object().unwrap();
    let mut actionpage = String::new();
    let name = action.get("name").unwrap().clone().to_string();
    actioncol.push(name.clone());
    actionpage.push_str(&format!("# {}\n", name));
    actionpage.push_str(&format!(
        "<ins>**Since**</ins>: {}  \n",
        action.get("since").unwrap()
    ));
    actionpage.push_str(&format!(
        "<ins>**Time complexity**</ins>: {}  \n",
        action.get("complexity").unwrap()
    ));
    actionpage.push_str(&format!(
        "<ins>**Arguments**</ins>: `{}`  \n",
        action.get("args").unwrap()
    ));
    actionpage.push_str(&format!(
        "<ins>**Returns**</ins>: {}  \n",
        action.get("return").unwrap()
    ));
    actionpage.push_str("\n");
    actionpage.push_str(&action.get("desc").unwrap().to_string());
    actionpage.push('\n');
    let mut file = std::fs::File::create(format!("../docs/Actions/{}.md", name)).unwrap();
    file.write_all(actionpage.as_bytes()).unwrap();
}
