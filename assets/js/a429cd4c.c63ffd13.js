"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92577],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=s,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),r=["components"],i={id:"snapshots",title:"Snapshots"},p=void 0,l={unversionedId:"snapshots",id:"version-0.7.1/snapshots",isDocsHomePage:!1,title:"Snapshots",description:"Skytable supports automated snapshots that can be used for periodic backups.",source:"@site/versioned_docs/version-0.7.1/10.snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/snapshots",tags:[],version:"0.7.1",sidebarPosition:10,frontMatter:{id:"snapshots",title:"Snapshots"},sidebar:"version-0.7.1/docs",previous:{title:"Persistence",permalink:"/persistence"},next:{title:"TLS configuration",permalink:"/ssl"}},c=[{value:"Enabling snapshots",id:"enabling-snapshots",children:[]},{value:"Storage of snapshots",id:"storage-of-snapshots",children:[]},{value:"How snapshots work",id:"how-snapshots-work",children:[]},{value:"Methods of creating snapshots",id:"methods-of-creating-snapshots",children:[]},{value:"Remote snapshots",id:"remote-snapshots",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Skytable supports automated snapshots that can be used for periodic backups.\nSkytable's snapshotting system is dead simple and works in a similar way to ",(0,o.kt)("a",{parentName:"p",href:"persistence"},"BGSAVE"),"."),(0,o.kt)("h2",{id:"enabling-snapshots"},"Enabling snapshots"),(0,o.kt)("p",null,"Snapshots aren't enabled by default ","\u2014"," you have to enable them by using the configuration file or ",(0,o.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),". To your existing configuration file, just add the following block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[snapshot]\nevery = 3600\natmost = 4\nfailsafe = true # optional\n")),(0,o.kt)("p",null,"Here's what these values mean:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"every")," - Number of seconds to wait before creating another snapshot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atmost")," - The maximum number of snapshots to keep"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"failsafe")," - This indicates whether the database should stop accepting write operations if\nsnapshotting fails")),(0,o.kt)("h2",{id:"storage-of-snapshots"},"Storage of snapshots"),(0,o.kt)("p",null,"All the created snapshots are stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"data/snaps")," folder in the current directory.\nThe snapshot folders are named in the format: ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYYMMDD-HHMMSS"),". On the other hand,\n",(0,o.kt)("a",{parentName:"p",href:"#remote-snapshots"},"remote snapshots")," are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data/rsnap")," folder."),(0,o.kt)("h2",{id:"how-snapshots-work"},"How snapshots work"),(0,o.kt)("p",null,"As mentioned earlier, snapshots work just like ",(0,o.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". A task is spawned that starts encoding\n(and writing data) to a folder (which appears to be a copy of the ks folder); once all the data is successfully flushed to disk, the task exits."),(0,o.kt)("h2",{id:"methods-of-creating-snapshots"},"Methods of creating snapshots"),(0,o.kt)("p",null,"Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the ",(0,o.kt)("a",{parentName:"p",href:"actions/mksnap"}," ",(0,o.kt)("inlineCode",{parentName:"a"},"MKSNAP")," ")," action. This will only\ncreate snapshots if it is enabled on the server-side, unless you use\n",(0,o.kt)("a",{parentName:"p",href:"#remote-snapshots"},"truly remote snapshots"),"."),(0,o.kt)("h2",{id:"remote-snapshots"},"Remote snapshots"),(0,o.kt)("p",null,"Irrespective of whether snapshots are enabled on the server side, you can use ",(0,o.kt)("em",{parentName:"p"},"truly remote snapshots"),".\nSuch snapshots can be created by using the ",(0,o.kt)("a",{parentName:"p",href:"actions/mksnap"},(0,o.kt)("inlineCode",{parentName:"a"},"MKSNAP"))," action. To do this,\npass a second argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"MKSNAP")," with the desired name of your snapshot. This will create\na snapshot in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data/rsnap")," directory."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since snapshots are intended for data backups ","\u2014"," you can do a little ",(0,o.kt)("em",{parentName:"p"},"trick")," to make these\nbackups offsite-backups: mount a network file system or a different drive and create a folder\nfor storing your snapshots in it. Now, symlink the ",(0,o.kt)("inlineCode",{parentName:"p"},"data/snaps")," directory to your\n",(0,o.kt)("em",{parentName:"p"},"remotely mounted directory"),". You now have offsite backups!"))))}h.isMDXComponent=!0}}]);