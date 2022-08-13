"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"benchmarking",title:"Benchmarking"},i=void 0,l={unversionedId:"benchmarking",id:"benchmarking",title:"Benchmarking",description:"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool sky-bench .",source:"@site/docs/14.benchmarking.md",sourceDirName:".",slug:"/benchmarking",permalink:"/next/benchmarking",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"benchmarking",title:"Benchmarking"},sidebar:"docs",previous:{title:"Performance Guide",permalink:"/next/perf-guide"},next:{title:"Deployment notes",permalink:"/next/deployment-notes"}},p={},s=[{value:"Step 0: Getting the benchmarking tool",id:"step-0-getting-the-benchmarking-tool",level:2},{value:"Step 1: Starting the database server",id:"step-1-starting-the-database-server",level:2},{value:"Step 2: Run the benchmark tool",id:"step-2-run-the-benchmark-tool",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-bench")," ."),(0,a.kt)("h2",{id:"step-0-getting-the-benchmarking-tool"},"Step 0: Getting the benchmarking tool"),(0,a.kt)("p",null,"You'll need to download a bundle from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.6.3"},"releases page")," and unzip it. In the following steps we'll assume that you have unzipped the archive and you're in that directory."),(0,a.kt)("h2",{id:"step-1-starting-the-database-server"},"Step 1: Starting the database server"),(0,a.kt)("p",null,"Open a terminal in the current directory and ",(0,a.kt)("a",{parentName:"p",href:"getting-started#step-2-make-the-files-runnable"},"set executable permissions"),". Now start the server by running ",(0,a.kt)("inlineCode",{parentName:"p"},"./skyd")," (or just ",(0,a.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows)."),(0,a.kt)("h2",{id:"step-2-run-the-benchmark-tool"},"Step 2: Run the benchmark tool"),(0,a.kt)("p",null,"Open another terminal in the current directory and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-bench")," with no arguments if you want to use the default options, or run ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-bench --help")," to see available configuration options. Hold tight, you'll know when it happens \ud83d\ude80."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"JSON Output"),(0,a.kt)("br",{parentName:"p"}),"\n","If you're a bit nerdy, we know it \u2014 you'll like some structured data. Well, all you need to do is: run ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-bench --json")," for JSON output!")))}u.isMDXComponent=!0}}]);