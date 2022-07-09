"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={id:"lmod",title:"LMOD"},i=void 0,p={unversionedId:"actions/lmod",id:"version-0.7.4/actions/lmod",title:"LMOD",description:"LMOD can be used to mutate the elements in a list",source:"@site/versioned_docs/version-0.7.4/actions/LMOD.md",sourceDirName:"actions",slug:"/actions/lmod",permalink:"/0.7.4/actions/lmod",draft:!1,tags:[],version:"0.7.4",frontMatter:{id:"lmod",title:"LMOD"},sidebar:"docs",previous:{title:"LGET",permalink:"/0.7.4/actions/lget"},next:{title:"LSET",permalink:"/0.7.4/actions/lset"}},l={},m=[{value:"<code>push</code>",id:"push",level:3},{value:"<code>insert</code>",id:"insert",level:3},{value:"<code>pop</code>",id:"pop",level:3},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>clear</code>",id:"clear",level:3}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LMOD")," can be used to mutate the elements in a list"),(0,r.kt)("h3",{id:"push"},(0,r.kt)("inlineCode",{parentName:"h3"},"push")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 5"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> push <value>")))),(0,r.kt)("p",null,"Appends the element to the end of the provided list"),(0,r.kt)("h3",{id:"insert"},(0,r.kt)("inlineCode",{parentName:"h3"},"insert")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/errors#table-of-errors"},"bad-list-index"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> insert <index> <value>")))),(0,r.kt)("p",null,"Inserts the element to the provided index, if it is valid while shifting elements\nto the right if required"),(0,r.kt)("h3",{id:"pop"},(0,r.kt)("inlineCode",{parentName:"h3"},"pop")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/skyhash#strings-"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/skyhash#strings-"},"Binstr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/errors#table-of-errors"},"bad-list-index"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> pop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> pop <index>")))),(0,r.kt)("p",null,"Removes the element from the end of the list if no index is provided or from the provided\nindex while shifting elements to the right if required."),(0,r.kt)("h3",{id:"remove"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/errors#table-of-errors"},"bad-list-index"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> remove <index>")))),(0,r.kt)("p",null,"Removes the element at the provided index from the list, shifting elements to the right\nif required."),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"clear")),(0,r.kt)("admonition",{title:"About",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/data-types#any-array"},"AnyArray"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Return type"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.7.4/protocol/response-codes"},"Rcode 5"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LMOD <list> clear")))),(0,r.kt)("p",null,"Removes all the elements present in the list"))}d.isMDXComponent=!0}}]);