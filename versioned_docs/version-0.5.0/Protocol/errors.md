---
id: errors
title: Error Strings
---
In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes.

## Table of errors

|Error String|Meaning|
|---------------------------|-------|
|err-access-after-termsig | This error indicates that a connection was accepted by the server even after the database received a termination signal. This is a very bad error and should be reported immediately|
|err-snapshot-busy| This indicates that a snapshot operation is already in progress|
|err-snapshot-disabled| This indicates that snapshots have been disabled on the server-side|