---
id: platform-support
title: Platform Support
---

When you're building on or using Skytable on an officially supported platform, you can be certain that we've tested Skytable to work on these platforms, depending on their support level. The support level of a platform largely depends on the testing capabilities of our CI runners and tooling infrastructure and whether they support the platform or not besides our own codebase requirements. As such, we've divided platform support into multiple tiers.

:::note
Support tiering is subject to change. It is likely that in the near future Skytable will exclusively build for 64-bit platforms and will deprecate or downgrade the support level for 32-bit targets, due to increasing complexity in maintaining 32-bit targets in the same codebase and due to the prevalence of 64-bit systems.
:::

## Tier 1

Tier 1 platforms can be thought of as "guaranteed to work." On such platforms, we regularly run CI tests, regular on-demand stress tests and build and release binaries for. If you find any bugs or run into issues with Skytable on any of these platforms then your request is prioritized relative to platforms that are not Tier-1.

| Platform           | Architecture | Toolchain      |
| ------------------ | ------------ | -------------- |
| Linux 64-bit (GNU) | x86_64       | GNU            |
| Linux 64-bit (GNU) | arm 64       | GNU            |
| macOS 64-bit       | x86_64       | Apple (Darwin) |
| Windows 64-bit     | x86_64       | MSVC           |

### Tier 1X

These are just like Tier-1 platforms but due to toolchain limitations we can't yet provide Tier 1 support. We intend to fully upgrade these targets to Tier 1.

| Platform     | Architecture | Toolchain      |
| ------------ | ------------ | -------------- |
| macOS 64-bit | arm64        | Apple (Darwin) |

## Tier 2

For these platforms, we run a part of the full test suite but not all tests due to platform limitations and/or toolchain limitations. Binaries are built and released for these platforms, but are very often cross-compiled due to CI infrastructure limitations.

| Platform            | Architecture | Toolchain |
| ------------------- | ------------ | --------- |
| Linux 64-bit (MUSL) | x86_64       | MUSL      |
| Linux 32-bit        | i686         | GNU       |
| Windows 32-bit      | i686         | MSVC      |
