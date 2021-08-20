(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75574],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46342:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"persistence",title:"Persistence"},s=void 0,c={unversionedId:"persistence",id:"version-0.4.5/persistence",isDocsHomePage:!1,title:"Persistence",description:"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how TerrabaseDB's persistence works.",source:"@site/versioned_docs/version-0.4.5/4.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/0.4.5/persistence",version:"0.4.5",sidebarPosition:4,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"version-0.4.5/docs",previous:{title:"USET",permalink:"/0.4.5/Actions/uset"},next:{title:"Configuration Files",permalink:"/0.4.5/config-files"}},u=[{value:"How TDB stores data",id:"how-tdb-stores-data",children:[]},{value:"Automated background saving",id:"automated-background-saving",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how TerrabaseDB's persistence works. "),(0,a.kt)("h2",{id:"how-tdb-stores-data"},"How TDB stores data"),(0,a.kt)("p",null,"Whenever you start the database, TDB looks for a ",(0,a.kt)("inlineCode",{parentName:"p"},"data.bin")," file, which contains data from the previous run of the database server. This is a binary file and should not be edited by hand: as you might end up corrupting the file.\nWhen you shut down the database, TDB stops stops listening to all incoming connections, and then flushes the entire in-memory table onto disk and then shutting down."),(0,a.kt)("h2",{id:"automated-background-saving"},"Automated background saving"),(0,a.kt)("p",null,"Since 0.4.2, TerrabaseDB supports automated saving of data in the background, via ",(0,a.kt)("inlineCode",{parentName:"p"},"BGSAVE")," . ",(0,a.kt)("inlineCode",{parentName:"p"},"BGSAVE")," , runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the ",(0,a.kt)("a",{parentName:"p",href:"config-files/#an-example-configuration"},"configuration file"),"."))}p.isMDXComponent=!0}}]);