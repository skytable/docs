# Commands
TerrabaseDB currently supports the following commands:

- **GET `<keyname>`**: Get a key
- **SET `<keyname> <value>`**: Assign a key to a value 
    
    **_Important note:_** Keys which have been created using `SET` cannot be overwritten with `SET`. You have to use `UPDATE` to update the value. This helps prevent unintended overwriting of keys

- **UPDATE `<keyname> <value>`**: Update the value of a key which has already been created
- **DEL `<keyname>`**: Delete a key