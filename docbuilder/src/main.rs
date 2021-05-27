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
        .arg("https://raw.githubusercontent.com/skytable/skytable/next/actions.jsonc")
        .output()
        .unwrap();
    let output = process::Command::new("cat")
        .arg("actions.jsonc")
        .output()
        .unwrap();
    let output = String::from_utf8_lossy(&output.stdout);
    let _rmfile = process::Command::new("rm")
        .arg("actions.jsonc")
        .output()
        .unwrap();
    let json: Value = serde_hjson::from_str(&output).unwrap();
    let json = json.as_array().unwrap();
    let mut actions = Vec::new();
    for val in json {
        let obj = val.as_object().unwrap();
        let name = obj.get("name").unwrap().to_string();
        let id = name.to_lowercase();
        let complexity = obj.get("complexity").unwrap();
        let args = obj.get("args").unwrap();
        let returns = obj.get("return").unwrap();
        let desc = obj.get("desc").unwrap().to_string();
        let desc = desc.replace("<br>", "  \n");
        // Now we have all the details; time to construct the page
        let mut actionpage = String::new();
        // add the page meta ---
        actionpage.push_str("---\n");
        // add the document id
        actionpage.push_str(&format!("id: {}\n", id));
        // add the title
        actionpage.push_str(&format!("title: {}\n", name));
        // add the page meta end ---
        actionpage.push_str("---\n");
        // add the note admonition
        actionpage.push_str(":::note About\n");
        // add the time complexity
        actionpage.push_str(&format!("**Time complexity**: {}  \n", complexity));
        // add the arguments
        actionpage.push_str(&format!("**Arguments**: `{}`  \n", args));
        // add the returns
        actionpage.push_str(&format!("**Returns**: {}  \n", returns));
        // add the end of the admonition
        actionpage.push_str(":::\n");
        // add the description
        actionpage.push_str(
            &desc
                .trim()
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("'''", ""),
        );
        // now push the action into the collection of actions
        actions.push(Document(name, actionpage));
    }
    actions.sort();
    create_docs(actions);
}

fn create_docs(list: Vec<Document>) {
    let mut filetop = "---\nid: actions-overview\ntitle: Actions overview\n---\n".to_owned();
    filetop.push_str("Actions are like shell commands: they take arguments and do something! Skytable currently supports the following actions: \n\n");
    for action in list {
        let name = action.0;
        filetop.push_str(&&format!("* [{}](actions/{}.md)\n", &name, &name));
        let mut file = std::fs::File::create(&format!("../docs/actions/{}.md", name)).unwrap();
        file.write_all(&action.1.into_bytes()).unwrap();
    }
    let mut file = std::fs::File::create("../docs/actions.md").unwrap();
    file.write_all(filetop.as_bytes()).unwrap();
}
