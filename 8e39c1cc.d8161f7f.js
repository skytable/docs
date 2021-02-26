(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(342)),a={id:"index",title:"Introduction",sidebar_label:"Home",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Welcome to Skybase's docs! You will find information about how you can get started with Skybase, installation options, configuration and clients.",source:"@site/docs/1.index.md",slug:"/",permalink:"/next/",version:"current",sidebar_label:"Home",sidebar:"docs",next:{title:"Actions overview",permalink:"/next/Actions/overview"}},s=[{value:"Users",id:"users",children:[]},{value:"Developers",id:"developers",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"License",id:"license",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to Skybase's docs! You will find information about how you can get started with Skybase, installation options, configuration and clients."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This documentation is for Skybase versions built off the ",Object(i.b)("inlineCode",{parentName:"p"},"next")," branch and is not very stable. To use a pre-built binary and see its corresponding instructions, click on the version dropdown towards the upper left to select a version."))),Object(i.b)("h2",{id:"users"},"Users"),Object(i.b)("p",null,"Since you're building off ",Object(i.b)("inlineCode",{parentName:"p"},"next"),", you'll have to ",Object(i.b)("a",{parentName:"p",href:"building-from-source"},"build from source"),". Once you've got everything up and running, you can take a look at the available actions ",Object(i.b)("a",{parentName:"p",href:"actions/overview"},"here")," and ",Object(i.b)("a",{parentName:"p",href:"config-files"},"configuration files"),"."),Object(i.b)("h2",{id:"developers"},"Developers"),Object(i.b)("p",null,"You can find information on how to build your own clients ",Object(i.b)("a",{parentName:"p",href:"Protocol/terrapipe"},"here"),". The primary idea is to implement the Terrapipe Protocol."),Object(i.b)("h2",{id:"contributing"},"Contributing"),Object(i.b)("p",null,"If you find any typos, mistakes or any other scope of improvement - please don't hesitate to bring it up ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skybasedb/docs/issues"},"here"),". Thank you \u2764\ufe0f!"),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"The documentation is licensed under the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skybasedb/docs/tree/master/LICENSE"},"CC-BY-SA-4.0 License")))}u.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);