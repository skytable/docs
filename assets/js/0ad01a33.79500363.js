"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={id:"persistence",title:"Persistence"},o=void 0,s={unversionedId:"persistence",id:"persistence",title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/docs/9.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/next/persistence",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"docs",previous:{title:"Authentication and authorization",permalink:"/next/auth"},next:{title:"Snapshots",permalink:"/next/snapshots"}},l={},d=[{value:"How Skytable stores data",id:"how-skytable-stores-data",level:2},{value:"Save failure during termination",id:"save-failure-during-termination",level:3},{value:"Automated background saving",id:"automated-background-saving",level:2},{value:"Reliability of BGSAVE",id:"reliability-of-bgsave",level:3},{value:"BGSAVE Recovery",id:"bgsave-recovery",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works."),(0,r.kt)("h2",{id:"how-skytable-stores-data"},"How Skytable stores data"),(0,r.kt)("p",null,"As soon as you start Skytable, it will look for a ",(0,r.kt)("inlineCode",{parentName:"p"},"PRELOAD")," file in the data directory. If it\nisn't found ","\u2014"," the server would expect this to be a new instance and will create the\nrequired files for you. Skytable uses a disk storage format called ",(0,r.kt)("strong",{parentName:"p"},"Cyanstore")," (version ",(0,r.kt)("inlineCode",{parentName:"p"},"1A"),")\nfor storing your data and all files are encoded/decoded in compliance with this format."),(0,r.kt)("p",null,"Once you terminate the daemon, it will flush all data to disk. All writes are ",(0,r.kt)("inlineCode",{parentName:"p"},"fsync"),"ed by the time\nthey complete."),(0,r.kt)("h3",{id:"save-failure-during-termination"},"Save failure during termination"),(0,r.kt)("p",null,"The server would attempt to do a ",(0,r.kt)("em",{parentName:"p"},"final")," save operation before it terminates and if this fails, the\nserver would enter into a retry loop. It will try the save operation after every 10 seconds.\nExponential backoff was not chosen because it could increase to extremely large values that may hurt\na sysadmin's time and productivity."),(0,r.kt)("p",null,"You might be interested in more features like ",(0,r.kt)("a",{parentName:"p",href:"#automated-background-saving"},"BGSAVE")," and ",(0,r.kt)("a",{parentName:"p",href:"/snapshots"},"snapshots")," that\ncan be configured and used by users."),(0,r.kt)("h2",{id:"automated-background-saving"},"Automated background saving"),(0,r.kt)("p",null,"Skytable supports automated saving of data in the background, via ",(0,r.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"BGSAVE"),", runs every two minutes to flush all the data in the in-memory table onto disk, unless ",(0,r.kt)("a",{parentName:"p",href:"config"},"customized"),". BGSAVE is enabled by default and we don't recommend disabling it until you're sure that\nyour hardware will never fail; it is likely that this will never be the case. First BGSAVE will create a temporary\nfile and then flush the current in-memory table onto disk. The daemon automatically ",(0,r.kt)("inlineCode",{parentName:"p"},"fsync"),"s after every successful write (whether to the buffers or\nto the actual disk)."),(0,r.kt)("h3",{id:"reliability-of-bgsave"},"Reliability of BGSAVE"),(0,r.kt)("p",null,"It can happen that BGSAVE fails to flush data to the disk due to some unforeseen system issues (such as lack of\nempty disk space, permission errors, etc). But if we continue to accept modifications to the data, it is a bad idea\nbecause this data may never get updated! This is why if BGSAVE fails, it will automatically ",(0,r.kt)("em",{parentName:"p"},"poison")," the in-memory\ntable preventing it from accepting any write/update operations. Poisioning is nothing but a global flag set in the\ndatabase that indicates that the DB shouldn't accept any more updates/writes to data and in such a poisoned state,\nonly reads are permitted."),(0,r.kt)("h3",{id:"bgsave-recovery"},"BGSAVE Recovery"),(0,r.kt)("p",null,"BGSAVE will automatically try to recover on every 120s (or whatever duration was set). If the problem\nwas corrected (say it was a permissions issue), then the database server will automatically resume\nwrites and ",(0,r.kt)("em",{parentName:"p"},"unpoison")," the database."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Avoid editing/changing/removing files from the data directory by hand. All files stored in the data\ndirectory are critical to the server and your data. If you end up corrupting any file due to a bad\nedit ","\u2014"," you might end up losing access to your data!")))}c.isMDXComponent=!0}}]);