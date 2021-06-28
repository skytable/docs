(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2549],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74385:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"persistence",title:"Persistence"},s=void 0,l={unversionedId:"persistence",id:"version-0.6.0/persistence",isDocsHomePage:!1,title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/versioned_docs/version-0.6.0/4.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/0.6.0/persistence",version:"0.6.0",sidebarPosition:4,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"version-0.6.0/docs",previous:{title:"Actions overview",permalink:"/0.6.0/actions-overview"},next:{title:"Configuration Files",permalink:"/0.6.0/config-files"}},c=[{value:"Data directory structure",id:"data-directory-structure",children:[]},{value:"How Skytable stores data",id:"how-skytable-stores-data",children:[]},{value:"Automated background saving",id:"automated-background-saving",children:[{value:"Reliability of BGSAVE",id:"reliability-of-bgsave",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works."),(0,i.kt)("h2",{id:"data-directory-structure"},"Data directory structure"),(0,i.kt)("p",null,"Whenever you start Skytable, it will create a number of directories under a root 'data' directory. This is what the\ndata directory structure looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|__user-files (your other files)\n|__data\n   |__data.bin\n   |__snapshots\n      |__<YYYYMMDD>-<HHMMSS>.snapshot (many)\n      |__remote\n         |___<snapshotname>.snapshot (many)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file is primarily used for persistence while the snapshots folder contains automatically created\nsnapshots and remotely created snapshots."),(0,i.kt)("h2",{id:"how-skytable-stores-data"},"How Skytable stores data"),(0,i.kt)("p",null,"As soon as you start Skytable, it will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file in the data directory and then fall back to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file in the current directory for backwards compatibility. The database daemon will then attempt to\nmigrate the older data into the structure noted above if required."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This backward compatibility will possibly be removed in future releases"))),(0,i.kt)("p",null,"If the data file is found and successfully read, then the previous data is moved into the in-memory table. If no\nfile was found, then the database server will create one. Once you terminate the daemon, it will flush all data\nto this file. There are more features like ",(0,i.kt)("a",{parentName:"p",href:"#automated-background-saving"},"BGSAVE")," and ",(0,i.kt)("a",{parentName:"p",href:"/snapshots"},"snapshots")," that\ncan be configured and used by users."),(0,i.kt)("h2",{id:"automated-background-saving"},"Automated background saving"),(0,i.kt)("p",null,"Skytable supports automated saving of data in the background, via ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),", runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the ",(0,i.kt)("a",{parentName:"p",href:"config-files/#an-example-configuration"},"configuration file"),". BGSAVE is enabled by default and we don't recommend disabling it until you're sure that\nyour hardware will never fail; it is likely that this will never be the case. First BGSAVE will create a temporary\nfile and then flush the current in-memory table onto disk. It will then replace the old ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file."),(0,i.kt)("h3",{id:"reliability-of-bgsave"},"Reliability of BGSAVE"),(0,i.kt)("p",null,"It can happen that BGSAVE fails to flush data to the disk due to some unforeseen system issues (such as lack of\nempty disk space, permission errors, etc). But if we continue to accept modifications to the data, it is a bad idea\nbecause this data may never get updated! This is why if BGSAVE fails, it will automatically ",(0,i.kt)("em",{parentName:"p"},"poison")," the in-memory\ntable preventing it from accepting any write/update operations. Poisioning is nothing but a global flag set in the\ndatabase that indicates that the DB shouldn't accept any more updates/writes to data and in such a poisoned state,\nonly reads are permitted."))}u.isMDXComponent=!0}}]);