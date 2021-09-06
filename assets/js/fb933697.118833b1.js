(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48881],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43307:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"benchmarking",title:"Benchmarking"},c=void 0,s={unversionedId:"benchmarking",id:"version-0.7.0/benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool sky-bench .",source:"@site/versioned_docs/version-0.7.0/14.benchmarking.md",sourceDirName:".",slug:"/benchmarking",permalink:"/benchmarking",tags:[],version:"0.7.0",sidebarPosition:14,frontMatter:{id:"benchmarking",title:"Benchmarking"},sidebar:"version-0.7.0/docs",previous:{title:"Performance Guide",permalink:"/perf-guide"},next:{title:"Deployment notes",permalink:"/deployment-notes"}},l=[{value:"Step 0: Getting the benchmarking tool",id:"step-0-getting-the-benchmarking-tool",children:[]},{value:"Step 1: Starting the database server",id:"step-1-starting-the-database-server",children:[]},{value:"Step 2: Run the benchmark tool",id:"step-2-run-the-benchmark-tool",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench")," ."),(0,o.kt)("h2",{id:"step-0-getting-the-benchmarking-tool"},"Step 0: Getting the benchmarking tool"),(0,o.kt)("p",null,"You'll need to download a bundle from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.6.3"},"releases page")," and unzip it. In the following steps we'll assume that you have unzipped the archive and you're in that directory."),(0,o.kt)("h2",{id:"step-1-starting-the-database-server"},"Step 1: Starting the database server"),(0,o.kt)("p",null,"Open a terminal in the current directory and ",(0,o.kt)("a",{parentName:"p",href:"getting-started#step-2-make-the-files-runnable"},"set executable permissions"),". Now start the server by running ",(0,o.kt)("inlineCode",{parentName:"p"},"./skyd")," (or just ",(0,o.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows)."),(0,o.kt)("h2",{id:"step-2-run-the-benchmark-tool"},"Step 2: Run the benchmark tool"),(0,o.kt)("p",null,"Open another terminal in the current directory and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench")," with no arguments if you want to use the default options, or run ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench --help")," to see available configuration options. Hold tight, you'll know when it happens \ud83d\ude80."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"JSON Output"),(0,o.kt)("br",{parentName:"p"}),"\n","If you're a bit nerdy, we know it \u2014 you'll like some structured data. Well, all you need to do is: run ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench --json")," for JSON output!"))))}u.isMDXComponent=!0}}]);