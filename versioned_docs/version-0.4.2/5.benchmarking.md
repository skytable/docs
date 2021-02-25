---
id: benchmarking
title: Benchmarking
---
Once you've downloaded the bundle:
1. Unzip it and make the files executable
2. Start the database server `tdb`
3. Now run `tdb-bench` with the options, given in order:
    - `connections` : The number of clients you want to simulate (we recommend at least 2)
    - `queries` : The number of queries you want to run. A good number is `50000`
    - `packetsize` : The key and value size. That is, if you set this to `4`, the key will have a size of 4 bytes and the corresponding value will also have a size of 4 bytes. A good size is `8`, but it's really upto you
    
If you followed the advice above, then you should've run `tdb-bench 2 50000 8`. Wait for the benchmarks to be run and see the results for yourself!

**NOTE:** The benchmark tool is currently experimental and may show TDB to be _slower_! If you've found any issues or you've got an idea - [report 'em here](https://github.com/skybasedb/skybase/issues/new)!