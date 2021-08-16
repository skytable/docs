---
id: supdate
title: SUPDATE
---

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes)
- [Rcode 1](../protocol/response-codes)
- [Rcode 5](../protocol/response-codes)

**Syntax**:

- `SUPDATE <key1> <value1> <key2> <value2> ...`

:::

Update all keys if all of the keys exist in the current table. Do note that if a single key doesn't
exist, then a `Nil` code is returned.

