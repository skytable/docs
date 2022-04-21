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

use std::{
    fs::{self, File},
    io::Write,
};

const START_TAG: &str = "//AUTOBEGIN";
const STOP_TAG: &str = "//AUTOEND";

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
    let start_index = sidebar_js.find(START_TAG).unwrap();
    let stop_index = sidebar_js.find(STOP_TAG).unwrap();
    let prev_data = &sidebar_js[..start_index + START_TAG.len()];
    let post_data = &sidebar_js[stop_index - STOP_TAG.len()..];
    let generated = format!("{:#?}", list);
    let generated = &generated[1..generated.len() - 1];
    let mut data = Vec::with_capacity(prev_data.len() + post_data.len() + generated.len());
    data.extend(prev_data.bytes());
    data.extend(generated.bytes());
    data.extend(post_data.bytes());
    let mut f = File::create("sidebars.js").unwrap();
    f.write_all(&data).unwrap();
}
