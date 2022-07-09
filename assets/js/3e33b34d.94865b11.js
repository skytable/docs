"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={id:"containers",title:"Containers"},i=void 0,o={unversionedId:"containers",id:"version-0.7.3/containers",title:"Containers",description:"Containers are objects that hold other objects. In Skytable, we have two kinds of containers:",source:"@site/versioned_docs/version-0.7.3/4.containers.md",sourceDirName:".",slug:"/containers",permalink:"/0.7.3/containers",draft:!1,tags:[],version:"0.7.3",sidebarPosition:4,frontMatter:{id:"containers",title:"Containers"},sidebar:"docs",previous:{title:"Actions and Querying",permalink:"/0.7.3/actions-overview"},next:{title:"DDL",permalink:"/0.7.3/ddl"}},p={},s=[{value:"Entities",id:"entities",level:2},{value:"Keyspaces",id:"keyspaces",level:2},{value:"Tables",id:"tables",level:2},{value:"Properties",id:"properties",level:3},{value:"The volatile property",id:"the-volatile-property",level:4},{value:"Table models",id:"table-models",level:3},{value:"Models",id:"models",level:2},{value:"The <code>keymap</code> model",id:"the-keymap-model",level:3},{value:"Data types",id:"data-types",level:4},{value:"Example",id:"example",level:4},{value:"Models in the future",id:"models-in-the-future",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Containers are ",(0,l.kt)("em",{parentName:"p"},"objects")," that hold other objects. In Skytable, we have two kinds of containers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Keyspaces"),": Keyspaces are containers that hold tables. The basic idea is to keep all the related tables for a given ",(0,l.kt)("em",{parentName:"li"},"application")," in one logical collection."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tables"),": Tables are ",(0,l.kt)("strong",{parentName:"li"},"not tables"),". Funny, isn't it? Instead, tables are structures that contain the actual data. Be it key/value or the future data models ","\u2014"," it's all in a table")),(0,l.kt)("p",null,"To interact with containers, we need to use DDL actions like ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"INSPECT"),"."),(0,l.kt)("h2",{id:"entities"},"Entities"),(0,l.kt)("p",null,"Every container is an entity. A keyspace being a top-level entity and a table being a low-level\nentity. Hence a keyspace name or a table name can be called an ",(0,l.kt)("em",{parentName:"p"},"entity")," or ",(0,l.kt)("em",{parentName:"p"},"entity name"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Naming rules")),(0,l.kt)("p",null,"All entity names have the following naming rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Names are case sensitive"),(0,l.kt)("li",{parentName:"ul"},"Names must begin with an ASCII alphabet (A-Z or a-z) or an underscore (",(0,l.kt)("inlineCode",{parentName:"li"},"_"),")"),(0,l.kt)("li",{parentName:"ul"},"Names must be lesser than or equal to 64 characters long"),(0,l.kt)("li",{parentName:"ul"},"Names must ",(0,l.kt)("strong",{parentName:"li"},"not")," begin with a digit (0-9)"),(0,l.kt)("li",{parentName:"ul"},"Names can contain digits anywhere else (except for the first character)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Entity groups")),(0,l.kt)("p",null,"The most important thing is an ",(0,l.kt)("em",{parentName:"p"},"Entity Group")," which is also known as ",(0,l.kt)("em",{parentName:"p"},"Fully Qualified\nEntity")," Syntax (FQE Syntax). FQE syntax is used to describe the full ",(0,l.kt)("em",{parentName:"p"},"path")," to a table. For example,\nif you have a keyspace ",(0,l.kt)("inlineCode",{parentName:"p"},"supercyan")," and you have a table ",(0,l.kt)("inlineCode",{parentName:"p"},"cyan")," within it, then the FQE syntax will\nbe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"supercyan:cyan\n")),(0,l.kt)("p",null,"This can be extremely helpful when running DDL queries."),(0,l.kt)("admonition",{title:"Important note",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When you connect to Skytable, you are connected to the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," keyspace which has a ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\ntable. The ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," table or the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," keyspace ",(0,l.kt)("strong",{parentName:"p"},"cannot be dropped"),".\nThere is another keyspace called the ",(0,l.kt)("inlineCode",{parentName:"p"},"system")," keyspace which is not user-accessible and hence\n",(0,l.kt)("strong",{parentName:"p"},"cannot be modified or dropped"),".")),(0,l.kt)("h2",{id:"keyspaces"},"Keyspaces"),(0,l.kt)("p",null,"Like we noted above, keyspaces are logical collections of tables and is known as a top level container. Creating a keyspace is as simple as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE <name>\n")),(0,l.kt)("p",null,"while you can drop keyspaces by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE <name>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Keyspaces can only be dropped if no other client is connected to it and if it contains no tables. This can be evaded by forcing removal through other DDL actions.")),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("p",null,"Tables contain your actual data: be it key/value, or anything else. Tables reside within keyspaces. To create a table, you'll need to run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE <entity> <model>(modelargs) <properties>\n")),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"A table, apart from the data model's own properties, has some model-indpendent properties. Supplying these are optional.\nThe user-accessible property that you should know about is the ",(0,l.kt)("inlineCode",{parentName:"p"},"volatile")," property."),(0,l.kt)("h4",{id:"the-volatile-property"},"The volatile property"),(0,l.kt)("p",null,"Adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"volatile")," property after your model arguments makes your table volatile. This means that the table itself will exist, but none of its data will persist after a restart. This makes volatile tables extremely useful for caching."),(0,l.kt)("p",null,"Don't worry too much about the ",(0,l.kt)("em",{parentName:"p"},"model")," and ",(0,l.kt)("em",{parentName:"p"},"modelargs")," now ","\u2014"," the next section will tell you about models."),(0,l.kt)("h3",{id:"table-models"},"Table models"),(0,l.kt)("p",null,"Just jump to ",(0,l.kt)("a",{parentName:"p",href:"#models"},"the models section")),(0,l.kt)("h2",{id:"models"},"Models"),(0,l.kt)("p",null,"A model defines what kind of data is stored in a table. You can think of it to be a ",(0,l.kt)("em",{parentName:"p"},"type")," in a\nprogramming language."),(0,l.kt)("h3",{id:"the-keymap-model"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"keymap")," model"),(0,l.kt)("p",null,"A keymap model is the one you just interacted with in the earlier documents. A keymap is like an\nassociated array: it maps a key to a value. More importantly, it maps a specific ",(0,l.kt)("em",{parentName:"p"},"key type")," to a specific ",(0,l.kt)("em",{parentName:"p"},"value type"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," Everything after ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," is case sensitive!")),(0,l.kt)("p",null,"This is how you create keymap tables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE <entity> keymap(<type>,<type>) <properties>\n")),(0,l.kt)("p",null,"Here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<entity>"),": is your table name (or the FQE syntax for your table)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<type>"),": is the ",(0,l.kt)("a",{parentName:"li",href:"#data-types"},"data type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<properties>"),": are the optional properties ",(0,l.kt)("a",{parentName:"li",href:"#properties"},"discussed earlier"))),(0,l.kt)("h4",{id:"data-types"},"Data types"),(0,l.kt)("p",null,"The keymap model supports the following types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),": A valid unicode string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"binstr"),": A binary string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list"),": A collection type similar to a ",(0,l.kt)("em",{parentName:"li"},"resizeable")," array")),(0,l.kt)("p",null,"(more types are expected to be shipped in future editions)"),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's create a keymap table with an ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," type key and ",(0,l.kt)("inlineCode",{parentName:"p"},"binstr")," type value. We'll assume you'll\nbe creating it in the default keyspace with the name \"mytbl\", so there's no need to specify an ",(0,l.kt)("a",{parentName:"p",href:"#entities"},"FQE"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mytbl keymap(str,binstr)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's create a keymap table with an ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," type key and a list of binary strings as the value type.\nAgain, we'll assume you're in the default keyspace, and we'll call this table ",(0,l.kt)("inlineCode",{parentName:"p"},"mylist"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mylist keymap(str,list<binstr>)\n")))),(0,l.kt)("h3",{id:"models-in-the-future"},"Models in the future"),(0,l.kt)("p",null,"With our goal to build a native multi-model database ","\u2014"," we're working on several data models! All you need to do is hang around in our communities to know what is brewing!"),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"examples#ddl"},"DDL examples here")))}u.isMDXComponent=!0}}]);