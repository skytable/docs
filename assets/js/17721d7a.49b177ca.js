"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,u=d["".concat(l,".").concat(c)]||d[c]||k[c]||i;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={id:"lget",title:"LGET"},o=void 0,p={unversionedId:"actions/lget",id:"version-0.7.5/actions/lget",title:"LGET",description:"LGET can be used to access the items in a list. Through the sub-actions provided by lget,",source:"@site/versioned_docs/version-0.7.5/actions/LGET.md",sourceDirName:"actions",slug:"/actions/lget",permalink:"/actions/lget",draft:!1,tags:[],version:"0.7.5",frontMatter:{id:"lget",title:"LGET"},sidebar:"docs",previous:{title:"KEYLEN",permalink:"/actions/keylen"},next:{title:"LMOD",permalink:"/actions/lmod"}},l={},m=[{value:"<code>LGET</code>",id:"lget",level:3},{value:"<code>limit</code>",id:"limit",level:3},{value:"<code>len</code>",id:"len",level:3},{value:"<code>valueat</code>",id:"valueat",level:3},{value:"<code>first</code>",id:"first",level:3},{value:"<code>last</code>",id:"last",level:3},{value:"<code>range</code>",id:"range",level:3}],s={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LGET")," can be used to access the items in a list. Through the sub-actions provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"lget"),",\nyou can access multiple or individual elements in lists."),(0,r.kt)("h3",{id:"lget"},(0,r.kt)("inlineCode",{parentName:"h3"},"LGET")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#typed-array"},"Typed Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list>")))),(0,r.kt)("p",null,"Returns all the values contained in a the provided list, if it exists in the current\ntable."),(0,r.kt)("h3",{id:"limit"},(0,r.kt)("inlineCode",{parentName:"h3"},"limit")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#typed-array"},"Typed Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> limit <limit>")))),(0,r.kt)("p",null,"Returns a maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," values from the provided list, if it exists in the current table"),(0,r.kt)("h3",{id:"len"},(0,r.kt)("inlineCode",{parentName:"h3"},"len")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#unsigned-integers-"},"Integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> len")))),(0,r.kt)("p",null,"Returns the length of the list"),(0,r.kt)("h3",{id:"valueat"},(0,r.kt)("inlineCode",{parentName:"h3"},"valueat")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"binstr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/errors#table-of-errors"},"bad-list-index"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> valueat <index>")))),(0,r.kt)("p",null,"Returns the element present at the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", if it exists in the given list."),(0,r.kt)("h3",{id:"first"},(0,r.kt)("inlineCode",{parentName:"h3"},"first")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"binstr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/errors#table-of-errors"},"list-is-empty"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> first")))),(0,r.kt)("p",null,"Returns the first element present in the list, if it exists."),(0,r.kt)("h3",{id:"last"},(0,r.kt)("inlineCode",{parentName:"h3"},"last")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/skyhash#strings-"},"binstr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/errors#table-of-errors"},"list-is-empty"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> last")))),(0,r.kt)("p",null,"Returns the last element present in the list, if it exists."),(0,r.kt)("h3",{id:"range"},(0,r.kt)("inlineCode",{parentName:"h3"},"range")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/data-types#typed-array"},"Typed Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/protocol/errors#table-of-errors"},"bad-list-index"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> range <start>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LGET <list> range <start> <stop>")))),(0,r.kt)("p",null,"Returns items in the given range. If no value for ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," is provided, all the elements from that\nindex are returned. If a value for ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," is provided, then a subarray is returned"))}k.isMDXComponent=!0}}]);