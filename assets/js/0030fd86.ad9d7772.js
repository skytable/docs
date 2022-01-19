"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21887],{47619:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.5.0","label":"0.5.0","banner":"unmaintained","badge":true,"className":"docs-version-0.5.0","isLast":false,"docsSidebars":{"version-0.5.0/docs":[{"type":"link","label":"Home","href":"/0.5.0/","docId":"index"},{"type":"link","label":"Getting Started","href":"/0.5.0/getting-started","docId":"getting-started"},{"collapsed":true,"type":"category","label":"Actions","items":[{"type":"link","label":"Actions overview","href":"/0.5.0/Actions/overview","docId":"Actions/overview"},{"type":"link","label":"DBSIZE","href":"/0.5.0/Actions/dbsize","docId":"Actions/dbsize"},{"type":"link","label":"DEL","href":"/0.5.0/Actions/del","docId":"Actions/del"},{"type":"link","label":"EXISTS","href":"/0.5.0/Actions/exists","docId":"Actions/exists"},{"type":"link","label":"FLUSHDB","href":"/0.5.0/Actions/flushdb","docId":"Actions/flushdb"},{"type":"link","label":"GET","href":"/0.5.0/Actions/get","docId":"Actions/get"},{"type":"link","label":"HEYA","href":"/0.5.0/Actions/heya","docId":"Actions/heya"},{"type":"link","label":"KEYLEN","href":"/0.5.0/Actions/keylen","docId":"Actions/keylen"},{"type":"link","label":"MGET","href":"/0.5.0/Actions/mget","docId":"Actions/mget"},{"type":"link","label":"MKSNAP","href":"/0.5.0/Actions/mksnap","docId":"Actions/mksnap"},{"type":"link","label":"MSET","href":"/0.5.0/Actions/mset","docId":"Actions/mset"},{"type":"link","label":"MUPDATE","href":"/0.5.0/Actions/mupdate","docId":"Actions/mupdate"},{"type":"link","label":"SDEL","href":"/0.5.0/Actions/sdel","docId":"Actions/sdel"},{"type":"link","label":"SET","href":"/0.5.0/Actions/set","docId":"Actions/set"},{"type":"link","label":"SSET","href":"/0.5.0/Actions/sset","docId":"Actions/sset"},{"type":"link","label":"SUPDATE","href":"/0.5.0/Actions/supdate","docId":"Actions/supdate"},{"type":"link","label":"UPDATE","href":"/0.5.0/Actions/update","docId":"Actions/update"},{"type":"link","label":"USET","href":"/0.5.0/Actions/uset","docId":"Actions/uset"}],"collapsible":true},{"type":"link","label":"Persistence","href":"/0.5.0/persistence","docId":"persistence"},{"type":"link","label":"Configuration Files","href":"/0.5.0/config-files","docId":"config-files"},{"type":"link","label":"Command-line configuration","href":"/0.5.0/config-cmd","docId":"config-cmd"},{"type":"link","label":"Snapshots","href":"/0.5.0/snapshots","docId":"snapshots"},{"type":"link","label":"Benchmarking","href":"/0.5.0/benchmarking","docId":"benchmarking"},{"type":"link","label":"Building from source","href":"/0.5.0/building-from-source","docId":"building-from-source"},{"collapsed":true,"type":"category","label":"Protocol","items":[{"type":"link","label":"Terrapipe 1.0","href":"/0.5.0/Protocol/terrapipe","docId":"Protocol/terrapipe"},{"type":"link","label":"Data Types","href":"/0.5.0/Protocol/data-types","docId":"Protocol/data-types"},{"type":"link","label":"Response Codes","href":"/0.5.0/Protocol/response-codes","docId":"Protocol/response-codes"}],"collapsible":true}]},"docs":{"Actions/dbsize":{"id":"Actions/dbsize","title":"DBSIZE","description":"Since: 0.4.3","sidebar":"version-0.5.0/docs"},"Actions/del":{"id":"Actions/del","title":"DEL","description":"Since: 0.1.0","sidebar":"version-0.5.0/docs"},"Actions/exists":{"id":"Actions/exists","title":"EXISTS","description":"Since: 0.4.0","sidebar":"version-0.5.0/docs"},"Actions/flushdb":{"id":"Actions/flushdb","title":"FLUSHDB","description":"Since: 0.4.3","sidebar":"version-0.5.0/docs"},"Actions/get":{"id":"Actions/get","title":"GET","description":"Since: 0.1.0","sidebar":"version-0.5.0/docs"},"Actions/heya":{"id":"Actions/heya","title":"HEYA","description":"Since: 0.2.0","sidebar":"version-0.5.0/docs"},"Actions/keylen":{"id":"Actions/keylen","title":"KEYLEN","description":"Since: 0.4.4","sidebar":"version-0.5.0/docs"},"Actions/mget":{"id":"Actions/mget","title":"MGET","description":"Since: 0.4.0","sidebar":"version-0.5.0/docs"},"Actions/mksnap":{"id":"Actions/mksnap","title":"MKSNAP","description":"Since: 0.5.0","sidebar":"version-0.5.0/docs"},"Actions/mset":{"id":"Actions/mset","title":"MSET","description":"Since: 0.4.0","sidebar":"version-0.5.0/docs"},"Actions/mupdate":{"id":"Actions/mupdate","title":"MUPDATE","description":"Since: 0.4.0","sidebar":"version-0.5.0/docs"},"Actions/overview":{"id":"Actions/overview","title":"Actions overview","description":"Actions are like shell commands","sidebar":"version-0.5.0/docs"},"Actions/sdel":{"id":"Actions/sdel","title":"SDEL","description":"Since: 0.4.3","sidebar":"version-0.5.0/docs"},"Actions/set":{"id":"Actions/set","title":"SET","description":"Since: 0.1.0","sidebar":"version-0.5.0/docs"},"Actions/sset":{"id":"Actions/sset","title":"SSET","description":"Since: 0.4.3","sidebar":"version-0.5.0/docs"},"Actions/supdate":{"id":"Actions/supdate","title":"SUPDATE","description":"Since: 0.4.3","sidebar":"version-0.5.0/docs"},"Actions/update":{"id":"Actions/update","title":"UPDATE","description":"Since: 0.1.0","sidebar":"version-0.5.0/docs"},"Actions/uset":{"id":"Actions/uset","title":"USET","description":"Since: 0.4.4","sidebar":"version-0.5.0/docs"},"benchmarking":{"id":"benchmarking","title":"Benchmarking","description":"Who doesn\'t like speed and as a consequence, benchmarks? So here\'s a guide on benchmarking TerrabaseDB with our tool tdb-bench .","sidebar":"version-0.5.0/docs"},"building-from-source":{"id":"building-from-source","title":"Building from source","description":"Of course you can build it from source &mdash; that is, if you don\'t mind running a few commands on the terminal, downlaoding some files and moving around some files.","sidebar":"version-0.5.0/docs"},"config-cmd":{"id":"config-cmd","title":"Command-line configuration","description":"Uou can use command line arguments alone for configuration in place of configuration files. Every binary ( tdb , tsh and tdb-bench ) that you get with a bundle have extremely helpful help menus:","sidebar":"version-0.5.0/docs"},"config-files":{"id":"config-files","title":"Configuration Files","description":"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around. TerrabaseDB also allows configuration via command line arguments.","sidebar":"version-0.5.0/docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Getting started with TerrabaseDB is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.","sidebar":"version-0.5.0/docs"},"index":{"id":"index","title":"Introduction","description":"Welcome to TerrabaseDB\'s docs! You will find information about how you can get started with TerrabaseDB, installation options, configuration and clients.","sidebar":"version-0.5.0/docs"},"persistence":{"id":"persistence","title":"Persistence","description":"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how TerrabaseDB\'s persistence works.","sidebar":"version-0.5.0/docs"},"Protocol/data-types":{"id":"Protocol/data-types","title":"Data Types","description":"This table lists all data types supported by Skytable and their corresponding","sidebar":"version-0.5.0/docs"},"Protocol/errors":{"id":"Protocol/errors","title":"Error Strings","description":"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes."},"Protocol/response-codes":{"id":"Protocol/response-codes","title":"Response Codes","description":"Skytable may return any of the response codes listed here:","sidebar":"version-0.5.0/docs"},"Protocol/terrapipe":{"id":"Protocol/terrapipe","title":"Terrapipe 1.0","description":"Copyright (c) 2020 Sayan >","sidebar":"version-0.5.0/docs"},"snapshots":{"id":"snapshots","title":"Snapshots","description":"TerrabaseDB supports automated snapshots that can be used for periodic backups.","sidebar":"version-0.5.0/docs"}}}')}}]);