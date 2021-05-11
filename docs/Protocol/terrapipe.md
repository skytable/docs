---
id: terrapipe
title: Terrapipe 1.0
---
:::note About this document
Copyright (c) 2020 Sayan Nandan &lt;nandansayan@outlook.com&gt;  
**Date:** Aug 23, 2020  
**In effect since:** v0.4.0  
**Revision Date:** 6<sup>th</sup> Aug, 2020  
**EOL since:** v0.6.0
:::
:::danger EOL Notice
This protocol has reached EOL since Skytable 0.6. Please use the [Skyhash Protocol](skyhash) instead.
:::
## Introduction

Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by [Skytable](https://github.com/skytable/terrabase) for client/server communication. 
All clients willing to communicate with Skytable must implement this protocol. This document serves as a guide for implementing clients for Skytable.

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

* `<n>` is the number of datagroups in the query. Since simple queries perform one action only, the value of `<n>` is always 1. Batch queries have values of n in the range `(1, ∞)` depending on the number of actions
they perform
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

You can find a full list of data types and their `<tsymbol>` s **[here](data-types)**.

## Response codes

You can find a full list of response codes and their descriptions **[here](response-codes)**

## Notes

The line that has a `#` followed by the number of bytes in the next line or the line that has a `<tsymbol>`
followed by the number of bytes in the next line (in the case of responses) is often referred to as a sizeline.

## A complete query/response example

Let's say we're going to run `GET foo` to get a key called 'foo'. Since we're just running one action, this
tells us that this is a simple query.

### The Query Packet

#### The Metaframe

Since simple queries just do one thing, they'll just have one data group. So the metaframe is fairly simple:
```
#2\n // The next line has the `*1` chars, so 2 chars excluding the LF character
*1\n // This query has one action, so one datagroup
```

#### The Dataframe
Now, what about the dataframe? Well, there is a single datagroup for the `GET` action with two arguments.
Hence, the _boilerplate_ for the dataframe will look like:
```
#2\n // The next line has the `&2` chars, so 2 chars excluding the LF character
&2\n // The datagroup has two arguments, so this value is 2
```

Now, what about the data? `GET` and `foo` are the two arguments, so the data in the dataframe will look like:
```
#3\n // 'GET' has 3 chars excluding the LF
GET\n // The data item `GET` itself
#3\n // `foo` also has 3 chars excluding the LF
foo\n // The data item `foo` itself
```

#### The complete query packet

So, `GET foo` will produce the following query packet:
```
#2\n
*1\n
#2\n
&2\n
#3\n
GET\n
#3\n
foo\n
```

Pretty simple, right?


### The Response Packet

We'll assume that a key `foo` exists, and it holds the value `bar`. Since we aren't going to be building
responses, but rather parsing them &mdash; let's understand the parts of a response that will be returned by the server in this case:
```
#2\n
*1\n
#2\n
&1\n
+3\n
bar\n
```

#### The Metaframe
Like you know, the metaframe is always made up of two lines (i.e two parts separated by a LF character or `\n`).
So, in our case, the response's metaframe is:
```
#2\n
*1\n
```
We start our parsing with the first line. Let's read in the sizeline. For this, we ignore the LF char and look
at the remaining parts. What is it that we have? It's `#2`.

> For more information on sizelines, [read this note](#notes)

This means that our next line will have 2 chars excluding the LF. Good!

Now we read the first 2 chars as that's the only important bit for us and ignore the linefeed. This leaves us
with `*1`. Since we're in the metaframe, it's easy to understand that `*1` is telling us that the response
packet is one for a simple query and NOT a pipelined query.

So, as of now, we know that this reponse corresponds to a simple query.

#### The Dataframe

In our case, the dataframe will be the remaining part:
```
#2\n
&1\n
+3\n
bar\n
```

We know that we need to read the boilerplate for the dataframe that is again two lines or parts separated by LF
chars. So, we read in the sizeline. 

To read the sizeline, we just read upto the `\n` character and then ignore the `LF`. This leaves us with `#2`.
Again, just like queries, this means that the next line will have 2 chars excluding the LF. Great!
So, we read the first 2 chars and ignore the linefeed. In our case,
this is `&1`. This tells us that there is going to be a datagroup with one element.

##### The data

In our case, the data is made of the remaining part:

```
+3\n
bar\n
```

So, we read the sizeline again. This sizeline begins with a `+` and not `#`. This is obvious because sizelines
begin with `<tsymbol>`s in the case of the data in response dataframes.
So, we have `+3` (ignoring the LF). From the [data type list](data-types), we know that `+` indicates a string
in the following line. Good! And the `3` tells us that the next line is 3 chars long, excluding the linefeed!

So, in other words, we have a 3 character long string in the next line.
Now let's read in 3 characters and ignore the linefeed. Hey, we have a 3 char string 'bar'.

So, our response becomes (in pseudocode data-structure):
```js
SimpleResponse {
    datagroup: [String("bar")]
}
```
If we ran `MGET x y z`, and x and y existed with values `ex` and `why` and z didn't exist, we'd have three
elements in the datagroup:
```js
SimpleResponse {
    datagroup: [String("ex"), String("why"), RespCode(1)]
}
```
<!-- Do note that the `js` tag is only used for 'good syntax highlighting' by docusaurus -->
Phew, we're done!