"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5114],{66631:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.5.1","label":"0.5.1","banner":"unmaintained","badge":true,"className":"docs-version-0.5.1","isLast":false,"docsSidebars":{"version-0.5.1/docs":[{"type":"link","label":"Home","href":"/0.5.1/","docId":"index"},{"type":"link","label":"Getting Started","href":"/0.5.1/getting-started","docId":"getting-started"},{"type":"link","label":"Actions overview","href":"/0.5.1/actions-overview","docId":"actions-overview"},{"type":"link","label":"Persistence","href":"/0.5.1/persistence","docId":"persistence"},{"type":"link","label":"Configuration Files","href":"/0.5.1/config-files","docId":"config-files"},{"type":"link","label":"Command-line configuration","href":"/0.5.1/config-cmd","docId":"config-cmd"},{"type":"link","label":"Snapshots","href":"/0.5.1/snapshots","docId":"snapshots"},{"type":"link","label":"SSL/TLS configuration","href":"/0.5.1/ssl","docId":"ssl"},{"type":"link","label":"Benchmarking","href":"/0.5.1/benchmarking","docId":"benchmarking"},{"type":"link","label":"Building from source","href":"/0.5.1/building-from-source","docId":"building-from-source"},{"collapsed":true,"type":"category","label":"Actions","items":[{"type":"link","label":"DBSIZE","href":"/0.5.1/Actions/dbsize","docId":"Actions/dbsize"},{"type":"link","label":"DEL","href":"/0.5.1/Actions/del","docId":"Actions/del"},{"type":"link","label":"EXISTS","href":"/0.5.1/Actions/exists","docId":"Actions/exists"},{"type":"link","label":"FLUSHDB","href":"/0.5.1/Actions/flushdb","docId":"Actions/flushdb"},{"type":"link","label":"GET","href":"/0.5.1/Actions/get","docId":"Actions/get"},{"type":"link","label":"HEYA","href":"/0.5.1/Actions/heya","docId":"Actions/heya"},{"type":"link","label":"KEYLEN","href":"/0.5.1/Actions/keylen","docId":"Actions/keylen"},{"type":"link","label":"MGET","href":"/0.5.1/Actions/mget","docId":"Actions/mget"},{"type":"link","label":"MKSNAP","href":"/0.5.1/Actions/mksnap","docId":"Actions/mksnap"},{"type":"link","label":"MSET","href":"/0.5.1/Actions/mset","docId":"Actions/mset"},{"type":"link","label":"MUPDATE","href":"/0.5.1/Actions/mupdate","docId":"Actions/mupdate"},{"type":"link","label":"SDEL","href":"/0.5.1/Actions/sdel","docId":"Actions/sdel"},{"type":"link","label":"SET","href":"/0.5.1/Actions/set","docId":"Actions/set"},{"type":"link","label":"SSET","href":"/0.5.1/Actions/sset","docId":"Actions/sset"},{"type":"link","label":"SUPDATE","href":"/0.5.1/Actions/supdate","docId":"Actions/supdate"},{"type":"link","label":"UPDATE","href":"/0.5.1/Actions/update","docId":"Actions/update"},{"type":"link","label":"USET","href":"/0.5.1/Actions/uset","docId":"Actions/uset"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Protocol","items":[{"type":"link","label":"Terrapipe 1.0","href":"/0.5.1/Protocol/terrapipe","docId":"Protocol/terrapipe"},{"type":"link","label":"Data Types","href":"/0.5.1/Protocol/data-types","docId":"Protocol/data-types"},{"type":"link","label":"Response Codes","href":"/0.5.1/Protocol/response-codes","docId":"Protocol/response-codes"},{"type":"link","label":"Error Strings","href":"/0.5.1/Protocol/errors","docId":"Protocol/errors"}],"collapsible":true}]},"docs":{"actions-overview":{"id":"actions-overview","title":"Actions overview","description":"Actions are like shell commands","sidebar":"version-0.5.1/docs"},"Actions/dbsize":{"id":"Actions/dbsize","title":"DBSIZE","description":"Since: 0.4.3","sidebar":"version-0.5.1/docs"},"Actions/del":{"id":"Actions/del","title":"DEL","description":"Since: 0.1.0","sidebar":"version-0.5.1/docs"},"Actions/exists":{"id":"Actions/exists","title":"EXISTS","description":"Since: 0.4.0","sidebar":"version-0.5.1/docs"},"Actions/flushdb":{"id":"Actions/flushdb","title":"FLUSHDB","description":"Since: 0.4.3","sidebar":"version-0.5.1/docs"},"Actions/get":{"id":"Actions/get","title":"GET","description":"Since: 0.1.0","sidebar":"version-0.5.1/docs"},"Actions/heya":{"id":"Actions/heya","title":"HEYA","description":"Since: 0.2.0","sidebar":"version-0.5.1/docs"},"Actions/keylen":{"id":"Actions/keylen","title":"KEYLEN","description":"Since: 0.4.4","sidebar":"version-0.5.1/docs"},"Actions/mget":{"id":"Actions/mget","title":"MGET","description":"Since: 0.4.0","sidebar":"version-0.5.1/docs"},"Actions/mksnap":{"id":"Actions/mksnap","title":"MKSNAP","description":"Since: 0.5.0","sidebar":"version-0.5.1/docs"},"Actions/mset":{"id":"Actions/mset","title":"MSET","description":"Since: 0.4.0","sidebar":"version-0.5.1/docs"},"Actions/mupdate":{"id":"Actions/mupdate","title":"MUPDATE","description":"Since: 0.4.0","sidebar":"version-0.5.1/docs"},"Actions/sdel":{"id":"Actions/sdel","title":"SDEL","description":"Since: 0.4.3","sidebar":"version-0.5.1/docs"},"Actions/set":{"id":"Actions/set","title":"SET","description":"Since: 0.1.0","sidebar":"version-0.5.1/docs"},"Actions/sset":{"id":"Actions/sset","title":"SSET","description":"Since: 0.4.3","sidebar":"version-0.5.1/docs"},"Actions/supdate":{"id":"Actions/supdate","title":"SUPDATE","description":"Since: 0.4.3","sidebar":"version-0.5.1/docs"},"Actions/update":{"id":"Actions/update","title":"UPDATE","description":"Since: 0.1.0","sidebar":"version-0.5.1/docs"},"Actions/uset":{"id":"Actions/uset","title":"USET","description":"Since: 0.4.4","sidebar":"version-0.5.1/docs"},"benchmarking":{"id":"benchmarking","title":"Benchmarking","description":"Who doesn\'t like speed and as a consequence, benchmarks? So here\'s a guide on benchmarking Skytable with our tool sky-bench .","sidebar":"version-0.5.1/docs"},"building-from-source":{"id":"building-from-source","title":"Building from source","description":"Of course you can build it from source &mdash; but with quite a bit of hassle. The database server is a bit fussy with its builds, so you\'ll need quite a few tools before you can actually start using it.","sidebar":"version-0.5.1/docs"},"config-cmd":{"id":"config-cmd","title":"Command-line configuration","description":"Uou can use command line arguments alone for configuration in place of configuration files. Every binary ( skyd , skysh and sky-bench ) that you get with a bundle have extremely helpful help menus:","sidebar":"version-0.5.1/docs"},"config-files":{"id":"config-files","title":"Configuration Files","description":"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via command line arguments.","sidebar":"version-0.5.1/docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.","sidebar":"version-0.5.1/docs"},"index":{"id":"index","title":"Introduction","description":"Welcome to Skytable\'s docs! You will find information about how you can get started with Skytable, installation options, configuration and clients.","sidebar":"version-0.5.1/docs"},"persistence":{"id":"persistence","title":"Persistence","description":"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable\'s persistence works.","sidebar":"version-0.5.1/docs"},"Protocol/data-types":{"id":"Protocol/data-types","title":"Data Types","description":"This table lists all data types supported by Skytable and their corresponding","sidebar":"version-0.5.1/docs"},"Protocol/errors":{"id":"Protocol/errors","title":"Error Strings","description":"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes.","sidebar":"version-0.5.1/docs"},"Protocol/response-codes":{"id":"Protocol/response-codes","title":"Response Codes","description":"Skytable may return any of the response codes listed here:","sidebar":"version-0.5.1/docs"},"Protocol/terrapipe":{"id":"Protocol/terrapipe","title":"Terrapipe 1.0","description":"Copyright (c) 2020 Sayan >","sidebar":"version-0.5.1/docs"},"snapshots":{"id":"snapshots","title":"Snapshots","description":"Skytable supports automated snapshots that can be used for periodic backups.","sidebar":"version-0.5.1/docs"},"ssl":{"id":"ssl","title":"SSL/TLS configuration","description":"Skytable lets you secure connections with TLS/SSL. This feature is built into Sky with OpenSSL and doesn\'t require you to have OpenSSL installed. You can enable SSL by using the configuration file or by using command-line arguments.","sidebar":"version-0.5.1/docs"}}}')}}]);