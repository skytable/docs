"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33905],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"actions-overview",title:"Actions and Querying"},s=void 0,u={unversionedId:"actions-overview",id:"actions-overview",isDocsHomePage:!1,title:"Actions and Querying",description:"Actions are exactly what they say &mdash; they do something! You can think of actions to be like",source:"@site/docs/3.actions-overview.md",sourceDirName:".",slug:"/actions-overview",permalink:"/next/actions-overview",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"actions-overview",title:"Actions and Querying"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/getting-started"},next:{title:"Containers",permalink:"/next/containers"}},p=[{value:"Taking <em>action</em>",id:"taking-action",children:[{value:"SET",id:"set",children:[],level:3},{value:"GET",id:"get",children:[],level:3},{value:"UPDATE",id:"update",children:[],level:3},{value:"DEL",id:"del",children:[],level:3}],level:2},{value:"Types of queries",id:"types-of-queries",children:[{value:"Simple queries",id:"simple-queries",children:[],level:3},{value:"Pipelined queries",id:"pipelined-queries",children:[],level:3},{value:"Batches",id:"batches",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Actions are exactly what they say ","\u2014"," they do something! You can think of actions to be like\nshell commands: you run a command with arguments and you get some corresponding output.",(0,i.kt)("br",{parentName:"p"}),"\n","In this document we'll explore actions, or what you may\ncall queries. We'll also explore the different kinds of queries that you can use with Skytable."),(0,i.kt)("p",null,"Remember the ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA")," you ran in the earlier document? Yup, that's an action. All kind of ",(0,i.kt)("em",{parentName:"p"},"quering")," in Skytable is done through actions. Actions are classified into two kinds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DDL (Data definition language) Actions: These actions enable us to interact with the structures\nthat store our data"),(0,i.kt)("li",{parentName:"ul"},"DML (Data manipulation language) Actions: These actions enable us to access and manipulate the data stored in our database")),(0,i.kt)("h2",{id:"taking-action"},"Taking ",(0,i.kt)("em",{parentName:"h2"},"action")),(0,i.kt)("p",null,"If you're coming from a SQL background, you might be used to the ",(0,i.kt)("em",{parentName:"p"},"DML")," way of things. That's right, DML actions are ",(0,i.kt)("em",{parentName:"p"},"similar"),".\nLet us try out a few basic DML actions (don't worry ","\u2014"," you'll learn about DDL in the next few documents)."),(0,i.kt)("h3",{id:"set"},"SET"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SET")," action lets us assign a key to a value (in a key/value table). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET x 100\n")),(0,i.kt)("p",null,"will assign the key ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),". But how do we get it?"),(0,i.kt)("h3",{id:"get"},"GET"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," action lets us fetch keys. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GET x\n")),(0,i.kt)("p",null,"will return the ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," that we set in the last step."),(0,i.kt)("h3",{id:"update"},"UPDATE"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," action lets us update the values of keys. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE x 200\n")),(0,i.kt)("p",null,"will update the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"200")),(0,i.kt)("h3",{id:"del"},"DEL"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DEL")," action lets us remove keys from the database. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DEL x\n")),(0,i.kt)("p",null,"will remove the key ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," from the database."),(0,i.kt)("p",null,"Didn't we just do a ",(0,i.kt)("strong",{parentName:"p"},"C"),"reate-",(0,i.kt)("strong",{parentName:"p"},"R"),"ead-",(0,i.kt)("strong",{parentName:"p"},"U"),"pdate-",(0,i.kt)("strong",{parentName:"p"},"D"),"elete? The infamous CRUD! Now that you know\nsome basic actions, you can take a look at the ",(0,i.kt)("a",{parentName:"p",href:"all-actions"},"full index of actions"),"."),(0,i.kt)("h2",{id:"types-of-queries"},"Types of queries"),(0,i.kt)("h3",{id:"simple-queries"},"Simple queries"),(0,i.kt)("p",null,"Simple queries are, well simple! You run a single action and there ","\u2014"," you ran a simple query."),(0,i.kt)("h3",{id:"pipelined-queries"},"Pipelined queries"),(0,i.kt)("p",null,"Pipelined queries or simply pipelines enable clients to send multiple queries to the database server\nat once. Responses for every query is returned in the order they query was sent. For example if you sent four queries like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"heya once\nheya twice\nheya thrice\nheya finally\n")),(0,i.kt)("p",null,"Then you'd get the echos in the following order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'"once"\n"twice"\n"thrice"\n"finally"\n')),(0,i.kt)("p",null,"Hence, the responses are returned in the order queries were issued."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Limitations")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Pipelines provide no transactional guarantees and hence shouldn't be relied on for the same."))),(0,i.kt)("h3",{id:"batches"},"Batches"),(0,i.kt)("p",null,"Batches are currently in the ",(0,i.kt)("em",{parentName:"p"},"decision phase")," but aim to provide a way to overcome the limitations imposed by pipelines, hence providing stronger\nguarantees. If you have any ideas, drop an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/issues/new"},"issue here")," and we'll be happy to consider it!"))}d.isMDXComponent=!0}}]);