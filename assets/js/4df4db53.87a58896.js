"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),y=s(n),u=r,k=y["".concat(o,".").concat(u)]||y[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"data-types",title:"Data Types"},i=void 0,p={unversionedId:"protocol/data-types",id:"version-0.7.2/protocol/data-types",title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/versioned_docs/version-0.7.2/protocol/data-types.md",sourceDirName:"protocol",slug:"/protocol/data-types",permalink:"/0.7.2/protocol/data-types",draft:!1,tags:[],version:"0.7.2",frontMatter:{id:"data-types",title:"Data Types"},sidebar:"version-0.7.2/docs",previous:{title:"Skyhash Protocol 1.0",permalink:"/0.7.2/protocol/skyhash"},next:{title:"Response Codes",permalink:"/0.7.2/protocol/response-codes"}},o={},s=[{value:"Simple types",id:"simple-types",level:2},{value:"Example",id:"example",level:3},{value:"Table",id:"table",level:3},{value:"Compound types",id:"compound-types",level:2},{value:"Table",id:"table-1",level:3},{value:"Array",id:"array",level:3},{value:"Flat array",id:"flat-array",level:3},{value:"Typed array",id:"typed-array",level:3},{value:"Any array",id:"any-array",level:3},{value:"Typed non-null array",id:"typed-non-null-array",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",(0,r.kt)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),(0,r.kt)("h2",{id:"simple-types"},"Simple types"),(0,r.kt)("p",null,"Simple types only contain one type. This makes them very simple to serialize/deserialize. All simple types have the\nfollowing layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tsymbol><number of bytes>\\n\n<element>\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"For an unicode string 'sayan', the layout of the unicode string type (",(0,r.kt)("inlineCode",{parentName:"p"},"+"),") will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"+5\\n    # 'sayan' is an unicode string, so '+' and has 5 bytes so '5'\nsayan\\n # the element 'sayan' itself\n")),(0,r.kt)("h3",{id:"table"},"Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Additional notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"+")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,r.kt)("td",{parentName:"tr",align:null},"a response code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$")," (reserved)"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"a ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON")," value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".")," (reserved)"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")," (reserved)"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint signed"),(0,r.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},":")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},";")," (reserved)"),(0,r.kt)("td",{parentName:"tr",align:null},"int signed"),(0,r.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%")," (reserved)"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?")),(0,r.kt)("td",{parentName:"tr",align:null},"binary string"),(0,r.kt)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),(0,r.kt)("p",null,"Do keep the matching for this symbol ",(0,r.kt)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."),(0,r.kt)("h2",{id:"compound-types"},"Compound types"),(0,r.kt)("p",null,"Compound types are derived types -- they are based on simple types, but often with\nsome additional properties (and serialization/deserialization differences)."),(0,r.kt)("h3",{id:"table-1"},"Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Additional notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"A recursive array"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"Flat array"),(0,r.kt)("td",{parentName:"tr",align:null},"A non-recursive array"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@"),(0,r.kt)("td",{parentName:"tr",align:null},"Typed array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of a specific type, with nullable elements"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"~"),(0,r.kt)("td",{parentName:"tr",align:null},"Any array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array with a single type but no information about the type"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"Typed non-null array"),(0,r.kt)("td",{parentName:"tr",align:null},"A non-recursive array with non-null elements"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1")))),(0,r.kt)("h3",{id:"array"},"Array"),(0,r.kt)("p",null,"See the full discussion on arrays ",(0,r.kt)("a",{parentName:"p",href:"skyhash#arrays-"},"here"),"."),(0,r.kt)("h3",{id:"flat-array"},"Flat array"),(0,r.kt)("p",null,"A flat array is like an array, but with the exception that it is non-recursive. This\nmeans that a flat array can contain all types except other compound types (hence the\nname 'flat')."),(0,r.kt)("p",null,"So if you represent an array in a programming language like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["hello", 12345, "world"];\n')),(0,r.kt)("p",null,"then it will be serialized by Skyhash into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"_3\\n    # 3 elements\n+5\\n    # 'hello' is an unicode string, so '+' and has 5 bytes\nhello\\n # the element 'hello' itself\n:5\\n    # 12345 has 5 bytes and is an unsigned int\n12345\\n # the element 12345 itself\n+5\\n    # 'world' is an unicode string, so '+' and has 5 bytes\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A flat array is currently a response specific data type (only sent by the server and never by the client)")),(0,r.kt)("h3",{id:"typed-array"},"Typed array"),(0,r.kt)("p",null,"A typed array is like a flat array, but with the exception that it can only hold\ntwo types: either a ",(0,r.kt)("a",{parentName:"p",href:"#simple-types"},"simple type")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),". Since this array just has a specific type in its declaration, unlike flat arrays, ",(0,r.kt)("inlineCode",{parentName:"p"},"tsymbol"),"s are not required."),(0,r.kt)("p",null,"You can think of it to be like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"there is either no element (integer value of ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"; also called ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),")"),(0,r.kt)("li",{parentName:"ul"},"or there is an element of the declared type")),(0,r.kt)("p",null,"Say a programming language represents an array like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'["omg", NULL, "happened"]\n')),(0,r.kt)("p",null,"then it will be serialized by Skyhash into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@+3\\n\n3\\n\nomg\\n\n\\0\\n\n8\\n\nhappened\\n\n")),(0,r.kt)("p",null,"Line-by-line explanation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@+3\\n")," because it is a typed array, so ",(0,r.kt)("inlineCode",{parentName:"li"},"@"),", the elements are unicode strings, so ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),"\nand there are three elements, so ",(0,r.kt)("inlineCode",{parentName:"li"},"3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3\\n")," because 'omg' has 3 bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"omg\\n"),", the element itself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\0\\n"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," because there was no element",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0")," corresponds to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_character"},"null terminator")," (integer value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"8\\n")," because 'happened' has 8 bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"happened\\n"),", the element itself")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A typed array is currently a response specific data type (only sent by the server and never by the client). The ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"s correspond to the cases when the server can't find the requested item.")),(0,r.kt)("h3",{id:"any-array"},"Any array"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyArray")," is like a typed array ","\u2014"," but without any explicit information about the type that is sent. Currently,\n",(0,r.kt)("strong",{parentName:"p"},"all the element types have to be the same"),", but however, no information about the type has to be sent. It is upto\nthe server to convert them to the correct types. This makes running actions extremely simple as the clients don't have\nto specify the type. The server will convert it into the appropriate type for that action. No matter how flexible this\nmay sound -- ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyArray"),"s are extremely performant. Also, ",(0,r.kt)("strong",{parentName:"p"},"no element in an ",(0,r.kt)("inlineCode",{parentName:"strong"},"AnyArray")," can be null"),"."),(0,r.kt)("p",null,"If you have a programming language that represents a ",(0,r.kt)("strong",{parentName:"p"},"singly-typed")," array like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'["sayan", "is", "hiking"]\n')),(0,r.kt)("p",null,"then Skyhash will serialize it into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~3\\n\n5\\n\nsayan\\n\n2\\n\nis\\n\n6\\n\nhiking\\n\n")),(0,r.kt)("p",null,"Line-by-line explanation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"~3\\n")," because this is an ",(0,r.kt)("inlineCode",{parentName:"li"},"AnyArray")," with 3 elements"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"5\\n")," because 'sayan' has 5 bytes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sayan\\n"),", the element 'sayan' itself"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"2\\n")," because 'is' has 2 bytes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"is\\n")," the element 'is' itself"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"6\\n")," because 'hiking' has 6 bytes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hiking\\n")," the element 'hiking' itself")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyArray")," is currently a query specific data type (only sent by the client and never by the server)")),(0,r.kt)("h3",{id:"typed-non-null-array"},"Typed non-null array"),(0,r.kt)("p",null,"A typed non-null array is just like a typed array, except for one thing ","\u2014"," its elements can never be null. Say you\nhave an array of three strings like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["super", "wind"]\n')),(0,r.kt)("p",null,"Then it will be represented like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"^+2\\n\n5\\n\nsuper\\n\n4\\n\nwind\n")),(0,r.kt)("p",null,"Line-by-line explanation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"^+2\\n")," because this a typed non-null array, with two string elements"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"5\\n"),' because the first element is "super" and has 5 chars'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"super\\n")," the element itself"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"4\\n"),' the second element is "wind" and has 4 chars'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"wind\\n")," the element itself")))}m.isMDXComponent=!0}}]);