---
id: data-types
title: Data types
---

Skyhash has simple and compound types. In this document, we explore these types, their structure
and how we can serialize/deserialize them. As noted earlier, as of Skyhash
2.0 only responses are strongly typed. The server automatically determines an appropriate type for queries, so you do not need to send any type information.

All types which are currently reserved will be implemented in future iterations of Skyhash (non-breaking
changes like 2.x).

## Simple types

Simple types are like primitive types in programming languages, and hence are not collections.
This table presents a list of all the data types Skyhash supports (some are reserved) along with
their corresponding type symbols and a brief description.

| Type symbol    | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| `+`            | String           | An unicode string                                       |
| `?`            | Binary           | An arbitrary sequence of bytes                          |
| `!`            | Status message   | A status message. Can be an 8-bit integer or a string   |
| `.` (reserved) | Integer (32-bit) | An integer in the range [0, 4,294,967,295]              |
| `:`            | Integer (64-bit) | An integer in the range [0, 18,446,744,073,709,551,615] |
| `%`            | Float (32-bit)   | A 32-bit floating point number                          |
| `/` (reserved) | Double (64-bit)  | A 64-bit floating point number                          |
| `$` (reserved) | JSON             | A JSON document                                         |

We'll now take a look at how the data types currently in use (not reserved) are structured and how your clients can deserialize responses
containing such types.

### String

```shell
+           # The type symbol
<l>\n       # The length terminated by an LF
<element>   # The element itself
```

**Examples**

Example for a string "sayan":

```
+5\n
sayan
```

### Binary

```shell
?           # the type symbol
<l>\n       # length terminated by an LF
<element>   # the element itself
```

**Examples**

Example for a random byte sequence: `[0x41, 0x42, 0x43, 0x44, 0x45]`:

```
?5\n
ABCDE
```

### Status message

A status message is either an 8-bit integer or a string. When the response is an integer, it is a response
code (or respcode). If it is a string, then it is called a respstring. For languages that support
enumerations, this can be lucidly represented.

```shell
!           # The type symbol
<message>\n # The message terminated by an LF
```

**Examples**

An example of respcode 0 (okay):

```
!0\n
```

An example respstring (snap-busy):

```
!snapbusy\n
```

:::tip
You can find a full list of respcodes and respstrings [in this document](response-codes)
:::

### Integer (64-bit)

```shell
:           # the type symbol
<integer>\n # the integer itself terminated by an LF
```

**Examples**

For an integer `2003`:

```
:2003\n
```

### Float (32-bit)

```shell
%           # the type symbol
<float>\n   # the float terminated by an LF
```

**Examples**

For a float `3.141592654`:

```
%3.141592654\n
```

For a float `100.00` (see below). Note the truncation of the pointless decimal point; this is done to save bandwidth.

```
%100\n
```

## Compound types

Compound types are better called collections. Simply put, they are collections of simple types. The below table outlines the compound types
supported by Skyhash followed by descriptions of the structures of each
(exclusive of reserved types).

| Type symbol    | Type                 | Description                                                               |
| -------------- | -------------------- | ------------------------------------------------------------------------- |
| `&` (reserved) | Multi-typed array    | An array comprised of multiple-types, including itself (nested arrays)    |
| `_` (reserved) | Flat array           | An array made up of multiple types, excluding itself (a non-nested array) |
| `@`            | Typed array          | An array of a specific type, with nullable elements                       |
| `^`            | Typed non-null array | An array of a specific type, without nullable elements                    |

### Typed array

The general structure of a typed array looks like:

```shell
@       # the type symbol for typed arrays
<t>     # the type symbol for the elements
<l>\n   # the length of the array
<data>  # data
```

Whenever an element is null, instead of including `<length>\n<payload>`, the server simply returns
ASCII Code `0` or NULL: `\0`. For clients, you need to simply branch on whether the first byte of is
NULL or not; if it is, attempt to parse the next element (if any); if it isn't attempt to parse the
element into the appropriate type.

**Examples**:

1. A typed array with two strings and a NULL:
   ```js
   ["sayan", "goes", NULL];
   ```
   will be represented as:
   ```shell
   @+3\n    # this typed array has elements of the string type
   5\n      # the first element has 5 bytes
   sayan    # the first element
   4\n      # the second element has 4 bytes
   goes     # the second element
   \0       # the third element is NULL
   ```
2. A typed array which is supposed to have strings, but has all null elements:
   ```js
   [NULL, NULL, NULL];
   ```
   will be represented as:
   ```shell
   @+3\n # this typed array has 3 string elements
   \0    # the first element is NULL
   \0    # the second element is also NULL
   \0    # the third element is also NULL
   ```
3. A typed array full of respstrings:
   ```shell
   @!5\n # this typed array has 5 status message elements
   0\n   # the first element has respcode 0
   1\n   # the second element has respcode 1
   2\n   # the third element has respcode 2
   3\n   # the fourth element has respcode 3
   4\n   # the fifth element has respcode 4
   ```
4. A typed array full of integers (with two being NULL):

   ```shell
   @:5\n    # this array has 5 integer elements
   12345\n  # the first integer is 12345
   23456\n  # the second integer is 23456
   34567\n  # the third integer is 34567
   \0       # the fourth integer is NULL
   \0       # the fifth integer is also NULL
   ```

### Typed non-null array

The general structure of a typed non-null array looks like:

```shell
^           # the type symbol for a typed non-null array
<tsymbol>   # the type symbol for the elements
<l>\n       # the length of the array
```

The structure of this array type is exactly the same as that of a typed array with one exception: it never contains
null elements.

**Examples**

1. A non-null array with four strings:

   ```js
   ["this", "can't", "be", "null"];
   ```

   will be represented as:

   ```
   ^+4\n
   4\n
   this
   5\n
   can't
   2\n
   be
   4\n
   null
   ```

2. A typed non-null array with five integers:
   ```js
   [12345, 23456, 34567, 45678, 56789];
   ```
   would be represented as:
   ```shell
   @:5\n
   12345\n
   23456\n
   34567\n
   45678\n
   56789\n
   ```
