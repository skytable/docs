use crate::doc::Action;
use std::collections::HashMap;
use std::fs;
use std::io::Write;

pub fn render_list(inp: Vec<String>) -> String {
    inp.into_iter()
        .map(|v| format!("- `{}`\n", v).chars().collect::<Vec<_>>())
        .flatten()
        .collect()
}

pub fn render_link_list(
    inp: Vec<String>,
    linklist: &HashMap<&'static str, &'static str>,
) -> String {
    inp.into_iter()
        .map(|v| {
            format!("- [{}](../{})\n", v, linklist.get(v.as_str()).unwrap())
                .chars()
                .collect::<Vec<_>>()
        })
        .flatten()
        .collect()
}

pub fn gen_action_list(list: Vec<String>) -> String {
    let mut act = "".to_owned();
    let linklist: String = list
        .into_iter()
        .map(|v| {
            format!("- [{}](actions/{}.md)\n", v, v)
                .chars()
                .collect::<Vec<_>>()
        })
        .flatten()
        .collect();
    act.push_str(&linklist);
    act
}

pub fn write_action(
    action: Action,
    linklist: &HashMap<&'static str, &'static str>,
) -> std::io::Result<()> {
    let (filepath, filebody) = action.into_md_file(linklist);
    let mut f = fs::File::create(filepath)?;
    f.write_all(filebody.as_bytes())?;
    Ok(())
}
