---
id: mksnap
title: MKSNAP
---


:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [err-snapshot-disabled](../protocol/errors.md#table-of-errors)
- [err-snapshot-busy](../protocol/errors.md#table-of-errors)

**Syntax**:

- `MKSNAP`
- `MKSNAP <SNAPNAME>`

:::

This action can be used to create a snapshot. Do note that this action **requires
snapshotting to be enabled on the server side**, before it can create snapshots.
If you want to create snapshots **without** snapshots being enabled on the server-side,
pass a second argument `<SNAPNAME>` to specify a snapshot name and a snapshot will
be create in a folder called `rsnap` under your data directory. For more
information on snapshots, read [this document](/snapshots)

