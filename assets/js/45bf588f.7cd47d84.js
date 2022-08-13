"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7558],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),u=r,m=h["".concat(o,".").concat(u)]||h[u]||d[u]||l;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={id:"skyhash-1.0",title:"Skyhash Protocol 1.0",sidebar_label:"Skyhash 1.0 (deprecated)"},i=void 0,s={unversionedId:"protocol/deprecated/skyhash-1.0",id:"protocol/deprecated/skyhash-1.0",title:"Skyhash Protocol 1.0",description:"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;",source:"@site/docs/protocol/deprecated/skyhash-1.md",sourceDirName:"protocol/deprecated",slug:"/protocol/deprecated/skyhash-1.0",permalink:"/next/protocol/deprecated/skyhash-1.0",draft:!1,tags:[],version:"current",frontMatter:{id:"skyhash-1.0",title:"Skyhash Protocol 1.0",sidebar_label:"Skyhash 1.0 (deprecated)"},sidebar:"docs",previous:{title:"Changelog",permalink:"/next/protocol/skyhash-changelog"},next:{title:"Data Types (deprecated)",permalink:"/next/protocol/deprecated/data-types"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Metaframe",id:"the-metaframe",level:3},{value:"The Dataframe",id:"the-dataframe",level:3},{value:"Common Data Types",id:"common-data-types",level:2},{value:"Strings (+/?)",id:"strings-",level:3},{value:"Unsigned integers (:)",id:"unsigned-integers-",level:3},{value:"Arrays (&amp;)",id:"arrays-",level:3},{value:"Important notes",id:"important-notes",level:3},{value:"Response Specific Data Types",id:"response-specific-data-types",level:2},{value:"Response Codes (!)",id:"response-codes-",level:3},{value:"A full example (a simple query)",id:"a-full-example-a-simple-query",level:2},{value:"A full example (a pipelined query)",id:"a-full-example-a-pipelined-query",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"About this document",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Copyright (c) 2021 Sayan Nandan ","<",(0,r.kt)("a",{parentName:"p",href:"mailto:nandansayan@outlook.com"},"nandansayan@outlook.com"),">",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"In effect since:")," 0.6.0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Date:")," 11",(0,r.kt)("sup",null,"th")," May, 2021",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Deprecated since:")," 0.8.0")),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Skyhash 1.0 has been deprecated. All new clients should use ",(0,r.kt)("a",{parentName:"p",href:"../skyhash"},"Skyhash 2.0"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Skyhash or the Skytable Serialization Protocol (SSP) is a serialization protocol built on top of TCP that is\nused by Skytable for client/server communication. All clients willing to communicate with Skytable need to implement this protocol."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"Skyhash uses a query/response action just like HTTP's request/response action ","\u2014","\nclients send queries while the server sends responses. All the bytes sent by a client to a server is called a ",(0,r.kt)("em",{parentName:"p"},"Query Packet")," while all the bytes sent by the server in response to this is called the ",(0,r.kt)("em",{parentName:"p"},"Response packet"),"."),(0,r.kt)("p",null,"There are different kinds of queries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple queries"),": These queries just have one action in the query packet, and hence, have just one response in the response packet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pipeline queries"),": These queries carry multiple actions in the query pakcet and hence their response packet also contains multiple responses. You can read more about querying ",(0,r.kt)("a",{parentName:"li",href:"actions-overview"},"here"),".")),(0,r.kt)("p",null,"Irrespective of the query type, all these packets are made of a metaframe and a dataframe."),(0,r.kt)("h3",{id:"the-metaframe"},"The Metaframe"),(0,r.kt)("p",null,"The metaframe is the first part of the packet separated from the rest of the packet by a line feed (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),") character. It looks like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*<c>\\n\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<c>")," tells us the number of actions this packet corresponds to. For simple queries which run one action, this will be one while for batch queries it can have any value in the range (1, +\u221e)."),(0,r.kt)("h3",{id:"the-dataframe"},"The Dataframe"),(0,r.kt)("p",null,"The dataframe is made up of elements. Each element corresponds to\na single action and hence corresponds to a single query. Simple queries will run one action and hence will have one element while batch queries will run a number of actions and hence will have a number of elements."),(0,r.kt)("p",null,"Every element is of a certain ",(0,r.kt)("a",{parentName:"p",href:"#common-data-types"},"data type")," and this type determines how the element is serialized with Skyhash. Responses receive some extra data types which are\nhighlighted in ",(0,r.kt)("a",{parentName:"p",href:"#response-specific-data-types"},"response specific data types"),"."),(0,r.kt)("h2",{id:"common-data-types"},"Common Data Types"),(0,r.kt)("p",null,"Usually serialized data types look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tsymbol><len>\\n\n-----DATA-------\n")),(0,r.kt)("p",null,"where the ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," corresponds to the Type Symbol and the ",(0,r.kt)("inlineCode",{parentName:"p"},"<len>")," corresponds to the length of\nthis element. Below is a list of data types and their ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbol>"),"s."),(0,r.kt)("h3",{id:"strings-"},"Strings (+/?)"),(0,r.kt)("p",null,"String elements are serialized like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+<c>\\n\n<mystring>\\n\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of bytes in the string '",(0,r.kt)("inlineCode",{parentName:"p"},"<mystring>"),"'.\nSo a string 'Sayan' will be serialized into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+5\\n\nSayan\\n\n")),(0,r.kt)("p",null,"There is also a binary string (binstr) type with a tsymbol ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),". For this kind of string, no unicode validation\nis carried out."),(0,r.kt)("h3",{id:"unsigned-integers-"},"Unsigned integers (:)"),(0,r.kt)("p",null,"64-bit usigned integers are serialized into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":<c>\\n\n<myint>\\n\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of digits in the integer and ",(0,r.kt)("inlineCode",{parentName:"p"},"<myint>")," is the integer itself."),(0,r.kt)("h3",{id:"arrays-"},"Arrays (&)"),(0,r.kt)("p",null,"Arrays are recursive data types, that is an array can contain another array which in turn can contain another array and so on. And array is essentially a collection of data types, including itself. Also, arrays can be multi-type."),(0,r.kt)("p",null,"Skyhash serializes arrays into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"&<c>\\n\n<elements>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of elements in this array and ",(0,r.kt)("inlineCode",{parentName:"p"},"<elements>")," are the elements present in the array. Take a look at the following examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An array containing two strings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"&2\\n\n+5\\n\nHello\n+5\\n\nWorld\\n\n")),(0,r.kt)("p",null,"This can be represented as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), String("World")]);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"An array containing a string an two integers:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"&3\\n\n+5\\n\nHello\n:1\\n\n0\\n\n:1\\n\n1\\n\n")),(0,r.kt)("p",null,"Which can be represented as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)]);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"An array containing two arrays:\nPipe symbols (|) and underscores (","_",") were added for explaining the logical parts of the array:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"          ___________________________\n&2\\n     |_____________|             |\n&2\\n     |             |             |\n+5\\n     |             |             |\nHello\\n  | Array 1     |             |\n+5\\n     |             |             |\nWorld\\n  |_____________|             |\n&3\\n     |             | Nested      |\n+5\\n     |             | Array       |\nHello\\n  |             |             |\n+5\\n     | Array 2     |             |\nWorld\\n  |             |             |\n+5\\n     |             |             |\nAgain\\n  |_____________|_____________|\n")),(0,r.kt)("p",null,"This can be represented as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Array([\n  Array([String("Hello"), String("World")]),\n  Array([String("Hello"), String("World"), String("Again")]),\n]);\n')),(0,r.kt)("p",null,"This can be nested even more!"),(0,r.kt)("h3",{id:"important-notes"},"Important notes"),(0,r.kt)("p",null,"These data types and ",(0,r.kt)("inlineCode",{parentName:"p"},"<tsymbols>")," are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of ",(0,r.kt)("inlineCode",{parentName:"p"},"UnimplementedError")," to indicate that your client cannot yet deserialize this specific type."),(0,r.kt)("admonition",{title:"Useful read",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We strongly recommend")," you to read the full list of types and how they are serialized ",(0,r.kt)("a",{parentName:"p",href:"data-types"},"in this document"),".")),(0,r.kt)("h2",{id:"response-specific-data-types"},"Response Specific Data Types"),(0,r.kt)("p",null,"Responses will return some additional data types. This is a ",(0,r.kt)("em",{parentName:"p"},"non-exhaustive")," list of such types."),(0,r.kt)("h3",{id:"response-codes-"},"Response Codes (!)"),(0,r.kt)("p",null,"Response codes are often returned by the server when no\n'producable' data can be returned, i.e something like FLUSHDB can only possibly return 'Okay' or an error. This distinction\nis made to reduce errors while matching responses. Skyhash will serialize a response code like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!<c>\\n\n<code>\\n\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of characters in the code and ",(0,r.kt)("inlineCode",{parentName:"p"},"<code>")," is the code itself. So Code ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," that corresponds to ",(0,r.kt)("inlineCode",{parentName:"p"},"OKAY")," will be serialized into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!1\\n\n0\\n\n")),(0,r.kt)("p",null,"You find a full list of response codes ",(0,r.kt)("a",{parentName:"p",href:"response-codes"},"in this table"),"."),(0,r.kt)("h2",{id:"a-full-example-a-simple-query"},"A full example (a simple query)"),(0,r.kt)("p",null,"Let's take a look at what happens when we send ",(0,r.kt)("inlineCode",{parentName:"p"},"SET x ex"),". First, the client needs to serialize\nit into a Skyhash compatible type. Since this is a simple query, we just have one single\nelement in the query array. Most of Skytable's common actions use arrays, and SET uses an ",(0,r.kt)("a",{parentName:"p",href:"data-types#any-array"},(0,r.kt)("inlineCode",{parentName:"a"},"AnyArray")),". So in ",(0,r.kt)("inlineCode",{parentName:"p"},"SET x ex"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a simple query"),(0,r.kt)("li",{parentName:"ul"},"We need to send an ",(0,r.kt)("a",{parentName:"li",href:"data-types#any-array"},(0,r.kt)("inlineCode",{parentName:"a"},"AnyArray"))),(0,r.kt)("li",{parentName:"ul"},"It has three elements: ",(0,r.kt)("inlineCode",{parentName:"li"},"['SET', 'x', 'ex']"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"*1\\n  # '*1' because this is a simple query\n~3\\n  # 3 elements\n3\\n   # 'SET' has 3 chars\nSET\\n # 'SET' itself\n1\\n   # 'x' has 1 char\nx\\n   # 'x' itself\n2\\n   # 'ex' has 2 chars\nex\\n  # 'ex' itself\n")),(0,r.kt)("p",null,"Way to go! We just did it!"),(0,r.kt)("p",null,"Now the server would return a query array with one element: a response code. This is what\nit returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"*1\\n\n!1\\n\n0\\n\n")),(0,r.kt)("p",null,"Here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*1")," because this response corresponds to a simple query"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!1")," because the returned data type is a response code with tsymbol ",(0,r.kt)("inlineCode",{parentName:"li"},"!")," and a length of ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\nchar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," because this is the response code that corresponds to ",(0,r.kt)("em",{parentName:"li"},"Okay"))),(0,r.kt)("h2",{id:"a-full-example-a-pipelined-query"},"A full example (a pipelined query)"),(0,r.kt)("p",null,"Let's take a look at when we send two queries ",(0,r.kt)("inlineCode",{parentName:"p"},"HEYA once")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HEYA twice")," to the server, as a pipelined query."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a pipelined query"),(0,r.kt)("li",{parentName:"ul"},"We need to send two ",(0,r.kt)("a",{parentName:"li",href:"data-types#any-array"},(0,r.kt)("inlineCode",{parentName:"a"},"AnyArray")),"s, one for each query")),(0,r.kt)("p",null,"This is what the client has to send (",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"s are used to denote comments):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'*2\\n    # *2 because this a pipelined query with two queries\n# we begin our first query from here\n~2\\n    # our first query has two elements: "HEYA" and "once"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n4\\n     # "once" has 4 characters\nonce\\n  # the element itself\n# we\'re done. the second query begins here\n~2\\n    # our second query has two elements: "HEYA" and "twice"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n5\\n     # "twice" has 5 characters\ntwice\\n # the element itself\n')),(0,r.kt)("p",null,"The server then responds with (",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"s are used to denote comments):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'*2\\n    # this response has two responses, for two queries\n# the first response\n+4\\n    # the first element "once" has 4 chars\nonce\\n  # the element itself\n# the second response\n+5\\n    # the second element "twice" has 5 chars\ntwice\\n # the element itself\n')),(0,r.kt)("p",null,"And there ","\u2014"," you've learned Skyhash!"))}d.isMDXComponent=!0}}]);