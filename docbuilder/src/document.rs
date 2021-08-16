use core::cmp::Ordering;
use std::collections::HashMap;

#[derive(Debug)]
pub struct Document {
    /// Name of the action
    action_name: String,
    /// The time complexity of the action
    complexity: String,
    /// The syntax for the action
    syntax: Vec<String>,
    /// Return(s) with example(s)
    accept_ty: Vec<String>,
    /// the return type for the action
    return_ty: Vec<String>,
    /// longform description action
    description: String,
}

impl Document {
    pub const fn new(
        action_name: String,
        complexity: String,
        accept_ty: Vec<String>,
        return_ty: Vec<String>,
        description: String,
        syntax: Vec<String>,
    ) -> Self {
        Self {
            action_name,
            complexity,
            syntax,
            accept_ty,
            return_ty,
            description,
        }
    }
    /// Returns (path, contents of markdown file)
    pub fn into_md(self, linklist: &HashMap<&'static str, &'static str>) -> (String, String) {
        let Self {
            action_name,
            complexity,
            syntax,
            accept_ty,
            return_ty,
            description,
        } = self;

        let description = description.replace('<', "&lt;");
        let description = description.replace('>', "&gt;");
        let path = format!("docs/actions/{}.md", action_name);
        let syntax_rendered = render_list(syntax);
        let returns_rendered = render_link_list(return_ty, linklist);
        let accept_rendered = render_link_list(accept_ty, linklist);
        let body = format!(
            "\
---
id: {action_name}
title: {title}
---

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
            action_name = action_name.to_lowercase(),
            title = action_name,
            complexity = complexity,
            accept_ty = accept_rendered,
            return_ty = returns_rendered,
            syntax = syntax_rendered,
            description = description
        )
        .to_string();
        (path, body)
    }
}

fn render_list(inp: Vec<String>) -> String {
    inp.into_iter()
        .map(|v| format!("- `{}`\n", v).chars().collect::<Vec<_>>())
        .flatten()
        .collect()
}

fn render_link_list(inp: Vec<String>, linklist: &HashMap<&'static str, &'static str>) -> String {
    inp.into_iter()
        .map(|v| {
            format!("- [{}](../{})\n", v, linklist.get(v.as_str()).unwrap())
                .chars()
                .collect::<Vec<_>>()
        })
        .flatten()
        .collect()
}

impl PartialEq for Document {
    fn eq(&self, other: &Self) -> bool {
        self.action_name == other.action_name
    }
}

impl Eq for Document {}

impl PartialOrd for Document {
    fn partial_cmp(&self, other: &Document) -> std::option::Option<std::cmp::Ordering> {
        self.action_name.partial_cmp(&other.action_name)
    }
}

impl Ord for Document {
    fn cmp(&self, other: &Self) -> Ordering {
        self.action_name.cmp(&other.action_name)
    }
}
