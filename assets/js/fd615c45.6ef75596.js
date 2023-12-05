"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7709],{6907:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(5893),l=s(1151);const r={id:"overview",title:"Overview"},t=void 0,d={id:"blueql/overview",title:"Overview",description:"BlueQLTM is Skytable's own query language that very closely follows the design of SQL but with many modern features",source:"@site/docs/blueql/1.overview.md",sourceDirName:"blueql",slug:"/blueql/overview",permalink:"/blueql/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"BlueQL",permalink:"/category/blueql"},next:{title:"DDL",permalink:"/blueql/ddl"}},a={},c=[{value:"Language specification",id:"language-specification",level:2},{value:"Identifiers",id:"identifiers",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Data types",id:"data-types",level:3},{value:"Boolean",id:"boolean",level:4},{value:"Unsigned integers",id:"unsigned-integers",level:4},{value:"Signed integers",id:"signed-integers",level:4},{value:"Floating point values",id:"floating-point-values",level:4},{value:"Simple collections",id:"simple-collections",level:4},{value:"Complex collections",id:"complex-collections",level:4},{value:"Literals",id:"literals",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Expressions",id:"expressions",level:3},{value:"DDL",id:"ddl",level:2},{value:"DML",id:"dml",level:2},{value:"DCL",id:"dcl",level:2},{value:"Differences from SQL",id:"differences-from-sql",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["BlueQL",(0,i.jsx)("sup",{children:"TM"})," is Skytable's own query language that very closely follows the design of SQL but with many modern features\nand superior security. This document explores a basic overview of BlueQL."]}),"\n",(0,i.jsx)(n.p,{children:"Design principles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simplicity and clarity"}),": The language shouldn't be overwhelming to understand"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security with mandatory parameterization"}),": We want to reduce the surface of injection attacks. For this reason, ",(0,i.jsx)(n.a,{href:"#parameters",children:"parameterization is mandatory"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Just like SQL, BlueQL has three categories of commands/queries inside it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DDL"}),": Data definition language is used to define, modify and/or remove DDL objects such as ",(0,i.jsx)(n.code,{children:"space"}),"s and ",(0,i.jsx)(n.code,{children:"model"}),"s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DCL"}),": Data control language is used to control the access to data, and perform other administrative tasks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DML"}),": Data manipulation language is used to manipulate data"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Jump to ",(0,i.jsx)(n.a,{href:"#differences-from-sql",children:"differences from SQL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"language-specification",children:"Language specification"}),"\n",(0,i.jsx)(n.h3,{id:"identifiers",children:"Identifiers"}),"\n",(0,i.jsxs)(n.p,{children:["Can begin with any ASCII alphabet or an underscore (",(0,i.jsx)(n.code,{children:"_"}),") and then have any number of alphanumeric characters and/or underscores."]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"Keywords are identifiers with special meanings and hence can't be used as identifiers in other places. Here's a full-list of\nkeywords:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'[\n    "sysctl", "create", "alter", "drop", "use", "inspect", "describe", "insert", "select", "update",\n    "delete", "exists", "table", "model", "space", "index", "type", "function", "rename", "add",\n    "remove", "transform", "set", "return", "order", "sort", "group", "limit", "asc", "desc", "all",\n    "by", "with", "on", "from", "into", "as", "to", "in", "of", "and", "or", "not", "if", "else",\n    "where", "when", "allow", "auto", "default", "null", "transaction", "batch", "lock", "read",\n    "write", "begin", "end", "key", "value", "primary", "truncate"\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"data-types",children:"Data types"}),"\n",(0,i.jsx)(n.h4,{id:"boolean",children:"Boolean"}),"\n",(0,i.jsxs)(n.p,{children:["A boolean value, either ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.h4,{id:"unsigned-integers",children:"Unsigned integers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uint8"}),": unsigned 8-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uint16"}),": unsigned 16-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uint32"}),": unsigned 32-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uint64"}),": unsigned 64-bit integer"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"signed-integers",children:"Signed integers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sint8"}),": signed 8-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sint16"}),": signed 16-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sint32"}),": signed 32-bit integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sint64"}),": signed 64-bit integer"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"floating-point-values",children:"Floating point values"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float32"}),": a single-precision float"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float64"}),": a double-precision float"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"simple-collections",children:"Simple collections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"binary"}),": a binary blob represented as a sequence of ",(0,i.jsx)(n.code,{children:"uint8"})," values"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string"}),": an UTF-8 string"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"complex-collections",children:"Complex collections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"}),": a list of any of the data types, including nested lists","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A list is represented as: ",(0,i.jsx)(n.code,{children:"[]"})," with values inbetween. For example, a ",(0,i.jsx)(n.code,{children:"list { type:string }"})," would be represented as:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'["sayan", "loves", "dogs"]\n'})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Lists cannot contain null values"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List can be nested"}),": You can have heavily nested lists like: ",(0,i.jsx)(n.code,{children:'[[[]], [["another one"]]]'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List can only have one base type"}),": This means that if you have a list like ",(0,i.jsx)(n.code,{children:"[[[string]]]"})," each element must either be the same nested list, or an empty list"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"info",children:(0,i.jsx)(n.p,{children:"New data types are frequently added, so treat this list as non-exhaustive."})}),"\n",(0,i.jsx)(n.h3,{id:"literals",children:"Literals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Null literal: ",(0,i.jsx)(n.code,{children:"null"})]}),"\n",(0,i.jsxs)(n.li,{children:["Numeric literals:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Unsigned: ",(0,i.jsx)(n.code,{children:"1234"})]}),"\n",(0,i.jsxs)(n.li,{children:["Signed: ",(0,i.jsx)(n.code,{children:"[-]1234"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Floating point literals: ",(0,i.jsx)(n.code,{children:"[-]1234.5678"})]}),"\n",(0,i.jsxs)(n.li,{children:["String literals: ",(0,i.jsx)(n.code,{children:'"hello"'})]}),"\n",(0,i.jsx)(n.li,{children:"Binary literals: `binary`"}),"\n",(0,i.jsxs)(n.li,{children:["List literals: ",(0,i.jsx)(n.code,{children:"[..]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dictionaries: ",(0,i.jsx)(n.code,{children:"{<ident>: <literal>}"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Literals are not available everywhere",type:"warning",children:[(0,i.jsx)(n.p,{children:"It is very important for you to know that literals are not allowed everywhere. The only literals allowed everywhere are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lists"}),"\n",(0,i.jsx)(n.li,{children:"Dictionaries"}),"\n"]}),(0,i.jsx)(n.p,{children:"Read below to understand why."})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["All literals apart from dictionaries and lists must be used as parameters. ",(0,i.jsx)(n.strong,{children:"BlueQL only allows literals as parameters"}),". For example, using the Rust client, if you were to run this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into myspace.mymodel('sayan', 'pass123', ['myfirstnote'])\n"})}),"\n",(0,i.jsx)(n.p,{children:"You are required to parameterize the query like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'use skytable::query;\n\nlet query = query!("insert into myspace.mymode(?, ?, [?])", "sayan", "pass123", "myfirstnote")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you try to run it without any parameters (don't forget that ",(0,i.jsx)(n.code,{children:"skysh"})," automatically parameterizes for convenience) the query\nwon't even compile."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Just so you know, parameterizing involves passing a separate parameter list, with each parameter encoded. You wouldn't need to worry about this because the client driver does all of that for you!"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The question is why? The answer is security."})," SQL-injection vulernabilties have already costed companies a lot, so we don't\nwant to inherit that from SQL."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Also, parameterization is exclusively possible for literals"}),". This means that whenever you're accepting data from an untrusted\nsource, it becomes a parameter. If you try to not use parameters, the query will not even compile."]}),(0,i.jsx)(n.p,{children:"On a final note, BlueQL doesn't support comments of any form also for security reasons."})]}),"\n",(0,i.jsx)(n.h3,{id:"expressions",children:"Expressions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"+="}),": add RHS to LHS","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can be used outside arithmetic contexts"}),"\n",(0,i.jsxs)(n.li,{children:["Add a char to a field ",(0,i.jsx)(n.code,{children:"mystring"}),": ",(0,i.jsx)(n.code,{children:'mystring += ",world"'})]}),"\n",(0,i.jsxs)(n.li,{children:["Add a list to a nested list field: ",(0,i.jsx)(n.code,{children:'mylist += ["item in nested list"]'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-="}),": subtract RHS from LHS"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/="}),": divide LHS by RHS"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*="}),": multiply LHS by RHS"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ddl",children:"DDL"}),"\n",(0,i.jsx)(n.p,{children:"Queries include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Spaces:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE SPACE myspace [WITH { property: value, ... }]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER SPACE myspace [WITH { property: updated_value, ... }]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP SPACE [allow not empty] myspace"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Models:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE MODEL myspace.mymodel([primary] [null] field: field_type, ...) [WITH { property: value, ... }]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER MODEL myspace.mymodel (ADD ... | UPDATE ... | REMOVE ...)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP MODEL [allow not empty] myspace.mymodel"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INSPECT GLOBAL"}),": inspects global state, shows a list of spaces and users"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INSPECT SPACE <space>"}),": inspects a single space, shows a list of models and other things"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INSPECT MODEL <model>"}),": inspects a single model, shows information about stored data and other things"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dml",children:"DML"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"INSERT INTO myspace.mymodel(...)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SELECT col1, ... FROM myspace.mymodel WHERE ..."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UPDATE myspace.mymodel SET counter += 1 WHERE ..."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DELETE FROM myspace.mymode WHERE ..."})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dcl",children:"DCL"}),"\n",(0,i.jsx)(n.p,{children:"Queries include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SYSCTL REPORT STATUS"}),": returns the status of the system. (Not a control query per se)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'SYSCTL CREATE USER "username" WITH { password: ... }'}),": create a new user"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'SYSCTL DROP USER "username"'}),": removes the user in question"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"differences-from-sql",children:"Differences from SQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No literals (see above)"}),"\n",(0,i.jsx)(n.li,{children:"Mandatory parameterization (see above)"}),"\n",(0,i.jsx)(n.li,{children:"No semicolons!"}),"\n",(0,i.jsx)(n.li,{children:"Only one statement per query. For multiple statements batches must be used"}),"\n",(0,i.jsxs)(n.li,{children:["DML queries are point queries (hence must contain a ",(0,i.jsx)(n.code,{children:"WHERE"})," clause)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(7294);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);