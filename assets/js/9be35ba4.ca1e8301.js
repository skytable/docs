"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"examples",title:"Examples"},p=void 0,i={unversionedId:"examples",id:"version-0.7.0/examples",title:"Examples",description:"DDL",source:"@site/versioned_docs/version-0.7.0/5b.examples.md",sourceDirName:".",slug:"/examples",permalink:"/0.7.0/examples",draft:!1,tags:[],version:"0.7.0",frontMatter:{id:"examples",title:"Examples"},sidebar:"version-0.7.0/docs",previous:{title:"DDL",permalink:"/0.7.0/ddl"},next:{title:"Index of actions",permalink:"/0.7.0/all-actions"}},s={},o=[{value:"DDL",id:"ddl",level:2}],c={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ddl"},"DDL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'cats' in a keyspace 'animals'. The cat's name will be the key\nwhich as an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," value while the value would be the cat's image in a binary format, so it'll be\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr")," type."),(0,r.kt)("p",{parentName:"li"},"a. Let's create the keyspace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE animals\n")),(0,r.kt)("p",{parentName:"li"},"b. Let's create the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE animals:cat keymap(str,binstr)\n")),(0,r.kt)("p",{parentName:"li"},"c. Let's switch to the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"d. Let's inspect it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT TABLE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"e. Let's drop the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"f. Let's drop the keyspace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE animals\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'favorites' in the 'default' keyspace. This will store a favorite\nname, an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," and an URL, also an ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE favorites keymap(str,str)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'cache' in the 'default' keyspace that is volatile. Our cache key is an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," while the value would be some binary data, so ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE cache keymap(str,binstr) volatile\n")))))}m.isMDXComponent=!0}}]);