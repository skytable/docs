# Terrapipe 1.0

> Copyright (c) 2020 Sayan Nandan <<ohsayan@outlook.com>><br>**Date:** Aug 9, 2020<br>**Updated:** Aug 16, 2020<br>**In effect since:** v0.4.0

## Introduction

Terrapipe is an application layer protocol, built on top of TCP, which is used by [TerrabaseDB](https://terrabasedb.com) (which we sometimes refer to as the Terrabase Database or TDB) for client/server communication. All clients willing to communicate with TDB servers must implement this protocol. This document serves as a guide to implement the protocol.

## Concepts

Terrapipe works much like HTTP: in a query/response action, that is, the clients send queries (much like HTTP requests) and the server sends responses (much like HTTP responses).  
The bytes sent by the client in a query is known as the query packet, while the bytes sent by the server in a response is known as the response packet.  

The query and response packets have the following things in common:

* **Lines 1 and 2**: These two lines (separated by a LF or `\n` byte) are together called the __metaframe__
    - **Line 1: _Metaline_**  

    The metaline contains information about the type of query, the content length and the metalayout length

    - **Line 2: _Metalayout_**  

    The metalayout contains, what we call, the _skip sequence_. This contains the bytes which are part of the data per line. (More on that later)

* **Line 3 and subsequent lines**: This is called the __dataframe__. The dataframe is _very structured_ and is made up of collections called datagroups. Each datagroup should be able to complete one __action__, which is nothing but a complete action - such as a `GET` or `SET` .

## Supported Actions

TerrabaseDB supports several actions which are listed [here](../List-Of-Actions.md).

## Response Codes

|Response Code | Description | Notes |
|-----|-----|-----|
|0|Okay|The action succeded without any errors|
|1|Not Found|The target item was not found (for example, while trying to `UPDATE` a non-existent key, we get this error)<Br>**Note:** Response code "1" can also be inferred as a `Nil` value.|
|2|Overwrite Error||
|3|Packet Error| The query sent was sent in an illegal format. For example, the dataframe may not be in the correct format or might not have all the required bytes (that is the content size may not match what the size of the dataframe)
|4|Action Error|The action that the query intended to perform didn't expect the data that was sent|
|5|Server Error|An internal error occurred on the server-side|
|6|Other Error|Some other error has occurred. The server will usually send a description of the error

## Different kinds of queries and responses

Queries and responses are classified into two kinds:

* **Simple Query/Response**: These queries/responses perform/respond to, only one action
* **Pipelined Query/Response**: These queries/response perform/respond to multiple actions

### Simple Queries

Simple queries, just as we discussed, will just run one action. They have the following basic structure:

``` text
*!<CONTENT_LENGTH>!<METALAYOUT_LENGTH>\n
<METALAYOUT>\n
<DATAFRAME>
```

#### _Line 1:_ The metaline

The metaline, contains the `<CONTENT_LENGTH>` , which is simply the size of the dataframe, and the `<METALAYOUT_LENGTH>` , which is simply the size of the metalayout.

For a packet which has, say 23 bytes in the dataframe and say 12 bytes in the metalayout would have a metaline which looks like:

``` text
*!23!12
```

#### _Line 2:_ The metalayout

The metalayout contains the skip sequence, or in other words, it contains the number of bytes which is a part of the data, before every LF character. So let's say that our dataframe had data like `foo\nbar1\nbar2` , the corresponding metalayout would look like:

``` text
#3#4#4
```

#### _Line 3 and subsequent lines_: The dataframe

The dataframe is where things get a _little_ complicated. Every action you want to perform will usually require some arguments along with it. 

<quote>
All the data required to perform one action, inclusive of the action itself, is together called a <b>datagroup</b>.
</quote>

So let's say that we are running a GET operation, where we want to get three keys called: "foo1", "foo2" and "foo3". The corresponding datagroup would look like:

``` text
&4\n
GET\n
foo1\n
foo2\n
foo3\n
```

Wasn't too bad, right? Now let's see what simple response packets look like.

### Simple Responses

Simple responses are almost the same as simple queries, with the [same metaline structure](#line-1-the-metaline) and the [same metalayout structure](#line-2-the-metalayout), except for the dataframe.

Response dataframes are _weakly typed_ as opposed to the query dataframe which is completely _untyped_.
A response dataframe will have the following general structure:

``` text
&<LEN>\n
<symbol>item1\n
<symbol>item2\n
<symbol>item3\n
# and more ..
```

Here, as you might have expected, `<LEN>` is the number of items in the datagroup, and the "item1, item2, item3, ..." are the items in the datagroup, But then, what is `<symbol>` ? 

It takes a little guess to make it out - a symbol is any of the following characters, which indicates the type of the item:

|Symbol|Name|Meaning|
|------|-----|-------|
|+|String|The corresponding item is the outcome of a successful action. Say we ran `GET x` and `x` actually existed with a value `ex` , the item in the datagroup would look like `+ex` |
|!|Response code|The corresponding item is a response code. For example, if we ran `UPDATE foo bar` and the key `foo` did exist and the value was updated successfully, the server would return `!0` |
|^|Except|This is a special response, returned by some actions. Let us say that we ran `EXISTS x y z` and the first and second key existed but the third key did not exist, then the server would return `^3` , that is everything except the third argument returned "Okay". For even more complicated outcomes, let's say that `y` and `z` both didn't exist, then the server would return `^2,3` .

#### A little note on the "Except" type

The except type returns arguments for which the value returned was `Nil` . So let's say we ran `GET x y z` , and only x existed with a value "cool", then the serve would reply with:

``` text
&2
+cool
^2,3
```

You can also be sure that the responses are **always returned in order**. Let's say that we ran `GET w x y z` , where w and z existed with some "value" but x and y didn't exist. Then the server would return:

``` text
&3
+value
^2,3
+value
```

This might look unnecessary for a very small number of values, but for larger queries this becomes extremely useful.

### Pipelined Queries

A pipelined queries runs many actions. Say a `GET` , a `SET` and an `EXISTS` , for example. They have the following the general structure:

``` text
$!<CONTENT_LENGTH>!<METALAYOUT_LENGTH>!<NUMBER_OF_ACTIONS>\n
<METALAYOUT>\n
<DATAFRAME>
```

Here, `<CONTENT_LENGTH>` is the length of the dataframe and the `<METALAYOUT_LENGTH>` is the length of the metalayout, just like simple queries. The only additional field, that you can see is `<NUMBER_OF_ACTIONS>` . This is simply the number of actions that the pipelined query performs, that is, the number of datagroups - that's all! And, if you have a sharp eye, you'd have seen that instead of an asterisk(*), you see a `$` . Yeah, that's the only difference! Now let's take a look at the dataframe.  
 Spoiler: It's way too simple!

### The pipelined-query dataframe

For pipelined queries - here's what the dataframe looks like:

``` 
&<datagroup_1_num>\n
dg1_item1\n
dg1_item2\n
...
&<datagroup_2_num>\n
dg2_item1\n
dg2_item2\n
dg3_item3\n
...
```

That's all! You just multiple datagroups - nothing more!

### Pipelined Responses

Pipelined responses are no different in structure from pipelined queries except one thing, which you already know about - the _weakly typed_ business. Each item would have a `<symbol>` ! That's it - nothing more! 

Just for an example, this is what a pipelined response may look like (with hash(#)es, to explain them):

``` text
&3\n # This is the first datagroup
+foo\n # The action returned value "foo"
+bar\n # The action returned value "bar"
!1\n # The action returned a "Not Found" code
&2\n # This is the second datagroup
!0 # The action returned an "Okay" code
!1 # The action returned a "Not Found" code
```

That's __all__ you need to know to implement a client - really!
