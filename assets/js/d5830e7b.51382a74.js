"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=s,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),s=(n(7294),n(3905));const o={id:"snapshots",title:"Snapshots"},r=void 0,i={unversionedId:"snapshots",id:"snapshots",title:"Snapshots",description:"Skytable supports automated snapshots that can be used for periodic backups.",source:"@site/docs/10.snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/next/snapshots",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"snapshots",title:"Snapshots"},sidebar:"docs",previous:{title:"Persistence",permalink:"/next/persistence"},next:{title:"TLS configuration",permalink:"/next/ssl"}},p={},l=[{value:"Enabling snapshots",id:"enabling-snapshots",level:2},{value:"Storage of snapshots",id:"storage-of-snapshots",level:2},{value:"How snapshots work",id:"how-snapshots-work",level:2},{value:"Methods of creating snapshots",id:"methods-of-creating-snapshots",level:2},{value:"Remote snapshots",id:"remote-snapshots",level:2}],c={toc:l};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Skytable supports automated snapshots that can be used for periodic backups.\nSkytable's snapshotting system is dead simple and works in a similar way to ",(0,s.kt)("a",{parentName:"p",href:"persistence"},"BGSAVE"),"."),(0,s.kt)("h2",{id:"enabling-snapshots"},"Enabling snapshots"),(0,s.kt)("p",null,"Snapshots aren't enabled by default ","\u2014"," you have to enable them by using the configuration file or ",(0,s.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),". To your existing configuration file, just add the following block:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},"[snapshot]\nevery = 3600\natmost = 4\nfailsafe = true # optional\n")),(0,s.kt)("p",null,"Here's what these values mean:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"every")," - Number of seconds to wait before creating another snapshot"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"atmost")," - The maximum number of snapshots to keep"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"failsafe")," - This indicates whether the database should stop accepting write operations if\nsnapshotting fails")),(0,s.kt)("h2",{id:"storage-of-snapshots"},"Storage of snapshots"),(0,s.kt)("p",null,"All the created snapshots are stored in a ",(0,s.kt)("inlineCode",{parentName:"p"},"data/snaps")," folder in the current directory.\nThe snapshot folders are named in the format: ",(0,s.kt)("inlineCode",{parentName:"p"},"YYYYMMDD-HHMMSS"),". On the other hand,\n",(0,s.kt)("a",{parentName:"p",href:"#remote-snapshots"},"remote snapshots")," are stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"data/rsnap")," folder."),(0,s.kt)("h2",{id:"how-snapshots-work"},"How snapshots work"),(0,s.kt)("p",null,"As mentioned earlier, snapshots work just like ",(0,s.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". A task is spawned that starts encoding\n(and writing data) to a folder (which appears to be a copy of the ks folder); once all the data is successfully flushed to disk, the task exits."),(0,s.kt)("h2",{id:"methods-of-creating-snapshots"},"Methods of creating snapshots"),(0,s.kt)("p",null,"Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the ",(0,s.kt)("a",{parentName:"p",href:"actions/mksnap"}," ",(0,s.kt)("inlineCode",{parentName:"a"},"MKSNAP")," ")," action. This will only\ncreate snapshots if it is enabled on the server-side, unless you use\n",(0,s.kt)("a",{parentName:"p",href:"#remote-snapshots"},"truly remote snapshots"),"."),(0,s.kt)("h2",{id:"remote-snapshots"},"Remote snapshots"),(0,s.kt)("p",null,"Irrespective of whether snapshots are enabled on the server side, you can use ",(0,s.kt)("em",{parentName:"p"},"truly remote snapshots"),".\nSuch snapshots can be created by using the ",(0,s.kt)("a",{parentName:"p",href:"actions/mksnap"},(0,s.kt)("inlineCode",{parentName:"a"},"MKSNAP"))," action. To do this,\npass a second argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"MKSNAP")," with the desired name of your snapshot. This will create\na snapshot in the ",(0,s.kt)("inlineCode",{parentName:"p"},"data/rsnap")," directory."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Since snapshots are intended for data backups ","\u2014"," you can do a little ",(0,s.kt)("em",{parentName:"p"},"trick")," to make these\nbackups offsite-backups: mount a network file system or a different drive and create a folder\nfor storing your snapshots in it. Now, symlink the ",(0,s.kt)("inlineCode",{parentName:"p"},"data/snaps")," directory to your\n",(0,s.kt)("em",{parentName:"p"},"remotely mounted directory"),". You now have offsite backups!")))}h.isMDXComponent=!0}}]);