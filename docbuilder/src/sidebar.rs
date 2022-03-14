/*
 * Created on Mon Mar 14 2022
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

use serde::{Deserialize, Serialize};
use std::fs;
use std::io::Write;

#[derive(Deserialize, Serialize, Debug, PartialEq)]
#[serde(untagged)]
pub enum SidebarItem {
    ListItem(String),
    Category(Category),
}

impl Eq for SidebarItem {}

#[derive(Deserialize, Serialize, Debug)]
pub struct Category {
    r#type: String,
    label: String,
    items: Vec<String>,
}

impl PartialEq for Category {
    fn eq(&self, other: &Self) -> bool {
        (self.r#type == other.r#type) && (self.label == other.label)
    }
}

pub fn update_sidebar(mut list: Vec<String>) {
    list.sort();
    list.iter_mut().for_each(|item| {
        let mut path = String::new();
        path.push_str("actions/");
        path.push_str(&item.to_lowercase());
        *item = path;
    });
    let sidebar_js = fs::read_to_string("sidebars.js").unwrap();
    let sidebar_js = sidebar_js.trim();
    let mut module_exports: Vec<SidebarItem> =
        deser_hjson::from_str(&sidebar_js[27..sidebar_js.len() - 4]).unwrap();
    let idx = module_exports
        .iter()
        .position(|elem| {
            *elem
                == SidebarItem::Category(Category {
                    r#type: "category".to_owned(),
                    label: "Actions".to_owned(),
                    items: vec![],
                })
        })
        .unwrap();
    *module_exports.get_mut(idx).unwrap() = SidebarItem::Category(Category {
        r#type: "category".to_owned(),
        label: "Actions".to_owned(),
        items: list,
    });
    let mut f = Vec::new();
    f.extend(sidebar_js[..27].bytes());
    f.extend(
        serde_json::to_string_pretty(&module_exports)
            .unwrap()
            .bytes(),
    );
    f.extend(sidebar_js[sidebar_js.len() - 4..].bytes());
    let mut file = fs::File::create("sidebars.js").unwrap();
    file.write_all(&f).unwrap();
}
