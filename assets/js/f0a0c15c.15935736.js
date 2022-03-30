"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,k=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"all-actions",title:"Index of actions"},s=void 0,c={unversionedId:"all-actions",id:"version-0.7.5/all-actions",title:"Index of actions",description:"Skytable currently supports the actions listed in this document. You can find all the actions",source:"@site/versioned_docs/version-0.7.5/6.all-actions.md",sourceDirName:".",slug:"/all-actions",permalink:"/all-actions",tags:[],version:"0.7.5",sidebarPosition:6,frontMatter:{id:"all-actions",title:"Index of actions"},sidebar:"docs",previous:{title:"Examples",permalink:"/examples"},next:{title:"Configuration basics",permalink:"/config"}},p={},u=[{value:"Global Actions",id:"global-actions",level:2},{value:"Key-value actions",id:"key-value-actions",level:2},{value:"Generic actions",id:"generic-actions",level:3},{value:"String actions",id:"string-actions",level:3},{value:"List actions",id:"list-actions",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable currently supports the actions listed in this document. You can find all the actions\nclassified by scope, model and type below. Do note that this list doesn't include DDL actions.\nFor DDL, see ",(0,i.kt)("a",{parentName:"p",href:"ddl"},"this document"),"."),(0,i.kt)("h2",{id:"global-actions"},"Global Actions"),(0,i.kt)("p",null,"These actions can be used globally irrespective of the underlying keyspace or table properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/auth"},"AUTH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/dbsize"},"DBSIZE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/flushdb"},"FLUSHDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/heya"},"HEYA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/mksnap"},"MKSNAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/sys"},"SYS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/whereami"},"WHEREAMI"))),(0,i.kt)("h2",{id:"key-value-actions"},"Key-value actions"),(0,i.kt)("p",null,"These actions can be used on Keymap model tables which is essentially an extensible key/value store."),(0,i.kt)("h3",{id:"generic-actions"},"Generic actions"),(0,i.kt)("p",null,"These actions can be used on all Keymap tables irrespective of the key/value type in the table\ndefinition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/del"},"DEL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/exists"},"EXISTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/lskeys"},"LSKEYS"))),(0,i.kt)("h3",{id:"string-actions"},"String actions"),(0,i.kt)("p",null,"These actions can be used on keymap tables that have string types (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"str")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"binstr"),") in\nboth the key and value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/get"},"GET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/keylen"},"KEYLEN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/mget"},"MGET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/mpop"},"MPOP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/mset"},"MSET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/mupdate"},"MUPDATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/pop"},"POP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/sdel"},"SDEL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/set"},"SET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/sset"},"SSET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/supdate"},"SUPDATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/update"},"UPDATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/uset"},"USET"))),(0,i.kt)("h3",{id:"list-actions"},"List actions"),(0,i.kt)("p",null,"These actions can be used on keymap tables that have list types (",(0,i.kt)("inlineCode",{parentName:"p"},"list<type>"),") as their value type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/lget"},"LGET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/lmod"},"LMOD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/actions/lset"},"LSET"))))}f.isMDXComponent=!0}}]);