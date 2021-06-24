---
id: deployment-notes
title: Deployment notes
---

Here are some _good to know_ things about deploying Skytable:

- Skytable is under active development. If you do find any rough edges, [please open an issue](https://github.com/skytable/skytable/issues)
- The daemon will create a `.sky_pid` file in its working directory which functions as a PID file
  and indicates other processes to not use the data directory. If the daemon is somehow forcefully
  stopped, the file may not be removed. In that case, you should manually remove the file
- Skytable currently has a hardcoded limit of 50000 connections on a single daemon instance. This limit will be user accessible in the (near) future
- Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using
  multiple threads
- The best way to deploy Skytable is as a service (and passing `--noart` to avoid terminal artwork
  in logs)
