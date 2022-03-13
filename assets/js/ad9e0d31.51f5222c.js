"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59261],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=d(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32949:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"response-codes",title:"Response Codes"},p=void 0,d={unversionedId:"protocol/response-codes",id:"protocol/response-codes",title:"Response Codes",description:"Skytable may return any of the response codes listed here:",source:"@site/docs/protocol/response-codes.md",sourceDirName:"protocol",slug:"/protocol/response-codes",permalink:"/next/protocol/response-codes",tags:[],version:"current",frontMatter:{id:"response-codes",title:"Response Codes"},sidebar:"docs",previous:{title:"Data Types",permalink:"/next/protocol/data-types"},next:{title:"Error Strings",permalink:"/next/protocol/errors"}},c=[],u={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Skytable may return any of the response codes listed here:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Okay"),(0,l.kt)("td",{parentName:"tr",align:null},"The server succeded in carrying out some operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Nil"),(0,l.kt)("td",{parentName:"tr",align:null},"The client asked for a non-existent object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Overwrite Error"),(0,l.kt)("td",{parentName:"tr",align:null},"The client tried to overwrite data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:null},"Action Error"),(0,l.kt)("td",{parentName:"tr",align:null},"The action didn't expect the arguments sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},"Packet Error"),(0,l.kt)("td",{parentName:"tr",align:null},"The packet contains invalid data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Server Error"),(0,l.kt)("td",{parentName:"tr",align:null},"An error occurred on the server side")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6")),(0,l.kt)("td",{parentName:"tr",align:null},"Other error"),(0,l.kt)("td",{parentName:"tr",align:null},"Some other error response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:null},"Wrongtype error"),(0,l.kt)("td",{parentName:"tr",align:null},"The client sent the wrong type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8")),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown data type"),(0,l.kt)("td",{parentName:"tr",align:null},"The client sent an unknown data type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9")),(0,l.kt)("td",{parentName:"tr",align:null},"Encoding error"),(0,l.kt)("td",{parentName:"tr",align:null},"The client sent a badly encoded query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Bad credentials"),(0,l.kt)("td",{parentName:"tr",align:null},"The authn credentials are invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"11")),(0,l.kt)("td",{parentName:"tr",align:null},"Authn realm error"),(0,l.kt)("td",{parentName:"tr",align:null},"The current user is not allowed to perform the action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Error String")),(0,l.kt)("td",{parentName:"tr",align:null},"Other error with description"),(0,l.kt)("td",{parentName:"tr",align:null},"Some other error occurred. See ",(0,l.kt)("a",{parentName:"td",href:"errors"},"this document"))))))}m.isMDXComponent=!0}}]);