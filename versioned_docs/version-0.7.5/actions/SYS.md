---
id: sys
title: SYS
---

Get system information and metrics

### `INFO`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- Float

**Syntax**:

- `sys info <property>`

:::

Returns static properties of the system, i.e properties that do not change during runtime.
The following properties are available:
  - `version`: Returns the server version (String)
  - `protocol`: Returns the protocol version string (String)
  - `protover`: Returns the protocol version (float)


### `METRIC`
:::note About
**Time complexity**: O(1)  
**Accept type**:

- [AnyArray](../protocol/data-types.md#any-array)

**Return type**:

- [String](../protocol/skyhash.md#strings-)
- Float

**Syntax**:

- `sys metric <metric>`

:::

Returns dynamic properties of the system, i.e metrics are properties that can change during
runtime. The following metrics are available:
  - `health`: Returns "good" or "critical" depending on the system state (String)
  - `storage`: Returns bytes used for on-disk storage (uint64)


