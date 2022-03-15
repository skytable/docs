---
id: auth
title: AUTH
---

Change global authn/authz settings

### `LOGIN`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 10](../protocol/response-codes.md)

**Syntax**:

- `AUTH LOGIN <username> <token>`

:::

Attempts to log in using the provided credentials

### `CLAIM`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [Rcode 10](../protocol/response-codes.md)

**Syntax**:

- `AUTH CLAIM <origin key>`

:::

Attempts to claim the root account using the origin key

### `LOGOUT`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 10](../protocol/response-codes.md)

**Syntax**:

- `AUTH LOGOUT`

:::

Attempts to log out the currently logged in user

### `ADDUSER`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [Rcode 11](../protocol/response-codes.md)

**Syntax**:

- `AUTH ADDUSER <username>`

:::

Attempts to create a new user with the provided username, returning the token

### `DELUSER`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [Rcode 0](../protocol/response-codes.md)
- [Rcode 10](../protocol/response-codes.md)
- [Rcode 11](../protocol/response-codes.md)

**Syntax**:

- `AUTH DELUSER <username>`

:::

Attempts to delete the user with the provided username

### `RESTORE`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- [Rcode 10](../protocol/response-codes.md)
- [Rcode 11](../protocol/response-codes.md)

**Syntax**:

- `AUTH RESTORE <username>`
- `AUTH RESTORE <origin-key> <username>`

:::

Attempts to restore the password for the provided user. This will regenerate the token
and return the newly issued token. However, if you aren't a root account, that is, you
lost your root password, then you'll need to run `AUTH RESTORE <origin-key> root`.


