---
id: errors
title: Error Strings
hide_table_of_contents: true
sidebar_label: Error Strings (deprecated)
---

In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings.

## Table of errors

| Error String               | Meaning                                                      |
| -------------------------- | ------------------------------------------------------------ |
| Unknown action             | The [action](../actions-overview) is not known by the server |
| err-snapshot-busy          | A snapshot operation is already in progress                  |
| err-snapshot-disabled      | Snapshots have been disabled on the server-side              |
| err-invalid-snapshot-name  | The supplied snapshot name has invalid chars                 |
| default-container-unset    | The connection level table/keyspace was not set              |
| container-not-found        | The keyspace/table was not found                             |
| still-in-use               | The object couldn't be removed because it is still in use    |
| err-protected-object       | The object is not user accessible                            |
| wrong-model                | An action was run against the wrong data model               |
| err-already-exists         | The table/keyspace already exists                            |
| not-ready                  | The table/keyspace is not ready                              |
| transactional-failure      | A transactional action failed to execute                     |
| unknown-ddl-query          | An unknown DDL query was run                                 |
| malformed-expression       | The expression in a DDL query was illegal                    |
| unknown-model              | A DDL query was run to create a table of an unknown model    |
| too-many-args              | More args than required was passed to a DDL query            |
| container-name-too-long    | The container name was too long                              |
| bad-container-name         | The supplied container name has illegal chars                |
| unknown-inspect-query      | An unknown `INSPECT` query                                   |
| unknown-property           | An unknown table property was passed to `CREATE TABLE`       |
| keyspace-not-empty         | The keyspace couldn't be removed because it still has tables |
| pipeline-not-supported-yet | Pipelining is not supported in this server version           |
| err-auth-disabled          | Authn/authz is not enabled                                   |
| err-auth-already-claimed   | The username has already been created                        |
| err-auth-illegal-username  | The username is too long or has invalid characters           |
| err-auth-deluser-fail      | The user cannot be removed                                   |
