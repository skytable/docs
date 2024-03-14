"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9665],{3449:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(4848),i=s(8453);const t={id:"skyhash",title:"Skyhash Protocol 1.0"},a=void 0,l={id:"protocol/skyhash",title:"Skyhash Protocol 1.0",description:"Copyright (c) 2021 Sayan Nandan &lt;nandansayan@outlook.com&gt;",source:"@site/versioned_docs/version-0.7.4/protocol/skyhash.md",sourceDirName:"protocol",slug:"/protocol/skyhash",permalink:"/0.7.4/protocol/skyhash",draft:!1,unlisted:!1,tags:[],version:"0.7.4",frontMatter:{id:"skyhash",title:"Skyhash Protocol 1.0"},sidebar:"docs",previous:{title:"WHEREAMI",permalink:"/0.7.4/actions/whereami"},next:{title:"Data Types",permalink:"/0.7.4/protocol/data-types"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Metaframe",id:"the-metaframe",level:3},{value:"The Dataframe",id:"the-dataframe",level:3},{value:"Common Data Types",id:"common-data-types",level:2},{value:"Strings (+/?)",id:"strings-",level:3},{value:"Unsigned integers (:)",id:"unsigned-integers-",level:3},{value:"Arrays (&amp;)",id:"arrays-",level:3},{value:"Important notes",id:"important-notes",level:3},{value:"Response Specific Data Types",id:"response-specific-data-types",level:2},{value:"Response Codes (!)",id:"response-codes-",level:3},{value:"A full example (a simple query)",id:"a-full-example-a-simple-query",level:2},{value:"A full example (a pipelined query)",id:"a-full-example-a-pipelined-query",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"About this document",type:"note",children:(0,r.jsxs)(n.p,{children:["Copyright (c) 2021 Sayan Nandan <",(0,r.jsx)(n.a,{href:"mailto:nandansayan@outlook.com",children:"nandansayan@outlook.com"}),">",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"In effect since:"})," v0.6.0",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Date:"})," 11",(0,r.jsx)("sup",{children:"th"})," May, 2021"]})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Skyhash or the Skytable Serialization Protocol (SSP) is a serialization protocol built on top of TCP that is\nused by Skytable for client/server communication. All clients willing to communicate with Skytable need to implement this protocol."}),"\n",(0,r.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,r.jsxs)(n.p,{children:["Skyhash uses a query/response action just like HTTP's request/response action \u2014\nclients send queries while the server sends responses. All the bytes sent by a client to a server is called a ",(0,r.jsx)(n.em,{children:"Query Packet"})," while all the bytes sent by the server in response to this is called the ",(0,r.jsx)(n.em,{children:"Response packet"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"There are different kinds of queries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simple queries"}),": These queries just have one action in the query packet, and hence, have just one response in the response packet"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pipeline queries"}),": These queries carry multiple actions in the query pakcet and hence their response packet also contains multiple responses. You can read more about querying ",(0,r.jsx)(n.a,{href:"../actions-overview",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Irrespective of the query type, all these packets are made of a metaframe and a dataframe."}),"\n",(0,r.jsx)(n.h3,{id:"the-metaframe",children:"The Metaframe"}),"\n",(0,r.jsxs)(n.p,{children:["The metaframe is the first part of the packet separated from the rest of the packet by a line feed (",(0,r.jsx)(n.code,{children:"\\n"}),") character. It looks like\nthis:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"*<c>\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"<c>"})," tells us the number of actions this packet corresponds to. For simple queries which run one action, this will be one while for batch queries it can have any value in the range (1, +\u221e)."]}),"\n",(0,r.jsx)(n.h3,{id:"the-dataframe",children:"The Dataframe"}),"\n",(0,r.jsx)(n.p,{children:"The dataframe is made up of elements. Each element corresponds to\na single action and hence corresponds to a single query. Simple queries will run one action and hence will have one element while batch queries will run a number of actions and hence will have a number of elements."}),"\n",(0,r.jsxs)(n.p,{children:["Every element is of a certain ",(0,r.jsx)(n.a,{href:"#common-data-types",children:"data type"})," and this type determines how the element is serialized with Skyhash. Responses receive some extra data types which are\nhighlighted in ",(0,r.jsx)(n.a,{href:"#response-specific-data-types",children:"response specific data types"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"common-data-types",children:"Common Data Types"}),"\n",(0,r.jsx)(n.p,{children:"Usually serialized data types look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<tsymbol><len>\\n\n-----DATA-------\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where the ",(0,r.jsx)(n.code,{children:"<tsymbol>"})," corresponds to the Type Symbol and the ",(0,r.jsx)(n.code,{children:"<len>"})," corresponds to the length of\nthis element. Below is a list of data types and their ",(0,r.jsx)(n.code,{children:"<tsymbol>"}),"s."]}),"\n",(0,r.jsx)(n.h3,{id:"strings-",children:"Strings (+/?)"}),"\n",(0,r.jsx)(n.p,{children:"String elements are serialized like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"+<c>\\n\n<mystring>\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<c>"})," is the number of bytes in the string '",(0,r.jsx)(n.code,{children:"<mystring>"}),"'.\nSo a string 'Sayan' will be serialized into:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"+5\\n\nSayan\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There is also a binary string (binstr) type with a tsymbol ",(0,r.jsx)(n.code,{children:"?"}),". For this kind of string, no unicode validation\nis carried out."]}),"\n",(0,r.jsx)(n.h3,{id:"unsigned-integers-",children:"Unsigned integers (:)"}),"\n",(0,r.jsx)(n.p,{children:"64-bit usigned integers are serialized into:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:":<c>\\n\n<myint>\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<c>"})," is the number of digits in the integer and ",(0,r.jsx)(n.code,{children:"<myint>"})," is the integer itself."]}),"\n",(0,r.jsx)(n.h3,{id:"arrays-",children:"Arrays (&)"}),"\n",(0,r.jsx)(n.p,{children:"Arrays are recursive data types, that is an array can contain another array which in turn can contain another array and so on. And array is essentially a collection of data types, including itself. Also, arrays can be multi-type."}),"\n",(0,r.jsx)(n.p,{children:"Skyhash serializes arrays into:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"&<c>\\n\n<elements>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<c>"})," is the number of elements in this array and ",(0,r.jsx)(n.code,{children:"<elements>"})," are the elements present in the array. Take a look at the following examples:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"An array containing two strings:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"&2\\n\n+5\\n\nHello\n+5\\n\nWorld\\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"This can be represented as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Array([String("Hello"), String("World")]);\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"An array containing a string an two integers:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"&3\\n\n+5\\n\nHello\n:1\\n\n0\\n\n:1\\n\n1\\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which can be represented as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Array([String("Hello"), UnsignedInt64(0), UnsignedInt64(1)]);\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"An array containing two arrays:\nPipe symbols (|) and underscores (_) were added for explaining the logical parts of the array:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"          ___________________________\n&2\\n     |_____________|             |\n&2\\n     |             |             |\n+5\\n     |             |             |\nHello\\n  | Array 1     |             |\n+5\\n     |             |             |\nWorld\\n  |_____________|             |\n&3\\n     |             | Nested      |\n+5\\n     |             | Array       |\nHello\\n  |             |             |\n+5\\n     | Array 2     |             |\nWorld\\n  |             |             |\n+5\\n     |             |             |\nAgain\\n  |_____________|_____________|\n"})}),"\n",(0,r.jsx)(n.p,{children:"This can be represented as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Array([\n  Array([String("Hello"), String("World")]),\n  Array([String("Hello"), String("World"), String("Again")]),\n]);\n'})}),"\n",(0,r.jsx)(n.p,{children:"This can be nested even more!"}),"\n",(0,r.jsx)(n.h3,{id:"important-notes",children:"Important notes"}),"\n",(0,r.jsxs)(n.p,{children:["These data types and ",(0,r.jsx)(n.code,{children:"<tsymbols>"})," are non-exhaustive. Whenever you are attempting to deserialize a packet, always throw some kind of ",(0,r.jsx)(n.code,{children:"UnimplementedError"})," to indicate that your client cannot yet deserialize this specific type."]}),"\n",(0,r.jsx)(n.admonition,{title:"Useful read",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"We strongly recommend"})," you to read the full list of types and how they are serialized ",(0,r.jsx)(n.a,{href:"data-types",children:"in this document"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"response-specific-data-types",children:"Response Specific Data Types"}),"\n",(0,r.jsxs)(n.p,{children:["Responses will return some additional data types. This is a ",(0,r.jsx)(n.em,{children:"non-exhaustive"})," list of such types."]}),"\n",(0,r.jsx)(n.h3,{id:"response-codes-",children:"Response Codes (!)"}),"\n",(0,r.jsx)(n.p,{children:"Response codes are often returned by the server when no\n'producable' data can be returned, i.e something like FLUSHDB can only possibly return 'Okay' or an error. This distinction\nis made to reduce errors while matching responses. Skyhash will serialize a response code like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"!<c>\\n\n<code>\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<c>"})," is the number of characters in the code and ",(0,r.jsx)(n.code,{children:"<code>"})," is the code itself. So Code ",(0,r.jsx)(n.code,{children:"0"})," that corresponds to ",(0,r.jsx)(n.code,{children:"OKAY"})," will be serialized into:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"!1\\n\n0\\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You find a full list of response codes ",(0,r.jsx)(n.a,{href:"response-codes",children:"in this table"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"a-full-example-a-simple-query",children:"A full example (a simple query)"}),"\n",(0,r.jsxs)(n.p,{children:["Let's take a look at what happens when we send ",(0,r.jsx)(n.code,{children:"SET x ex"}),". First, the client needs to serialize\nit into a Skyhash compatible type. Since this is a simple query, we just have one single\nelement in the query array. Most of Skytable's common actions use arrays, and SET uses an ",(0,r.jsx)(n.a,{href:"data-types#any-array",children:(0,r.jsx)(n.code,{children:"AnyArray"})}),". So in ",(0,r.jsx)(n.code,{children:"SET x ex"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is a simple query"}),"\n",(0,r.jsxs)(n.li,{children:["We need to send an ",(0,r.jsx)(n.a,{href:"data-types#any-array",children:(0,r.jsx)(n.code,{children:"AnyArray"})})]}),"\n",(0,r.jsxs)(n.li,{children:["It has three elements: ",(0,r.jsx)(n.code,{children:"['SET', 'x', 'ex']"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"*1\\n  # '*1' because this is a simple query\n~3\\n  # 3 elements\n3\\n   # 'SET' has 3 chars\nSET\\n # 'SET' itself\n1\\n   # 'x' has 1 char\nx\\n   # 'x' itself\n2\\n   # 'ex' has 2 chars\nex\\n  # 'ex' itself\n"})}),"\n",(0,r.jsx)(n.p,{children:"Way to go! We just did it!"}),"\n",(0,r.jsx)(n.p,{children:"Now the server would return a query array with one element: a response code. This is what\nit returns:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"*1\\n\n!1\\n\n0\\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*1"})," because this response corresponds to a simple query"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"!1"})," because the returned data type is a response code with tsymbol ",(0,r.jsx)(n.code,{children:"!"})," and a length of ",(0,r.jsx)(n.code,{children:"1"}),"\nchar"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0"})," because this is the response code that corresponds to ",(0,r.jsx)(n.em,{children:"Okay"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"a-full-example-a-pipelined-query",children:"A full example (a pipelined query)"}),"\n",(0,r.jsxs)(n.p,{children:["Let's take a look at when we send two queries ",(0,r.jsx)(n.code,{children:"HEYA once"})," and ",(0,r.jsx)(n.code,{children:"HEYA twice"})," to the server, as a pipelined query."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is a pipelined query"}),"\n",(0,r.jsxs)(n.li,{children:["We need to send two ",(0,r.jsx)(n.a,{href:"data-types#any-array",children:(0,r.jsx)(n.code,{children:"AnyArray"})}),"s, one for each query"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This is what the client has to send (",(0,r.jsx)(n.code,{children:"#"}),"s are used to denote comments):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'*2\\n    # *2 because this a pipelined query with two queries\n# we begin our first query from here\n~2\\n    # our first query has two elements: "HEYA" and "once"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n4\\n     # "once" has 4 characters\nonce\\n  # the element itself\n# we\'re done. the second query begins here\n~2\\n    # our second query has two elements: "HEYA" and "twice"\n4\\n     # "HEYA" has 4 characters\nHEYA\\n  # the element itself\n5\\n     # "twice" has 5 characters\ntwice\\n # the element itself\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The server then responds with (",(0,r.jsx)(n.code,{children:"#"}),"s are used to denote comments):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'*2\\n    # this response has two responses, for two queries\n# the first response\n+4\\n    # the first element "once" has 4 chars\nonce\\n  # the element itself\n# the second response\n+5\\n    # the second element "twice" has 5 chars\ntwice\\n # the element itself\n'})}),"\n",(0,r.jsx)(n.p,{children:"And there \u2014 you've learned Skyhash!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);