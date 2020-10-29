# MKSNAP
<ins>**Since**</ins>: 0.4.5  
<ins>**Time complexity**</ins>: O(n)  
<ins>**Arguments**</ins>: `MKSNAP`  
<ins>**Returns**</ins>: Okay if succeeded, otherwise it returns `err-snapshot-disabled` if snapshotting is disabled or `err-snapshot-busy` if a snapshotting operation is already in progress  

This action can be used to create a snapshot. Do note that this action **requires snapshotting to be enabled on the server side**, before it can create snapshots. For more information on enabling snapshots, read [this document](/snapshots)
