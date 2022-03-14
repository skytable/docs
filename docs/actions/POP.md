---
id: pop
title: POP
---


:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [Binstr](../protocol/skyhash.md#strings-)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `POP <key>`

:::

Deletes and return the value of the provided key from the current table.
If the database is poisoned, this will return a server error.

