"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10621:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Supported Versions",description:"This page lists what versions are currently supported, provides information on security updates and lists versions that have reached EOL (End of Life)",hide_table_of_contents:!1},o=void 0,l={type:"mdx",permalink:"/versions",source:"@site/src/pages/versions.md",title:"Supported Versions",description:"This page lists what versions are currently supported, provides information on security updates and lists versions that have reached EOL (End of Life)",frontMatter:{title:"Supported Versions",description:"This page lists what versions are currently supported, provides information on security updates and lists versions that have reached EOL (End of Life)",hide_table_of_contents:!1}},s=[{value:"Supported versions",id:"supported-versions",level:2},{value:"Unsupported versions (EOL)",id:"unsupported-versions-eol",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"supported-versions"},"Supported versions"),(0,a.kt)("p",null,"The following versions are currently supported and will receive security hotfixes and other updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v0.6.4: Download from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/skytable/skytable/releases/tag/v0.6.4"},"this link"))),(0,a.kt)("h2",{id:"unsupported-versions-eol"},"Unsupported versions (EOL)"),(0,a.kt)("p",null,"The following releases have reached end-of-life and will ",(0,a.kt)("strong",{parentName:"p"},"not")," receive any security updates or\nhotfixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v0.6.3: View ",(0,a.kt)("a",{parentName:"li",href:"/0.6.3"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.6.2: View ",(0,a.kt)("a",{parentName:"li",href:"/0.6.2"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.6.1: View ",(0,a.kt)("a",{parentName:"li",href:"/0.6.2"},"docs")," ","[same docs as 0.6.0]"),(0,a.kt)("li",{parentName:"ul"},"v0.6.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.6.0"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.5.2: View ",(0,a.kt)("a",{parentName:"li",href:"/0.5.2"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.5.1: View ",(0,a.kt)("a",{parentName:"li",href:"/0.5.1"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.5.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.5.0"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.5: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.5"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.4: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.4"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.3: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.3"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.2: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.2"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.1: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.1"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.4.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.4.0"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.3.2: View ",(0,a.kt)("a",{parentName:"li",href:"/0.3.2"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.3.1: View ",(0,a.kt)("a",{parentName:"li",href:"/0.3.1"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.3.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.3.0"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.2.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.2.0"},"docs")),(0,a.kt)("li",{parentName:"ul"},"v0.1.0: View ",(0,a.kt)("a",{parentName:"li",href:"/0.1.0"},"docs"))))}c.isMDXComponent=!0}}]);