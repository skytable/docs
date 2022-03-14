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

use crate::doc::Action;
use std::fs;
use std::io::Write;

pub fn render_list(inp: Vec<String>) -> String {
    inp.into_iter()
        .map(|v| format!("- `{}`\n", v).chars().collect::<Vec<_>>())
        .flatten()
        .collect()
}

pub fn render_link_list(inp: Vec<String>) -> String {
    inp.into_iter()
        .map(|v| {
            format!(
                "- [{}](../{})\n",
                v,
                crate::LINKLIST
                    .get(v.as_str())
                    .unwrap_or_else(|| panic!("Failed to get: {}", v))
            )
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

pub fn write_action(action: Action) -> std::io::Result<()> {
    let (filepath, filebody) = action.into_md_file();
    let mut f = fs::File::create(filepath)?;
    f.write_all(filebody.as_bytes())?;
    Ok(())
}
