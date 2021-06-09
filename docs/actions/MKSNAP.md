---
id: mksnap
title: MKSNAP
---
:::note About
**Time complexity**: O(n)  
**Arguments**: `MKSNAP <SNAPNAME>`  
**Returns**: Okay if succeeded, otherwise it returns `err-snapshot-disabled` if snapshotting is disabled or `err-snapshot-busy` if a snapshotting operation is already in progress  
:::

  This action can be used to create a snapshot. Do note that this action **requires snapshotting to be enabled on the server side**, before it can create snapshots. 
  If you want to create snapshots **without** snapshots being enabled on the server-side, pass a second argument &lt;SNAPNAME&gt; to specify a snapshot name and a snapshot will be create in a folder called `remote` under your snapshots directory. 
  For more information on snapshots, read [this document](/snapshots)
  