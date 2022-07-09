"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,c=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"terrapipe",title:"Terrapipe 1.0"},o=void 0,l={unversionedId:"Protocol/terrapipe",id:"version-0.4.5/Protocol/terrapipe",title:"Terrapipe 1.0",description:"Copyright (c) 2020 Sayan >",source:"@site/versioned_docs/version-0.4.5/Protocol/terrapipe.md",sourceDirName:"Protocol",slug:"/Protocol/terrapipe",permalink:"/0.4.5/Protocol/terrapipe",draft:!1,tags:[],version:"0.4.5",frontMatter:{id:"terrapipe",title:"Terrapipe 1.0"},sidebar:"version-0.4.5/docs",previous:{title:"Building from source",permalink:"/0.4.5/building-from-source"},next:{title:"Data Types",permalink:"/0.4.5/Protocol/data-types"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Types of queries",id:"types-of-queries",level:3},{value:"Datagroups",id:"datagroups",level:3},{value:"The Metaframe",id:"the-metaframe",level:2},{value:"The Dataframe",id:"the-dataframe",level:2},{value:"Data in Queries",id:"data-in-queries",level:3},{value:"Data in Responses",id:"data-in-responses",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Response codes",id:"response-codes",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"About this document",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Copyright (c) 2020 Sayan ",(0,r.kt)("a",{parentName:"p",href:"mailto:%3Cohsayan@outlook.com"},"<ohsayan@outlook.com"),">",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Date:")," Aug 23, 2020",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"In effect since:")," v0.4.0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Date:")," 6",(0,r.kt)("sup",null,"th")," Aug, 2020",(0,r.kt)("br",{parentName:"p"}),"\n","Copyright ","\xa9"," 2020 Sayan Nandan")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terrabasedb/terrabase"},"TerrabaseDB")," for client/server communication.\nAll clients willing to communicate with TDB servers must implement this protocol. This document serves as a guide for implementing clients for TDB."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"Terrapipe also works in a request/response action like HTTP, except that we call\nit a query/response action. A client sends a query, and the server returns a response. The bytes sent by a client is called a query packet, while the bytes sent by the server in response to this is called a response packet."),(0,r.kt)("p",null,"Each packet (irrespective of query or response), contains two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The metaframe"),": the first two lines"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The dataframe"),": the remaining lines")),(0,r.kt)("h3",{id:"types-of-queries"},"Types of queries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple queries"),": These queries just perform one action (like ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"SET")," , ...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Batch queries"),": These queries perform multiple actions")),(0,r.kt)("h3",{id:"datagroups"},"Datagroups"),(0,r.kt)("p",null,"A datagroup is a collection of elements that perform one action, for a query or a collection elements that return the outcome for one action, for a response. Don't worry, read on and you'll understand what it is."),(0,r.kt)("h2",{id:"the-metaframe"},"The Metaframe"),(0,r.kt)("p",null,"The metaframe is made up of precisely two lines (separated by a LF or ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," byte). This is what it looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#<m>\\n\n*<n>\\n\n")),(0,r.kt)("p",null,"Here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<n>")," is the number of datagroups in the query. Since simple queries perform one action only, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<n>")," is always 1. Batch queries have values of n in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"(1, \u221e)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<m>")," is the number of bytes in the following line excluding the ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte. So let's say we had ",(0,r.kt)("inlineCode",{parentName:"li"},"*1\\n")," in the second line of the metaframe, then ",(0,r.kt)("inlineCode",{parentName:"li"},"<m>")," would have a value of 2. ")),(0,r.kt)("p",null,"Also make sure that you make matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," character non-exhaustive, as we might be adding more packet types in the future which may need symbols other than ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," ."),(0,r.kt)("h2",{id:"the-dataframe"},"The Dataframe"),(0,r.kt)("p",null,"The dataframe is made up of groups called datagroups as we had mentioned earlier. In the case of a query like ",(0,r.kt)("inlineCode",{parentName:"p"},"GET x")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"GET x")," will be the query datagroup, and the response returned by the server with the key, will be the response datagroup (of course, excluding the metaframe)."),(0,r.kt)("p",null,"Every query datagroup will contain all the arguments required to execute that action, including the action itself. Each datagroup has two lines of ",(0,r.kt)("em",{parentName:"p"},"boilerplate")," in the beginning. This looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n")),(0,r.kt)("p",null,"Here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<q>")," is the number of arguments/elements in the datagroup and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," is the number of bytes in the next line, excluding the ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte (just like the metaframe)")),(0,r.kt)("p",null,"An entire datagroup, has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n<--- DATA ---\x3e\n")),(0,r.kt)("p",null,"We know the first two lines...but wait, what is ",(0,r.kt)("inlineCode",{parentName:"p"},"<--- DATA ---\x3e")," ? Let's take a look at what is ",(0,r.kt)("em",{parentName:"p"},"data")," looks like in the case of queries and then we'll look at what the ",(0,r.kt)("em",{parentName:"p"},"data")," looks like in the case of responses."),(0,r.kt)("h3",{id:"data-in-queries"},"Data in Queries"),(0,r.kt)("p",null,"For a request like ",(0,r.kt)("inlineCode",{parentName:"p"},"GET foo")," , the corresponding data will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#3\nGET\\n\n#3\\n\nfoo\\n\n")),(0,r.kt)("p",null,"So, starting from line 1:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"we have a '#' followed by the number of bytes in the next line (3 in this case), excluding the ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte.   "),(0,r.kt)("li",{parentName:"ol"},"We then have a ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte. Looking ahead, we have 3 bytes ( ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ) followed by a ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte.  "),(0,r.kt)("li",{parentName:"ol"},"We then have  a '#' followed by the number of bytes in the next line (3 again, in this case), followed by a ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," byte.  "),(0,r.kt)("li",{parentName:"ol"},"And this goes on")),(0,r.kt)("p",null,"The idea is, we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes (let it be ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," ) to be read from the next line and a line feed character ('\\n'). In the next line, we read ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," bytes and skip the line feed character. And we keep going on, in this way."),(0,r.kt)("p",null,"Not so hard, right? Now let's look at what the data looks like in the case of responses."),(0,r.kt)("h3",{id:"data-in-responses"},"Data in Responses"),(0,r.kt)("p",null,"Data in responses have the following general structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tsymbol><length>\\n\n<item>\\n\n<tsymbol><length>\\n\n... and so on\n")),(0,r.kt)("p",null,"Here, we can easily make out that ",(0,r.kt)("inlineCode",{parentName:"p"},"<length>")," is the number of bytes in the following line (just like a query) and ",(0,r.kt)("inlineCode",{parentName:"p"},"<item>")," is well, an argument/element in the datagroup. But then, what is ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," ? Simply put, it is the type of data in the following line."),(0,r.kt)("p",null,"But, before you go ahead, here's the simple flow that you must keep in mind:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Read the ",(0,r.kt)("inlineCode",{parentName:"li"},"tsymbol")," and match it against the ",(0,r.kt)("a",{parentName:"li",href:"#data-types"},"data type")),(0,r.kt)("li",{parentName:"ol"},"Parse the data in the next line into the data type"),(0,r.kt)("li",{parentName:"ol"},"Repeat for the remaining lines")),(0,r.kt)("p",null,"So, to conclude, ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," specifies the type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," in the following line. ",(0,r.kt)("a",{parentName:"p",href:"#data-types"},"Read on")," to know what values ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," can assume. "),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"You can find a full list of data types and their ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," s ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"data-types"},"here")),"."),(0,r.kt)("h2",{id:"response-codes"},"Response codes"),(0,r.kt)("p",null,"You can find a full list of response codes and their descriptions ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"response-codes"},"here"))),(0,r.kt)("p",null,"And that's about it! For a list of actions, ",(0,r.kt)("a",{parentName:"p",href:"/0.4.5/Actions/overview"},"see this"),"."))}m.isMDXComponent=!0}}]);