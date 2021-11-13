---
id: skyhash
title: Skyhash Protocol 1.0
---

:::note About this document
Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;  
**In effect since:** v0.6.0  
**Date:** 11<sup>th</sup> May, 2021
:::

## Introduction

Skyhash or the Skytable Serialization Protocol (SSP) is a serialization protocol built on top of TCP that is
used by Skytable for client/server communication. All clients willing to communicate with Skytable need to implement this protocol.

## Concepts

Skyhash uses a query/response action just like HTTP's request/response action &mdash;
clients send queries while the server sends responses. All the bytes sent by a client to a server is called a _Query Packet_ while all the bytes sent by the server in response to this is called the _Response packet_.

Irrespective of the action type, all these packets are made of a metaframe and a dataframe.

### The Metaframe

The metaframe is the first part of the packet separated from the rest of the packet by a line feed (`\n`) character. It looks like
this:

```
*<c>\n
```

where `<c>` tells us the number of actions this packet corresponds to. For simple queries which run one action, this will be one while for batch queries it can have any value in the range (1, +∞).

### The Dataframe

The dataframe is made up of elements. Each element corresponds to
a single action and hence corresponds to a single query. Simple queries will run one action and hence will have one element while batch queries will run a number of actions and hence will have a number of elements.

Every element is of a certain [data type](#common-data-types) and this type determines how the element is serialized with Skyhash. Responses receive some extra data types which are
highlighted in [response specific data types](#response-specific-data-types).

## Common Data Types

Usually serialized data types look like:

```
<tsymbol><len>\n
-----DATA-------
```

where the `<tsymbol>` corresponds to the Type Symbol and the `<len>` corresponds to the length of
this element. Below is a list of data types and their `<tsymbol>`s.

### Strings (+/?)

String elements are serialized like:

```
+<c>\n
<mystring>\n
```

Where `<c>` is the number of bytes in the string '`<mystring>`'.
So a string 'Sayan' will be serialized into:

```
+5\n
Sayan\n
```

There is also a binary string (binstr) type with a tsymbol `?`. For this kind of string, no unicode validation
is carried out.

### Unsigned integers (:)

64-bit usigned integers are serialized into:

```
:<c>\n
<myint>\n
```

Where `<c>` is the number of digits in the integer and `<myint>` is the integer itself.

### Arrays (&)

Arrays are recursive data types, that is an array can contain another array which in turn can contain another array and so on. And array is essentially a collection of data types, including itself. Also, arrays can be multi-type.

Skyhash serializes arrays into:

```
&<c>\n
<elements>
```

Where `<c>` is the number of elements in this array and `<elements>` are the elements present in the array. Take a look at the following examples:

1. An array containing two strings:

```
&2\n
+5\n
Hello
+5\n
World\n
```

This can be represented as:

```js
Array([String("Hello"), String("World")]);
```

2. An array containing a string an two integers:

```
&3\n
+5\n
Hello
:1\n
0\n
:1\n
1\n
```

Which can be represented as:

```js
Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)]);
```

3. An array containing two arrays:
   Pipe symbols (|) and underscores (\_) were added for explaining the logical parts of the array:

```
          ___________________________
&2\n     |_____________|             |
&2\n     |             |             |
+5\n     |             |             |
Hello\n  | Array 1     |             |
+5\n     |             |             |
World\n  |_____________|             |
&3\n     |             | Nested      |
+5\n     |             | Array       |
Hello\n  |             |             |
+5\n     | Array 2     |             |
World\n  |             |             |
+5\n     |             |             |
Again\n  |_____________|_____________|
```

This can be represented as:

```js
Array([
  Array([String("Hello"), String("World")]),
  Array([String("Hello"), String("World"), String("Again")]),
]);
```

This can be nested even more!

### Important notes

These data types and `<tsymbols>` are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of `UnimplementedError` to indicate that your client cannot yet deserialize this specific type.

:::info Useful read
**We strongly recommend** you to read the full list of types and how they are serialized [in this document](data-types).
:::

## Response Specific Data Types

Responses will return some additional data types. This is a _non-exhaustive_ list of such types.

### Response Codes (!)

Response codes are often returned by the server when no
'producable' data can be returned, i.e something like FLUSHDB can only possibly return 'Okay' or an error. This distinction
is made to reduce errors while matching responses. Skyhash will serialize a response code like:

```
!<c>\n
<code>\n
```

Where `<c>` is the number of characters in the code and `<code>` is the code itself. So Code `0` that corresponds to `OKAY` will be serialized into:

```
!1\n
0\n
```

You find a full list of response codes [in this table](response-codes).

## A full example (a simple query)

Let's take a look at what happens when we send `SET x ex`. First, the client needs to serialize
it into a Skyhash compatible type. Since this is a simple query, we just have one single
element in the query array. Most of Skytable's common actions use arrays, and SET uses an [`AnyArray`](data-types#any-array). So in `SET x ex`:

- This is a simple query
- We need to send an [`AnyArray`](data-types#any-array)
- It has three elements: `['SET', 'x', 'ex']`

```shell
*1\n  # '*1' because this is a simple query
~3\n  # 3 elements
3\n   # 'SET' has 3 chars
SET\n # 'SET' itself
1\n   # 'x' has 1 char
x\n   # 'x' itself
2\n   # 'ex' has 2 chars
ex\n  # 'ex' itself
```

Way to go! We just did it!

Now the server would return a query array with one element: a response code. This is what
it returns:

```sh
*1\n
!1\n
0\n
```

Here:

- `*1` because this response corresponds to a simple query
- `!1` because the returned data type is a response code with tsymbol `!` and a length of `1`
  char
- `0` because this is the response code that corresponds to _Okay_

## A full example (a pipelined query)

Let's take a look at when we send two queries `HEYA once` and `HEYA twice` to the server, as a pipelined query.

- This is a pipelined query
- We need to send two [`AnyArray`](data-types#any-array)s, one for each query

This is what the client has to send (`#`s are used to denote comments):

```shell
*2\n    # *2 because this a pipelined query with two queries
# we begin our first query from here
~2\n    # our first query has two elements: "HEYA" and "once"
4\n     # "HEYA" has 4 characters
HEYA\n  # the element itself
4\n     # "once" has 4 characters
once\n  # the element itself
# we're done. the second query begins here
~2\n    # our second query has two elements: "HEYA" and "twice"
4\n     # "HEYA" has 4 characters
HEYA\n  # the element itself
5\n     # "twice" has 5 characters
twice\n # the element itself
```

And there &mdash; you've learned Skyhash!
