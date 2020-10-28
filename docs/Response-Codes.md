# Response Codes

TerrabaseDB may return any of the response codes listed here:

| Code | Description | Notes |
| ---- | ------- | ----- |
`0` | Okay ||
`1` | Nil||
`2` | Overwrite Error||
`3` | Action Error|The action didn't expect the arguments sent|
`4` | Packet Error|The packet contains invalid data|
`5` | Server Error| An error occurred on the server side
`6` | Other error| Some other error response
_Error String_ | Other error with description| Some other error occurred and the server returned a description of this error. See [this document](/errors)
