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

**Syntax**:

- `POP <key1> <key2> ...`

:::

Deletes and returns the values of the provided 'n' keys from the current table.
If the database is poisoned, this will return a server error. An exceptional scenario
can arise when the database fails in-between removing all the keys. In that case, you
get the server error response code instead of the keys. If the server recovers inbetween,
then the appropriate values (if any) will be returned. In all other cases a NIL error is
returned (code 1)

