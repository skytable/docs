"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={id:"mget",title:"MGET"},a=void 0,c={unversionedId:"Actions/mget",id:"version-0.4.1/Actions/mget",title:"MGET",description:"Since: 0.4.0",source:"@site/versioned_docs/version-0.4.1/Actions/MGET.md",sourceDirName:"Actions",slug:"/Actions/mget",permalink:"/0.4.1/Actions/mget",draft:!1,tags:[],version:"0.4.1",frontMatter:{id:"mget",title:"MGET"},sidebar:"version-0.4.1/docs",previous:{title:"HEYA",permalink:"/0.4.1/Actions/heya"},next:{title:"MSET",permalink:"/0.4.1/Actions/mset"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"About",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Since"),": 0.4.0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Time complexity"),": O(n)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Arguments"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"MSET <key1> <key2> ..."),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": Value if it exists or (Code: 1) if it does not ")),(0,o.kt)("p",null,"Get the value of 'n' keys"))}u.isMDXComponent=!0}}]);