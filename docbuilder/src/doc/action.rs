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

use super::util;
use core::cmp::Ordering;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ExtendedAction {
    /// the name of the primary action
    pub name: String,
    /// the high-level description of the action
    desc: String,
    /// the sub-actions provided by the action
    subactions: Vec<Action>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Action {
    /// the action name
    pub name: String,
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

impl PartialEq for ExtendedAction {
    fn eq(&self, other: &Self) -> bool {
        self.name.eq(&other.name)
    }
}

impl PartialOrd for ExtendedAction {
    fn partial_cmp(&self, oth: &Self) -> Option<Ordering> {
        self.name.partial_cmp(&oth.name)
    }
}

impl Eq for ExtendedAction {}
impl Ord for ExtendedAction {
    fn cmp(&self, oth: &Self) -> Ordering {
        self.name.cmp(&oth.name)
    }
}

impl Action {
    /// Returns `(path, body)`
    pub fn into_md_file(self) -> (String, String) {
        let path = format!("docs/actions/{}.md", self.name);
        let body = format!(
            "{top}\n{bottom}",
            top = self.render_top_block(),
            bottom = self.render_bottom_block()
        );
        (path, body)
    }
    fn render_bottom_block(self) -> String {
        let Action {
            complexity,
            syntax,
            name: _,
            accept,
            desc,
            returns,
        } = self;
        let description = desc.replace("\\n", "");
        let syntax_rendered = util::render_list(syntax);
        let returns_rendered = util::render_link_list(returns);
        let accept_rendered = util::render_link_list(accept);
        format!(
            "\
:::note About
**Time complexity**: {complexity}  
**Accept type**:

{accept_ty}
**Return type**:

{return_ty}
**Syntax**:

{syntax}
:::

{description}
",
            complexity = complexity,
            accept_ty = accept_rendered,
            return_ty = returns_rendered,
            syntax = syntax_rendered,
            description = description
        )
    }
    fn render_top_block(&self) -> String {
        let s = format!(
            "\
---
id: {action_name}
title: {title}
---

",
            action_name = self.name.to_lowercase(),
            title = self.name
        );
        s
    }
}

impl ExtendedAction {
    /// Returns `(path, body)`
    pub fn render(self) -> (String, String) {
        // path
        let path = format!("docs/actions/{}.md", self.name);
        // now body
        let mut body = "".to_owned();
        body.push_str(&self.desc);
        if self.desc.as_bytes()[self.desc.len() - 1] != b'\n' {
            // if it doesn't end with a newline, insert one
            body.push('\n');
        }
        body.push('\n');
        for subaction in self.subactions {
            body.push_str(&format!("### `{subaction}`\n", subaction = subaction.name));
            let innerbody = subaction.render_bottom_block();
            body.push_str(&innerbody);
            body.push('\n');
        }
        (path, body)
    }
}
