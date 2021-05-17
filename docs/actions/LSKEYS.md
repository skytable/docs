---
id: lskeys
title: LSKEYS
---
:::note About
**Since**: 0.6.0  
**Time complexity**: O(n)  
**Arguments**: `LSKEYS <limit>`  
**Returns**: Returns a maximum of 10 keys if no limit is specified or returns a maximum number of keys for the given limit  
:::
Returns a flat string array of keys present in the database. If no <limit> is given, then a maximum of 10 keys are returned. If a limit is specified, then a maximum of <limit> keys are returned