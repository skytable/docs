"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"deployment-notes",title:"Deployment notes"},i=void 0,l={unversionedId:"deployment-notes",id:"version-0.7.4/deployment-notes",title:"Deployment notes",description:"Here are some good to know things about deploying Skytable:",source:"@site/versioned_docs/version-0.7.4/15.deployment-notes.md",sourceDirName:".",slug:"/deployment-notes",permalink:"/0.7.4/deployment-notes",draft:!1,tags:[],version:"0.7.4",sidebarPosition:15,frontMatter:{id:"deployment-notes",title:"Deployment notes"},sidebar:"docs",previous:{title:"Benchmarking",permalink:"/0.7.4/benchmarking"},next:{title:"Building from source",permalink:"/0.7.4/building-from-source"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here are some ",(0,o.kt)("em",{parentName:"p"},"good to know")," things about deploying Skytable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Skytable is under active development. If you do find any rough edges, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/skytable/skytable/issues"},"please open an issue")),(0,o.kt)("li",{parentName:"ul"},"The daemon will create a ",(0,o.kt)("inlineCode",{parentName:"li"},".sky_pid")," file in its working directory which functions as a PID file\nand indicates other processes to not use the data directory. If the daemon is somehow forcefully\nstopped, the file may not be removed. In that case, you should manually remove the file"),(0,o.kt)("li",{parentName:"ul"},"Skytable currently has a default limit of 50000 connections on a single daemon instance. This limit\ncan be modified ",(0,o.kt)("a",{parentName:"li",href:"config"},"in your configuration"),".",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you change the maximum number of connections according to the available system resources to avoid DoS\nlike attacks that may cause your system to crash"))),(0,o.kt)("li",{parentName:"ul"},"Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using\nmultiple threads"),(0,o.kt)("li",{parentName:"ul"},"The best way to deploy Skytable is as a service (and disabling terminal artwork)")))}u.isMDXComponent=!0}}]);