---
id: mset
title: MSET
---
        

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Integer](../protocol/skyhash.md#unsigned-integers-)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `MSET <key1> <value1> <key2> <value2> ...`

:::

Set the value of 'n' keys in the current table, if they don't already exist. This will
return the number of keys that were set as an unsigned integer.

