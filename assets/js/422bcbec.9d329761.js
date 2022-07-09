"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={id:"building-from-source",title:"Building from source"},a=void 0,l={unversionedId:"building-from-source",id:"version-0.3.2/building-from-source",title:"Building from source",description:"Of course you can build it from source &mdash; that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files.",source:"@site/versioned_docs/version-0.3.2/3.building-from-source.md",sourceDirName:".",slug:"/building-from-source",permalink:"/0.3.2/building-from-source",draft:!1,tags:[],version:"0.3.2",sidebarPosition:3,frontMatter:{id:"building-from-source",title:"Building from source"},sidebar:"version-0.3.2/docs",previous:{title:"Benchmarking",permalink:"/0.3.2/benchmarking"},next:{title:"Terrapipe 0.3.1",permalink:"/0.3.2/terrapipe"}},s={},u=[{value:"Step 1: Install Rust",id:"step-1-install-rust",level:3},{value:"Step 2: Clone the tag",id:"step-2-clone-the-tag",level:3},{value:"Step 3: Build it!",id:"step-3-build-it",level:3},{value:"Step 4: Get the binaries",id:"step-4-get-the-binaries",level:3},{value:"Step 5: Run it!",id:"step-5-run-it",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Of course you can build it from source ","\u2014"," that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files."),(0,i.kt)("h3",{id:"step-1-install-rust"},"Step 1: Install Rust"),(0,i.kt)("p",null,"As TerrabaseDB is written in Rust, you'll have to install the Rust toolchain to build it (a little messy, but not too messy). Go to ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"this page")," to set up Rust on your local machine."),(0,i.kt)("h3",{id:"step-2-clone-the-tag"},"Step 2: Clone the tag"),(0,i.kt)("p",null,"Run this from your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone --branch v0.3.2 https://github.com/skytable/skytable.git\n")),(0,i.kt)("admonition",{title:"Bonus tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to avoid downloading all the version history, run this instead:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"git clone --depth 1 --branch v0.3.2 https://github.com/skytable/skytable.git\n"))),(0,i.kt)("h3",{id:"step-3-build-it"},"Step 3: Build it!"),(0,i.kt)("p",null,"Expecting that you're still in the same directory, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd skybase && cargo build --release\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This will take a ",(0,i.kt)("strong",{parentName:"p"},"long time")," so hold on until Cargo finishes building things")),(0,i.kt)("h3",{id:"step-4-get-the-binaries"},"Step 4: Get the binaries"),(0,i.kt)("p",null,"You'll need to copy ",(0,i.kt)("inlineCode",{parentName:"p"},"tdb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tsh")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"tdb.exe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tsh.exe")," if on Windows) from the ",(0,i.kt)("inlineCode",{parentName:"p"},"skybase/target/release")," folder. Be sure to copy these ",(0,i.kt)("strong",{parentName:"p"},"exact files")," and not something else!"),(0,i.kt)("h3",{id:"step-5-run-it"},"Step 5: Run it!"),(0,i.kt)("p",null,"You can now follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"getting-started"},"here"),"."))}c.isMDXComponent=!0}}]);