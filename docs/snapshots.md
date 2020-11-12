# Snapshots

Since v0.4.5, TerrabaseDB supports automated snapshots that can be used for periodic backups. 
TerrabaseDB's snapshotting system is dead simple and works in a similar way to [BGSAVE](./Persistence.md).

## Enabling snapshots

Snapshots aren't enabled by default - you have to enable them by using the configuration file or [command line arguments](/config-command-line). To your existing configuration file, just add the following block:

``` toml
[snapshot]
enabled = true
every = 3600
atmost = 4
```

Here's what these values mean:

* `enabled` - Whether snapshotting is enabled or not; either `true` or `false`
* `every` - Number of seconds to wait before creating another snapshot
* `atmost` - The maximum number of snapshots to keep

## Storage of snapshots

All the created snapshots are stored in a `snapshots` folder in the current directory.
The snapshot files are named in the format: `YYYYMMDD-HHMMSS.snapshot` .

## How snapshots work

As mentioned earlier, snapshots work just like `BGSAVE` . A task is spawned that acquires a lock on the core table and once all the data is successfully flushed to disk, the task exits and releases the lock.

## Methods of creating snapshots

Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the [ `MKSNAP` ](/Actions/MKSNAP) action. Do note that this **requires snapshotting to be enabled** before it can create snapshots.
