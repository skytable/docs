# SET

**Available since**: 0.1.0  
**Time complexity**: O(1)  
**Syntax**: `SET <keyname> <value>`  

This action assigns a key to a value in the default keyspace. 

**NOTE**: In TDB, once a key-value pair has been created with `SET`, it's value cannot be updated with `SET`. This is done to prevent unintended overwriting of keys. To update a key, you have to use [`UPDATE`](./update.md) instead.
Multiple SETs are not yet supported, but will be supported in the future.