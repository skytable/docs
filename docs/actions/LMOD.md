---
id: lmod
title: LMOD
---

`LMOD` can be used to mutate the elements in a list

### `push`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `LMOD <list> push <value>`

:::

Appends the element to the end of the provided list

### `insert`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)
- [bad-list-index](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LMOD <list> insert <index> <value>`

:::

Inserts the element to the provided index, if it is valid while shifting elements
to the right if required


### `pop`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [Binstr](../protocol/skyhash.md#strings-)
- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)
- [bad-list-index](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LMOD <list> pop`
- `LMOD <list> pop <index>`

:::

Removes the element from the end of the list if no index is provided or from the provided
index while shifting elements to the right if required.


### `remove`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)
- [bad-list-index](../protocol/errors.md#table-of-errors)

**Syntax**:

- `LMOD <list> remove <index>`

:::

Removes the element at the provided index from the list, shifting elements to the right
if required.


### `clear`
:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 1](../protocol/response-codes.md)
- [Rcode 5](../protocol/response-codes.md)

**Syntax**:

- `LMOD <list> clear`

:::

Removes all the elements present in the list


