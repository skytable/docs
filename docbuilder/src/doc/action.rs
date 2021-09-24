use crate::util;
use core::cmp::Ordering;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

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
    pub fn into_md_file(self, linklist: &HashMap<&'static str, &'static str>) -> (String, String) {
        let path = format!("docs/actions/{}.md", self.name);
        let body = format!(
            "{top}\n{bottom}",
            top = self.render_top_block(),
            bottom = self.render_bottom_block(linklist)
        );
        (path, body)
    }
    fn render_bottom_block(self, linklist: &HashMap<&'static str, &'static str>) -> String {
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
        let returns_rendered = util::render_link_list(returns, linklist);
        let accept_rendered = util::render_link_list(accept, linklist);
        let body = format!(
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
        .to_string();
        body
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
    pub fn render(self, linklist: &HashMap<&'static str, &'static str>) -> (String, String) {
        // path
        let path = format!("docs/actions/{}.md", self.name);
        // now body
        let mut body = "".to_owned();
        body.push_str(&self.desc);
        for subaction in self.subactions {
            body.push_str(&format!("### `{subaction}`\n", subaction = subaction.name));
            let innerbody = subaction.render_bottom_block(linklist);
            body.push_str(&innerbody);
            body.push('\n');
        }
        (path, body)
    }
}
