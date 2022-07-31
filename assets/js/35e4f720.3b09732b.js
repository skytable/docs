"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=o(n),d=a,c=h["".concat(p,".").concat(d)]||h[d]||m[d]||l;return n?r.createElement(c,s(s({ref:t},u),{},{components:n})):r.createElement(c,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={id:"skyhash",title:"Skyhash 2.0"},s=void 0,i={unversionedId:"protocol/skyhash",id:"protocol/skyhash",title:"Skyhash 2.0",description:"Copyright (c) 2022 Sayan Nandan &lt;nandansayan@outlook.com&lt;",source:"@site/docs/protocol/skyhash.md",sourceDirName:"protocol",slug:"/protocol/skyhash",permalink:"/next/protocol/skyhash",draft:!1,tags:[],version:"current",frontMatter:{id:"skyhash",title:"Skyhash 2.0"},sidebar:"docs",previous:{title:"WHEREAMI",permalink:"/next/actions/whereami"},next:{title:"Data types",permalink:"/next/protocol/data-types"}},p={},o=[{value:"Concepts",id:"concepts",level:2},{value:"Simple queries",id:"simple-queries",level:2},{value:"Queries",id:"queries",level:3},{value:"The Metaframe",id:"the-metaframe",level:4},{value:"The Dataframe",id:"the-dataframe",level:4},{value:"Example: A complete simple query",id:"example-a-complete-simple-query",level:4},{value:"Responses",id:"responses",level:3},{value:"An example response",id:"an-example-response",level:4},{value:"Pipelined queries",id:"pipelined-queries",level:2},{value:"Queries",id:"queries-1",level:3},{value:"The Metaframe",id:"the-metaframe-1",level:4},{value:"The Dataframe",id:"the-dataframe-1",level:4},{value:"Example: A complete pipelined query",id:"example-a-complete-pipelined-query",level:3},{value:"Responses",id:"responses-1",level:3}],u={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"About this document",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Copyright (c) 2022 Sayan Nandan ","<",(0,a.kt)("a",{parentName:"p",href:"mailto:nandansayan@outlook.com"},"nandansayan@outlook.com"),"<",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"In effect since:")," 0.8.0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Date:")," 15",(0,a.kt)("sup",null,"th")," April, 2022")),(0,a.kt)("p",null,"Skyhash 2.0 is a protocol built on top of TCP that is used by Skytable for client-server communication.\nAll clients willing to communicate with Skytable must implement this specification. Skyhash 2.0 supersedes\nthe now deprecated ",(0,a.kt)("a",{parentName:"p",href:"deprecated/skyhash-1.0"},"Skyhash 1.0 protocol"),". See ",(0,a.kt)("a",{parentName:"p",href:"skyhash-changelog"},"this document"),"\nfor a complete list of changes."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"Skyhash uses a query/response action just like HTTP's request/response action ","\u2014","\xa0clients send queries and the server returns responses. The bytes sent by a client to the server is called a ",(0,a.kt)("em",{parentName:"p"},"query packet")," while the bytes returned by the server to the client is called a ",(0,a.kt)("em",{parentName:"p"},"response packet"),"."),(0,a.kt)("p",null,"As of Skyhash 2.0, there are two kinds of queries;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple queries:")," In these kinds of queries, the client sends a single query and the server responds\nwith a single response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pipelined queries:")," In these kinds of queries, the client sends multiple queries in a single query and the server returns multiple responses in the same responses, in the order the queries were sent")),(0,a.kt)("h2",{id:"simple-queries"},"Simple queries"),(0,a.kt)("p",null,"This section explains the structure of simple queries and responses"),(0,a.kt)("h3",{id:"queries"},"Queries"),(0,a.kt)("p",null,"A simple query is used to run a single query. A simple query is made up of two parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Metaframe"),(0,a.kt)("li",{parentName:"ol"},"The Dataframe")),(0,a.kt)("h4",{id:"the-metaframe"},"The Metaframe"),(0,a.kt)("p",null,"The metaframe of a simple query has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*<count>\\n\n")),(0,a.kt)("p",null,"Here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," tells the server that this is a simple query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<count>")," specifies the number of elements in the simple query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\n")," terminates the metaframe")),(0,a.kt)("h4",{id:"the-dataframe"},"The Dataframe"),(0,a.kt)("p",null,"The dataframe of a simple query has the following general structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<l>\\n\n<e>\n...\n")),(0,a.kt)("p",null,"Here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<l>")," indicates the number of bytes in the element and is newline terminated (",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<e>")," is the element itself")),(0,a.kt)("p",null,"This is repeated for all the elements, something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<l1>\\n\n<e1>\n<l2>\\n\n<e2>\n...\n")),(0,a.kt)("h4",{id:"example-a-complete-simple-query"},"Example: A complete simple query"),(0,a.kt)("p",null,"We need to send: ",'["SET", "x", "100"]'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*    -> Simple query\n3\\n  -> Query 1 has 3 elements\n3\\n  -> E1 has 3 bytes\nSET  -> E1 itself\n1\\n  -> E2 has 1 byte\nx    -> E2 itself\n3\\n  -> E3 has 3 bytes\n100  -> E3 itself\n")),(0,a.kt)("h3",{id:"responses"},"Responses"),(0,a.kt)("p",null,"Simple responses are returned as responses to simple queries. There is one thing about responses: unlike queries where the server doesn't bother with types, responses however ",(0,a.kt)("strong",{parentName:"p"},"are strongly typed"),". The returned data types have their structures, all of which you can see in ",(0,a.kt)("a",{parentName:"p",href:"data-types"},"this document"),". Responses have the following general structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*\n<type><length>\\n\n<data>\n")),(0,a.kt)("p",null,"Here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),": Tells the client that this is a response to a simple query. This comprises the entire response metaframe"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<type>")," Is the type symbol (see ",(0,a.kt)("a",{parentName:"li",href:"data-types"},"this document"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<length>"),": Number of bytes in the element. For collections, this specifies the length of the collection while lengths for individual elements follow. Some types might not have lengths but are newline terminated instead")),(0,a.kt)("h4",{id:"an-example-response"},"An example response"),(0,a.kt)("p",null,"The below response is returned when the servers responds with ",(0,a.kt)("inlineCode",{parentName:"p"},"Respcode 0")," (Okay):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*   -> simple response\n!   -> the returned value is a respmessage\n0\\n -> The respmessage is 0, which is respcode 0 (Okay)\n")),(0,a.kt)("p",null,"Here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),": This is a response to a simple query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!"),": This is the type symbol for Response Messages. Response codes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),": This is the response code, newline terminated (",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),")")),(0,a.kt)("p",null,"Here is another responses to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"GET x")," that returns ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," as a string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*     -> simple response\n+3\\n  -> unicode string with 3 bytes\n100   -> the element\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Consider reading ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"data-types"},"this document on data types"))," to learn about the structure of each response data type.")),(0,a.kt)("h2",{id:"pipelined-queries"},"Pipelined queries"),(0,a.kt)("p",null,"This section explains the structure of pipelined queries and responses."),(0,a.kt)("h3",{id:"queries-1"},"Queries"),(0,a.kt)("p",null,"Pipelined queries are used to run multiple queries at once. Responses are returned in the order they are sent. A pipeline is also made up of two parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Metaframe"),(0,a.kt)("li",{parentName:"ol"},"Dataframe")),(0,a.kt)("h4",{id:"the-metaframe-1"},"The Metaframe"),(0,a.kt)("p",null,"The metaframe of a pipelined query has the following general structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$<count>\\n\n")),(0,a.kt)("p",null,"Here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$"),": This tells the server that this is a pipelined query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<count>"),": The number of queries in this pipeline, newline terminated (",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),")")),(0,a.kt)("h4",{id:"the-dataframe-1"},"The Dataframe"),(0,a.kt)("p",null,"The dataframe of a pipelined query is simply a collection of simple query dataframes. It resembles the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<query 1 element count>\\n\n<--- query 1 dataframe ---\x3e\n<query 2 element count>\\n\n<--- query 2 dataframe ---\x3e\n...\n")),(0,a.kt)("h3",{id:"example-a-complete-pipelined-query"},"Example: A complete pipelined query"),(0,a.kt)("p",null,"Here, we are sending two queries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query 1:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"SET x 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query 2:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"GET x"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$    -> Pipeline\n2\\n  -> Pipeline has 2 queries\n\n3\\n  -> Query 1 has 3 elements\n3\\n  -> Q1E1 has 3 bytes\nSET  -> Q1E1 itself\n1\\n  -> Q1E2 has 1 byte\nx    -> Q1E2 itself\n3\\n  -> Q1E3 has 3 bytes\n100  -> Q1E3 itself\n\n2\\n  -> Query 2 has 2 elements\n3\\n  -> Q2E1 has 3 bytes\nGET  -> Q2E1 itself\n1\\n  -> Q2E2 has 1 byte\nx    -> Q2E2 itself\n")),(0,a.kt)("h3",{id:"responses-1"},"Responses"),(0,a.kt)("p",null,"Pipelined responses are responses returned in responses to a pipelined query. Just like ",(0,a.kt)("a",{parentName:"p",href:"#simple-responses"},"simple responses"),", they are typed."),(0,a.kt)("p",null,"Example response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$    -> Pipeline response\n2\\n  -> Two responses are returned\n!0\\n -> First response is respcode 0\n+3\\n -> Second response is a string with 3 bytes\n100  -> The string itself ("100") here\n')))}m.isMDXComponent=!0}}]);