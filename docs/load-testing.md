---
id: benchmarking
title: Benchmarking
---

All of Skytable's components are developed from scratch in-house, which makes it hard (if not impossible) to utilize other benchmarking suites. This is why all of Skytable's release bundles come with the `sky-bench` benchmarking tool. It's important to understand how the tool works to understand what you're benchmarking and what the results mean.

The overall goal with the benchmark tool is to simulate how the database would perform in the real-world and reduce synthetic factors.

:::info
The ability to simulate different workloads is currently being worked on. This means that across releases, the default workload that the benchmark tool runs may vary. See the release notes to see if the benchmark workload has changed.
:::

## Using the benchmark tool

You will need to select a workload from the [below section on workloads](#benchmark-workload). As workloads need `root` access to the database for creating and removing spaces and tables, you will need to also provide the `root` account password.

You may run workloads like this using an argument for the password:

```sh
sky-bench --workload <workload_name> --password <root password>
```

You can also use the `SKYDB_PASSWORD` environment variable if you do not want to use `--password`. You can tune the number of threads, connections, rows created and such to your liking to simulate the environment that you think matches your production setting:

- `--connections <count>`: Set the number of client connections (defaults to `8 * number of logical CPUs`)
- `--threads <count>`: Total number of threads to use. (defaults to the logical CPU count)
- `--rowcount <count>`: Set the number of unique rows to run workload sequences on
- `--keysize <size>`: Set the number of bytes to use for the primary key

See the help menu using `sky-bench --help` to use additional configuration options.

## Benchmark workloads

Workloads are used to emulate various usage scenarios, for example by varying the read/write proportions, changing the distributions of keys and such. While we intend to add more workloads down the line, the one that is used by default is described below.

### `uniform_std_v1`

This workload executes an uniform sequence of operations (hence called "uniform"). It does the following:

- Creates a space `db`
- Creates a model `db.db` with the following definition: `create model db.db(k: binary, v: uint64)`
- Now:
  - 1,000,000 unique rows are inserted using `INSERT`
  - 1,000,000 of the unique rows that were created in the previous step are modified using `UPDATE`
  - 1,000,000 of the unique rows that were created and modified earlier are fetched using a `SELECT`
  - 1,000,000 of the unique rows that were created are individually removed using `DELETE`
  - Hence, a total of 4,000,000 queries are run

How to run:

```sh
sky-bench --workload 'uniform_std_v1'
```


:::tip
Now go ahead and run your own benchmarks to see the performance of Skytable for yourself. We know you'll love it 🚀
:::
