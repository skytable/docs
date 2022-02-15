"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54756],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69232:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={id:"containers",title:"Containers"},s=void 0,p={unversionedId:"containers",id:"version-0.7.2/containers",title:"Containers",description:"Containers are objects that hold other objects. In Skytable, we have two kinds of containers:",source:"@site/versioned_docs/version-0.7.2/4.containers.md",sourceDirName:".",slug:"/containers",permalink:"/0.7.2/containers",tags:[],version:"0.7.2",sidebarPosition:4,frontMatter:{id:"containers",title:"Containers"},sidebar:"version-0.7.2/docs",previous:{title:"Actions and Querying",permalink:"/0.7.2/actions-overview"},next:{title:"DDL",permalink:"/0.7.2/ddl"}},m=[{value:"Entities",id:"entities",children:[],level:2},{value:"Keyspaces",id:"keyspaces",children:[],level:2},{value:"Tables",id:"tables",children:[{value:"Properties",id:"properties",children:[{value:"The volatile property",id:"the-volatile-property",children:[],level:4}],level:3},{value:"Table models",id:"table-models",children:[],level:3}],level:2},{value:"Models",id:"models",children:[{value:"The <code>keymap</code> model",id:"the-keymap-model",children:[{value:"Data types",id:"data-types",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Models in the future",id:"models-in-the-future",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Containers are ",(0,r.kt)("em",{parentName:"p"},"objects")," that hold other objects. In Skytable, we have two kinds of containers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyspaces"),": Keyspaces are containers that hold tables. The basic idea is to keep all the related tables for a given ",(0,r.kt)("em",{parentName:"li"},"application")," in one logical collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tables"),": Tables are ",(0,r.kt)("strong",{parentName:"li"},"not tables"),". Funny, isn't it? Instead, tables are structures that contain the actual data. Be it key/value or the future data models ","\u2014"," it's all in a table")),(0,r.kt)("p",null,"To interact with containers, we need to use DDL actions like ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"INSPECT"),"."),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Every container is an entity. A keyspace being a top-level entity and a table being a low-level\nentity. Hence a keyspace name or a table name can be called an ",(0,r.kt)("em",{parentName:"p"},"entity")," or ",(0,r.kt)("em",{parentName:"p"},"entity name"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Naming rules")),(0,r.kt)("p",null,"All entity names have the following naming rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Names are case sensitive"),(0,r.kt)("li",{parentName:"ul"},"Names must begin with an ASCII alphabet (A-Z or a-z) or an underscore (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),")"),(0,r.kt)("li",{parentName:"ul"},"Names must be lesser than or equal to 64 characters long"),(0,r.kt)("li",{parentName:"ul"},"Names must ",(0,r.kt)("strong",{parentName:"li"},"not")," begin with a digit (0-9)"),(0,r.kt)("li",{parentName:"ul"},"Names can contain digits anywhere else (except for the first character)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Entity groups")),(0,r.kt)("p",null,"The most important thing is an ",(0,r.kt)("em",{parentName:"p"},"Entity Group")," which is also known as ",(0,r.kt)("em",{parentName:"p"},"Fully Qualified\nEntity")," Syntax (FQE Syntax). FQE syntax is used to describe the full ",(0,r.kt)("em",{parentName:"p"},"path")," to a table. For example,\nif you have a keyspace ",(0,r.kt)("inlineCode",{parentName:"p"},"supercyan")," and you have a table ",(0,r.kt)("inlineCode",{parentName:"p"},"cyan")," within it, then the FQE syntax will\nbe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"supercyan:cyan\n")),(0,r.kt)("p",null,"This can be extremely helpful when running DDL queries."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you connect to Skytable, you are connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," keyspace which has a ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\ntable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," table or the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," keyspace ",(0,r.kt)("strong",{parentName:"p"},"cannot be dropped"),".\nThere is another keyspace called the ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," keyspace which is not user-accessible and hence\n",(0,r.kt)("strong",{parentName:"p"},"cannot be modified or dropped"),"."))),(0,r.kt)("h2",{id:"keyspaces"},"Keyspaces"),(0,r.kt)("p",null,"Like we noted above, keyspaces are logical collections of tables and is known as a top level container. Creating a keyspace is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE <name>\n")),(0,r.kt)("p",null,"while you can drop keyspaces by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE <name>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Keyspaces can only be dropped if no other client is connected to it and if it contains no tables. This can be evaded by forcing removal through other DDL actions.")),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"Tables contain your actual data: be it key/value, or anything else. Tables reside within keyspaces. To create a table, you'll need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE <entity> <model>(modelargs) <properties>\n")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("p",null,"A table, apart from the data model's own properties, has some model-indpendent properties. Supplying these are optional.\nThe user-accessible property that you should know about is the ",(0,r.kt)("inlineCode",{parentName:"p"},"volatile")," property."),(0,r.kt)("h4",{id:"the-volatile-property"},"The volatile property"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"volatile")," property after your model arguments makes your table volatile. This means that the table itself will exist, but none of its data will persist after a restart. This makes volatile tables extremely useful for caching."),(0,r.kt)("p",null,"Don't worry too much about the ",(0,r.kt)("em",{parentName:"p"},"model")," and ",(0,r.kt)("em",{parentName:"p"},"modelargs")," now ","\u2014"," the next section will tell you about models."),(0,r.kt)("h3",{id:"table-models"},"Table models"),(0,r.kt)("p",null,"Just jump to ",(0,r.kt)("a",{parentName:"p",href:"#models"},"the models section")),(0,r.kt)("h2",{id:"models"},"Models"),(0,r.kt)("p",null,"A model defines what kind of data is stored in a table. You can think of it to be a ",(0,r.kt)("em",{parentName:"p"},"type")," in a\nprogramming language."),(0,r.kt)("h3",{id:"the-keymap-model"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"keymap")," model"),(0,r.kt)("p",null,"A keymap model is the one you just interacted with in the earlier documents. A keymap is like an\nassociated array: it maps a key to a value. More importantly, it maps a specific ",(0,r.kt)("em",{parentName:"p"},"key type")," to a specific ",(0,r.kt)("em",{parentName:"p"},"value type"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," Everything after ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," is case sensitive!")),(0,r.kt)("p",null,"This is how you create keymap tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE <entity> keymap(<type>,<type>) <properties>\n")),(0,r.kt)("p",null,"Here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<entity>"),": is your table name (or the FQE syntax for your table)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<type>"),": is the ",(0,r.kt)("a",{parentName:"li",href:"#data-types"},"data type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<properties>"),": are the optional properties ",(0,r.kt)("a",{parentName:"li",href:"#properties"},"discussed earlier"))),(0,r.kt)("h4",{id:"data-types"},"Data types"),(0,r.kt)("p",null,"The keymap model supports the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str"),": A valid unicode string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"binstr"),": A binary string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list"),": A collection type similar to a ",(0,r.kt)("em",{parentName:"li"},"resizeable")," array")),(0,r.kt)("p",null,"(more types are expected to be shipped in future editions)"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's create a keymap table with an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," type key and ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr")," type value. We'll assume you'll\nbe creating it in the default keyspace with the name \"mytbl\", so there's no need to specify an ",(0,r.kt)("a",{parentName:"p",href:"#entities"},"FQE"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mytbl keymap(str,binstr)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's create a keymap table with an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," type key and a list of binary strings as the value type.\nAgain, we'll assume you're in the default keyspace, and we'll call this table ",(0,r.kt)("inlineCode",{parentName:"p"},"mylist"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mylist keymap(str,list<binstr>)\n")))),(0,r.kt)("h3",{id:"models-in-the-future"},"Models in the future"),(0,r.kt)("p",null,"With our goal to build a native multi-model database ","\u2014"," we're working on several data models! All you need to do is hang around in our communities to know what is brewing!"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"examples#ddl"},"DDL examples here")))}u.isMDXComponent=!0}}]);