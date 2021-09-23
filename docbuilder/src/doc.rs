use core::cmp::Ordering;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Document {
    /// global actions
    global: Vec<Action>,
    /// key/value model actions
    keyvalue: KeyValueDocument,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct KeyValueDocument {
    /// generic actions (any type in the KVE)
    generic: Vec<Action>,
    /// string actions (specific to `<string type>, <string type>`) tables
    string: Vec<Action>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Action {
    /// the action name
    name: String,
    /// the complexity of the action
    complexity: String,
    /// the accept type(s) of the action
    accept: Vec<String>,
    /// the syntax(es) of the action
    syntax: Vec<String>,
    /// the description of the action
    desc: String,
    /// the return type(s) of the action
    #[serde(rename = "return")]
    returns: Vec<String>,
}

impl PartialEq for Action {
    fn eq(&self, other: &Self) -> bool {
        self.name.eq(&other.name)
    }
}

impl PartialOrd for Action {
    fn partial_cmp(&self, oth: &Self) -> Option<Ordering> {
        self.name.partial_cmp(&oth.name)
    }
}

impl Eq for Action {}
impl Ord for Action {
    fn cmp(&self, oth: &Self) -> Ordering {
        self.name.cmp(&oth.name)
    }
}
