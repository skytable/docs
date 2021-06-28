(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[287],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={id:"building-from-source",title:"Building from source"},s=void 0,l={unversionedId:"building-from-source",id:"building-from-source",isDocsHomePage:!1,title:"Building from source",description:"Of course you can build it from source &mdash; but with quite a bit of hassle. The database server is a bit fussy with its builds, so you'll need quite a few tools before you can actually start using it.",source:"@site/docs/3.building-from-source.md",sourceDirName:".",slug:"/building-from-source",permalink:"/next/building-from-source",version:"current",sidebarPosition:3,frontMatter:{id:"building-from-source",title:"Building from source"},sidebar:"docs",previous:{title:"Deployment notes",permalink:"/next/deployment-notes"},next:{title:"DBSIZE",permalink:"/next/actions/dbsize"}},u=[{value:"Step 1: Install pre-requisites",id:"step-1-install-pre-requisites",children:[]},{value:"Step 2: Clone the tag",id:"step-2-clone-the-tag",children:[]},{value:"Step 3: Build it!",id:"step-3-build-it",children:[]},{value:"Step 4: Get the binaries",id:"step-4-get-the-binaries",children:[]},{value:"Step 5: Run it!",id:"step-5-run-it",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Of course you can build it from source ","\u2014"," but with quite a bit of hassle. The database server is a bit fussy with its builds, so you'll need quite a few tools before you can actually start using it."),(0,a.kt)("h3",{id:"step-1-install-pre-requisites"},"Step 1: Install pre-requisites"),(0,a.kt)("p",null,"As Skytable is written in Rust, you'll have to install the Rust toolchain to build it (a little messy, but not too messy). Go to ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"this page")," to set up Rust on your local machine."),(0,a.kt)("p",null,"Besides, the TLS/SSL components are written in C (OpenSSL) ","\u2014"," so you'll need to install:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A C compiler for your platform"),(0,a.kt)("li",{parentName:"ul"},"GNU Make (",(0,a.kt)("inlineCode",{parentName:"li"},"make"),")"),(0,a.kt)("li",{parentName:"ul"},"Perl")),(0,a.kt)("h3",{id:"step-2-clone-the-tag"},"Step 2: Clone the tag"),(0,a.kt)("p",null,"Run this from your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone --branch v0.6.3 https://github.com/skytable/skytable.git\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to avoid downloading all the version history, run this instead:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"git clone --depth 1 --branch v0.6.3 https://github.com/skytable/skytable.git\n")))),(0,a.kt)("h3",{id:"step-3-build-it"},"Step 3: Build it!"),(0,a.kt)("p",null,"Expecting that you're still in the same directory, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd skybase && cargo build --release\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This will take ",(0,a.kt)("strong",{parentName:"p"},"crazy long")," at times, so hold on until Cargo finishes building things"))),(0,a.kt)("h3",{id:"step-4-get-the-binaries"},"Step 4: Get the binaries"),(0,a.kt)("p",null,"You'll need to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"skyd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"skysh")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"skyd.exe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"skysh.exe")," if on Windows) from the ",(0,a.kt)("inlineCode",{parentName:"p"},"skybase/target/release")," folder. Be sure to copy these ",(0,a.kt)("strong",{parentName:"p"},"exact files")," and not something else!"),(0,a.kt)("h3",{id:"step-5-run-it"},"Step 5: Run it!"),(0,a.kt)("p",null,"Now start the database server by running ",(0,a.kt)("inlineCode",{parentName:"p"},"./skyd")," and then start the interactive shell by running ",(0,a.kt)("inlineCode",{parentName:"p"},"./skysh"),". You're ready to use the ",(0,a.kt)("a",{parentName:"p",href:"actions-overview"},"actions"),"!"))}p.isMDXComponent=!0}}]);