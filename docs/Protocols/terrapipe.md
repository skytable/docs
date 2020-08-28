# Terrapipe 1.0

> Copyright (c) 2020 Sayan <<ohsayan@outlook.com>><br>**Date:** Aug 23, 2020<br>**In effect since:** v0.4.0

## Introduction

Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by [TerrabaseDB](https://github.com/terrabasedb/terrabase) for client/server communication. 
All clients willing to communicate with TDB servers must implement this protocol. This document serves as a guide for implementing clients for TDB.

## Concepts

Terrapipe also works in a request/response action like HTTP, except that we call
it a query/response action. A client sends a query, and the server returns a response. The bytes sent by a client is called a query packet, while the bytes sent by the server in response to this is called a response packet.

Each packet (irrespective of query or response), contains two parts:

* **The metaframe**: the first two lines
* **The dataframe**: the remaining lines

### Types of queries

* **Simple queries**: These queries just perform one action (like `GET` , `SET` , ...)
* **Batch queries**: These queries perform multiple actions

### Datagroups

A datagroup is a collection of elements that perform one action, for a query or a collection elements that return the outcome for one action, for a response. Don't worry, read on and you'll understand what it is.

## The Metaframe

The metaframe is made up of precisely two lines (separated by a LF or `\n` byte). This is what it looks like:

``` 
#<m>\n
*<n>\n
```

Here:

* `<n>` is the number of datagroups in the query. Since simple queries perform one action only, the value of `<n>` is always 1. Batch queries have values of n in the range `(1, ∞)`
* `<m>` is the number of bytes in the following line excluding the `\n` byte. So let's say we had `*1\n` in the second line of the metaframe, then `<m>` would have a value of 2. 

Also make sure that you make matching the `*` character non-exhaustive, as we might be adding more packet types in the future which may need symbols other than `*` .

## The Dataframe

The dataframe is made up of groups called datagroups as we had mentioned earlier. In the case of a query like `GET x` , `GET x` will be the query datagroup, and the response returned by the server with the key, will be the response datagroup (of course, excluding the metaframe).

Every query datagroup will contain all the arguments required to execute that action, including the action itself. Each datagroup has two lines of _boilerplate_ in the beginning. This looks like:

``` 
#<p>\n
&<q>\n
```

Here:

* `<q>` is the number of arguments/elements in the datagroup and
* `<p>` is the number of bytes in the next line, excluding the `\n` byte (just like the metaframe)

An entire datagroup, has the following structure:

``` 
#<p>\n
&<q>\n
<--- DATA --->
```

We know the first two lines...but wait, what is `<--- DATA --->` ? Let's take a look at what is _data_ looks like in the case of queries and then we'll look at what the _data_ looks like in the case of responses.

### Data in Queries

For a request like `GET foo` , the corresponding data will look like:

``` 
#3
GET\n
#3\n
foo\n
```

So, starting from line 1:

1. we have a '#' followed by the number of bytes in the next line (3 in this case), excluding the `\n` byte.   
2. We then have a `\n` byte. Looking ahead, we have 3 bytes ( `GET` ) followed by a `\n` byte.  
3. We then have  a '#' followed by the number of bytes in the next line (3 again, in this case), followed by a `\n` byte.  
4. And this goes on

The idea is, we have a `#` followed by the number of bytes (let it be `n` ) to be read from the next line and a line feed character ('\n'). In the next line, we read `n` bytes and skip the line feed character. And we keep going on, in this way.

Not so hard, right? Now let's look at what the data looks like in the case of responses.

### Data in Responses

Data in responses have the following general structure:

``` 
<tsymbol><length>\n
<item>\n
<tsymbol><length>\n
... and so on
```

Here, we can easily make out that `<length>` is the number of bytes in the following line (just like a query) and `<item>` is well, an argument/element in the datagroup. But then, what is `<tsymbol>` ? Simply put, it is the type of data in the following line.

But, before you go ahead, here's the simple flow that you must keep in mind:

1. Read the `tsymbol` and match it against the [data type](#data-types)
2. Parse the data in the next line into the data type
3. Repeat for the remaining lines

So, to conclude, `<tsymbol>` specifies the type of the `item` in the following line. [Read on](#data-types) to know what values `<tsymbol>` can assume. 

## Data Types

You can find a full list of data types and their `<tsymbol>` s **[here](/Supported-Data-Types)**.

## Response codes

You can find a full list of response codes and their descriptions **[here](/Response-Codes)**

And that's about it! For a list of actions, [see this](/List-Of-Actions).
