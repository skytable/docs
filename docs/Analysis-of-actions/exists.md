# EXISTS

**Available since**: 0.1.0  
**Time complexity**: O(1)  
**Syntax**: `EXISTS <keyname>`  

This action checks if a key exists in the default keyspace. If the key exists, then `1` is returned. Otherwise, `0` is returned. 

Multiple `EXISTS` checks aren't available yet, but will be supported in the future