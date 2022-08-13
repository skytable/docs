"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,y=p["".concat(l,".").concat(c)]||p[c]||u[c]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={id:"deployment-notes",title:"Deployment notes"},i=void 0,s={unversionedId:"deployment-notes",id:"deployment-notes",title:"Deployment notes",description:"Recommendations",source:"@site/docs/15.deployment-notes.md",sourceDirName:".",slug:"/deployment-notes",permalink:"/next/deployment-notes",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"deployment-notes",title:"Deployment notes"},sidebar:"docs",previous:{title:"Benchmarking",permalink:"/next/benchmarking"},next:{title:"Building from source",permalink:"/next/building-from-source"}},l={},d=[{value:"Recommendations",id:"recommendations",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Data migrations",id:"data-migrations",level:2},{value:"Downgrades to earlier versions",id:"downgrades-to-earlier-versions",level:3}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"recommendations"},"Recommendations"),(0,o.kt)("p",null,"Here are some ",(0,o.kt)("em",{parentName:"p"},"good to know")," things about deploying Skytable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Skytable is under active development. If you do find any rough edges, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/skytable/skytable/issues"},"please open an issue")),(0,o.kt)("li",{parentName:"ul"},"The daemon will create a ",(0,o.kt)("inlineCode",{parentName:"li"},".sky_pid")," file in its working directory which functions as a PID file\nand indicates other processes to not use the data directory. If the daemon is somehow forcefully\nstopped, the file may not be removed. In that case, you should manually remove the file"),(0,o.kt)("li",{parentName:"ul"},"Skytable currently has a default limit of 50000 connections on a single daemon instance. This limit\ncan be modified ",(0,o.kt)("a",{parentName:"li",href:"config"},"in your configuration"),".",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you change the maximum number of connections according to the available system resources to avoid DoS\nlike attacks that may cause your system to crash"))),(0,o.kt)("li",{parentName:"ul"},"Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using\nmultiple threads"),(0,o.kt)("li",{parentName:"ul"},"The best way to deploy Skytable is as a service (and disabling terminal artwork)")),(0,o.kt)("h2",{id:"system-requirements"},"System requirements"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Intel x86/x86_64 based systems, virtually all processors deployed today will run Skytable without any\ntrouble. On a more specific note, Intel processors released after 2001 and AMD based processors released\nafter 2003 are compatible"),(0,o.kt)("li",{parentName:"ul"},"For ARM64 based systems, there are no additional requirements")),(0,o.kt)("admonition",{title:"Fun fact",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To sum up, if your processor is from this century, it will most likely work fine ;)")),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("p",null,"No special requirements as of now."),(0,o.kt)("h2",{id:"data-migrations"},"Data migrations"),(0,o.kt)("p",null,"Skytable is backwards compatible with previously released versions. This means that when you move from an\nolder version to a newer release, your data will be automatically migrated. This migration does not need\nany external intervention, and will be automatically done when the database server is started up."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exceptions"),": However, an exception to this is the upgrade from version 0.6 to 0.7. To complete this\nupgrade, you must run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-migrate")," utility provided in the bundle to migrate your data. Rest assured,\nthe tool will take care of the migration."),(0,o.kt)("h3",{id:"downgrades-to-earlier-versions"},"Downgrades to earlier versions"),(0,o.kt)("p",null,"Although we strongly do ",(0,o.kt)("strong",{parentName:"p"},"not")," recommend you to move from a newer version to an earlier version, we understand\nthat such a transition might be required in some cases. However, we do not support going from a newer\nversion to an older version natively (as in the data cannot be read by the earlier version). Instead, you\nwill need to manually export all data from the newer version and then move it back to the earlier version."),(0,o.kt)("p",null,'The obvious question here is, "Why?" Newer versions might introduce newer data types and models, that\ncannot be "predicted" or "guessed" at the time of release of earlier versions. For instance, version 0.7.1\nintroduces the ',(0,o.kt)("inlineCode",{parentName:"p"},"list")," data type which however didn't exist in earlier releases. The server cannot ",(0,o.kt)("em",{parentName:"p"},"guess"),'\nhow it can "transform a list into a string."'),(0,o.kt)("p",null,"If you have any questions, we're happy to help! Open an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/issues/new"},"issue here")," and we'll get back to you."))}u.isMDXComponent=!0}}]);