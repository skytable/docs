"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"persistence",title:"Persistence"},l=void 0,d={unversionedId:"persistence",id:"version-0.7.4/persistence",title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/versioned_docs/version-0.7.4/9.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/0.7.4/persistence",tags:[],version:"0.7.4",sidebarPosition:9,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"docs",previous:{title:"Authentication and authorization",permalink:"/0.7.4/auth"},next:{title:"Snapshots",permalink:"/0.7.4/snapshots"}},u={},c=[{value:"How Skytable stores data",id:"how-skytable-stores-data",level:2},{value:"Save failure during termination",id:"save-failure-during-termination",level:3},{value:"Automated background saving",id:"automated-background-saving",level:2},{value:"Reliability of BGSAVE",id:"reliability-of-bgsave",level:3},{value:"BGSAVE Recovery",id:"bgsave-recovery",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works."),(0,i.kt)("h2",{id:"how-skytable-stores-data"},"How Skytable stores data"),(0,i.kt)("p",null,"As soon as you start Skytable, it will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"PRELOAD")," file in the data directory. If it\nisn't found ","\u2014"," the server would expect this to be a new instance and will create the\nrequired files for you. Skytable uses a disk storage format called ",(0,i.kt)("strong",{parentName:"p"},"Cyanstore")," (version ",(0,i.kt)("inlineCode",{parentName:"p"},"1A"),")\nfor storing your data and all files are encoded/decoded in compliance with this format."),(0,i.kt)("p",null,"Once you terminate the daemon, it will flush all data to disk. All writes are ",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"ed by the time\nthey complete."),(0,i.kt)("h3",{id:"save-failure-during-termination"},"Save failure during termination"),(0,i.kt)("p",null,"The server would attempt to do a ",(0,i.kt)("em",{parentName:"p"},"final")," save operation before it terminates and if this fails, the\nserver would enter into a retry loop. It will try the save operation after every 10 seconds.\nExponential backoff was not chosen because it could increase to extremely large values that may hurt\na sysadmin's time and productivity."),(0,i.kt)("p",null,"You might be interested in more features like ",(0,i.kt)("a",{parentName:"p",href:"#automated-background-saving"},"BGSAVE")," and ",(0,i.kt)("a",{parentName:"p",href:"/snapshots"},"snapshots")," that\ncan be configured and used by users."),(0,i.kt)("h2",{id:"automated-background-saving"},"Automated background saving"),(0,i.kt)("p",null,"Skytable supports automated saving of data in the background, via ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),", runs every two minutes to flush all the data in the in-memory table onto disk, unless ",(0,i.kt)("a",{parentName:"p",href:"config"},"customized"),". BGSAVE is enabled by default and we don't recommend disabling it until you're sure that\nyour hardware will never fail; it is likely that this will never be the case. First BGSAVE will create a temporary\nfile and then flush the current in-memory table onto disk. The daemon automatically ",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"s after every successful write (whether to the buffers or\nto the actual disk)."),(0,i.kt)("h3",{id:"reliability-of-bgsave"},"Reliability of BGSAVE"),(0,i.kt)("p",null,"It can happen that BGSAVE fails to flush data to the disk due to some unforeseen system issues (such as lack of\nempty disk space, permission errors, etc). But if we continue to accept modifications to the data, it is a bad idea\nbecause this data may never get updated! This is why if BGSAVE fails, it will automatically ",(0,i.kt)("em",{parentName:"p"},"poison")," the in-memory\ntable preventing it from accepting any write/update operations. Poisioning is nothing but a global flag set in the\ndatabase that indicates that the DB shouldn't accept any more updates/writes to data and in such a poisoned state,\nonly reads are permitted."),(0,i.kt)("h3",{id:"bgsave-recovery"},"BGSAVE Recovery"),(0,i.kt)("p",null,"BGSAVE will automatically try to recover on every 120s (or whatever duration was set). If the problem\nwas corrected (say it was a permissions issue), then the database server will automatically resume\nwrites and ",(0,i.kt)("em",{parentName:"p"},"unpoison")," the database."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Avoid editing/changing/removing files from the data directory by hand. All files stored in the data\ndirectory are critical to the server and your data. If you end up corrupting any file due to a bad\nedit ","\u2014"," you might end up losing access to your data!"))))}m.isMDXComponent=!0}}]);