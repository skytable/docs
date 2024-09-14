---
id: backup-and-restore
title: Backup and restore
---

## Backing up data

To back data up, you can use the subcommand `skyd backup` as follows:

```sh
skyd backup --type=direct --to=<path to backup> [--from <directory>]
```

- `--type=direct`: This specifies the kind of backup created. The `direct` type indicates that it's a simple copy of the data files and directories
- `--to=<path to backup>`: This specifies where this backup is to be created
- `--from <path to installation>` *(optional)*: When this is not provided, the `backup` subcommand assumes that the current working directory is the installation directory. If you're running it from a different directory then set this option.

**Example**:

```sh
skyd backup \
    --type=direct \
    --from=/var/lib/skytable \
    --to=/mnt/backupnfsdrive/quick-backup-before-migration
```

:::info Backup types
Note that in the future we may add more backup types including compressed archives or other modes. The only type of backup (specified using `--type`) is `direct` which clones the data files and directories. But you do not need to worry about this as the restore subcommand will take care of determining what kind of backup is being pointed to.
:::

### Backup protections

The `backup` subcommand includes some protections to create consistent and valid backups. These include not allowing backups if the database is currently using the data files and some other parameters. If you need to override any of these parameters, then please check the help menu with `skyd backup --help`.

## Restoring data

To restore data from a backup, you can use the subcommand `skyd restore` as follows:

```sh
skyd restore --from=<path to backup> [--to <installation directory>]
```

- `--from=<path to backup>`: Specifies the path to the backup
- `--to <installation directory>` *(optional)*: By default, it is assumed that the current directory is the installation directory. If not, set this option.

**Example**:

```sh
skyd restore \
    --from=/mnt/backupnfsdrive/quick-backup-before-migration \
    --to=/var/lib/skytable
```

### Data restore protections

The `restore` subcommand also has some safeguards in place that prevent you from accidentally restoring incorrect data. Some of these safeguards include:

- **Backup has correct time signatures**
- **Backup is compatible**
- **Was created by the same host:** you will obviously need to override this when recovering from a crash and this should be okay to do. The reason this protection exists is in a situation where you're running a cluster and have multiple backups and accidentally restore from the wrong backup.

If you need to override any of these conditions in special cases, then please check the help menu with `skyd restore --help`.
