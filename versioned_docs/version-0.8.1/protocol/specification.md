---
id: specification
title: 'Specification'
---

# Skyhash 2: Specification

## Network layer

As noted earlier, Skyhash is a client/server protocol built on top of TCP, that enables communication between a Skytable database server and a Skytable client. The Skyhash protocol uses a very simple data exchange model with the following three connection stages:

- Connection stage:
  - **Client handshake**: The client sends a handshake packet
    - The handshake contains all necessary information to successfully establish a connection
    - The structure of the client handshake depends on the authentication plugin in use (since authentication data has to be exchanged before the connection can be established)
    - For the `pwd` plugin the client handshake looks like this:
      ```
      H0<protocol compatibility code>000<username length>\n<password length>\n<username><password>
      ```
      - For the protocol compatibility code, [see the version matrix](/protocol/#version-matrix)
      - Please note that `0` means integer value `0` (`0x00`) and NOT the ASCII digit 0
      - Both the `<username length>` and `<password length>` are the respective lengths encoded as ASCII strings
  - **Server handshake**:
    - **Accepted:** If the server accepts the handshake information then it will respond with: `H000` (all the numeric values are integers and NOT ASCII digits)
    - **Rejected**: If the server rejects the handshake information then it will respond with `H01<8-bit error code>` (all the numeric values are integers and NOT ASCII digits). You can find out what happened using [the error code index](errors)
- Data exchange stage: This is where the client and server send and receive data. A client and server will spend the majority of their time in this stage.
- Termination stage: Once the connection is no longer needed, the client (or in exceptional cases, the server) will close the connection using a simple TCP FIN.

:::tip Is my client compatible?
If the server has accepted your connection then you can be sure that the protocol version and other extensions that your client intends to use is supported by the server. If this isn't the case, then the server will respond with a handshake error code indicating why the connection was rejected. [See all the handshake error codes here](errors#handshake-errors).
:::

### Exchange modes

The Skyhash/2.0 specification defines the following exchange mode:
- **Query-time**: This works like a request/response action where the client sends a request and the server responds with a response to the query (or an error)

Expect other exchange modes (bi-directional) to be added in future protocol revisions.

## Query-time exchange

In query-time exchange, the protocol works like a "request-response" action where queries are sent by the client and the server sends a repsonse. Queries can be simple queries or pipelines (specification to be finalized[^1]).

### Client data types

The client side needs to send encoded data types to the server (in the form of parameters) so that the server can process them. The following types are defined:
- Null: Encoded as `0`
- Bool: Encoded as `1<0 or 1>\n`
- Unsigned integer: A 64-bit unsigned integer. Encoded as `2<integer>\n`
- Signed integer: A 64-bit unsigned integer. Encoded as `3<integer>\n`
- Float: A 64-bit (double precision) floating point value. Encoded as `4<float>\n`
- Binary: A binary blob. Encoded as `5<length>\n<payload>`
- String: An UTF-8 string. Encoded as `6<length>\n<payload>`

> **Note**: A `<length>` is the value of the length in question converted to an ASCII string. 

### Server data types

The server will respond with different data types, depending on the context. The following types are defined:
- Null: Encoded as `0`
- Bool: encoded as `1<0 or 1>\n`
- Unsigned integers:
  - First byte: 2 -> 8-bit, 3 -> 16-bit, 4 -> 32-bit, 5 -> 64-bit
  - Payload: `<integer>\n`
- Signed integers:
  - First byte: 6 -> 8-bit, 7 -> 16-bit, 8 -> 32-bit, 9 -> 64-bit
  - Payload: `<integer>\n`
- Simple collections:
  - First byte: 10 -> binary, 11 -> string
  - Payload: `<length>\n<body>`
- Complex collections:
  - First byte: 11 -> list
  - Payload: `<length>\n<other server data types>`

> **Note**: A `<length>` is the value of the length in question converted to an ASCII string. 

### Simple query/response

#### Simple query

A simple query sends a single BlueQL query to the server to which the server responds with a [simple response](#simple-response). It has three sections:
- The metaframe:
  - Contains metadata about the query
  - Encoded as: `S<total packet size>\n` (total size of the other two sections)
- The dataframe header: Encoded as `<query body size>\n`
- The dataframe:
  - First part contains the query body, encoded as: `<query body>` (the query body is simply appended here)
  - Second part contains the payload body with all the parameters, encoded end-on as: `<parameter1><parameter2>...` (repeat for all parameters). See [the data types for parameters above](#client-data-types).

#### Simple response


When the client sends a [simple query](#simple-query), the server will respond with a simple response using any of the [response data types](#server-data-types), or it can respond with any of the following response structures:

- **Error**: Encoded as `0x10<16-bit error code>`
- **Row**: The server has returned a row. Encoded as `0x11<column cnt>\n<data type>`
- **Empty**: This indicates that the query ran successfully but nothing appropriate can be returned (like HTTP's 200 status). Encoded as `0x12`
- **Multirow**: The server has returned multiple rows. Encoded as `0x13<row count>\n<rows ...>`

> **Note**: A `<row count>` or `<column cnt>` is the value of the length in question converted to an ASCII string. 

[^1]: See the [discussion here](https://github.com/skytable/skytable/issues/332)

### Pipeline

A pipeline is a type of query that is used to send multiple queries to the server at once, and the server will return the responses in the same order. There is nothing special about the structure of pipelines.

**⚠️ Illegal packet error escape**: If the client incorrectly encodes a pipeline (even though some of the first queries may be encoded correctly), the server will execute the correctly encoded queries and then instead of sending any further responses it will respond with a `0xFF` byte. This is equivalent to [*Query Error 25*](errors#query-errors).

#### Pipeline query

The client is expected to encode the query in the following way:

```
P<full packet size>\n
<query size>\n<param payload size>\n<query><param>
<query size>\n<param payload size>\n<query><param>
...
```

#### Pipeline response

The server will return multiple responses:

```
<response 1>
<response 2>
...
```
