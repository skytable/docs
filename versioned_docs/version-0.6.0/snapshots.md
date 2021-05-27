---
id: snapshots
title: Snapshots
---
Skytable supports automated snapshots that can be used for periodic backups. 
Skytable's snapshotting system is dead simple and works in a similar way to [BGSAVE](persistence).

## Enabling snapshots

Snapshots aren't enabled by default - you have to enable them by using the configuration file  or [command line arguments](config-cmd) To your existing configuration file, just add the following block:

``` toml
[snapshot]
every = 3600
atmost = 4
```

Here's what these values mean:

* `every` - Number of seconds to wait before creating another snapshot
* `atmost` - The maximum number of snapshots to keep

## Storage of snapshots

All the created snapshots are stored in a `data/snapshots` folder in the current directory.
The snapshot files are named in the format: `YYYYMMDD-HHMMSS.snapshot`. Learn more about the data directory
structure [here](persistence/#data-directory-structure).

## How snapshots work

As mentioned earlier, snapshots work just like `BGSAVE` . A task is spawned that acquires a lock on the core table and once all the data is successfully flushed to disk, the task exits and releases the lock.

## Methods of creating snapshots

Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the [ `MKSNAP` ](actions/mksnap) action. Do note that this **requires snapshotting to be enabled** before it can create snapshots.