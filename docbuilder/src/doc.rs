/*
 * Created on Sat Sep 25 2021
 *
 * This file is a part of Skytable
 * Skytable (formerly known as TerrabaseDB or Skybase) is a free and open-source
 * NoSQL database written by Sayan Nandan ("the Author") with the
 * vision to provide flexibility in data modelling without compromising
 * on performance, queryability or scalability.
 *
 * Copyright (c) 2021, Sayan Nandan <ohsayan@outlook.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
*/

mod action;
mod util;
pub use self::action::{Action, ExtendedAction};
use serde::{Deserialize, Serialize};
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
    pub fn write_and_finish(self, linklist: crate::LinkList<'_>) -> std::io::Result<()> {
        // first we need to create the index
        println!("Rendering index");
        self.render_index()?;
        // now create the appropriate actions
        println!("Rendering actions");
        self.render_actions(linklist)?;
        Ok(())
    }
    pub fn render_actions(self, linklist: crate::LinkList<'_>) -> std::io::Result<()> {
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
            let top_block = format!(
                "\
---
id: {id}
title: {title}
---
",
                id = list_action.name.to_lowercase(),
                title = list_action.name
            );
            let (path, body) = list_action.render(linklist);
            let mut f = fs::File::create(path)?;
            f.write_all(top_block.as_bytes())?;
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