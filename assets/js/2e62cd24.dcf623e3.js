"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1761],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"building-from-source",title:"Building from source"},s=void 0,c={unversionedId:"building-from-source",id:"version-0.4.5/building-from-source",title:"Building from source",description:"Of course you can build it from source &mdash; that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files.",source:"@site/versioned_docs/version-0.4.5/3.building-from-source.md",sourceDirName:".",slug:"/building-from-source",permalink:"/0.4.5/building-from-source",tags:[],version:"0.4.5",sidebarPosition:3,frontMatter:{id:"building-from-source",title:"Building from source"},sidebar:"version-0.4.5/docs",previous:{title:"Benchmarking",permalink:"/0.4.5/benchmarking"},next:{title:"Terrapipe 1.0",permalink:"/0.4.5/Protocol/terrapipe"}},u=[{value:"Step 1: Install Rust",id:"step-1-install-rust",children:[],level:3},{value:"Step 2: Clone the tag",id:"step-2-clone-the-tag",children:[],level:3},{value:"Step 3: Build it!",id:"step-3-build-it",children:[],level:3},{value:"Step 4: Get the binaries",id:"step-4-get-the-binaries",children:[],level:3},{value:"Step 5: Run it!",id:"step-5-run-it",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Of course you can build it from source ","\u2014"," that is, if you don't mind running a few commands on the terminal, downlaoding some files and moving around some files."),(0,o.kt)("h3",{id:"step-1-install-rust"},"Step 1: Install Rust"),(0,o.kt)("p",null,"As TerrabaseDB is written in Rust, you'll have to install the Rust toolchain to build it (a little messy, but not too messy). Go to ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"this page")," to set up Rust on your local machine."),(0,o.kt)("h3",{id:"step-2-clone-the-tag"},"Step 2: Clone the tag"),(0,o.kt)("p",null,"Run this from your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone --branch v0.4.5 https://github.com/skytable/skytable.git\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to avoid downloading all the version history, run this instead:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"git clone --depth 1 --branch v0.4.5 https://github.com/skytable/skytable.git\n")))),(0,o.kt)("h3",{id:"step-3-build-it"},"Step 3: Build it!"),(0,o.kt)("p",null,"Expecting that you're still in the same directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd skybase && cargo build --release\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This will take a ",(0,o.kt)("strong",{parentName:"p"},"long time")," so hold on until Cargo finishes building things"))),(0,o.kt)("h3",{id:"step-4-get-the-binaries"},"Step 4: Get the binaries"),(0,o.kt)("p",null,"You'll need to copy ",(0,o.kt)("inlineCode",{parentName:"p"},"tdb")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tsh")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"tdb.exe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tsh.exe")," if on Windows) from the ",(0,o.kt)("inlineCode",{parentName:"p"},"skybase/target/release")," folder. Be sure to copy these ",(0,o.kt)("strong",{parentName:"p"},"exact files")," and not something else!"),(0,o.kt)("h3",{id:"step-5-run-it"},"Step 5: Run it!"),(0,o.kt)("p",null,"You can now follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"getting-started"},"here"),"."))}d.isMDXComponent=!0}}]);