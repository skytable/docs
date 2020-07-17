# Terrapipe

> Copyright (c) 2020 Sayan Nandan <<ohsayan@outlook.com>><br>Date: July 17, 2020

## Introduction

Terrapipe is an application layer protocol like HTTP, built on top of TCP. It is used by the [Terrabase Database](https://github.com/terrabasedb/terrabase) for client-server communication. All clients willing to communicate with the Terrabase Database must implement this protocol. This document serves as a guide to implement the protocol.

## Concepts

Terrapipe works in a query/response action similar to HTTP's request/response action. Clients send queries and the bytes sent over the TCP stream is collectively called the query packet. The server responds with a response packet.

Both these packets have two frames:

* The first line (before the first CRLF) in any of these packets is called the metaframe - this contains query/response metadata such as the action type and content length
* The second line and the subsequent lines are collectively called the dataframe
* Each chunk of bytes following the metaframe is terminated with `\r\n` i.e with CRLF

## Supported actions

* `GET` : A get query
* `SET` : A set query
* `UPDATE` : An update query
* `DEL` : A delete query
* `HEYA` : A status check query

(The number of commands will continue to increase in the future)

## Response codes

| Code | Description | Notes |
| ---- | ------- | ----- |
`0` | Okay ||
`1` | Not Found||
`2` | Overwrite Error||
`3` | Invalid Metaframe|The metaframe contains illegal characters|
`4` | Incomplete| The query packet is incomplete
`5` | Other error| Some other error response. This error text would be sent in the dataframe|


## The Query packet

The query packet has the following structure:

``` 
*<ACTION>!<LINES>!<SIZES>\r\n----- data -----
```

### Line 1 (before first CRLF): Metaframe

This is what the values in `<>` mean:

* `<ACTION>` : This can assume any of the values list [above](#supported-actions)
* `<LINES>` : The number of lines that this query contains excluding the metaframe
* `<SIZES>` : The number of characters in each line - this is done for performance reasons so that we can preallocate buffers for reading data. For a single-line query, it can look like: `4#` , while for a multiline query, it can look like: `3#5#` . It has the format: `<CHARS-IN-THIS-LINE>#<CHARS-IN-NEXT-LINE>#` and so on

#### An example metaframe

For a query like `set sayan 17` , the resulting query packet would look like:

``` shell
*SET!2!5#2#
```

### Line 2 and subsequent lines: Dataframe

The dataframe has no absolute structure, with the only requirement that each unit of data should be separated by `\r\n` , i.e CRLF

#### An example dataframe

`sayan\r\n17` 

## The Response packet

The response packet has the following general structure

``` 
<RESPCODE>!<LINES>!<SIZES>\r\n---- data ----
```

### Line 1 (before first CRLF) : Metaframe

This is what the values in `<>` mean:

* `<RESPCODE>` : This can have the values listed in [this table](#response-codes)
* `<LINES>` : The number of lines that this response contains excluding the metaframe
* `<SIZES>` : The number of characters in each line - this is done for performance reasons so that we can preallocate buffers for reading data. For a single-line response, it can look like: `4#` , while for a multiline response, it can look like: `3#5#` . It has the format: `<CHARS-IN-THIS-LINE>#<CHARS-IN-NEXT-LINE>#` and so on

#### An example metaframe

For a response to `set sayan 17` , the response is:

`0!0!0\r\n` 

When we query for `get` ting a non-existent key, `get randomdude` , the response is:

`1!0!0\r\n` 

## A complete example

Let's say I run:

``` shell
$ ./tsh
Welcome to Terrabase!
Connected to 127.0.0.1:2003

tsh> set sayan 17
```

`tsh` will then write the following bytes to the stream:

``` 
*SET!2!5#2#\r\nsayan\r\n17
```

The server will parse the query and let us assume that this key doesn't exist (so no `OverwriteError` is thrown), then the server will respond like this:

``` 
0!0!0
```

Now let us say we run `get sayan` on tsh, then the server would respond with:

``` 
0!1!2#\r\n17
```

Voila! We just saw Terrapipe in action!
