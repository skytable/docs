---
id: mpop
title: MPOP
---


:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Typed Array](../protocol/data-types.md#typed-array)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `MPOP <key1> <key2> ...`

:::

Deletes and returns the values of the provided 'n' keys from the current table.
If the database is poisoned, this will return a server error

