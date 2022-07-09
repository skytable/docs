"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40125],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(n),c=a,y=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(y,o(o({ref:e},d),{},{components:n})):r.createElement(y,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"data-types",title:"Data Types"},o=void 0,i={unversionedId:"Protocol/data-types",id:"version-0.5.0/Protocol/data-types",title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/versioned_docs/version-0.5.0/Protocol/data-types.md",sourceDirName:"Protocol",slug:"/Protocol/data-types",permalink:"/0.5.0/Protocol/data-types",draft:!1,tags:[],version:"0.5.0",frontMatter:{id:"data-types",title:"Data Types"},sidebar:"version-0.5.0/docs",previous:{title:"Terrapipe 1.0",permalink:"/0.5.0/Protocol/terrapipe"},next:{title:"Response Codes",permalink:"/0.5.0/Protocol/response-codes"}},p={},s=[],d={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",(0,a.kt)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Additional notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"the next line is a string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"!"),(0,a.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"the next line is a response code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$"),(0,a.kt)("td",{parentName:"tr",align:null},"JSON"),(0,a.kt)("td",{parentName:"tr",align:null},"the next line is a ",(0,a.kt)("inlineCode",{parentName:"td"},"JSON")," value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"smallint"),(0,a.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_"),(0,a.kt)("td",{parentName:"tr",align:null},"smallint signed"),(0,a.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},":"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},";"),(0,a.kt)("td",{parentName:"tr",align:null},"int signed"),(0,a.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"?"),(0,a.kt)("td",{parentName:"tr",align:null},"binary"),(0,a.kt)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),(0,a.kt)("p",null,"Do keep the matching for this symbol ",(0,a.kt)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."))}u.isMDXComponent=!0}}]);