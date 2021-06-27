---
id: deployment-notes
title: Deployment notes
---

Here are some _good to know_ things about deploying Skytable:

- Skytable is under active development. If you do find any rough edges, [please open an issue](https://github.com/skytable/skytable/issues)
- The daemon will create a `.sky_pid` file in its working directory which functions as a PID file
  and indicates other processes to not use the data directory. If the daemon is somehow forcefully
  stopped, the file may not be removed. In that case, you should manually remove the file
- Skytable currently has a default limit of 50000 connections on a single daemon instance. This limit
  can be modified by setting the `maxcon` in the [configuration file](config-files).
  :::note
  Make sure you change `maxcon` according to the available system resources to avoid attacks
  that may cause your system to crash
  :::
- Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using
  multiple threads
- The best way to deploy Skytable is as a service (and passing `--noart` to avoid terminal artwork
  in logs)
