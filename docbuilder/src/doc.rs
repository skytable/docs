mod action;
pub use self::action::{Action, ExtendedAction};
use crate::util;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::io::Write;

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
    /// list actions specific to (`<string type>`, `<list type>`) tables
    lists: Vec<ExtendedAction>,
}

impl Document {
    pub fn write_and_finish(
        self,
        linklist: &HashMap<&'static str, &'static str>,
    ) -> std::io::Result<()> {
        // first we need to create the index
        println!("Rendering index");
        self.render_index()?;
        // now create the appropriate actions
        println!("Rendering actions");
        self.render_actions(linklist)?;
        Ok(())
    }
    pub fn render_actions(
        self,
        linklist: &HashMap<&'static str, &'static str>,
    ) -> std::io::Result<()> {
        // let us first render the global actions
        for global_action in self.global {
            util::write_action(global_action, linklist)?;
        }
        // let us now render the key/value actions
        // start with generic actions
        let kv = self.keyvalue;
        for generic_action in kv.generic {
            util::write_action(generic_action, linklist)?;
        }
        // now string actions
        for string_action in kv.string {
            util::write_action(string_action, linklist)?;
        }
        // now list actions
        for list_action in kv.lists {
            let (path, body) = list_action.render(linklist);
            let mut f = fs::File::create(path)?;
            f.write_all(body.as_bytes())?;
        }
        Ok(())
    }
    pub fn render_index(&self) -> std::io::Result<()> {
        let mut global_actions: Vec<String> = self.global.iter().map(|v| v.name.clone()).collect();
        global_actions.sort();
        // now collect the KVE actions
        // first the generic actions
        let mut generic_actions: Vec<String> = self
            .keyvalue
            .generic
            .iter()
            .map(|v| v.name.clone())
            .collect();
        generic_actions.sort();
        // string actions
        let mut string_actions: Vec<String> = self
            .keyvalue
            .string
            .iter()
            .map(|v| v.name.clone())
            .collect();
        string_actions.sort();
        // list actions; only bother with the root action
        let mut list_actions: Vec<String> =
            self.keyvalue.lists.iter().map(|v| v.name.clone()).collect();
        list_actions.sort();
        // now generate the index
        let mut action_index = "\
---
id: all-actions
title: Index of actions
---

Skytable currently supports the actions listed in this document. You can find all the actions
classified by scope, model and type below. Do note that this list doesn't include DDL actions.
For DDL, see [this document](ddl).

## Global Actions

These actions can be used globally irrespective of the underlying keyspace or table properties:
"
        .to_owned();
        // now render the global actions
        action_index.push_str(&util::gen_action_list(global_actions));
        action_index.push_str(
            "\
## Key-value actions

These actions can be used on Keymap model tables which is essentially an extensible key/value store.

### Generic actions

These actions can be used on all Keymap tables irrespective of the key/value type in the table
definition:
",
        );
        // now render the generic actions
        action_index.push_str(&util::gen_action_list(generic_actions));
        action_index.push_str(
            "\
### String actions

These actions can be used on keymap tables that have string types (such as `str` and `binstr`) in
both the key and value:
",
        );
        // now render the string actions
        action_index.push_str(&util::gen_action_list(string_actions));
        action_index.push_str(
            "\

### List actions

These actions can be used on keymap tables that have list types (`list<type>`) as their value type:
",
        );
        action_index.push_str(&util::gen_action_list(list_actions));
        let mut index_file = fs::File::create("./docs/6.all-actions.md")?;
        index_file.write_all(action_index.as_bytes())?;
        Ok(())
    }
}
