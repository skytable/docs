---
title: BlueQL Guide
---

import DocCardList from '@theme/DocCardList';

## Introduction

BlueQL<sup>TM</sup> is Skytable's own query language that is based on SQL, with a focus on modern syntax and security. The design attempts to deter injection attacks at development time through the use of mandatory parameterization of variable data, strict LHS-RHS expression enforcement and several other measures. Besides this, BlueQL supports modern syntax such as lists and dictionaries.

If you've used SQL before you should find BlueQL very easy to learn. There are some important differences to be aware of however, and you may wish to [review them here](/architecture#fundamental-differences-from-relational-systems) and some [more information here](overview#differences-from-sql).

## Guides

- **[Overview](overview)**: Understand BlueQL's design and language items such as parameters, literals, expressions and so forth
- **[DDL](ddl)**: Understand data definition with BlueQL in Skytable
- **[DML](dml)**: Understand data manipulation with BlueQL in Skytable
- **[DCL](dcl)**: Understand data control and administration with BlueQL in Skytable
