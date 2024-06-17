---
id: disk-usage
title: Disk usage
---

## Directory structure

This is the general directory structure (subdirectories omitted):
```
├── data
├── gns.db-tlog
└── .sky_pid
```

- `gns.db-tlog` (file): This is a very important file that stores system tables and other data
- `data` (directory): This directory contains subdirectories with all the spaces (which in turn contain all the data for each space)
- `.sky_pid` (file): This is a temporary PID file that is created whenever the database is started. If the database crashes, then you may have to remove
  it manually


## Managing disk usage

Over time, as you continue to use your database your database files will grow in size, as you would expect. However, sometimes database files may grow beyond an efficient size resulting in high memory usage or slowdowns. To counter this, Skytable uses internal heuristics to determine when a database file is "larger than needed" and automatically compacts them at startup.

However, in some cases you may wish to perform a compaction regardless in order to reduce the file size. In order to do this you will have to run:

```sh
skyd compact
```

The server will then compact all files (even if a compaction wasn't triggered by internal heuristics) to their optimum size.
