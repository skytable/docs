---
id: mksnap
title: MKSNAP
---
:::note About
**Since**: 0.4.5  
**Time complexity**: O(n)  
**Arguments**: `MKSNAP <SNAPNAME>`  
**Returns**: Okay if succeeded, otherwise it returns `err-snapshot-disabled` if snapshotting is disabled or `err-snapshot-busy` if a snapshotting operation is already in progress  
:::
This action can be used to create a snapshot. Do note that this action **requires snapshotting to be enabled on the server side**, before it can create snapshots.