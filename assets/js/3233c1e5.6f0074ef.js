"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87011],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16969:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={id:"errors",title:"Error Strings"},s=void 0,i={unversionedId:"Protocol/errors",id:"version-0.5.1/Protocol/errors",title:"Error Strings",description:"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes.",source:"@site/versioned_docs/version-0.5.1/Protocol/errors.md",sourceDirName:"Protocol",slug:"/Protocol/errors",permalink:"/0.5.1/Protocol/errors",draft:!1,tags:[],version:"0.5.1",frontMatter:{id:"errors",title:"Error Strings"},sidebar:"version-0.5.1/docs",previous:{title:"Response Codes",permalink:"/0.5.1/Protocol/response-codes"}},l={},c=[{value:"Table of errors",id:"table-of-errors",level:2}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes."),(0,o.kt)("h2",{id:"table-of-errors"},"Table of errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error String"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-access-after-termsig"),(0,o.kt)("td",{parentName:"tr",align:null},"This error indicates that a connection was accepted by the server even after the database received a termination signal. This is a very bad error and should be reported immediately")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-snapshot-busy"),(0,o.kt)("td",{parentName:"tr",align:null},"This indicates that a snapshot operation is already in progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-snapshot-disabled"),(0,o.kt)("td",{parentName:"tr",align:null},"This indicates that snapshots have been disabled on the server-side")))))}d.isMDXComponent=!0}}]);