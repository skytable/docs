"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"config",title:"Configuration basics"},i=void 0,l={unversionedId:"config",id:"config",title:"Configuration basics",description:"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:",source:"@site/docs/7.cfg.md",sourceDirName:".",slug:"/config",permalink:"/next/config",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"config",title:"Configuration basics"},sidebar:"docs",previous:{title:"Index of actions",permalink:"/next/all-actions"},next:{title:"Configuration Files",permalink:"/next/config-files"}},d={},u=[{value:"Deployment mode",id:"deployment-mode",level:2},{value:"<code>dev</code> mode",id:"dev-mode",level:3},{value:"<code>prod</code> mode",id:"prod-mode",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-files"},"Configuration files"),": A simple TOML file to tune your settings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-cmd"},"Command-line arguments"),": Use command-line parameters to configure the database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-env"},"Environment variables"),": Use environment variables for configuration")),(0,a.kt)("h2",{id:"deployment-mode"},"Deployment mode"),(0,a.kt)("p",null,"Skytable uses the idea of a ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," mode to make configuration during deployment easier. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),"\nmode setting can be changed by using your preferred mode of configuration, as listed above."),(0,a.kt)("h3",{id:"dev-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"dev")," mode"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," mode allows you to use any configuration without any hard checks. This is suitable for use\nduring development"),(0,a.kt)("h3",{id:"prod-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"prod")," mode"),(0,a.kt)("p",null,"In this mode, you are required to use the settings that we recommend for production usage. This includes\nstrict requirements on BGSAVE, TLS and snapshot settings. Here's what's required for production:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum connections"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be lesser than or equal to the resource limits set for that process (on Unix)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Terminal artwork"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BGSAVE"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot failsafe"),(0,a.kt)("td",{parentName:"tr",align:null},"Set to `true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TLS"),(0,a.kt)("td",{parentName:"tr",align:null},"Atleast insecure TCP+TLS multi-socket mode or TLS-only mode must be enabled. If authn/authz is enabled, then TLS-only mode must be enabled")))))}s.isMDXComponent=!0}}]);