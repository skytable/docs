"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80526],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return t?a.createElement(u,s(s({ref:n},c),{},{components:t})):a.createElement(u,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],l={id:"skyhash",title:"Skyhash Protocol 1.0"},o=void 0,p={unversionedId:"protocol/skyhash",id:"version-0.7.4/protocol/skyhash",title:"Skyhash Protocol 1.0",description:"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;",source:"@site/versioned_docs/version-0.7.4/protocol/skyhash.md",sourceDirName:"protocol",slug:"/protocol/skyhash",permalink:"/0.7.4/protocol/skyhash",tags:[],version:"0.7.4",frontMatter:{id:"skyhash",title:"Skyhash Protocol 1.0"},sidebar:"docs",previous:{title:"WHEREAMI",permalink:"/0.7.4/actions/whereami"},next:{title:"Data Types",permalink:"/0.7.4/protocol/data-types"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Metaframe",id:"the-metaframe",level:3},{value:"The Dataframe",id:"the-dataframe",level:3},{value:"Common Data Types",id:"common-data-types",level:2},{value:"Strings (+/?)",id:"strings-",level:3},{value:"Unsigned integers (:)",id:"unsigned-integers-",level:3},{value:"Arrays (&amp;)",id:"arrays-",level:3},{value:"Important notes",id:"important-notes",level:3},{value:"Response Specific Data Types",id:"response-specific-data-types",level:2},{value:"Response Codes (!)",id:"response-codes-",level:3},{value:"A full example (a simple query)",id:"a-full-example-a-simple-query",level:2},{value:"A full example (a pipelined query)",id:"a-full-example-a-pipelined-query",level:2}],m={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Copyright (c) 2021 Sayan Nandan ","<",(0,i.kt)("a",{parentName:"p",href:"mailto:nandansayan@outlook.com"},"nandansayan@outlook.com"),">",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"In effect since:")," v0.6.0",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Date:")," 11",(0,i.kt)("sup",null,"th")," May, 2021"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Skyhash or the Skytable Serialization Protocol (SSP) is a serialization protocol built on top of TCP that is\nused by Skytable for client/server communication. All clients willing to communicate with Skytable need to implement this protocol."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"Skyhash uses a query/response action just like HTTP's request/response action ","\u2014","\nclients send queries while the server sends responses. All the bytes sent by a client to a server is called a ",(0,i.kt)("em",{parentName:"p"},"Query Packet")," while all the bytes sent by the server in response to this is called the ",(0,i.kt)("em",{parentName:"p"},"Response packet"),"."),(0,i.kt)("p",null,"There are different kinds of queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple queries"),": These queries just have one action in the query packet, and hence, have just one response in the response packet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pipeline queries"),": These queries carry multiple actions in the query pakcet and hence their response packet also contains multiple responses. You can read more about querying ",(0,i.kt)("a",{parentName:"li",href:"../actions-overview"},"here"),".")),(0,i.kt)("p",null,"Irrespective of the query type, all these packets are made of a metaframe and a dataframe."),(0,i.kt)("h3",{id:"the-metaframe"},"The Metaframe"),(0,i.kt)("p",null,"The metaframe is the first part of the packet separated from the rest of the packet by a line feed (",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),") character. It looks like\nthis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*<c>\\n\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<c>")," tells us the number of actions this packet corresponds to. For simple queries which run one action, this will be one while for batch queries it can have any value in the range (1, +\u221e)."),(0,i.kt)("h3",{id:"the-dataframe"},"The Dataframe"),(0,i.kt)("p",null,"The dataframe is made up of elements. Each element corresponds to\na single action and hence corresponds to a single query. Simple queries will run one action and hence will have one element while batch queries will run a number of actions and hence will have a number of elements."),(0,i.kt)("p",null,"Every element is of a certain ",(0,i.kt)("a",{parentName:"p",href:"#common-data-types"},"data type")," and this type determines how the element is serialized with Skyhash. Responses receive some extra data types which are\nhighlighted in ",(0,i.kt)("a",{parentName:"p",href:"#response-specific-data-types"},"response specific data types"),"."),(0,i.kt)("h2",{id:"common-data-types"},"Common Data Types"),(0,i.kt)("p",null,"Usually serialized data types look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<tsymbol><len>\\n\n-----DATA-------\n")),(0,i.kt)("p",null,"where the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," corresponds to the Type Symbol and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<len>")," corresponds to the length of\nthis element. Below is a list of data types and their ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>"),"s."),(0,i.kt)("h3",{id:"strings-"},"Strings (+/?)"),(0,i.kt)("p",null,"String elements are serialized like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+<c>\\n\n<mystring>\\n\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of bytes in the string '",(0,i.kt)("inlineCode",{parentName:"p"},"<mystring>"),"'.\nSo a string 'Sayan' will be serialized into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+5\\n\nSayan\\n\n")),(0,i.kt)("p",null,"There is also a binary string (binstr) type with a tsymbol ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),". For this kind of string, no unicode validation\nis carried out."),(0,i.kt)("h3",{id:"unsigned-integers-"},"Unsigned integers (:)"),(0,i.kt)("p",null,"64-bit usigned integers are serialized into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":<c>\\n\n<myint>\\n\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of digits in the integer and ",(0,i.kt)("inlineCode",{parentName:"p"},"<myint>")," is the integer itself."),(0,i.kt)("h3",{id:"arrays-"},"Arrays (&)"),(0,i.kt)("p",null,"Arrays are recursive data types, that is an array can contain another array which in turn can contain another array and so on. And array is essentially a collection of data types, including itself. Also, arrays can be multi-type."),(0,i.kt)("p",null,"Skyhash serializes arrays into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"&<c>\\n\n<elements>\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of elements in this array and ",(0,i.kt)("inlineCode",{parentName:"p"},"<elements>")," are the elements present in the array. Take a look at the following examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An array containing two strings:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"&2\\n\n+5\\n\nHello\n+5\\n\nWorld\\n\n")),(0,i.kt)("p",null,"This can be represented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), String("World")]);\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"An array containing a string an two integers:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"&3\\n\n+5\\n\nHello\n:1\\n\n0\\n\n:1\\n\n1\\n\n")),(0,i.kt)("p",null,"Which can be represented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)]);\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"An array containing two arrays:\nPipe symbols (|) and underscores (","_",") were added for explaining the logical parts of the array:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"          ___________________________\n&2\\n     |_____________|             |\n&2\\n     |             |             |\n+5\\n     |             |             |\nHello\\n  | Array 1     |             |\n+5\\n     |             |             |\nWorld\\n  |_____________|             |\n&3\\n     |             | Nested      |\n+5\\n     |             | Array       |\nHello\\n  |             |             |\n+5\\n     | Array 2     |             |\nWorld\\n  |             |             |\n+5\\n     |             |             |\nAgain\\n  |_____________|_____________|\n")),(0,i.kt)("p",null,"This can be represented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Array([\n  Array([String("Hello"), String("World")]),\n  Array([String("Hello"), String("World"), String("Again")]),\n]);\n')),(0,i.kt)("p",null,"This can be nested even more!"),(0,i.kt)("h3",{id:"important-notes"},"Important notes"),(0,i.kt)("p",null,"These data types and ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbols>")," are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of ",(0,i.kt)("inlineCode",{parentName:"p"},"UnimplementedError")," to indicate that your client cannot yet deserialize this specific type."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Useful read")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"We strongly recommend")," you to read the full list of types and how they are serialized ",(0,i.kt)("a",{parentName:"p",href:"data-types"},"in this document"),"."))),(0,i.kt)("h2",{id:"response-specific-data-types"},"Response Specific Data Types"),(0,i.kt)("p",null,"Responses will return some additional data types. This is a ",(0,i.kt)("em",{parentName:"p"},"non-exhaustive")," list of such types."),(0,i.kt)("h3",{id:"response-codes-"},"Response Codes (!)"),(0,i.kt)("p",null,"Response codes are often returned by the server when no\n'producable' data can be returned, i.e something like FLUSHDB can only possibly return 'Okay' or an error. This distinction\nis made to reduce errors while matching responses. Skyhash will serialize a response code like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!<c>\\n\n<code>\\n\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of characters in the code and ",(0,i.kt)("inlineCode",{parentName:"p"},"<code>")," is the code itself. So Code ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," that corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"OKAY")," will be serialized into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!1\\n\n0\\n\n")),(0,i.kt)("p",null,"You find a full list of response codes ",(0,i.kt)("a",{parentName:"p",href:"response-codes"},"in this table"),"."),(0,i.kt)("h2",{id:"a-full-example-a-simple-query"},"A full example (a simple query)"),(0,i.kt)("p",null,"Let's take a look at what happens when we send ",(0,i.kt)("inlineCode",{parentName:"p"},"SET x ex"),". First, the client needs to serialize\nit into a Skyhash compatible type. Since this is a simple query, we just have one single\nelement in the query array. Most of Skytable's common actions use arrays, and SET uses an ",(0,i.kt)("a",{parentName:"p",href:"data-types#any-array"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyArray")),". So in ",(0,i.kt)("inlineCode",{parentName:"p"},"SET x ex"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is a simple query"),(0,i.kt)("li",{parentName:"ul"},"We need to send an ",(0,i.kt)("a",{parentName:"li",href:"data-types#any-array"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyArray"))),(0,i.kt)("li",{parentName:"ul"},"It has three elements: ",(0,i.kt)("inlineCode",{parentName:"li"},"['SET', 'x', 'ex']"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"*1\\n  # '*1' because this is a simple query\n~3\\n  # 3 elements\n3\\n   # 'SET' has 3 chars\nSET\\n # 'SET' itself\n1\\n   # 'x' has 1 char\nx\\n   # 'x' itself\n2\\n   # 'ex' has 2 chars\nex\\n  # 'ex' itself\n")),(0,i.kt)("p",null,"Way to go! We just did it!"),(0,i.kt)("p",null,"Now the server would return a query array with one element: a response code. This is what\nit returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"*1\\n\n!1\\n\n0\\n\n")),(0,i.kt)("p",null,"Here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*1")," because this response corresponds to a simple query"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!1")," because the returned data type is a response code with tsymbol ",(0,i.kt)("inlineCode",{parentName:"li"},"!")," and a length of ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\nchar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," because this is the response code that corresponds to ",(0,i.kt)("em",{parentName:"li"},"Okay"))),(0,i.kt)("h2",{id:"a-full-example-a-pipelined-query"},"A full example (a pipelined query)"),(0,i.kt)("p",null,"Let's take a look at when we send two queries ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA once")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA twice")," to the server, as a pipelined query."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is a pipelined query"),(0,i.kt)("li",{parentName:"ul"},"We need to send two ",(0,i.kt)("a",{parentName:"li",href:"data-types#any-array"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyArray")),"s, one for each query")),(0,i.kt)("p",null,"This is what the client has to send (",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"s are used to denote comments):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'*2\\n    # *2 because this a pipelined query with two queries\n# we begin our first query from here\n~2\\n    # our first query has two elements: "HEYA" and "once"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n4\\n     # "once" has 4 characters\nonce\\n  # the element itself\n# we\'re done. the second query begins here\n~2\\n    # our second query has two elements: "HEYA" and "twice"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n5\\n     # "twice" has 5 characters\ntwice\\n # the element itself\n')),(0,i.kt)("p",null,"The server then responds with (",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"s are used to denote comments):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'*2\\n    # this response has two responses, for two queries\n# the first response\n+4\\n    # the first element "once" has 4 chars\nonce\\n  # the element itself\n# the second response\n+5\\n    # the second element "twice" has 5 chars\ntwice\\n # the element itself\n')),(0,i.kt)("p",null,"And there ","\u2014"," you've learned Skyhash!"))}h.isMDXComponent=!0}}]);