(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(375)),i={id:"benchmarking",title:"Benchmarking"},c={unversionedId:"benchmarking",id:"version-0.5.1/benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool sky-bench .",source:"@site/versioned_docs/version-0.5.1/5.benchmarking.md",slug:"/benchmarking",permalink:"/benchmarking",version:"0.5.1",sidebar:"version-0.5.1/docs",previous:{title:"SSL/TLS configuration",permalink:"/ssl"},next:{title:"Building from source",permalink:"/building-from-source"}},s=[{value:"Step 0: Getting the benchmarking tool",id:"step-0-getting-the-benchmarking-tool",children:[]},{value:"Step 1: Starting the database server",id:"step-1-starting-the-database-server",children:[]},{value:"Step 2: Run the benchmark tool",id:"step-2-run-the-benchmark-tool",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool ",Object(o.b)("inlineCode",{parentName:"p"},"sky-bench")," ."),Object(o.b)("h2",{id:"step-0-getting-the-benchmarking-tool"},"Step 0: Getting the benchmarking tool"),Object(o.b)("p",null,"You'll need to download a bundle from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.5.1"},"releases page")," and unzip it. In the following steps we'll assume that you have unzipped the archive and you're in that directory."),Object(o.b)("h2",{id:"step-1-starting-the-database-server"},"Step 1: Starting the database server"),Object(o.b)("p",null,"Open a terminal in the current directory and ",Object(o.b)("a",{parentName:"p",href:"getting-started#step-2-make-the-files-runnable"},"set executable permissions"),". Now start the server by running ",Object(o.b)("inlineCode",{parentName:"p"},"./skyd")," (or just ",Object(o.b)("inlineCode",{parentName:"p"},"skyd")," on Windows)."),Object(o.b)("h2",{id:"step-2-run-the-benchmark-tool"},"Step 2: Run the benchmark tool"),Object(o.b)("p",null,"Open another terminal in the current directory and then run ",Object(o.b)("inlineCode",{parentName:"p"},"sky-bench")," with no arguments if you want to use the default options, or run ",Object(o.b)("inlineCode",{parentName:"p"},"sky-bench --help")," to see available configuration options. Hold tight, you'll know when it happens \ud83d\ude80."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"JSON Output"),Object(o.b)("br",{parentName:"p"}),"\n","If you're a bit nerdy, we know it \u2014 you'll like some structured data. Well, all you need to do is: run ",Object(o.b)("inlineCode",{parentName:"p"},"sky-bench --json")," for JSON output!"))))}p.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);