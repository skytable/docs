---
id: mupdate
title: MUPDATE
---

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Integer](../protocol/skyhash.md#unsigned-integers-)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `MUPDATE <key1> <value1> <key2> <value2> ...`

:::

Update the value of 'n' keys in the current table, if they already exist. This will return
the number of keys that were updated as an unsigned integer.

