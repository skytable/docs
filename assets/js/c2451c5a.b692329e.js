"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"snapshots",title:"Snapshots"},o=void 0,i={unversionedId:"snapshots",id:"version-0.5.2/snapshots",title:"Snapshots",description:"Skytable supports automated snapshots that can be used for periodic backups.",source:"@site/versioned_docs/version-0.5.2/snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/0.5.2/snapshots",draft:!1,tags:[],version:"0.5.2",frontMatter:{id:"snapshots",title:"Snapshots"},sidebar:"version-0.5.2/docs",previous:{title:"Client drivers",permalink:"/0.5.2/clients"},next:{title:"SSL/TLS configuration",permalink:"/0.5.2/ssl"}},l={},p=[{value:"Enabling snapshots",id:"enabling-snapshots",level:2},{value:"Storage of snapshots",id:"storage-of-snapshots",level:2},{value:"How snapshots work",id:"how-snapshots-work",level:2},{value:"Methods of creating snapshots",id:"methods-of-creating-snapshots",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skytable supports automated snapshots that can be used for periodic backups.\nSkytable's snapshotting system is dead simple and works in a similar way to ",(0,r.kt)("a",{parentName:"p",href:"persistence"},"BGSAVE"),"."),(0,r.kt)("h2",{id:"enabling-snapshots"},"Enabling snapshots"),(0,r.kt)("p",null,"Snapshots aren't enabled by default - you have to enable them by using the configuration file  or ",(0,r.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments")," To your existing configuration file, just add the following block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[snapshot]\nevery = 3600\natmost = 4\n")),(0,r.kt)("p",null,"Here's what these values mean:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"every")," - Number of seconds to wait before creating another snapshot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atmost")," - The maximum number of snapshots to keep")),(0,r.kt)("h2",{id:"storage-of-snapshots"},"Storage of snapshots"),(0,r.kt)("p",null,"All the created snapshots are stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"data/snapshots")," folder in the current directory.\nThe snapshot files are named in the format: ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYYMMDD-HHMMSS.snapshot"),". Learn more about the data directory\nstructure ",(0,r.kt)("a",{parentName:"p",href:"persistence/#data-directory-structure"},"here"),"."),(0,r.kt)("h2",{id:"how-snapshots-work"},"How snapshots work"),(0,r.kt)("p",null,"As mentioned earlier, snapshots work just like ",(0,r.kt)("inlineCode",{parentName:"p"},"BGSAVE")," . A task is spawned that acquires a lock on the core table and once all the data is successfully flushed to disk, the task exits and releases the lock."),(0,r.kt)("h2",{id:"methods-of-creating-snapshots"},"Methods of creating snapshots"),(0,r.kt)("p",null,"Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the ",(0,r.kt)("a",{parentName:"p",href:"actions/mksnap"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"MKSNAP")," ")," action. Do note that this ",(0,r.kt)("strong",{parentName:"p"},"requires snapshotting to be enabled")," before it can create snapshots."))}u.isMDXComponent=!0}}]);