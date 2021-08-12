use core::cmp::Ordering;

#[derive(Debug)]
pub struct Document {
    /// Name of the action
    action_name: String,
    /// The time complexity of the action
    complexity: String,
    /// The syntax for the action
    syntax: Vec<String>,
    /// Return(s) with example(s)
    returns: Vec<String>,
    /// the accept type for the action
    accept_ty: String,
    /// the return type for the action
    return_ty: String,
    /// longform description action
    description: String,
}

impl Document {
    pub const fn new(
        action_name: String,
        complexity: String,
        accept_ty: String,
        return_ty: String,
        description: String,
        syntax: Vec<String>,
        returns: Vec<String>,
    ) -> Self {
        Self {
            action_name,
            complexity,
            syntax,
            returns,
            accept_ty,
            return_ty,
            description,
        }
    }
    /// Returns (path, contents of markdown file)
    pub fn into_md(self) -> (String, String) {
        let Self {
            action_name,
            complexity,
            syntax,
            returns,
            accept_ty,
            return_ty,
            description,
        } = self;
        let path = format!("docs/actions/{}.md", action_name);
        let syntax_rendered = render_list(syntax);
        let returns_rendered = render_list(returns);
        let body = format!(
            "
            ---
            id: {action_name}
            title: {title}
            ---
            
            :::note About
            **Time complexity**: {complexity}  
            **Accept type**: {accept_ty}  
            **Return type**: {return_ty}  
            **Syntax**: {syntax}  
            **Returns** {returns}  
            :::

            {description}
            ",
            action_name = action_name,
            title = action_name,
            complexity = complexity,
            accept_ty = accept_ty,
            return_ty = return_ty,
            syntax = syntax_rendered,
            returns = returns_rendered,
            description = description
        );
        (path, body)
    }
}

fn render_list(inp: Vec<String>) -> String {
    inp.into_iter()
        .map(|v| format!("- {}\n", v).chars().collect::<Vec<_>>())
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
