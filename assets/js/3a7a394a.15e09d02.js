"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66678],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"deployment-notes",title:"Deployment notes"},s=void 0,c={unversionedId:"deployment-notes",id:"version-0.6.2/deployment-notes",isDocsHomePage:!1,title:"Deployment notes",description:"Here are some good to know things about deploying Skytable:",source:"@site/versioned_docs/version-0.6.2/deployment-notes.md",sourceDirName:".",slug:"/deployment-notes",permalink:"/0.6.2/deployment-notes",tags:[],version:"0.6.2",frontMatter:{id:"deployment-notes",title:"Deployment notes"},sidebar:"version-0.6.2/docs",previous:{title:"Benchmarking",permalink:"/0.6.2/benchmarking"},next:{title:"Building from source",permalink:"/0.6.2/building-from-source"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are some ",(0,i.kt)("em",{parentName:"p"},"good to know")," things about deploying Skytable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skytable is under active development. If you do find any rough edges, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/skytable/skytable/issues"},"please open an issue")),(0,i.kt)("li",{parentName:"ul"},"The daemon will create a ",(0,i.kt)("inlineCode",{parentName:"li"},".sky_pid")," file in its working directory which functions as a PID file\nand indicates other processes to not use the data directory. If the daemon is somehow forcefully\nstopped, the file may not be removed. In that case, you should manually remove the file"),(0,i.kt)("li",{parentName:"ul"},"Skytable currently has a hardcoded limit of 50000 connections on a single daemon instance. This limit will be user accessible in the (near) future"),(0,i.kt)("li",{parentName:"ul"},"Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using\nmultiple threads"),(0,i.kt)("li",{parentName:"ul"},"The best way to deploy Skytable is as a service (and passing ",(0,i.kt)("inlineCode",{parentName:"li"},"--noart")," to avoid terminal artwork\nin logs)")))}m.isMDXComponent=!0}}]);