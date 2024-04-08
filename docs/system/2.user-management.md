---
id: user-management
title: User management
---

Skytable's access control is very simple:
- there is only one `root` account
- there are zero or more standard users

## Types of users

### Root users

As noted earlier there can be only one `root` account and this is primarily for security concerns. We however do plan to support 
creating multiple users (the implementation isn't hard but security is key).

#### Exclusive rights

Root users have exclusive rights to use plus everything that standard users have access to:
- `CREATE`
- `ALTER`
- `DROP`
- `SYSCTL CREATE`
- `SYSCTL DROP`

#### Resetting the root password

We strongly recommend that you keep the root password in someplace safe, but if you happen to lose it — just like many other 
databases, you will first need to stop the server to reset it. Once you have stopped the server, you will need to modify the root
password that you set in your [configuration source](configuration) (such as CLI/ENV/configuration file). You will then
need to restart the server. The server will issue a warning in the logs that the root password has changed but since that is 
what you intended, you can safely ignore it.

### Standard users

You can have any number of standard users. Standard users can essentially manipulate data but can't modify the objects that store them.

#### Creating user accounts

To create an user account, run the following BlueQL query:

```sql
SYSCTL CREATE USER <username> WITH { password: 'password' }
```

Read more about [creating users here](/blueql/dcl#sysctl-create-user).

#### Updating and removing user accounts

To remove or update an account, you can follow the [instructions on BlueQL's DCL guide here](/blueql/dcl).

#### Rights

Standard users can access the following query types:
- `SYSCTL REPORT STATUS`
- `INSERT`
- `SELECT`
- `UPDATE`
- `DELETE`
- `INSPECT`
