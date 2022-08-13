"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"actions-overview",title:"Actions and Querying"},o=void 0,l={unversionedId:"actions-overview",id:"actions-overview",title:"Actions and Querying",description:"Actions are exactly what they say &mdash; they do something! You can think of actions to be like",source:"@site/docs/3.actions-overview.md",sourceDirName:".",slug:"/actions-overview",permalink:"/next/actions-overview",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"actions-overview",title:"Actions and Querying"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/getting-started"},next:{title:"Containers",permalink:"/next/containers"}},s={},p=[{value:"Taking <em>action</em>",id:"taking-action",level:2},{value:"SET",id:"set",level:3},{value:"GET",id:"get",level:3},{value:"UPDATE",id:"update",level:3},{value:"DEL",id:"del",level:3},{value:"Types of queries",id:"types-of-queries",level:2},{value:"Simple queries",id:"simple-queries",level:3},{value:"Pipelined queries",id:"pipelined-queries",level:3},{value:"Batches",id:"batches",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Actions are exactly what they say ","\u2014"," they do something! You can think of actions to be like\nshell commands: you run a command with arguments and you get some corresponding output.",(0,r.kt)("br",{parentName:"p"}),"\n","In this document we'll explore actions, or what you may\ncall queries. We'll also explore the different kinds of queries that you can use with Skytable."),(0,r.kt)("p",null,"Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEYA")," you ran in the earlier document? Yup, that's an action. All kind of ",(0,r.kt)("em",{parentName:"p"},"quering")," in Skytable is done through actions. Actions are classified into two kinds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DDL (Data definition language) Actions: These actions enable us to interact with the structures\nthat store our data"),(0,r.kt)("li",{parentName:"ul"},"DML (Data manipulation language) Actions: These actions enable us to access and manipulate the data stored in our database")),(0,r.kt)("h2",{id:"taking-action"},"Taking ",(0,r.kt)("em",{parentName:"h2"},"action")),(0,r.kt)("p",null,"If you're coming from a SQL background, you might be used to the ",(0,r.kt)("em",{parentName:"p"},"DML")," way of things. That's right, DML actions are ",(0,r.kt)("em",{parentName:"p"},"similar"),".\nLet us try out a few basic DML actions (don't worry ","\u2014"," you'll learn about DDL in the next few documents)."),(0,r.kt)("h3",{id:"set"},"SET"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," action lets us assign a key to a value (in a key/value table). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET x 100\n")),(0,r.kt)("p",null,"will assign the key ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),". But how do we get it?"),(0,r.kt)("h3",{id:"get"},"GET"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," action lets us fetch keys. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GET x\n")),(0,r.kt)("p",null,"will return the ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," that we set in the last step."),(0,r.kt)("h3",{id:"update"},"UPDATE"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," action lets us update the values of keys. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE x 200\n")),(0,r.kt)("p",null,"will update the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("h3",{id:"del"},"DEL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DEL")," action lets us remove keys from the database. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DEL x\n")),(0,r.kt)("p",null,"will remove the key ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," from the database."),(0,r.kt)("p",null,"Didn't we just do a ",(0,r.kt)("strong",{parentName:"p"},"C"),"reate-",(0,r.kt)("strong",{parentName:"p"},"R"),"ead-",(0,r.kt)("strong",{parentName:"p"},"U"),"pdate-",(0,r.kt)("strong",{parentName:"p"},"D"),"elete? The infamous CRUD! Now that you know\nsome basic actions, you can take a look at the ",(0,r.kt)("a",{parentName:"p",href:"all-actions"},"full index of actions"),"."),(0,r.kt)("h2",{id:"types-of-queries"},"Types of queries"),(0,r.kt)("h3",{id:"simple-queries"},"Simple queries"),(0,r.kt)("p",null,"Simple queries are, well simple! You run a single action and there ","\u2014"," you ran a simple query."),(0,r.kt)("h3",{id:"pipelined-queries"},"Pipelined queries"),(0,r.kt)("p",null,"Pipelined queries or simply pipelines enable clients to send multiple queries to the database server\nat once. Responses for every query is returned in the order they query was sent. For example if you sent four queries like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"heya once\nheya twice\nheya thrice\nheya finally\n")),(0,r.kt)("p",null,"Then you'd get the echos in the following order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'"once"\n"twice"\n"thrice"\n"finally"\n')),(0,r.kt)("p",null,"Hence, the responses are returned in the order queries were issued."),(0,r.kt)("admonition",{title:"Limitations",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Pipelines provide no transactional guarantees and hence shouldn't be relied on for the same.")),(0,r.kt)("h3",{id:"batches"},"Batches"),(0,r.kt)("p",null,"Batches are currently in the ",(0,r.kt)("em",{parentName:"p"},"decision phase")," but aim to provide a way to overcome the limitations imposed by pipelines, hence providing stronger\nguarantees. If you have any ideas, drop an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/issues/new"},"issue here")," and we'll be happy to consider it!"))}c.isMDXComponent=!0}}]);