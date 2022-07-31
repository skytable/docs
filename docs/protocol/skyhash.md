---
id: skyhash
title: Skyhash 2.0
---

:::note About this document
Copyright (c) 2022 Sayan Nandan &lt;nandansayan@outlook.com&lt;  
**In effect since:** 0.8.0  
**Date:** 15<sup>th</sup> April, 2022
:::

Skyhash 2.0 is a protocol built on top of TCP that is used by Skytable for client-server communication.
All clients willing to communicate with Skytable must implement this specification. Skyhash 2.0 supersedes
the now deprecated [Skyhash 1.0 protocol](deprecated/skyhash-1.0). See [this document](skyhash-changelog) 
for a complete list of changes.

## Concepts

Skyhash uses a query/response action just like HTTP's request/response action &mdash; clients send queries and the server returns responses. The bytes sent by a client to the server is called a _query packet_ while the bytes returned by the server to the client is called a _response packet_.

As of Skyhash 2.0, there are two kinds of queries;

- **Simple queries:** In these kinds of queries, the client sends a single query and the server responds
  with a single response
- **Pipelined queries:** In these kinds of queries, the client sends multiple queries in a single query and the server returns multiple responses in the same responses, in the order the queries were sent

## Simple queries

This section explains the structure of simple queries and responses

### Queries

A simple query is used to run a single query. A simple query is made up of two parts:

1. The Metaframe
2. The Dataframe

#### The Metaframe

The metaframe of a simple query has the following structure:

```
*<count>\n
```

Here:

- `*` tells the server that this is a simple query
- `<count>` specifies the number of elements in the simple query
- `\n` terminates the metaframe

#### The Dataframe

The dataframe of a simple query has the following general structure:

```
<l>\n
<e>
...
```

Here:

- `<l>` indicates the number of bytes in the element and is newline terminated (`\n`)
- `<e>` is the element itself

This is repeated for all the elements, something like:

```
<l1>\n
<e1>
<l2>\n
<e2>
...
```

#### Example: A complete simple query

We need to send: ["SET", "x", "100"]

```
*    -> Simple query
3\n  -> Query 1 has 3 elements
3\n  -> E1 has 3 bytes
SET  -> E1 itself
1\n  -> E2 has 1 byte
x    -> E2 itself
3\n  -> E3 has 3 bytes
100  -> E3 itself
```

### Responses

Simple responses are returned as responses to simple queries. There is one thing about responses: unlike queries where the server doesn't bother with types, responses however **are strongly typed**. The returned data types have their structures, all of which you can see in [this document](data-types). Responses have the following general structure:

```
*
<type><length>\n
<data>
```

Here:

- `*`: Tells the client that this is a response to a simple query. This comprises the entire response metaframe
- `<type>` Is the type symbol (see [this document](data-types))
- `<length>`: Number of bytes in the element. For collections, this specifies the length of the collection while lengths for individual elements follow. Some types might not have lengths but are newline terminated instead

#### An example response

The below response is returned when the servers responds with `Respcode 0` (Okay):

```
*   -> simple response
!	-> the returned value is a respmessage
0\n	-> The respmessage is 0, which is respcode 0 (Okay)
```

Here:

- `*`: This is a response to a simple query
- `!`: This is the type symbol for Response Messages. Response codes
- `0`: This is the response code, newline terminated (`\n`)

Here is another responses to something like `GET x` that returns `100` as a string:

```
*     -> simple response
+3\n  -> unicode string with 3 bytes
100	  -> the element
```

:::tip
Consider reading **[this document on data types](data-types)** to learn about the structure of each response data type.
:::

## Pipelined queries

This section explains the structure of pipelined queries and responses.

### Queries

Pipelined queries are used to run multiple queries at once. Responses are returned in the order they are sent. A pipeline is also made up of two parts:

1. Metaframe
2. Dataframe

#### The Metaframe

The metaframe of a pipelined query has the following general structure:

```
$<count>\n
```

Here:

- `$`: This tells the server that this is a pipelined query
- `<count>`: The number of queries in this pipeline, newline terminated (`\n`)

#### The Dataframe

The dataframe of a pipelined query is simply a collection of simple query dataframes. It resembles the following structure:

```
<query 1 element count>\n
<--- query 1 dataframe --->
<query 2 element count>\n
<--- query 2 dataframe --->
...
```

### Example: A complete pipelined query

Here, we are sending two queries:

- **Query 1:** `SET x 100`
- **Query 2:** `GET x`

```
$    -> Pipeline
2\n  -> Pipeline has 2 queries

3\n  -> Query 1 has 3 elements
3\n  -> Q1E1 has 3 bytes
SET  -> Q1E1 itself
1\n  -> Q1E2 has 1 byte
x    -> Q1E2 itself
3\n  -> Q1E3 has 3 bytes
100  -> Q1E3 itself

2\n  -> Query 2 has 2 elements
3\n  -> Q2E1 has 3 bytes
GET  -> Q2E1 itself
1\n  -> Q2E2 has 1 byte
x    -> Q2E2 itself
```

### Responses

Pipelined responses are responses returned in responses to a pipelined query. Just like [simple responses](#simple-responses), they are typed.

Example response:

```
$	 -> Pipeline response
2\n	 -> Two responses are returned
!0\n -> First response is respcode 0
+3\n -> Second response is a string with 3 bytes
100  -> The string itself ("100") here
```
