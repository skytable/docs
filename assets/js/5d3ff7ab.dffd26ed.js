"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73919],{60708:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.6.4","label":"0.6.4","banner":"unmaintained","badge":true,"className":"docs-version-0.6.4","isLast":false,"docsSidebars":{"version-0.6.4/docs":[{"type":"link","label":"Home","href":"/0.6.4/","docId":"index"},{"type":"link","label":"Getting Started","href":"/0.6.4/getting-started","docId":"getting-started"},{"type":"link","label":"Actions overview","href":"/0.6.4/actions-overview","docId":"actions-overview"},{"type":"link","label":"Persistence","href":"/0.6.4/persistence","docId":"persistence"},{"type":"link","label":"Configuration Files","href":"/0.6.4/config-files","docId":"config-files"},{"type":"link","label":"Command-line configuration","href":"/0.6.4/config-cmd","docId":"config-cmd"},{"type":"link","label":"Client drivers","href":"/0.6.4/clients","docId":"clients"},{"type":"link","label":"Snapshots","href":"/0.6.4/snapshots","docId":"snapshots"},{"type":"link","label":"SSL/TLS configuration","href":"/0.6.4/ssl","docId":"ssl"},{"type":"link","label":"Benchmarking","href":"/0.6.4/benchmarking","docId":"benchmarking"},{"type":"link","label":"Deployment notes","href":"/0.6.4/deployment-notes","docId":"deployment-notes"},{"type":"link","label":"Building from source","href":"/0.6.4/building-from-source","docId":"building-from-source"},{"collapsed":true,"type":"category","label":"Actions","items":[{"type":"link","label":"DBSIZE","href":"/0.6.4/actions/dbsize","docId":"actions/dbsize"},{"type":"link","label":"DEL","href":"/0.6.4/actions/del","docId":"actions/del"},{"type":"link","label":"EXISTS","href":"/0.6.4/actions/exists","docId":"actions/exists"},{"type":"link","label":"FLUSHDB","href":"/0.6.4/actions/flushdb","docId":"actions/flushdb"},{"type":"link","label":"GET","href":"/0.6.4/actions/get","docId":"actions/get"},{"type":"link","label":"HEYA","href":"/0.6.4/actions/heya","docId":"actions/heya"},{"type":"link","label":"KEYLEN","href":"/0.6.4/actions/keylen","docId":"actions/keylen"},{"type":"link","label":"LSKEYS","href":"/0.6.4/actions/lskeys","docId":"actions/lskeys"},{"type":"link","label":"MGET","href":"/0.6.4/actions/mget","docId":"actions/mget"},{"type":"link","label":"MKSNAP","href":"/0.6.4/actions/mksnap","docId":"actions/mksnap"},{"type":"link","label":"MSET","href":"/0.6.4/actions/mset","docId":"actions/mset"},{"type":"link","label":"MUPDATE","href":"/0.6.4/actions/mupdate","docId":"actions/mupdate"},{"type":"link","label":"POP","href":"/0.6.4/actions/pop","docId":"actions/pop"},{"type":"link","label":"SDEL","href":"/0.6.4/actions/sdel","docId":"actions/sdel"},{"type":"link","label":"SET","href":"/0.6.4/actions/set","docId":"actions/set"},{"type":"link","label":"SSET","href":"/0.6.4/actions/sset","docId":"actions/sset"},{"type":"link","label":"SUPDATE","href":"/0.6.4/actions/supdate","docId":"actions/supdate"},{"type":"link","label":"UPDATE","href":"/0.6.4/actions/update","docId":"actions/update"},{"type":"link","label":"USET","href":"/0.6.4/actions/uset","docId":"actions/uset"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Protocol","items":[{"type":"link","label":"Skyhash Protocol 1.0","href":"/0.6.4/protocol/skyhash","docId":"protocol/skyhash"},{"type":"link","label":"Data Types","href":"/0.6.4/protocol/data-types","docId":"protocol/data-types"},{"type":"link","label":"Response Codes","href":"/0.6.4/protocol/response-codes","docId":"protocol/response-codes"},{"type":"link","label":"Error Strings","href":"/0.6.4/protocol/errors","docId":"protocol/errors"}],"collapsible":true}]},"docs":{"actions-overview":{"id":"actions-overview","title":"Actions overview","description":"Actions are like shell commands","sidebar":"version-0.6.4/docs"},"actions/dbsize":{"id":"actions/dbsize","title":"DBSIZE","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/del":{"id":"actions/del","title":"DEL","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/exists":{"id":"actions/exists","title":"EXISTS","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/flushdb":{"id":"actions/flushdb","title":"FLUSHDB","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/get":{"id":"actions/get","title":"GET","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/heya":{"id":"actions/heya","title":"HEYA","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/keylen":{"id":"actions/keylen","title":"KEYLEN","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/lskeys":{"id":"actions/lskeys","title":"LSKEYS","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/mget":{"id":"actions/mget","title":"MGET","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/mksnap":{"id":"actions/mksnap","title":"MKSNAP","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/mset":{"id":"actions/mset","title":"MSET","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/mupdate":{"id":"actions/mupdate","title":"MUPDATE","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/pop":{"id":"actions/pop","title":"POP","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/sdel":{"id":"actions/sdel","title":"SDEL","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/set":{"id":"actions/set","title":"SET","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/sset":{"id":"actions/sset","title":"SSET","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/supdate":{"id":"actions/supdate","title":"SUPDATE","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"actions/update":{"id":"actions/update","title":"UPDATE","description":"Time complexity: O(1)","sidebar":"version-0.6.4/docs"},"actions/uset":{"id":"actions/uset","title":"USET","description":"Time complexity: O(n)","sidebar":"version-0.6.4/docs"},"benchmarking":{"id":"benchmarking","title":"Benchmarking","description":"Who doesn\'t like speed and as a consequence, benchmarks? So here\'s a guide on benchmarking Skytable with our tool sky-bench .","sidebar":"version-0.6.4/docs"},"building-from-source":{"id":"building-from-source","title":"Building from source","description":"Of course you can build it from source &mdash; but with quite a bit of hassle. The database server is a bit fussy with its builds, so you\'ll need quite a few tools before you can actually start using it.","sidebar":"version-0.6.4/docs"},"clients":{"id":"clients","title":"Client drivers","description":"We officially maintain the following drivers:","sidebar":"version-0.6.4/docs"},"config-cmd":{"id":"config-cmd","title":"Command-line configuration","description":"You can use command line arguments alone for configuration in place of configuration files. Every binary ( skyd , skysh and sky-bench ) that you get with a bundle have extremely helpful help menus:","sidebar":"version-0.6.4/docs"},"config-files":{"id":"config-files","title":"Configuration Files","description":"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via command line arguments.","sidebar":"version-0.6.4/docs"},"deployment-notes":{"id":"deployment-notes","title":"Deployment notes","description":"Here are some good to know things about deploying Skytable:","sidebar":"version-0.6.4/docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.","sidebar":"version-0.6.4/docs"},"index":{"id":"index","title":"Introduction","description":"Welcome to Skytable\'s docs! You will find information about how you can get started with Skytable, installation options, configuration and clients.","sidebar":"version-0.6.4/docs"},"persistence":{"id":"persistence","title":"Persistence","description":"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable\'s persistence works.","sidebar":"version-0.6.4/docs"},"protocol/data-types":{"id":"protocol/data-types","title":"Data Types","description":"This table lists all data types supported by Skytable and their corresponding","sidebar":"version-0.6.4/docs"},"protocol/errors":{"id":"protocol/errors","title":"Error Strings","description":"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes.","sidebar":"version-0.6.4/docs"},"protocol/response-codes":{"id":"protocol/response-codes","title":"Response Codes","description":"Skytable may return any of the response codes listed here:","sidebar":"version-0.6.4/docs"},"protocol/skyhash":{"id":"protocol/skyhash","title":"Skyhash Protocol 1.0","description":"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;","sidebar":"version-0.6.4/docs"},"snapshots":{"id":"snapshots","title":"Snapshots","description":"Skytable supports automated snapshots that can be used for periodic backups.","sidebar":"version-0.6.4/docs"},"ssl":{"id":"ssl","title":"SSL/TLS configuration","description":"Skytable lets you secure connections with TLS/SSL. This feature is built into Sky with OpenSSL and doesn\'t require you to have OpenSSL installed. You can enable SSL by using the configuration file or by using command-line arguments.","sidebar":"version-0.6.4/docs"}}}')}}]);