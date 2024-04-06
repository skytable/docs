---
id: querying
title: Querying
---

In this document we explore different query modes that Skytable supports.

## Simple queries

A simple query is a type of query in which the client sends one query to the server and the server returns an appropriate response (or an error). There are no explicit guarantees provided about the execution of a simple query, other than what was described earlier in the [section on BlueQL](blueql).

Overall, all DDL and DCL queries are guaranteed to be ACID while DML queries are of a delayed-durability nature.

## Pipelines

A pipeline is a method of sending multiple queries to the server at once, instead of being sent individually. The server keeps the queries in a queue and then executes them one-by-one in order, writing each response to the connection. **Pipelines do not provide any execution guarantees** and should not be used in place of ACID transactions. It is merely a convenience provided to reduce round-trip-times (RTTs) associated with multiple requests to the server.

For example, instead of sending multiple queries you could re-initialize a database in one query by putting it into a pipeline:

```sql
CREATE SPACE IF NOT EXISTS myspace
CREATE MODEL IF NOT EXISTS myspace.mymodel(username: string, password: string)
```
