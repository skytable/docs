---
id: recovery
title: Data recovery
---


In the unforeseen event that a power failure or other catastrophic system failure causes the database to crash, the Skytable server will fail to start normally. Usually it will exit with a nonzero code and an error message such as "journal-corrupted." In such cases, you will need to recover the journal(s) and/or any other corrupted file(s).

### Understanding data loss

All DDL and DCL queries are immediately written to disk when they're run and hence usually no data loss will occur due to a runtime crash (unless a crash occurs in the middle of a disk write). On the other hand, DML queries are written in optimized delayed-durability batches, i.e when the engine determines that either there are too many pending changes or if too much memory is being used (alongside other factors). This however means that in the case of a runtime crash with pending changes, some of these changes may be lost.

This is why it is so important to tune the [`rs_window`] value or the "Reliability Service" window which ensures that irrespective of the number of changes, all changes will be flushed in that given duration. We're further working on supporting optimized immediate writes for DML queries (which however as expected would come with a significant performance penalty).

### Recovering database files

To repair the database, simply run this on the command line **in the working directory of the database**:

```sh
skyd repair
```
The recovery system will first create a full backup of the current data files in a subdirectory in the `backups/` directory. It will then go over each database file, try to detect any errors and make any approriate repairs.

### Important notes

- The recovery system is *very conservative* and will attempt to restore the database to the most recent working state. Any remaining data is deemed unreliable and not loaded
- Please ensure that you have sufficient disk space before attempting a repair
- The earlier in the file the corruption happens, the greater the amount of data lost

### Post recovery

After running a repair operation, if a signficant amount of data loss has occurred (as reported by `skyd`) then we strongly recommend you to manually look through your datasets. The recovery process guarantees that the *restored data* is intact. If this failure resulted from power loss, in the future you may consider installing power backup systems if self-hosting or choosing a reliable cloud provider.

