"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28109],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"config",title:"Configuration basics"},u=void 0,d={unversionedId:"config",id:"version-0.7.4/config",title:"Configuration basics",description:"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:",source:"@site/versioned_docs/version-0.7.4/7.cfg.md",sourceDirName:".",slug:"/config",permalink:"/0.7.4/config",tags:[],version:"0.7.4",sidebarPosition:7,frontMatter:{id:"config",title:"Configuration basics"},sidebar:"docs",previous:{title:"Index of actions",permalink:"/0.7.4/all-actions"},next:{title:"Configuration Files",permalink:"/0.7.4/config-files"}},c={},s=[{value:"Deployment mode",id:"deployment-mode",level:2},{value:"<code>dev</code> mode",id:"dev-mode",level:3},{value:"<code>prod</code> mode",id:"prod-mode",level:3}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-files"},"Configuration files"),": A simple TOML file to tune your settings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-cmd"},"Command-line arguments"),": Use command-line parameters to configure the database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"config-env"},"Environment variables"),": Use environment variables for configuration")),(0,a.kt)("h2",{id:"deployment-mode"},"Deployment mode"),(0,a.kt)("p",null,"Skytable uses the idea of a ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," mode to make configuration during deployment easier. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),"\nmode setting can be changed by using your preferred mode of configuration, as listed above."),(0,a.kt)("h3",{id:"dev-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"dev")," mode"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," mode allows you to use any configuration without any hard checks. This is suitable for use\nduring development"),(0,a.kt)("h3",{id:"prod-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"prod")," mode"),(0,a.kt)("p",null,"In this mode, you are required to use the settings that we recommend for production usage. This includes\nstrict requirements on BGSAVE, TLS and snapshot settings. Here's what's required for production:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum connections"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be lesser than or equal to the resource limits set for that process (on Unix)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Terminal artwork"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BGSAVE"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot failsafe"),(0,a.kt)("td",{parentName:"tr",align:null},"Set to `true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TLS"),(0,a.kt)("td",{parentName:"tr",align:null},"Atleast insecure TCP+TLS multi-socket mode or TLS-only mode must be enabled. If authn/authz is enabled, then TLS-only mode must be enabled")))))}m.isMDXComponent=!0}}]);