---
id: lskeys
title: LSKEYS
---

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../../protocol/data-types#any-array)

**Return type**:

- [Typed Array](../../protocol/data-types#typed-array)

**Syntax**:

- `LSKEYS <limit>`
- `LSKEYS <entity>`
- `LSKEYS <entity> <limit>`

:::

Returns a flat string array of keys present in the current table or in the provided entity.
If no &lt;limit&gt; is given, then a maximum of 10 keys are returned. If a limit is specified,
then a maximum of &lt;limit&gt; keys are returned. The order of keys is meaningless.

