"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8804],{6308:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(4848),t=s(8453);const l={id:"containers",title:"Containers"},a=void 0,r={id:"containers",title:"Containers",description:"Containers are objects that hold other objects. In Skytable, we have two kinds of containers:",source:"@site/versioned_docs/version-0.7.5/4.containers.md",sourceDirName:".",slug:"/containers",permalink:"/0.7.5/containers",draft:!1,unlisted:!1,tags:[],version:"0.7.5",sidebarPosition:4,frontMatter:{id:"containers",title:"Containers"},sidebar:"docs",previous:{title:"Actions and Querying",permalink:"/0.7.5/actions-overview"},next:{title:"DDL",permalink:"/0.7.5/ddl"}},o={},d=[{value:"Entities",id:"entities",level:2},{value:"Keyspaces",id:"keyspaces",level:2},{value:"Tables",id:"tables",level:2},{value:"Properties",id:"properties",level:3},{value:"The volatile property",id:"the-volatile-property",level:4},{value:"Table models",id:"table-models",level:3},{value:"Models",id:"models",level:2},{value:"The <code>keymap</code> model",id:"the-keymap-model",level:3},{value:"Data types",id:"data-types",level:4},{value:"Example",id:"example",level:4},{value:"Models in the future",id:"models-in-the-future",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Containers are ",(0,i.jsx)(n.em,{children:"objects"})," that hold other objects. In Skytable, we have two kinds of containers:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keyspaces"}),": Keyspaces are containers that hold tables. The basic idea is to keep all the related tables for a given ",(0,i.jsx)(n.em,{children:"application"})," in one logical collection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tables"}),": Tables are ",(0,i.jsx)(n.strong,{children:"not tables"}),". Funny, isn't it? Instead, tables are structures that contain the actual data. Be it key/value or the future data models \u2014 it's all in a table"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To interact with containers, we need to use DDL actions like ",(0,i.jsx)(n.code,{children:"CREATE"}),", ",(0,i.jsx)(n.code,{children:"DROP"})," and ",(0,i.jsx)(n.code,{children:"INSPECT"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"entities",children:"Entities"}),"\n",(0,i.jsxs)(n.p,{children:["Every container is an entity. A keyspace being a top-level entity and a table being a low-level\nentity. Hence a keyspace name or a table name can be called an ",(0,i.jsx)(n.em,{children:"entity"})," or ",(0,i.jsx)(n.em,{children:"entity name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Naming rules"})}),"\n",(0,i.jsx)(n.p,{children:"All entity names have the following naming rules:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Names are case sensitive"}),"\n",(0,i.jsxs)(n.li,{children:["Names must begin with an ASCII alphabet (A-Z or a-z) or an underscore (",(0,i.jsx)(n.code,{children:"_"}),") and not a digit (0-9)"]}),"\n",(0,i.jsxs)(n.li,{children:["The succeeding characters can either be:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ASCII: A-Z or a-z"}),"\n",(0,i.jsx)(n.li,{children:"ASCII Digits: 0-9"}),"\n",(0,i.jsx)(n.li,{children:"Underscore (_)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The maximum length is 64 characters"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PRELOAD"})," and ",(0,i.jsx)(n.code,{children:"PARTMAP"})," cannot be used as entity names. This limitation will be removed in the future"]}),"\n",(0,i.jsx)(n.li,{children:'For file systems that are case insensitive (usually ones on Windows and macOS), "HELLO" and "hello" will represent\nthe same entity. This limitation will be removed in the future'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Entity groups"})}),"\n",(0,i.jsxs)(n.p,{children:["The most important thing is an ",(0,i.jsx)(n.em,{children:"Entity Group"})," which is also known as ",(0,i.jsx)(n.em,{children:"Fully Qualified\nEntity"})," Syntax (FQE Syntax). FQE syntax is used to describe the full ",(0,i.jsx)(n.em,{children:"path"})," to a table. For example,\nif you have a keyspace ",(0,i.jsx)(n.code,{children:"supercyan"})," and you have a table ",(0,i.jsx)(n.code,{children:"cyan"})," within it, then the FQE syntax will\nbe:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"supercyan:cyan\n"})}),"\n",(0,i.jsx)(n.p,{children:"This can be extremely helpful when running DDL queries."}),"\n",(0,i.jsx)(n.admonition,{title:"Important note",type:"note",children:(0,i.jsxs)(n.p,{children:["When you connect to Skytable, you are connected to the ",(0,i.jsx)(n.code,{children:"default"})," keyspace which has a ",(0,i.jsx)(n.code,{children:"default"}),"\ntable. The ",(0,i.jsx)(n.code,{children:"default"})," table or the ",(0,i.jsx)(n.code,{children:"default"})," keyspace ",(0,i.jsx)(n.strong,{children:"cannot be dropped"}),".\nThere is another keyspace called the ",(0,i.jsx)(n.code,{children:"system"})," keyspace which is not user-accessible and hence\n",(0,i.jsx)(n.strong,{children:"cannot be modified or dropped"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"keyspaces",children:"Keyspaces"}),"\n",(0,i.jsx)(n.p,{children:"Like we noted above, keyspaces are logical collections of tables and is known as a top level container. Creating a keyspace is as simple as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE KEYSPACE <name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"while you can drop keyspaces by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP KEYSPACE <name>\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Keyspaces can only be dropped if no other client is connected to it and if it contains no tables. This can be evaded by forcing removal through other DDL actions."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tables",children:"Tables"}),"\n",(0,i.jsx)(n.p,{children:"Tables contain your actual data: be it key/value, or anything else. Tables reside within keyspaces. To create a table, you'll need to run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE <entity> <model>(modelargs) <properties>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["A table, apart from the data model's own properties, has some model-indpendent properties. Supplying these are optional.\nThe user-accessible property that you should know about is the ",(0,i.jsx)(n.code,{children:"volatile"})," property."]}),"\n",(0,i.jsx)(n.h4,{id:"the-volatile-property",children:"The volatile property"}),"\n",(0,i.jsxs)(n.p,{children:["Adding the ",(0,i.jsx)(n.code,{children:"volatile"})," property after your model arguments makes your table volatile. This means that the table itself will exist, but none of its data will persist after a restart. This makes volatile tables extremely useful for caching."]}),"\n",(0,i.jsxs)(n.p,{children:["Don't worry too much about the ",(0,i.jsx)(n.em,{children:"model"})," and ",(0,i.jsx)(n.em,{children:"modelargs"})," now \u2014 the next section will tell you about models."]}),"\n",(0,i.jsx)(n.h3,{id:"table-models",children:"Table models"}),"\n",(0,i.jsxs)(n.p,{children:["Just jump to ",(0,i.jsx)(n.a,{href:"#models",children:"the models section"})]}),"\n",(0,i.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,i.jsxs)(n.p,{children:["A model defines what kind of data is stored in a table. You can think of it to be a ",(0,i.jsx)(n.em,{children:"type"})," in a\nprogramming language."]}),"\n",(0,i.jsxs)(n.h3,{id:"the-keymap-model",children:["The ",(0,i.jsx)(n.code,{children:"keymap"})," model"]}),"\n",(0,i.jsxs)(n.p,{children:["A keymap model is the one you just interacted with in the earlier documents. A keymap is like an\nassociated array: it maps a key to a value. More importantly, it maps a specific ",(0,i.jsx)(n.em,{children:"key type"})," to a specific ",(0,i.jsx)(n.em,{children:"value type"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," Everything after ",(0,i.jsx)(n.code,{children:"CREATE TABLE"})," is case sensitive!"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is how you create keymap tables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE <entity> keymap(<type>,<type>) <properties>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<entity>"}),": is your table name (or the FQE syntax for your table)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<type>"}),": is the ",(0,i.jsx)(n.a,{href:"#data-types",children:"data type"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<properties>"}),": are the optional properties ",(0,i.jsx)(n.a,{href:"#properties",children:"discussed earlier"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"data-types",children:"Data types"}),"\n",(0,i.jsx)(n.p,{children:"The keymap model supports the following types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"}),": A valid unicode string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"binstr"}),": A binary string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"}),": A collection type similar to a ",(0,i.jsx)(n.em,{children:"resizeable"})," array"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"(more types are expected to be shipped in future editions)"}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Let's create a keymap table with an ",(0,i.jsx)(n.code,{children:"str"})," type key and ",(0,i.jsx)(n.code,{children:"binstr"})," type value. We'll assume you'll\nbe creating it in the default keyspace with the name \"mytbl\", so there's no need to specify an ",(0,i.jsx)(n.a,{href:"#entities",children:"FQE"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE mytbl keymap(str,binstr)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Let's create a keymap table with an ",(0,i.jsx)(n.code,{children:"str"})," type key and a list of binary strings as the value type.\nAgain, we'll assume you're in the default keyspace, and we'll call this table ",(0,i.jsx)(n.code,{children:"mylist"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE mylist keymap(str,list<binstr>)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"models-in-the-future",children:"Models in the future"}),"\n",(0,i.jsx)(n.p,{children:"With our goal to build a native multi-model database \u2014 we're working on several data models! All you need to do is hang around in our communities to know what is brewing!"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"examples#ddl",children:"DDL examples here"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(6540);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);