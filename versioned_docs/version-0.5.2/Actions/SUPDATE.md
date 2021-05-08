---
id: supdate
title: SUPDATE
---
:::note About
**Since**: 0.4.3  
**Time complexity**: O(n)  
**Arguments**: `SUPDATE <key1> <value1> <key2> <value2> ...`  
**Returns**: (Code: 0) if all keys were updated, otherwise (Code: 1)  
:::
Update all keys if all of the keys exist. Do note that if a single key doesn't exist, then a `Nil` code is returned.