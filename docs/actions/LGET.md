---
id: lget
title: LGET
---

`LGET` can be used to access the items in a list. Through the sub-actions provided by `lget`,
 you can access multiple or individual elements in lists.

### `LGET`
:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Typed Array](../protocol/data-types.md#typed-array)
- [Rcode 1](../protocol/response-codes.md)

**Syntax**:

- `LGET <list>`

:::

Returns all the values contained in a the provided list, if it exists in the current
table.


### `limit`
:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Typed Array](../protocol/data-types.md#typed-array)
- [Rcode 1](../protocol/response-codes.md)

**Syntax**:

- `LGET <list> limit <limit>`

:::

Returns a maximum of `limit` values from the provided list, if it exists in the current table

### `len`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Integer](../protocol/skyhash.md#unsigned-integers-)
- [Rcode 1](../protocol/response-codes.md)

**Syntax**:

- `LGET <list> len`

:::

Returns the length of the list

### `valueat`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [binstr](../protocol/skyhash.md#strings-)
- [Rcode 1](../protocol/response-codes.md)
- [bad-list-index](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LGET <list> valueat <index>`

:::

Returns the element present at the provided `index`, if it exists in the given list.

### `first`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [binstr](../protocol/skyhash.md#strings-)
- [Rcode 1](../protocol/response-codes.md)
- [list-is-empty](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LGET <list> first`

:::

Returns the first element present in the list, if it exists.

### `last`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [binstr](../protocol/skyhash.md#strings-)
- [Rcode 1](../protocol/response-codes.md)
- [list-is-empty](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LGET <list> last`

:::

Returns the last element present in the list, if it exists.

### `range`
:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Typed Array](../protocol/data-types.md#typed-array)
- [Rcode 1](../protocol/response-codes.md)
- [bad-list-index](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LGET <list> range <start>`
- `LGET <list> range <start> <stop>`

:::

Returns items in the given range. If no value for `stop` is provided, all the elements from that
index are returned. If a value for `stop` is provided, then a subarray is returned


