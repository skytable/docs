---
id: uset
title: USET
---

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../../protocol/data-types#any-array)

**Return type**:

- [Integer](../../protocol/skyhash#unsigned-integers-)
- [Rcode 5](../../protocol/response-codes)

**Syntax**:

- `USET <key1> <value1> <key2> <value2> ...`

:::

SET all keys if they don't exist, or UPDATE them if they do exist. This operation performs `USET`s in the current table
