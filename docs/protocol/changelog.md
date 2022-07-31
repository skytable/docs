---
id: skyhash-changelog
title: Changelog
---

## Changes from Skyhash 1.0

This document lists all changes in Skyhash 2.0, when coming from Skyhash 1.0. If you're a driver
maintainer, consider reading this to support Skyhash 2.0 in your client implementation. Also note,
Skyhash 1.0 has been deprecated and won't receive any further updates, even though it is currently
compatible with the latest release (0.8.0). However, if you're implementing a client, consider supporting
the latest protocol because it is much more optimized, simpler to implement and is actively supported.

### 1. Elements in simple queries

Elements in simple queries no longer have trailing newlines. Example below for element `dbsize`:

- **Before:**
  ```
  6\n
  dbsize\n
  ```
- **After:**
  ```
  6\n
  dbsize
  ```

### 2. Simple query header and the `AnyArray` type

The simple query header has changed and the `AnyArray` type no longer exists. Example below for
`SET x 100`:

- **Before:**
  ```
  *1\n
  ~3\n
  3\n
  SET\n
  1\n
  x\n
  3\n
  100\n
  ```
- **After:**
  ```
  *3\n
  3\n
  SET
  1\n
  x
  3\n
  100
  ```

### 3. Response codes

Response codes no longer have lengths. Example below for Respcode 0:

- **Before:**
  ```
  !1\n
  0\n
  ```
- **After:**
  ```
  !0\n
  ```
