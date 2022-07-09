"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10126],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58216:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Environment Variables",id:"config-env"},i=void 0,o={unversionedId:"config-env",id:"version-0.7.1/config-env",title:"Environment Variables",description:"If you don't want to use configuration files or use command-line arguments, you can choose to use",source:"@site/versioned_docs/version-0.7.1/7a.env-config.md",sourceDirName:".",slug:"/config-env",permalink:"/0.7.1/config-env",draft:!1,tags:[],version:"0.7.1",frontMatter:{title:"Environment Variables",id:"config-env"},sidebar:"version-0.7.1/docs",previous:{title:"Configuration Files",permalink:"/0.7.1/config-files"},next:{title:"Command-line configuration",permalink:"/0.7.1/config-cmd"}},p={},d=[{value:"System",id:"system",level:2},{value:"BGSAVE",id:"bgsave",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"TLS",id:"tls",level:2}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you don't want to use configuration files or use command-line arguments, you can choose to use\nenvironment variables for configuration. The environment variables are divided into sections\nfor convenience, per the ",(0,r.kt)("a",{parentName:"p",href:"config-files"},"configuration file"),"."),(0,r.kt)("h2",{id:"system"},"System"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SYSTEM_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the host"),(0,r.kt)("td",{parentName:"tr",align:null},"A valid IPv4/IPv6 address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SYSTEM_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the port"),(0,r.kt)("td",{parentName:"tr",align:null},"16-bit positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SYSTEM_NOART"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables terminal artwork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SYSTEM_MAXCON"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the maximum connections"),(0,r.kt)("td",{parentName:"tr",align:null},"64/32 bit positive integer, depending on system")))),(0,r.kt)("h2",{id:"bgsave"},"BGSAVE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_BGSAVE_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables/disables BGSAVE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_BGSAVE_DURATION"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the BGSAVE interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-zero 64-bit positive integer")))),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SNAPSHOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables/disables snapshots"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SNAPSHOT_DURATION"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the snapshot interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-zero 64-bit positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SNAPSHOT_KEEP"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the maximum number of snapshots to keep"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," for keeping all or any positive 32/64 bit integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_SNAPSHOT_FAILSAFE"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets if writes should be disabled on snapshot failure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"tls"},"TLS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_TLS_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the TLS port"),(0,r.kt)("td",{parentName:"tr",align:null},"16-bit positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_TLS_ONLY"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables/disables TLS only mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_TLS_CERT"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the location of the TLS cert"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_TLS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the location of the TLS private key"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKY_TLS_PASSIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the location of the TLS private key password"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))))}u.isMDXComponent=!0}}]);