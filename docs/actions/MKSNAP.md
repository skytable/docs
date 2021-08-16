---
id: mksnap
title: MKSNAP
---

:::note About
**Time complexity**: O(n)  
**Accept type**:

- [AnyArray](../../protocol/data-types#any-array)

**Return type**:

- [Rcode 0](../../protocol/response-codes)
- [err-snapshot-disabled](../../protocol/errors/#table-of-errors)
- [err-snapshot-busy](../../protocol/errors/#table-of-errors)

**Syntax**:

- `MKSNAP <SNAPNAME>`

:::

This action can be used to create a snapshot. Do note that this action# *requires
snapshotting to be enabled on the server side**, before it can create snapshots.
\nIf you want to create snapshots# *without** snapshots being enabled on the server-side,
pass a second argument &lt;SNAPNAME&gt; to specify a snapshot name and a snapshot will
be create in a folder called `remote` under your snapshots directory. \nFor more
information on snapshots, read [this document](/snapshots)

