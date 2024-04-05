---
id: index
title: Introduction
sidebar_label: Home
slug: /
---

Welcome to Skytable's documentation! Skytable is a free and open-source modern NoSQL database that builds on the foundations of performance, scalability, powerful querying and a robust type system. Skytable can be deployed on multiple platforms as just a single binary file with no special system dependencies. You can either follow the guide below to learn Skytable in depth or jump to any sections that you need for reference.

## Guide

To develop using Skytable and maintain your deployment you will want to learn about Skytable's architecture, data organization (such as what `model`s and `space`s are), model definition, querying using BlueQL<sup>TM</sup> and system administration. We recommend you to follow the guides in the order given below (but feel free to skip any sections):
    - [**Installation**](installation) and [**using the CLI**](using-the-repl): Get everything installed on your local system
    - [**System overview**](architecture): A brief introduction to Skytable, including an overview of the data model, query systems and storage
    - [**BlueQL**](blueql):
      - [**Overview**](blueql/overview): Serves as a basic introduction to the query language and an (currently incomplete) informal specification with information on keywords, syntax and stuctures.
      - [**DDL**](blueql/ddl): Data definition with BlueQL
      - [**DML**](blueql/dml): Data manipulation with BlueQL
      - [**DCL**](blueql/dcl): Data control with BlueQL
    - [**System administration**](system):
      - [**Configuration**](system/configuration): Information to help you configure Skytable with custom settings such as custom ports, hosts, TLS, and etc.
      - [**User management**](system/user-management): Information on access control, user and other administration features
      - [**Global management**](system/global-management): Global settings management
      - [**Data recovery**](system/recovery): Database recovery
    - **Resources**:
      - [**Useful links**](resources/useful-links): Links to helpful resources
      - [**Migration**](resources/migration): For old our returning Skytable users who are coming from older versions
    - [**Benchmarking**](benchmarking): A guide for load testing Skytable
    - [**Deployment**](deployment): An useful guide for deploying
    - [**Limits**](limits): An useful guide on system limits

## Client drivers

Looking to integrate Skytable in your application? Great! [Find a driver for your language/framework here](libraries).

## Errors

Hit an error? Check out the [error code index](protocol/errors). If you need further help please check the resources below.

## Getting help

We have a collection of resources [on this page](resources/useful-links). If you need in help in real-time, we recommend that you join our [Discord Community](https://discord.gg/QptWFdx) where you can get help directly from the developers and our community members. 
Most queries are usually answered there in a few hours!

## Contributing

If you find any typos, mistakes or any other scope of improvement - please don't hesitate to bring it up [here](https://github.com/skytable/docs/issues). Thank you ❤️!

## License

The documentation is licensed under the [CC-BY-SA-4.0 License](https://github.com/skytable/docs/tree/master/LICENSE)
