---
id: pop
title: POP
---
:::note About
**Time complexity**: O(n)  
**Arguments**: `POP <key1> <key2> ...`  
**Returns**: Returns an array with either the values or response codes as the elements  
:::
Deletes and returns the values of the provided keys. If the database is poisoned, this will return a server error. An exceptional scenario can arise when the database fails in-between removing all the keys. In that case, you get the server error response code instead of the keys. If the server recovers inbetween, then the appropriate values (if any) will be returned. In all other cases a NIL error is returned (code 1)