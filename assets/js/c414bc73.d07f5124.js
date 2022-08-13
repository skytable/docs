"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"perf-guide",title:"Performance Guide"},i=void 0,l={unversionedId:"perf-guide",id:"version-0.7.5/perf-guide",title:"Performance Guide",description:"We have put in our best efforts to make Skytable really fast &mdash; but usage patterns can greatly",source:"@site/versioned_docs/version-0.7.5/13.perf-guide.md",sourceDirName:".",slug:"/perf-guide",permalink:"/perf-guide",draft:!1,tags:[],version:"0.7.5",sidebarPosition:13,frontMatter:{id:"perf-guide",title:"Performance Guide"},sidebar:"docs",previous:{title:"Client drivers",permalink:"/clients"},next:{title:"Benchmarking",permalink:"/benchmarking"}},p={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have put in our best efforts to make Skytable really fast ","\u2014"," but usage patterns can greatly\naffect how well Skytable performs for you, and how well you are able to exploit the ",(0,a.kt)("em",{parentName:"p"},"on metal"),"\nperformance that Skytable can provide. Here are some quick pointers to get maximum performance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Try to have a lesser number of tables")),(0,a.kt)("p",{parentName:"li"},"The number of tables you can create is virtually\nunlimited, but however, creating a huge number of tables (say over 60,000) ",(0,a.kt)("em",{parentName:"p"},"can")," hurt performance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Try to use default connection level containers")),(0,a.kt)("p",{parentName:"li"},"Although you are free to run actions by\nspecifying the table to use, it has a runtime cost because the table has to be looked up and errors\nneed to be handled. Instead, try using default containers wherever possible. For example, if you\nhave a table ",(0,a.kt)("inlineCode",{parentName:"p"},"cakes")," in a keyspace ",(0,a.kt)("inlineCode",{parentName:"p"},"birthday")," and your application will be using this table for\nthe most part, it's a good idea to run ",(0,a.kt)("inlineCode",{parentName:"p"},"use birthday:cakes")," after connecting and then using the\nactions without specifying a table (or keyspace). This avoids the lookup and error handling cost.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you know your data in keymap tables has valid unicode, try using the ",(0,a.kt)("inlineCode",{parentName:"p"},"binstr")," type instead.\nThis is because unicode validation adds a ",(0,a.kt)("em",{parentName:"p"},"very small")," runtime cost"))))}c.isMDXComponent=!0}}]);