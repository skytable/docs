use serde_hjson::{self, Value};
use std::cmp::Ordering;
use std::io::prelude::*;
use std::process;

#[derive(Debug)]
/// A structure to represent a (ACTION_NAME, ACTION_DOC_MD_FILE)
///
/// The second file (`.1`) contains the entire documentation file for a given
/// action
struct Document(String, String);

impl PartialEq for Document {
    fn eq(&self, other: &Self) -> bool {
        self.0 == other.0
    }
}

impl Eq for Document {}

impl PartialOrd for Document {
    fn partial_cmp(&self, other: &Document) -> std::option::Option<std::cmp::Ordering> {
        self.0.partial_cmp(&other.0)
    }
}

impl Ord for Document {
    fn cmp(&self, other: &Self) -> Ordering {
        self.0.cmp(&other.0)
    }
}

fn main() {
    let _dlfile = process::Command::new("wget")
        .arg("https://raw.githubusercontent.com/terrabasedb/terrabasedb/next/actions.jsonc")
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
    let mut actions = Vec::new();
    for val in json {
        let obj = val.as_object().unwrap();
        let name = obj.get("name").unwrap().to_string();
        let mut actionpage = String::new();
        actionpage.push_str(&format!("# {}\n", name));
        actionpage.push_str(&format!(
            "<ins>**Since**</ins>: {}  \n",
            obj.get("since").unwrap()
        ));
        actionpage.push_str(&format!(
            "<ins>**Time complexity**</ins>: {}  \n",
            obj.get("complexity").unwrap()
        ));
        actionpage.push_str(&format!(
            "<ins>**Arguments**</ins>: `{}`  \n",
            obj.get("args").unwrap()
        ));
        actionpage.push_str(&format!(
            "<ins>**Returns**</ins>: {}  \n",
            obj.get("return").unwrap()
        ));
        actionpage.push_str("\n");
        actionpage.push_str(&obj.get("desc").unwrap().to_string());
        actionpage.push('\n');
        actions.push(Document(name, actionpage));
    }
    actions.sort();
    create_docs(actions);
}

fn create_docs(list: Vec<Document>) {
    let mut filetop = "# List Of Actions\n\n".to_owned();
    filetop.push_str("Skybase currently supports the following actions: \n\n");
    for action in list {
        let name = action.0;
        filetop.push_str(&format!("* [{}](Actions/{}.md)\n", &name, &name));
        let mut file = std::fs::File::create(format!("../docs/Actions/{}.md", name)).unwrap();
        file.write_all(&action.1.into_bytes()).unwrap();
    }
    let mut file = std::fs::File::create("../docs/Actions.md").unwrap();
    file.write_all(filetop.as_bytes()).unwrap();
}
