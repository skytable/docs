(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7576],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(y,o(o({ref:e},u),{},{components:n})):r.createElement(y,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77430:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"data-types",title:"Data Types"},i={unversionedId:"Protocol/data-types",id:"version-0.4.5/Protocol/data-types",isDocsHomePage:!1,title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/versioned_docs/version-0.4.5/Protocol/data-types.md",sourceDirName:"Protocol",slug:"/Protocol/data-types",permalink:"/0.4.5/Protocol/data-types",version:"0.4.5",frontMatter:{id:"data-types",title:"Data Types"},sidebar:"version-0.4.5/docs",previous:{title:"Terrapipe 1.0",permalink:"/0.4.5/Protocol/terrapipe"},next:{title:"Response Codes",permalink:"/0.4.5/Protocol/response-codes"}},p=[],s={toc:p};function u(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",(0,l.kt)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Additional notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"the next line is a string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,l.kt)("td",{parentName:"tr",align:null},"the next line is a response code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"the next line is a ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_"),(0,l.kt)("td",{parentName:"tr",align:null},"smallint signed"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},";"),(0,l.kt)("td",{parentName:"tr",align:null},"int signed"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),(0,l.kt)("p",null,"Do keep the matching for this symbol ",(0,l.kt)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."))}u.isMDXComponent=!0}}]);