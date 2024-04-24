---
id: querying
title: Querying
---

## Simple queries

A simple query is a type of query in which the client sends one query to the server and the server returns an appropriate response (or an error). There are no explicit guarantees provided about the execution of a simple query, other than what was described earlier in the [section on BlueQL](blueql). DDL and DCL queries are guaranteed to be ACID. DML queries are guaranteed to be atomic but have delayed durability.

**When should you use simple queries?** The majority of use-cases will involve running simple queries.

> **Note**: The execution guarantees for queries only apply when the are executed as simple queries.

:::info
Fully ACID transactions are being worked on and will be available for use soon.
:::

## Pipelines

A pipeline is a method of sending multiple queries to the server at once, instead of being sent individually. The server keeps the queries in a queue and then executes them one-by-one in order, writing each response to the connection. **Pipelines do not provide any concurrency and execution guarantees** and should not be used in place of ACID transactions. It is merely a convenience provided to reduce round-trip-times (RTTs) associated with multiple requests to the server.

**When should you use pipelines?** Pipelines are to be used when you have to run queries that can run *independently* of one another. For example, if you're "banning some users" you could just put all your `UPDATE` queries in a pipeline and send them to the server. The server will serially execute all the `UPDATE`s independently of one another. If someone `DELETE`s their "account" (i.e the row is gone) that's still fine because you were banning them anyway.

> **Note**: To use pipelines, both your client and server should support pipelines. Pipelines were re-added in 0.8.2 so any client that supports pipelines should be paired with server versions >= 0.8.2
