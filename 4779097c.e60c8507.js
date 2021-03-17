(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(375)),s={id:"snapshots",title:"Snapshots"},i={unversionedId:"snapshots",id:"version-0.5.1/snapshots",isDocsHomePage:!1,title:"Snapshots",description:"Skytable supports automated snapshots that can be used for periodic backups.",source:"@site/versioned_docs/version-0.5.1/snapshots.md",slug:"/snapshots",permalink:"/snapshots",version:"0.5.1",sidebar:"version-0.5.1/docs",previous:{title:"Command-line configuration",permalink:"/config-cmd"},next:{title:"SSL/TLS configuration",permalink:"/ssl"}},c=[{value:"Enabling snapshots",id:"enabling-snapshots",children:[]},{value:"Storage of snapshots",id:"storage-of-snapshots",children:[]},{value:"How snapshots work",id:"how-snapshots-work",children:[]},{value:"Methods of creating snapshots",id:"methods-of-creating-snapshots",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Skytable supports automated snapshots that can be used for periodic backups.\nSkytable's snapshotting system is dead simple and works in a similar way to ",Object(o.b)("a",{parentName:"p",href:"persistence"},"BGSAVE"),"."),Object(o.b)("h2",{id:"enabling-snapshots"},"Enabling snapshots"),Object(o.b)("p",null,"Snapshots aren't enabled by default - you have to enable them by using the configuration file  or ",Object(o.b)("a",{parentName:"p",href:"config-cmd"},"command line arguments")," To your existing configuration file, just add the following block:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-toml"},"[snapshot]\nenabled = true\nevery = 3600\natmost = 4\n")),Object(o.b)("p",null,"Here's what these values mean:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"enabled")," - Whether snapshotting is enabled or not; either ",Object(o.b)("inlineCode",{parentName:"li"},"true")," or ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"every")," - Number of seconds to wait before creating another snapshot"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"atmost")," - The maximum number of snapshots to keep")),Object(o.b)("h2",{id:"storage-of-snapshots"},"Storage of snapshots"),Object(o.b)("p",null,"All the created snapshots are stored in a ",Object(o.b)("inlineCode",{parentName:"p"},"snapshots")," folder in the current directory.\nThe snapshot files are named in the format: ",Object(o.b)("inlineCode",{parentName:"p"},"YYYYMMDD-HHMMSS.snapshot")," ."),Object(o.b)("h2",{id:"how-snapshots-work"},"How snapshots work"),Object(o.b)("p",null,"As mentioned earlier, snapshots work just like ",Object(o.b)("inlineCode",{parentName:"p"},"BGSAVE")," . A task is spawned that acquires a lock on the core table and once all the data is successfully flushed to disk, the task exits and releases the lock."),Object(o.b)("h2",{id:"methods-of-creating-snapshots"},"Methods of creating snapshots"),Object(o.b)("p",null,"Snapshots can be created automatically by using the configuration file. However, if you want to create snapshots remotely, you can use the ",Object(o.b)("a",{parentName:"p",href:"actions/mksnap"}," ",Object(o.b)("inlineCode",{parentName:"a"},"MKSNAP")," ")," action. Do note that this ",Object(o.b)("strong",{parentName:"p"},"requires snapshotting to be enabled")," before it can create snapshots."))}p.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);