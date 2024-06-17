---
id: libraries
title: Client drivers
---


## Official drivers

The drivers that are officially maintained can be expected to be feature complete and stable. We currently support the following drivers:

| Language/Framework                | Links                                                                                               | Status   | Package manager command   |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| Rust (`skytable`)                 | [GitHub](https://github.com/skytable/client-rust), [crates.io](https://crates.io/crates/skytable)   | Stable ✅ | `cargo add skytable`      |
| Python (`skytable-py`)            | [GitHub](https://github.com/skytable/client-py), [PyPI](https://pypi.org/project/skytable-py/)      | Beta     | `pip install skytable-py` |
| NodeJS (JS/TS)  (`skytable-node`) | [GitHub](https://github.com/skytable/client-nodejs), [npm](https://npmjs.com/package/skytable-node) | Alpha 🏗  | `npm i skytable-node`     |

:::info More lanugages
The team is always looking to support more languages and we wish we could ship more drivers. But due to limited
resources we haven't been able to. If you're willing to write a driver (it's super easy to), jump into our chat!
:::

## Community powered

List of community powered drivers (sorted alphabetically):

| Language/Framework               | Client source code                                            | Upstreamed | License    | Remarks                                                                           |
| -------------------------------- | ------------------------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------- |
| **C#/.NET**                      |                                                               | ❗          |            |                                                                                   |
|                                  | [C# driver](https://github.com/martinmolin/skytable-dotnet)   | ❗          | Apache-2.0 | Available on [NuGet](https://www.nuget.org/packages/Skytable.Client)              |
| **Go**                           |                                                               | ❗          |            |                                                                                   |
|                                  | [Go driver](https://github.com/No3371/go-skytable)            | ❗          | Apache-2.0 | Written from scratch                                                              |
|                                  | [Go driver](https://github.com/satvik007/skytable-go)         | ❗          | Apache-2.0 | Easy for migration from go-redis                                                  |
| **JavaScript/TypeScript (Node)** |                                                               | ❗          |            |                                                                                   |
|                                  | [NodeJS Driver](https://github.com/zhangyuannie/skytable.js)  | ❗          | Apache-2.0 | Available on [npm](https://www.npmjs.com/package/skytable.js)                     |
| **PHP**                          |                                                               | ❗          |            |                                                                                   |
|                                  | [PHP client driver](https://github.com/hkulekci/skytable-php) | ❗          | MIT        | Can be found on [Packagist](https://packagist.org/packages/hkulekci/skytable-php) |
