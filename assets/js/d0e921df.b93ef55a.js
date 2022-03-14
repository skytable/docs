"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64926],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2730:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"skyhash",title:"Skyhash Protocol 1.0"},l=void 0,p={unversionedId:"protocol/skyhash",id:"version-0.6.2/protocol/skyhash",title:"Skyhash Protocol 1.0",description:"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;",source:"@site/versioned_docs/version-0.6.2/protocol/skyhash.md",sourceDirName:"protocol",slug:"/protocol/skyhash",permalink:"/0.6.2/protocol/skyhash",tags:[],version:"0.6.2",frontMatter:{id:"skyhash",title:"Skyhash Protocol 1.0"},sidebar:"version-0.6.2/docs",previous:{title:"USET",permalink:"/0.6.2/actions/uset"},next:{title:"Data Types",permalink:"/0.6.2/protocol/data-types"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Metaframe",id:"the-metaframe",level:3},{value:"The Dataframe",id:"the-dataframe",level:3},{value:"Common Data Types",id:"common-data-types",level:2},{value:"Strings (+)",id:"strings-",level:3},{value:"Unsigned integers (:)",id:"unsigned-integers-",level:3},{value:"Arrays (&amp;)",id:"arrays-",level:3},{value:"Important notes",id:"important-notes",level:3},{value:"Response Specific Data Types",id:"response-specific-data-types",level:2},{value:"Response Codes (!)",id:"response-codes-",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Copyright (c) 2021 Sayan Nandan ","<",(0,o.kt)("a",{parentName:"p",href:"mailto:nandansayan@outlook.com"},"nandansayan@outlook.com"),">",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"In effect since:")," v0.6.0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Date:")," 11",(0,o.kt)("sup",null,"th")," May, 2021"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Skyhash or the Skytable Serialization Protocol (SSP) is a serialization protocol built on top of TCP that is\nused by Skytable for client/server communication. All clients willing to communicate with Skytable need to implement this protocol."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Skyhash uses a query/response action just like HTTP's request/response action ","\u2014","\nclients send queries while the server sends responses. All the bytes sent by a client to a server is called a ",(0,o.kt)("em",{parentName:"p"},"Query Packet")," while all the bytes sent by the server in response to this is called the ",(0,o.kt)("em",{parentName:"p"},"Response packet"),"."),(0,o.kt)("p",null,"Irrespective of the action type, all these packets are made of a metaframe and a dataframe."),(0,o.kt)("h3",{id:"the-metaframe"},"The Metaframe"),(0,o.kt)("p",null,"The metaframe is the first part of the packet separated from the rest of the packet by a line feed (",(0,o.kt)("inlineCode",{parentName:"p"},"\\n"),") character. It looks like\nthis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*<c>\\n\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<c>")," tells us the number of actions this packet corresponds to. For simple queries which run one action, this will be one while for batch queries it can have any value in the range (1, +\u221e)."),(0,o.kt)("h3",{id:"the-dataframe"},"The Dataframe"),(0,o.kt)("p",null,"The dataframe is made up of elements. Each element corresponds to\na single action and hence corresponds to a single query. Simple queries will run one action and hence will have one element while batch queries will run a number of actions and hence will have a number of elements."),(0,o.kt)("p",null,"Every element is of a certain ",(0,o.kt)("a",{parentName:"p",href:"#common-data-types"},"data type")," and this type determines how the element is serialized with Skyhash. Responses receive some extra data types which are\nhighlighted in ",(0,o.kt)("a",{parentName:"p",href:"#response-specific-data-types"},"response specific data types"),"."),(0,o.kt)("h2",{id:"common-data-types"},"Common Data Types"),(0,o.kt)("p",null,"Usually serialized data types look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<tsymbol><len>\\n\n-----DATA-------\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," corresponds to the Type Symbol and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<len>")," corresponds to the length of\nthis element. Below is a list of data types and their ",(0,o.kt)("inlineCode",{parentName:"p"},"<tsymbol>"),"s."),(0,o.kt)("h3",{id:"strings-"},"Strings (+)"),(0,o.kt)("p",null,"String elements are serialized like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+<c>\\n\n<mystring>\\n\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of bytes in the string '",(0,o.kt)("inlineCode",{parentName:"p"},"<mystring>"),"'.\nSo a string 'Sayan' will be serialized into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+5\\n\nSayan\\n\n")),(0,o.kt)("p",null,"Strings are binary safe because they have prefixed lengths"),(0,o.kt)("h3",{id:"unsigned-integers-"},"Unsigned integers (:)"),(0,o.kt)("p",null,"64-bit usigned integers are serialized into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":<c>\\n\n<myint>\\n\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of digits in the integer and ",(0,o.kt)("inlineCode",{parentName:"p"},"<myint>")," is the integer itself."),(0,o.kt)("h3",{id:"arrays-"},"Arrays (&)"),(0,o.kt)("p",null,"Arrays are recursive data types, that is an array can contain another array which in turn can contain another array and so on. And array is essentially a collection of data types, including itself. Also, arrays can be multi-type."),(0,o.kt)("p",null,"Skyhash serializes arrays into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"&<c>\\n\n<elements>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of elements in this array and ",(0,o.kt)("inlineCode",{parentName:"p"},"<elements>")," are the elements present in the array. Take a look at the following examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An array containing two strings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"&2\\n\n+5\\n\nHello\n+5\\n\nWorld\\n\n")),(0,o.kt)("p",null,"This can be represented as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), String("World")])\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"An array containing a string an two integers:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"&3\\n\n+5\\n\nHello\n:1\\n\n0\\n\n:1\\n\n1\\n\n")),(0,o.kt)("p",null,"Which can be represented as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)])\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"An array containing two arrays:\nPipe symbols (|) and underscores (_) were added for explaining the logical parts of the array:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"          ___________________________\n&2\\n     |_____________|             |\n&2\\n     |             |             |\n+5\\n     |             |             |\nHello\\n  | Array 1     |             |\n+5\\n     |             |             |\nWorld\\n  |_____________|             |\n&3\\n     |             | Nested      |\n+5\\n     |             | Array       |\nHello\\n  |             |             |\n+5\\n     | Array 2     |             |\nWorld\\n  |             |             |\n+5\\n     |             |             |\nAgain\\n  |_____________|_____________|\n")),(0,o.kt)("p",null,"This can be represented as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Array([\n    Array([String("Hello"), String("World")]),\n    Array([String("Hello"), String("World"), String("Again")])\n])\n')),(0,o.kt)("p",null,"This can be nested even more!"),(0,o.kt)("h3",{id:"important-notes"},"Important notes"),(0,o.kt)("p",null,"These data types and ",(0,o.kt)("inlineCode",{parentName:"p"},"<tsymbols>")," are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"UnimplementedError")," to indicate that your client cannot yet deserialize this specific type. See all current data types and their tsymbols ",(0,o.kt)("a",{parentName:"p",href:"data-types"},"in this table"),"."),(0,o.kt)("h2",{id:"response-specific-data-types"},"Response Specific Data Types"),(0,o.kt)("p",null,"Responses will return some additional data types. This is a ",(0,o.kt)("em",{parentName:"p"},"non-exhaustive")," list of such types."),(0,o.kt)("h3",{id:"response-codes-"},"Response Codes (!)"),(0,o.kt)("p",null,"Response codes are often returned by the server when no\n'producable' data can be returned, i.e something like FLUSHDB can only possibly return 'Okay' or an error. This distinction\nis made to reduce errors while matching responses. Skyhash will serialize a response code like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!<c>\\n\n<code>\\n\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<c>")," is the number of characters in the code and ",(0,o.kt)("inlineCode",{parentName:"p"},"<code>")," is the code itself. So Code ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," that corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"OKAY")," will be serialized into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!1\\n\n0\\n\n")),(0,o.kt)("p",null,"You find a full list of response codes ",(0,o.kt)("a",{parentName:"p",href:"response-codes"},"in this table"),"."))}u.isMDXComponent=!0}}]);