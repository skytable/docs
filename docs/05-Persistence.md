# Persistence

Since 0.3.0 — Skybase supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skybase's persistence works. 

## How Skybase stores data

Whenever you start the database, Skybase looks for a `data.bin` file, which contains data from the previous run of the database server. This is a binary file and should not be edited by hand: as you might end up corrupting the file.
When you shut down the database, Skybase stops stops listening to all incoming connections, and then flushes the entire in-memory table onto disk and then shutting down.

## Automated background saving

Since 0.4.2, Skybase supports automated saving of data in the background, via `BGSAVE` . `BGSAVE` , runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the [configuration file](/04-Configuration/#an-example-configuration).
