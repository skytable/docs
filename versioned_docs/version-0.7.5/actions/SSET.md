---
id: sset
title: SSET
---


:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 2](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `SSET <key1> <value1> <key2> <value2> ...`

:::

Set all keys to the given values only if all of them don't exist in the current table
