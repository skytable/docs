(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[475],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6014:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s={id:"snapshots",title:"Snapshots"},i={unversionedId:"snapshots",id:"version-0.4.5/snapshots",isDocsHomePage:!1,title:"Snapshots",description:"TerrabaseDB supports automated snapshots that can be used for periodic backups.",source:"@site/versioned_docs/version-0.4.5/snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/0.4.5/snapshots",version:"0.4.5",frontMatter:{id:"snapshots",title:"Snapshots"},sidebar:"version-0.4.5/docs",previous:{title:"Configuration Files",permalink:"/0.4.5/config-files"},next:{title:"Benchmarking",permalink:"/0.4.5/benchmarking"}},l=[{value:"Enabling snapshots",id:"enabling-snapshots",children:[]},{value:"Storage of snapshots",id:"storage-of-snapshots",children:[]},{value:"How snapshots work",id:"how-snapshots-work",children:[]},{value:"Methods of creating snapshots",id:"methods-of-creating-snapshots",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TerrabaseDB supports automated snapshots that can be used for periodic backups.\nTerrabaseDB's snapshotting system is dead simple and works in a similar way to ",(0,o.kt)("a",{parentName:"p",href:"persistence"},"BGSAVE"),"."),(0,o.kt)("h2",{id:"enabling-snapshots"},"Enabling snapshots"),(0,o.kt)("p",null,"Snapshots aren't enabled by default - you have to enable them by using the configuration file. To your existing configuration file, just add the following block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[snapshot]\nenabled = true\nevery = 3600\natmost = 4\n")),(0,o.kt)("p",null,"Here's what these values mean:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enabled")," - Whether snapshotting is enabled or not; either ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"every")," - Number of seconds to wait before creating another snapshot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atmost")," - The maximum number of snapshots to keep")),(0,o.kt)("h2",{id:"storage-of-snapshots"},"Storage of snapshots"),(0,o.kt)("p",null,"All the created snapshots are stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"snapshots")," folder in the current directory.\nThe snapshot files are named in the format: ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYYMMDD-HHMMSS.snapshot")," ."),(0,o.kt)("h2",{id:"how-snapshots-work"},"How snapshots work"),(0,o.kt)("p",null,"As mentioned earlier, snapshots work just like ",(0,o.kt)("inlineCode",{parentName:"p"},"BGSAVE")," . A task is spawned that acquires a lock on the core table and once all the data is successfully flushed to disk, the task exits and releases the lock."),(0,o.kt)("h2",{id:"methods-of-creating-snapshots"},"Methods of creating snapshots"),(0,o.kt)("p",null,"Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the ",(0,o.kt)("a",{parentName:"p",href:"actions/mksnap"}," ",(0,o.kt)("inlineCode",{parentName:"a"},"MKSNAP")," ")," action. Do note that this ",(0,o.kt)("strong",{parentName:"p"},"requires snapshotting to be enabled")," before it can create snapshots."))}c.isMDXComponent=!0}}]);