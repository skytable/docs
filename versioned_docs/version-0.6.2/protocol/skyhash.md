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

### Strings (+)
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

Strings are binary safe because they have prefixed lengths

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
Array([String("Hello"), String("World")])
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
Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)])
```
3. An array containing two arrays:
Pipe symbols (|) and underscores (_) were added for explaining the logical parts of the array:

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
    Array([String("Hello"), String("World"), String("Again")])
])
```
This can be nested even more!


### Important notes

These data types and `<tsymbols>` are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of `UnimplementedError` to indicate that your client cannot yet deserialize this specific type. See all current data types and their tsymbols [in this table](data-types).

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