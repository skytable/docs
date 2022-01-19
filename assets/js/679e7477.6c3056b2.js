"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49553],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},11951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"response-codes",title:"Response Codes"},p=void 0,d={unversionedId:"protocol/response-codes",id:"version-0.7.2/protocol/response-codes",title:"Response Codes",description:"Skytable may return any of the response codes listed here:",source:"@site/versioned_docs/version-0.7.2/protocol/response-codes.md",sourceDirName:"protocol",slug:"/protocol/response-codes",permalink:"/protocol/response-codes",tags:[],version:"0.7.2",frontMatter:{id:"response-codes",title:"Response Codes"},sidebar:"version-0.7.2/docs",previous:{title:"Data Types",permalink:"/protocol/data-types"},next:{title:"Error Strings",permalink:"/protocol/errors"}},c=[],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Skytable may return any of the response codes listed here:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0")),(0,o.kt)("td",{parentName:"tr",align:null},"Okay"),(0,o.kt)("td",{parentName:"tr",align:null},"The server succeded in carrying out some operation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},"Nil"),(0,o.kt)("td",{parentName:"tr",align:null},"The client asked for a non-existent object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2")),(0,o.kt)("td",{parentName:"tr",align:null},"Overwrite Error"),(0,o.kt)("td",{parentName:"tr",align:null},"The client tried to overwrite data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3")),(0,o.kt)("td",{parentName:"tr",align:null},"Action Error"),(0,o.kt)("td",{parentName:"tr",align:null},"The action didn't expect the arguments sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4")),(0,o.kt)("td",{parentName:"tr",align:null},"Packet Error"),(0,o.kt)("td",{parentName:"tr",align:null},"The packet contains invalid data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"5")),(0,o.kt)("td",{parentName:"tr",align:null},"Server Error"),(0,o.kt)("td",{parentName:"tr",align:null},"An error occurred on the server side")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"6")),(0,o.kt)("td",{parentName:"tr",align:null},"Other error"),(0,o.kt)("td",{parentName:"tr",align:null},"Some other error response")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"7")),(0,o.kt)("td",{parentName:"tr",align:null},"Wrongtype error"),(0,o.kt)("td",{parentName:"tr",align:null},"The client sent the wrong type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8")),(0,o.kt)("td",{parentName:"tr",align:null},"Unknown data type"),(0,o.kt)("td",{parentName:"tr",align:null},"The client sent an unknown data type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9")),(0,o.kt)("td",{parentName:"tr",align:null},"Encoding error"),(0,o.kt)("td",{parentName:"tr",align:null},"The client sent a badly encoded query")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Error String")),(0,o.kt)("td",{parentName:"tr",align:null},"Other error with description"),(0,o.kt)("td",{parentName:"tr",align:null},"Some other error occurred. See ",(0,o.kt)("a",{parentName:"td",href:"errors"},"this document"))))))}s.isMDXComponent=!0}}]);