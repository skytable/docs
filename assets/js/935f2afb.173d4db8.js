"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80053],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Home","href":"/next/","docId":"index"},{"type":"link","label":"Getting Started","href":"/next/getting-started","docId":"getting-started"},{"type":"link","label":"Actions and Querying","href":"/next/actions-overview","docId":"actions-overview"},{"type":"link","label":"Containers","href":"/next/containers","docId":"containers"},{"type":"link","label":"DDL","href":"/next/ddl","docId":"ddl"},{"type":"link","label":"Examples","href":"/next/examples","docId":"examples"},{"type":"link","label":"Index of actions","href":"/next/all-actions","docId":"all-actions"},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Configuration basics","href":"/next/config","docId":"config"},{"type":"link","label":"Configuration Files","href":"/next/config-files","docId":"config-files"},{"type":"link","label":"Environment Variables","href":"/next/config-env","docId":"config-env"},{"type":"link","label":"Command-line configuration","href":"/next/config-cmd","docId":"config-cmd"},{"type":"link","label":"Persistence","href":"/next/persistence","docId":"persistence"},{"type":"link","label":"Snapshots","href":"/next/snapshots","docId":"snapshots"},{"type":"link","label":"TLS configuration","href":"/next/ssl","docId":"ssl"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Client drivers","href":"/next/clients","docId":"clients"},{"type":"link","label":"Performance Guide","href":"/next/perf-guide","docId":"perf-guide"},{"type":"link","label":"Benchmarking","href":"/next/benchmarking","docId":"benchmarking"},{"type":"link","label":"Deployment notes","href":"/next/deployment-notes","docId":"deployment-notes"},{"type":"link","label":"Building from source","href":"/next/building-from-source","docId":"building-from-source"},{"type":"category","label":"Actions","items":[{"type":"link","label":"DBSIZE","href":"/next/actions/dbsize","docId":"actions/dbsize"},{"type":"link","label":"DEL","href":"/next/actions/del","docId":"actions/del"},{"type":"link","label":"EXISTS","href":"/next/actions/exists","docId":"actions/exists"},{"type":"link","label":"FLUSHDB","href":"/next/actions/flushdb","docId":"actions/flushdb"},{"type":"link","label":"GET","href":"/next/actions/get","docId":"actions/get"},{"type":"link","label":"HEYA","href":"/next/actions/heya","docId":"actions/heya"},{"type":"link","label":"KEYLEN","href":"/next/actions/keylen","docId":"actions/keylen"},{"type":"link","label":"LSKEYS","href":"/next/actions/lskeys","docId":"actions/lskeys"},{"type":"link","label":"LGET","href":"/next/actions/lget","docId":"actions/lget"},{"type":"link","label":"LMOD","href":"/next/actions/lmod","docId":"actions/lmod"},{"type":"link","label":"LSET","href":"/next/actions/lset","docId":"actions/lset"},{"type":"link","label":"MGET","href":"/next/actions/mget","docId":"actions/mget"},{"type":"link","label":"MKSNAP","href":"/next/actions/mksnap","docId":"actions/mksnap"},{"type":"link","label":"MPOP","href":"/next/actions/mpop","docId":"actions/mpop"},{"type":"link","label":"MSET","href":"/next/actions/mset","docId":"actions/mset"},{"type":"link","label":"MUPDATE","href":"/next/actions/mupdate","docId":"actions/mupdate"},{"type":"link","label":"POP","href":"/next/actions/pop","docId":"actions/pop"},{"type":"link","label":"SDEL","href":"/next/actions/sdel","docId":"actions/sdel"},{"type":"link","label":"SET","href":"/next/actions/set","docId":"actions/set"},{"type":"link","label":"SSET","href":"/next/actions/sset","docId":"actions/sset"},{"type":"link","label":"SUPDATE","href":"/next/actions/supdate","docId":"actions/supdate"},{"type":"link","label":"UPDATE","href":"/next/actions/update","docId":"actions/update"},{"type":"link","label":"USET","href":"/next/actions/uset","docId":"actions/uset"},{"type":"link","label":"WHEREAMI","href":"/next/actions/whereami","docId":"actions/whereami"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Protocol","items":[{"type":"link","label":"Skyhash Protocol 1.0","href":"/next/protocol/skyhash","docId":"protocol/skyhash"},{"type":"link","label":"Data Types","href":"/next/protocol/data-types","docId":"protocol/data-types"},{"type":"link","label":"Response Codes","href":"/next/protocol/response-codes","docId":"protocol/response-codes"},{"type":"link","label":"Error Strings","href":"/next/protocol/errors","docId":"protocol/errors"}],"collapsible":true,"collapsed":true}]},"docs":{"actions-overview":{"id":"actions-overview","title":"Actions and Querying","description":"Actions are exactly what they say &mdash; they do something! You can think of actions to be like","sidebar":"docs"},"actions/dbsize":{"id":"actions/dbsize","title":"DBSIZE","description":"Time complexity: O(1)","sidebar":"docs"},"actions/del":{"id":"actions/del","title":"DEL","description":"Time complexity: O(n)","sidebar":"docs"},"actions/exists":{"id":"actions/exists","title":"EXISTS","description":"Time complexity: O(n)","sidebar":"docs"},"actions/flushdb":{"id":"actions/flushdb","title":"FLUSHDB","description":"Time complexity: O(n)","sidebar":"docs"},"actions/get":{"id":"actions/get","title":"GET","description":"Time complexity: O(1)","sidebar":"docs"},"actions/heya":{"id":"actions/heya","title":"HEYA","description":"Time complexity: O(1)","sidebar":"docs"},"actions/keylen":{"id":"actions/keylen","title":"KEYLEN","description":"Time complexity: O(1)","sidebar":"docs"},"actions/lget":{"id":"actions/lget","title":"LGET","description":"LGET can be used to access the items in a list. Through the sub-actions provided by lget,","sidebar":"docs"},"actions/lmod":{"id":"actions/lmod","title":"LMOD","description":"LMOD can be used to mutate the elements in a list","sidebar":"docs"},"actions/lset":{"id":"actions/lset","title":"LSET","description":"LSET can be used to create empty lists or lists with the provided values.","sidebar":"docs"},"actions/lskeys":{"id":"actions/lskeys","title":"LSKEYS","description":"Time complexity: O(n)","sidebar":"docs"},"actions/mget":{"id":"actions/mget","title":"MGET","description":"Time complexity: O(n)","sidebar":"docs"},"actions/mksnap":{"id":"actions/mksnap","title":"MKSNAP","description":"Time complexity: O(n)","sidebar":"docs"},"actions/mpop":{"id":"actions/mpop","title":"MPOP","description":"Time complexity: O(n)","sidebar":"docs"},"actions/mset":{"id":"actions/mset","title":"MSET","description":"Time complexity: O(n)","sidebar":"docs"},"actions/mupdate":{"id":"actions/mupdate","title":"MUPDATE","description":"Time complexity: O(n)","sidebar":"docs"},"actions/pop":{"id":"actions/pop","title":"POP","description":"Time complexity: O(1)","sidebar":"docs"},"actions/sdel":{"id":"actions/sdel","title":"SDEL","description":"Time complexity: O(n)","sidebar":"docs"},"actions/set":{"id":"actions/set","title":"SET","description":"Time complexity: O(1)","sidebar":"docs"},"actions/sset":{"id":"actions/sset","title":"SSET","description":"Time complexity: O(n)","sidebar":"docs"},"actions/supdate":{"id":"actions/supdate","title":"SUPDATE","description":"Time complexity: O(n)","sidebar":"docs"},"actions/update":{"id":"actions/update","title":"UPDATE","description":"Time complexity: O(1)","sidebar":"docs"},"actions/uset":{"id":"actions/uset","title":"USET","description":"Time complexity: O(n)","sidebar":"docs"},"actions/whereami":{"id":"actions/whereami","title":"WHEREAMI","description":"Time complexity: O(1)","sidebar":"docs"},"all-actions":{"id":"all-actions","title":"Index of actions","description":"Skytable currently supports the actions listed in this document. You can find all the actions","sidebar":"docs"},"benchmarking":{"id":"benchmarking","title":"Benchmarking","description":"Who doesn\'t like speed and as a consequence, benchmarks? So here\'s a guide on benchmarking Skytable with our tool sky-bench .","sidebar":"docs"},"building-from-source":{"id":"building-from-source","title":"Building from source","description":"Of course you can build it from source &mdash; but with quite a bit of hassle. The database server is a bit fussy with its builds, so you\'ll need quite a few tools before you can actually start using it.","sidebar":"docs"},"clients":{"id":"clients","title":"Client drivers","description":"We officially maintain the following drivers:","sidebar":"docs"},"config":{"id":"config","title":"Configuration basics","description":"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:","sidebar":"docs"},"config-cmd":{"id":"config-cmd","title":"Command-line configuration","description":"You can use command line arguments alone for configuration in place of configuration files. Every binary ( skyd , skysh and sky-bench ) that you get with a bundle have extremely helpful help menus. Whatever you can configure with the configuration file can be configured through command line","sidebar":"docs"},"config-env":{"id":"config-env","title":"Environment Variables","description":"If you don\'t want to use configuration files or use command-line arguments, you can choose to use","sidebar":"docs"},"config-files":{"id":"config-files","title":"Configuration Files","description":"By using configuration files, you can customize the behavior of Skytable.","sidebar":"docs"},"containers":{"id":"containers","title":"Containers","description":"Containers are objects that hold other objects. In Skytable, we have two kinds of containers:","sidebar":"docs"},"ddl":{"id":"ddl","title":"DDL","description":"DDL or Data Definition Language is a way to interact with containers. Skytable lets you interact with containers with the following DDL actions:","sidebar":"docs"},"deployment-notes":{"id":"deployment-notes","title":"Deployment notes","description":"Here are some good to know things about deploying Skytable:","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"DDL","sidebar":"docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.","sidebar":"docs"},"index":{"id":"index","title":"Introduction","description":"Welcome to Skytable\'s docs! You will find information about how you can get started with Skytable, installation options, configuration and clients.","sidebar":"docs"},"perf-guide":{"id":"perf-guide","title":"Performance Guide","description":"We have put in our best efforts to make Skytable really fast &mdash; but usage patterns can greatly","sidebar":"docs"},"persistence":{"id":"persistence","title":"Persistence","description":"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable\'s persistence works.","sidebar":"docs"},"protocol/data-types":{"id":"protocol/data-types","title":"Data Types","description":"This table lists all data types supported by Skytable and their corresponding","sidebar":"docs"},"protocol/errors":{"id":"protocol/errors","title":"Error Strings","description":"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings.","sidebar":"docs"},"protocol/response-codes":{"id":"protocol/response-codes","title":"Response Codes","description":"Skytable may return any of the response codes listed here:","sidebar":"docs"},"protocol/skyhash":{"id":"protocol/skyhash","title":"Skyhash Protocol 1.0","description":"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;","sidebar":"docs"},"snapshots":{"id":"snapshots","title":"Snapshots","description":"Skytable supports automated snapshots that can be used for periodic backups.","sidebar":"docs"},"ssl":{"id":"ssl","title":"TLS configuration","description":"Skytable lets you secure connections with TLS. This feature is built into Sky with OpenSSL and doesn\'t require you to have OpenSSL installed. You can enable TLS by using your preferred mode of configuration.","sidebar":"docs"}}}')}}]);