---
id: data-types
title: Data Types
---

This table lists all data types supported by Skytable and their corresponding
type symbols ( `tsymbol` s) and additional information.

## Simple types

Simple types only contain one type. This makes them very simple to serialize/deserialize. All simple types have the
following layout:

```
<tsymbol><number of bytes>\n
<element>
```

### Example

For an unicode string 'sayan', the layout of the unicode string type (`+`) will look like:

```sh
+5\n    # 'sayan' is an unicode string, so '+' and has 5 bytes so '5'
sayan\n # the element 'sayan' itself
```

### Table

| Type symbol (tsymbol) | Type            | Additional notes                                         |
| --------------------- | --------------- | -------------------------------------------------------- |
| `+`                   | String          | a string                                                 |
| `!`                   | Response Code   | a response code                                          |
| `$` (reserved)        | JSON            | a `JSON` value                                           |
| `.` (reserved)        | smallint        | An integer in the range: [0, 255]                        |
| `-` (reserved)        | smallint signed | An integer in the range: [-128, 127]                     |
| `:`                   | int             | An integer in the range: [0, 4,294,967,295]              |
| `;` (reserved)        | int signed      | An integer in the range: [-2,147,483,647, 2,147,483,647] |
| `%` (reserved)        | float           | A 32-bit floating point value                            |
| `?`                   | binary string   | the next line contains binary data (often called a blob) |

Do keep the matching for this symbol _non-exhaustive_ since we might add more types in future revisions of the protocol.

## Compound types

Compound types are derived types -- they are based on simple types, but often with
some additional properties (and serialization/deserialization differences).

### Table

| Type symbol (tsymbol) | Type        | Additional notes                                              | Protocol |
| --------------------- | ----------- | ------------------------------------------------------------- | -------- |
| &                     | Array       | A recursive array                                             | 1.0      |
| \_                    | Flat array  | A non-recursive array                                         | 1.0      |
| @                     | Typed array | An array of a specific type                                   | 1.1      |
| ~                     | Any array   | An array with a single type but no information about the type | 1.1      |

### Array

See the full discussion on arrays [here](skyhash#arrays-).

### Flat array

A flat array is like an array, but with the exception that it is non-recursive. This
means that a flat array can contain all types except other compound types (hence the
name 'flat').

So if you represent an array in a programming language like:

```js
["hello", 12345, "world"];
```

then it will be serialized by Skyhash into:

```
_3\n    # 3 elements
+5\n    # 'hello' is an unicode string, so '+' and has 5 bytes
hello\n # the element 'hello' itself
:5\n    # 12345 has 5 bytes and is an unsigned int
12345\n # the element 12345 itself
+5\n    # 'world' is an unicode string, so '+' and has 5 bytes
```

:::note
A flat array is currently a response specific data type (only sent by the server and never by the client)
:::

### Typed array

A typed array is like a flat array, but with the exception that it can only hold
two types: either a [simple type](#simple-types) or a `NULL`. Since this array just has a specific type in its declaration, unlike flat arrays, `tsymbol`s are not required.

You can think of it to be like:

- there is either no element (integer value of `0`; also called `NULL`)
- or there is an element of the declared type

Say a programming language represents an array like:

```cpp
["omg", NULL, "happened"]
```

then it will be serialized by Skyhash into:

```
@+3\n
3\n
omg\n
\0\n
8\n
happened\n
```

Line-by-line explanation:

- `@+3\n` because it is a typed array, so `@`, the elements are unicode strings, so `+`
  and there are three elements, so `3`
- `3\n` because 'omg' has 3 bytes
- `omg\n`, the element itself
- `\0\n`, `NULL` because there was no element
  > Here `\0` corresponds to the [null terminator](https://en.wikipedia.org/wiki/Null_character) (integer value of `0`)
- `8\n` because 'happened' has 8 bytes
- `happened\n`, the element itself

:::note
A typed array is currently a response specific data type (only sent by the server and never by the client). The `NULL`s correspond to the cases when the server can't find the requested item.
:::

### Any array

An `AnyArray` is like a typed array &mdash; but without any explicit information about the type that is sent. Currently,
**all the element types have to be the same**, but however, no information about the type has to be sent. It is upto
the server to convert them to the correct types. This makes running actions extremely simple as the clients don't have
to specify the type. The server will convert it into the appropriate type for that action. No matter how flexible this
may sound -- `AnyArray`s are extremely performant. Also, **no element in an `AnyArray` can be null**.

If you have a programming language that represents a **singly-typed** array like:

```rust
["sayan", "is", "hiking"]
```

then Skyhash will serialize it into:

```
~3\n
5\n
sayan\n
2\n
is\n
6\n
hiking\n
```

Line-by-line explanation:

1. `~3\n` because this is an `AnyArray` with 3 elements
2. `5\n` because 'sayan' has 5 bytes
3. `sayan\n`, the element 'sayan' itself
4. `2\n` because 'is' has 2 bytes
5. `is\n` the element 'is' itself
6. `6\n` because 'hiking' has 6 bytes
7. `hiking\n` the element 'hiking' itself

:::note
An `AnyArray` is currently a query specific data type (only sent by the client and never by the server)
:::
