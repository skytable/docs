"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={id:"clients",title:"Client drivers"},a=void 0,l={unversionedId:"clients",id:"version-0.7.5/clients",title:"Client drivers",description:"We officially maintain the following drivers:",source:"@site/versioned_docs/version-0.7.5/12.clients.md",sourceDirName:".",slug:"/clients",permalink:"/clients",draft:!1,tags:[],version:"0.7.5",sidebarPosition:12,frontMatter:{id:"clients",title:"Client drivers"},sidebar:"docs",previous:{title:"TLS configuration",permalink:"/ssl"},next:{title:"Performance Guide",permalink:"/perf-guide"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We officially maintain the following drivers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/skytable/client-rust"},"Rust driver")," ","[Apache-2.0]"," - Always up to date and is used by the core project itself")),(0,i.kt)("p",null,"Community powered drivers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Skytable.Client/"},"C# driver")," ","[Apache-2.0]"," - Source code can be found ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/martinmolin/skytable-dotnet"},"here on GitHub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/skytable.js"},"JavaScript/TypeScript driver (node)")," ","[MIT-License]"," - Source code can be found ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zhangyuannie/skytable.js"},"here on GitHub"))),(0,i.kt)("admonition",{title:"More lanugages",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The team is always looking to support more languages and we wish we could ship more drivers. But due to limited\nresources we haven't been able to. If you're willing to write a driver (it's super easy to), jump into the\n",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/QptWFdx"},"Skytable discord server")," and a maintainer/moderator will help you out!")))}u.isMDXComponent=!0}}]);