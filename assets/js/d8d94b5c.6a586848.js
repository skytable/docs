"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"mset",title:"MSET"},i=void 0,p={unversionedId:"actions/mset",id:"version-0.7.5/actions/mset",title:"MSET",description:"Time complexity: O(n)",source:"@site/versioned_docs/version-0.7.5/actions/MSET.md",sourceDirName:"actions",slug:"/actions/mset",permalink:"/actions/mset",draft:!1,tags:[],version:"0.7.5",frontMatter:{id:"mset",title:"MSET"},sidebar:"docs",previous:{title:"MPOP",permalink:"/actions/mpop"},next:{title:"MUPDATE",permalink:"/actions/mupdate"}},c={},l=[],s={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"About",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protocol/data-types#any-array"},"AnyArray"))),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Return type"),":"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protocol/skyhash#unsigned-integers-"},"Integer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protocol/response-codes"},"Rcode 5"))),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MSET <key1> <value1> <key2> <value2> ...")))),(0,a.kt)("p",null,"Set the value of 'n' keys in the current table, if they don't already exist. This will\nreturn the number of keys that were set as an unsigned integer."))}m.isMDXComponent=!0}}]);