"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97016],{34221:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.7.2","label":"0.7.2","banner":"unmaintained","badge":true,"className":"docs-version-0.7.2","isLast":false,"docsSidebars":{"version-0.7.2/docs":[{"type":"link","label":"Home","href":"/0.7.2/","docId":"index"},{"type":"link","label":"Getting Started","href":"/0.7.2/getting-started","docId":"getting-started"},{"type":"link","label":"Actions and Querying","href":"/0.7.2/actions-overview","docId":"actions-overview"},{"type":"link","label":"Containers","href":"/0.7.2/containers","docId":"containers"},{"type":"link","label":"DDL","href":"/0.7.2/ddl","docId":"ddl"},{"type":"link","label":"Examples","href":"/0.7.2/examples","docId":"examples"},{"type":"link","label":"Index of actions","href":"/0.7.2/all-actions","docId":"all-actions"},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Configuration Files","href":"/0.7.2/config-files","docId":"config-files"},{"type":"link","label":"Environment Variables","href":"/0.7.2/config-env","docId":"config-env"},{"type":"link","label":"Command-line configuration","href":"/0.7.2/config-cmd","docId":"config-cmd"},{"type":"link","label":"Persistence","href":"/0.7.2/persistence","docId":"persistence"},{"type":"link","label":"Snapshots","href":"/0.7.2/snapshots","docId":"snapshots"},{"type":"link","label":"TLS configuration","href":"/0.7.2/ssl","docId":"ssl"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Client drivers","href":"/0.7.2/clients","docId":"clients"},{"type":"link","label":"Performance Guide","href":"/0.7.2/perf-guide","docId":"perf-guide"},{"type":"link","label":"Benchmarking","href":"/0.7.2/benchmarking","docId":"benchmarking"},{"type":"link","label":"Deployment notes","href":"/0.7.2/deployment-notes","docId":"deployment-notes"},{"type":"link","label":"Building from source","href":"/0.7.2/building-from-source","docId":"building-from-source"},{"type":"category","label":"Actions","items":[{"type":"link","label":"DBSIZE","href":"/0.7.2/actions/dbsize","docId":"actions/dbsize"},{"type":"link","label":"DEL","href":"/0.7.2/actions/del","docId":"actions/del"},{"type":"link","label":"EXISTS","href":"/0.7.2/actions/exists","docId":"actions/exists"},{"type":"link","label":"FLUSHDB","href":"/0.7.2/actions/flushdb","docId":"actions/flushdb"},{"type":"link","label":"GET","href":"/0.7.2/actions/get","docId":"actions/get"},{"type":"link","label":"HEYA","href":"/0.7.2/actions/heya","docId":"actions/heya"},{"type":"link","label":"KEYLEN","href":"/0.7.2/actions/keylen","docId":"actions/keylen"},{"type":"link","label":"LSKEYS","href":"/0.7.2/actions/lskeys","docId":"actions/lskeys"},{"type":"link","label":"LGET","href":"/0.7.2/actions/lget","docId":"actions/lget"},{"type":"link","label":"LMOD","href":"/0.7.2/actions/lmod","docId":"actions/lmod"},{"type":"link","label":"LSET","href":"/0.7.2/actions/lset","docId":"actions/lset"},{"type":"link","label":"MGET","href":"/0.7.2/actions/mget","docId":"actions/mget"},{"type":"link","label":"MKSNAP","href":"/0.7.2/actions/mksnap","docId":"actions/mksnap"},{"type":"link","label":"MPOP","href":"/0.7.2/actions/mpop","docId":"actions/mpop"},{"type":"link","label":"MSET","href":"/0.7.2/actions/mset","docId":"actions/mset"},{"type":"link","label":"MUPDATE","href":"/0.7.2/actions/mupdate","docId":"actions/mupdate"},{"type":"link","label":"POP","href":"/0.7.2/actions/pop","docId":"actions/pop"},{"type":"link","label":"SDEL","href":"/0.7.2/actions/sdel","docId":"actions/sdel"},{"type":"link","label":"SET","href":"/0.7.2/actions/set","docId":"actions/set"},{"type":"link","label":"SSET","href":"/0.7.2/actions/sset","docId":"actions/sset"},{"type":"link","label":"SUPDATE","href":"/0.7.2/actions/supdate","docId":"actions/supdate"},{"type":"link","label":"UPDATE","href":"/0.7.2/actions/update","docId":"actions/update"},{"type":"link","label":"USET","href":"/0.7.2/actions/uset","docId":"actions/uset"},{"type":"link","label":"WHEREAMI","href":"/0.7.2/actions/whereami","docId":"actions/whereami"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Protocol","items":[{"type":"link","label":"Skyhash Protocol 1.0","href":"/0.7.2/protocol/skyhash","docId":"protocol/skyhash"},{"type":"link","label":"Data Types","href":"/0.7.2/protocol/data-types","docId":"protocol/data-types"},{"type":"link","label":"Response Codes","href":"/0.7.2/protocol/response-codes","docId":"protocol/response-codes"},{"type":"link","label":"Error Strings","href":"/0.7.2/protocol/errors","docId":"protocol/errors"}],"collapsible":true,"collapsed":true}]},"docs":{"actions-overview":{"id":"actions-overview","title":"Actions and Querying","description":"Actions are exactly what they say &mdash; they do something! You can think of actions to be like","sidebar":"version-0.7.2/docs"},"actions/dbsize":{"id":"actions/dbsize","title":"DBSIZE","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/del":{"id":"actions/del","title":"DEL","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/exists":{"id":"actions/exists","title":"EXISTS","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/flushdb":{"id":"actions/flushdb","title":"FLUSHDB","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/get":{"id":"actions/get","title":"GET","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/heya":{"id":"actions/heya","title":"HEYA","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/keylen":{"id":"actions/keylen","title":"KEYLEN","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/lget":{"id":"actions/lget","title":"LGET","description":"LGET can be used to access the items in a list. Through the sub-actions provided by lget,","sidebar":"version-0.7.2/docs"},"actions/lmod":{"id":"actions/lmod","title":"LMOD","description":"LMOD can be used to mutate the elements in a list","sidebar":"version-0.7.2/docs"},"actions/lset":{"id":"actions/lset","title":"LSET","description":"LSET can be used to create empty lists or lists with the provided values.","sidebar":"version-0.7.2/docs"},"actions/lskeys":{"id":"actions/lskeys","title":"LSKEYS","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/mget":{"id":"actions/mget","title":"MGET","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/mksnap":{"id":"actions/mksnap","title":"MKSNAP","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/mpop":{"id":"actions/mpop","title":"MPOP","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/mset":{"id":"actions/mset","title":"MSET","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/mupdate":{"id":"actions/mupdate","title":"MUPDATE","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/pop":{"id":"actions/pop","title":"POP","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/sdel":{"id":"actions/sdel","title":"SDEL","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/set":{"id":"actions/set","title":"SET","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/sset":{"id":"actions/sset","title":"SSET","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/supdate":{"id":"actions/supdate","title":"SUPDATE","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/update":{"id":"actions/update","title":"UPDATE","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"actions/uset":{"id":"actions/uset","title":"USET","description":"Time complexity: O(n)","sidebar":"version-0.7.2/docs"},"actions/whereami":{"id":"actions/whereami","title":"WHEREAMI","description":"Time complexity: O(1)","sidebar":"version-0.7.2/docs"},"all-actions":{"id":"all-actions","title":"Index of actions","description":"Skytable currently supports the actions listed in this document. You can find all the actions","sidebar":"version-0.7.2/docs"},"benchmarking":{"id":"benchmarking","title":"Benchmarking","description":"Who doesn\'t like speed and as a consequence, benchmarks? So here\'s a guide on benchmarking Skytable with our tool sky-bench .","sidebar":"version-0.7.2/docs"},"building-from-source":{"id":"building-from-source","title":"Building from source","description":"Of course you can build it from source &mdash; but with quite a bit of hassle. The database server is a bit fussy with its builds, so you\'ll need quite a few tools before you can actually start using it.","sidebar":"version-0.7.2/docs"},"clients":{"id":"clients","title":"Client drivers","description":"We officially maintain the following drivers:","sidebar":"version-0.7.2/docs"},"config-cmd":{"id":"config-cmd","title":"Command-line configuration","description":"You can use command line arguments alone for configuration in place of configuration files. Every binary ( skyd , skysh and sky-bench ) that you get with a bundle have extremely helpful help menus. Whatever you can configure with the configuration file can be configured through command line","sidebar":"version-0.7.2/docs"},"config-env":{"id":"config-env","title":"Environment Variables","description":"If you don\'t want to use configuration files or use command-line arguments, you can choose to use","sidebar":"version-0.7.2/docs"},"config-files":{"id":"config-files","title":"Configuration Files","description":"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via environment variables and command line arguments.","sidebar":"version-0.7.2/docs"},"containers":{"id":"containers","title":"Containers","description":"Containers are objects that hold other objects. In Skytable, we have two kinds of containers:","sidebar":"version-0.7.2/docs"},"ddl":{"id":"ddl","title":"DDL","description":"DDL or Data Definition Language is a way to interact with containers. Skytable lets you interact with containers with the following DDL actions:","sidebar":"version-0.7.2/docs"},"deployment-notes":{"id":"deployment-notes","title":"Deployment notes","description":"Here are some good to know things about deploying Skytable:","sidebar":"version-0.7.2/docs"},"examples":{"id":"examples","title":"Examples","description":"DDL","sidebar":"version-0.7.2/docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.","sidebar":"version-0.7.2/docs"},"index":{"id":"index","title":"Introduction","description":"Welcome to Skytable\'s docs! You will find information about how you can get started with Skytable, installation options, configuration and clients.","sidebar":"version-0.7.2/docs"},"perf-guide":{"id":"perf-guide","title":"Performance Guide","description":"We have put in our best efforts to make Skytable really fast &mdash; but usage patterns can greatly","sidebar":"version-0.7.2/docs"},"persistence":{"id":"persistence","title":"Persistence","description":"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable\'s persistence works.","sidebar":"version-0.7.2/docs"},"protocol/data-types":{"id":"protocol/data-types","title":"Data Types","description":"This table lists all data types supported by Skytable and their corresponding","sidebar":"version-0.7.2/docs"},"protocol/errors":{"id":"protocol/errors","title":"Error Strings","description":"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings.","sidebar":"version-0.7.2/docs"},"protocol/response-codes":{"id":"protocol/response-codes","title":"Response Codes","description":"Skytable may return any of the response codes listed here:","sidebar":"version-0.7.2/docs"},"protocol/skyhash":{"id":"protocol/skyhash","title":"Skyhash Protocol 1.0","description":"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;","sidebar":"version-0.7.2/docs"},"snapshots":{"id":"snapshots","title":"Snapshots","description":"Skytable supports automated snapshots that can be used for periodic backups.","sidebar":"version-0.7.2/docs"},"ssl":{"id":"ssl","title":"TLS configuration","description":"Skytable lets you secure connections with TLS. This feature is built into Sky with OpenSSL and doesn\'t require you to have OpenSSL installed. You can enable SSL by using the configuration file or by using command-line arguments.","sidebar":"version-0.7.2/docs"}}}')}}]);