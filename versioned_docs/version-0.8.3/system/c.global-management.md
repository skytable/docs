---
id: global-management
title: Global management
---

## Checking system health

The following query returns an `Empty` response or an error code depending on the status of the database:

```sql
SYSCTL REPORT STATUS
```

If you receive an error code, we recommend you to connect to the host and check logs. If the server has crashed, you may need to [recover the database](recovery).

## Inspecting global state

The following query provides a quick overview of the global system state, including users, spaces and settings:

```sql
INSPECT GLOBAL
```

This will return a JSON like this:

```json
{
    "spaces": ["prodApp1", "prodApp2"],
    "users": ["root", "staging_app_server", "prod_app_server"],
    "settings": {}
}
```

- `spaces`: lists all the spaces in the system
- `users`: lists all users
  :::info Access control note
  This is only returned if you are the `root` user. Standard users cannot see the other users in the system
  :::
- `settings`: returns system settings (currently an empty dictionary is returned)
