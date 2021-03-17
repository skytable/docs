(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(375)),i={id:"persistence",title:"Persistence"},s={unversionedId:"persistence",id:"persistence",isDocsHomePage:!1,title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/docs/4.persistence.md",slug:"/persistence",permalink:"/next/persistence",version:"current",sidebar:"docs",previous:{title:"Actions overview",permalink:"/next/actions-overview"},next:{title:"Configuration Files",permalink:"/next/config-files"}},c=[{value:"How Skytable stores data",id:"how-skytable-stores-data",children:[]},{value:"Automated background saving",id:"automated-background-saving",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works. "),Object(o.b)("h2",{id:"how-skytable-stores-data"},"How Skytable stores data"),Object(o.b)("p",null,"Whenever you start the database, ",Object(o.b)("inlineCode",{parentName:"p"},"skyd")," looks for a ",Object(o.b)("inlineCode",{parentName:"p"},"data.bin")," file, which contains data from the previous run of the database server. This is a binary file and should not be edited by hand: as you might end up corrupting the file.\nWhen you shut down the database, ",Object(o.b)("inlineCode",{parentName:"p"},"skyd")," stops stops listening to all incoming connections, and then flushes the entire in-memory table onto disk and then shutting down."),Object(o.b)("h2",{id:"automated-background-saving"},"Automated background saving"),Object(o.b)("p",null,"Skytable supports automated saving of data in the background, via ",Object(o.b)("inlineCode",{parentName:"p"},"BGSAVE")," . ",Object(o.b)("inlineCode",{parentName:"p"},"BGSAVE")," , runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the ",Object(o.b)("a",{parentName:"p",href:"config-files/#an-example-configuration"},"configuration file"),"."))}l.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);