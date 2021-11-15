---
id: lset
title: LSET
---
`LSET` can be used to create empty lists or lists with the provided values.
### `LSET`
:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `LSET <list>`
- `LSET <list> <value1> <value2> ...`

:::

Creates a list with the provided values, or simply creates an empty list if it doesn't
already exist in the table.


