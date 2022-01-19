"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42189],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,y=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"data-types",title:"Data Types"},p=void 0,s={unversionedId:"protocol/data-types",id:"version-0.7.1/protocol/data-types",title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/versioned_docs/version-0.7.1/protocol/data-types.md",sourceDirName:"protocol",slug:"/protocol/data-types",permalink:"/0.7.1/protocol/data-types",tags:[],version:"0.7.1",frontMatter:{id:"data-types",title:"Data Types"},sidebar:"version-0.7.1/docs",previous:{title:"Skyhash Protocol 1.0",permalink:"/0.7.1/protocol/skyhash"},next:{title:"Response Codes",permalink:"/0.7.1/protocol/response-codes"}},d=[{value:"Simple types",id:"simple-types",children:[{value:"Example",id:"example",children:[],level:3},{value:"Table",id:"table",children:[],level:3}],level:2},{value:"Compound types",id:"compound-types",children:[{value:"Table",id:"table-1",children:[],level:3},{value:"Array",id:"array",children:[],level:3},{value:"Flat array",id:"flat-array",children:[],level:3},{value:"Typed array",id:"typed-array",children:[],level:3},{value:"Any array",id:"any-array",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",(0,l.kt)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),(0,l.kt)("h2",{id:"simple-types"},"Simple types"),(0,l.kt)("p",null,"Simple types only contain one type. This makes them very simple to serialize/deserialize. All simple types have the\nfollowing layout:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<tsymbol><number of bytes>\\n\n<element>\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"For an unicode string 'sayan', the layout of the unicode string type (",(0,l.kt)("inlineCode",{parentName:"p"},"+"),") will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"+5\\n    # 'sayan' is an unicode string, so '+' and has 5 bytes so '5'\nsayan\\n # the element 'sayan' itself\n")),(0,l.kt)("h3",{id:"table"},"Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Additional notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"+")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"a string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!")),(0,l.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,l.kt)("td",{parentName:"tr",align:null},"a response code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$")," (reserved)"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"a ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".")," (reserved)"),(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")," (reserved)"),(0,l.kt)("td",{parentName:"tr",align:null},"smallint signed"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},":")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},";")," (reserved)"),(0,l.kt)("td",{parentName:"tr",align:null},"int signed"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%")," (reserved)"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"?")),(0,l.kt)("td",{parentName:"tr",align:null},"binary string"),(0,l.kt)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),(0,l.kt)("p",null,"Do keep the matching for this symbol ",(0,l.kt)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."),(0,l.kt)("h2",{id:"compound-types"},"Compound types"),(0,l.kt)("p",null,"Compound types are derived types -- they are based on simple types, but often with\nsome additional properties (and serialization/deserialization differences)."),(0,l.kt)("h3",{id:"table-1"},"Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Additional notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"A recursive array"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_"),(0,l.kt)("td",{parentName:"tr",align:null},"Flat array"),(0,l.kt)("td",{parentName:"tr",align:null},"A non-recursive array"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@"),(0,l.kt)("td",{parentName:"tr",align:null},"Typed array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of a specific type"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"~"),(0,l.kt)("td",{parentName:"tr",align:null},"Any array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array with a single type but no information about the type"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")))),(0,l.kt)("h3",{id:"array"},"Array"),(0,l.kt)("p",null,"See the full discussion on arrays ",(0,l.kt)("a",{parentName:"p",href:"skyhash#arrays-"},"here"),"."),(0,l.kt)("h3",{id:"flat-array"},"Flat array"),(0,l.kt)("p",null,"A flat array is like an array, but with the exception that it is non-recursive. This\nmeans that a flat array can contain all types except other compound types (hence the\nname 'flat')."),(0,l.kt)("p",null,"So if you represent an array in a programming language like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'["hello", 12345, "world"];\n')),(0,l.kt)("p",null,"then it will be serialized by Skyhash into:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_3\\n    # 3 elements\n+5\\n    # 'hello' is an unicode string, so '+' and has 5 bytes\nhello\\n # the element 'hello' itself\n:5\\n    # 12345 has 5 bytes and is an unsigned int\n12345\\n # the element 12345 itself\n+5\\n    # 'world' is an unicode string, so '+' and has 5 bytes\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A flat array is currently a response specific data type (only sent by the server and never by the client)"))),(0,l.kt)("h3",{id:"typed-array"},"Typed array"),(0,l.kt)("p",null,"A typed array is like a flat array, but with the exception that it can only hold\ntwo types: either a ",(0,l.kt)("a",{parentName:"p",href:"#simple-types"},"simple type")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),". Since this array just has a specific type in its declaration, unlike flat arrays, ",(0,l.kt)("inlineCode",{parentName:"p"},"tsymbol"),"s are not required."),(0,l.kt)("p",null,"You can think of it to be like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"there is either no element (integer value of ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"; also called ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),")"),(0,l.kt)("li",{parentName:"ul"},"or there is an element of the declared type")),(0,l.kt)("p",null,"Say a programming language represents an array like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'["omg", NULL, "happened"]\n')),(0,l.kt)("p",null,"then it will be serialized by Skyhash into:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"@+3\\n\n3\\n\nomg\\n\n\\0\\n\n8\\n\nhappened\\n\n")),(0,l.kt)("p",null,"Line-by-line explanation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@+3\\n")," because it is a typed array, so ",(0,l.kt)("inlineCode",{parentName:"li"},"@"),", the elements are unicode strings, so ",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"\nand there are three elements, so ",(0,l.kt)("inlineCode",{parentName:"li"},"3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3\\n")," because 'omg' has 3 bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"omg\\n"),", the element itself"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\0\\n"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," because there was no element",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0")," corresponds to the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_character"},"null terminator")," (integer value of ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8\\n")," because 'happened' has 8 bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"happened\\n"),", the element itself")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A typed array is currently a response specific data type (only sent by the server and never by the client). The ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"s correspond to the cases when the server can't find the requested item."))),(0,l.kt)("h3",{id:"any-array"},"Any array"),(0,l.kt)("p",null,"An ",(0,l.kt)("inlineCode",{parentName:"p"},"AnyArray")," is like a typed array ","\u2014"," but without any explicit information about the type that is sent. Currently,\n",(0,l.kt)("strong",{parentName:"p"},"all the element types have to be the same"),", but however, no information about the type has to be sent. It is upto\nthe server to convert them to the correct types. This makes running actions extremely simple as the clients don't have\nto specify the type. The server will convert it into the appropriate type for that action. No matter how flexible this\nmay sound -- ",(0,l.kt)("inlineCode",{parentName:"p"},"AnyArray"),"s are extremely performant. Also, ",(0,l.kt)("strong",{parentName:"p"},"no element in an ",(0,l.kt)("inlineCode",{parentName:"strong"},"AnyArray")," can be null"),"."),(0,l.kt)("p",null,"If you have a programming language that represents a ",(0,l.kt)("strong",{parentName:"p"},"singly-typed")," array like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'["sayan", "is", "hiking"]\n')),(0,l.kt)("p",null,"then Skyhash will serialize it into:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"~3\\n\n5\\n\nsayan\\n\n2\\n\nis\\n\n6\\n\nhiking\\n\n")),(0,l.kt)("p",null,"Line-by-line explanation:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"~3\\n")," because this is an ",(0,l.kt)("inlineCode",{parentName:"li"},"AnyArray")," with 3 elements"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"5\\n")," because 'sayan' has 5 bytes"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"sayan\\n"),", the element 'sayan' itself"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"2\\n")," because 'is' has 2 bytes"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"is\\n")," the element 'is' itself"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"6\\n")," because 'hiking' has 6 bytes"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hiking\\n")," the element 'hiking' itself")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"An ",(0,l.kt)("inlineCode",{parentName:"p"},"AnyArray")," is currently a query specific data type (only sent by the client and never by the server)"))))}u.isMDXComponent=!0}}]);