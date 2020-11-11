# Benchmarking

Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking TerrabaseDB with our tool `tdb-bench` .

## Step 0: Getting the benchmarking tool

The benchmark tool ( `tdb-bench` ) has been shipped as a part of the TerrabaseDB bundle ever since 0.3.2. So, you'll need to download a bundle from the [releases page](https://github.com/terrabasedb/terrabasedb/releases) and unzip it. In the following steps we'll assume that you have unzipped the archive and you're in that directory.

## Step 1: Starting the database server

Open a terminal in the current directory and [set executable permissions](/Getting-Started/#step-2-make-the-files-runnable). Now start the server by running `./tdb` (or just `tdb` on Windows).

## Step 2: Run the benchmark tool

Open another terminal in the current directory and then run `tdb-bench` with no arguments if you want to use the default options, or run `tdb-bench --help` to see available configuration options. Hold tight, you'll know when it happens 🚀.

### Bonus: JSON Output

If you're a bit nerdy, we know it — you'll like some structured data. Well, all you need to do is: run `tdb-bench --json` for JSON output!
