"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93327],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={id:"config-cmd",title:"Command-line configuration"},a=void 0,c={unversionedId:"config-cmd",id:"version-0.7.4/config-cmd",title:"Command-line configuration",description:"You can use command line arguments alone for configuration in place of configuration files. Every binary ( skyd , skysh and sky-bench ) that you get with a bundle have extremely helpful help menus. Whatever you can configure with the configuration file can be configured through command line",source:"@site/versioned_docs/version-0.7.4/8.config-cmdline.md",sourceDirName:".",slug:"/config-cmd",permalink:"/0.7.4/config-cmd",draft:!1,tags:[],version:"0.7.4",sidebarPosition:8,frontMatter:{id:"config-cmd",title:"Command-line configuration"},sidebar:"docs",previous:{title:"Environment Variables",permalink:"/0.7.4/config-env"},next:{title:"Authentication and authorization",permalink:"/0.7.4/auth"}},l={},u=[],p={toc:u};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use command line arguments alone for configuration in place of configuration files. Every binary ( ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"skysh")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-bench")," ) that you get with a bundle have extremely helpful help menus. Whatever you can configure with the configuration file can be configured through command line\narguments."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skyd --help")," : Brings up the help menu for ",(0,i.kt)("inlineCode",{parentName:"li"},"skyd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skysh --help")," : Brings up the help menu for ",(0,i.kt)("inlineCode",{parentName:"li"},"skysh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sky-bench --help")," : Brings up the help menu for ",(0,i.kt)("inlineCode",{parentName:"li"},"sky-bench"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There is no specific ",(0,i.kt)("em",{parentName:"p"},"advantage")," in using command-line arguments over configuration files or\nvice versa. When any kind of configuration is specified: either a configuration file or command\nline arguments, it is parsed once at startup and then the same configuration is used throughout.\nIt is really a matter of choice (or convenience).")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You must specify either a configuration file ",(0,i.kt)("strong",{parentName:"p"},"or")," command-line arguments. If you provide both ","\u2014","\nthe database will shut down with an error that asks you to provide either one mode of configuration")))}s.isMDXComponent=!0}}]);