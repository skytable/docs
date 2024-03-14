"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1313],{6928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(4848),o=t(8453);const s={id:"benchmarking",title:"Benchmarking"},i=void 0,a={id:"benchmarking",title:"Benchmarking",description:"Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool sky-bench .",source:"@site/versioned_docs/version-0.7.5/14.benchmarking.md",sourceDirName:".",slug:"/benchmarking",permalink:"/0.7.5/benchmarking",draft:!1,unlisted:!1,tags:[],version:"0.7.5",sidebarPosition:14,frontMatter:{id:"benchmarking",title:"Benchmarking"},sidebar:"docs",previous:{title:"Performance Guide",permalink:"/0.7.5/perf-guide"},next:{title:"Deployment notes",permalink:"/0.7.5/deployment-notes"}},c={},d=[{value:"Step 0: Getting the benchmarking tool",id:"step-0-getting-the-benchmarking-tool",level:2},{value:"Step 1: Starting the database server",id:"step-1-starting-the-database-server",level:2},{value:"Step 2: Run the benchmark tool",id:"step-2-run-the-benchmark-tool",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Who doesn't like speed and as a consequence, benchmarks? So here's a guide on benchmarking Skytable with our tool ",(0,r.jsx)(n.code,{children:"sky-bench"})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"step-0-getting-the-benchmarking-tool",children:"Step 0: Getting the benchmarking tool"}),"\n",(0,r.jsxs)(n.p,{children:["You'll need to download a bundle from the ",(0,r.jsx)(n.a,{href:"https://github.com/skytable/skytable/releases/v0.6.3",children:"releases page"})," and unzip it. In the following steps we'll assume that you have unzipped the archive and you're in that directory."]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-starting-the-database-server",children:"Step 1: Starting the database server"}),"\n",(0,r.jsxs)(n.p,{children:["Open a terminal in the current directory and ",(0,r.jsx)(n.a,{href:"getting-started#step-2-make-the-files-runnable",children:"set executable permissions"}),". Now start the server by running ",(0,r.jsx)(n.code,{children:"./skyd"})," (or just ",(0,r.jsx)(n.code,{children:"skyd"})," on Windows)."]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-run-the-benchmark-tool",children:"Step 2: Run the benchmark tool"}),"\n",(0,r.jsxs)(n.p,{children:["Open another terminal in the current directory and then run ",(0,r.jsx)(n.code,{children:"sky-bench"})," with no arguments if you want to use the default options, or run ",(0,r.jsx)(n.code,{children:"sky-bench --help"})," to see available configuration options. Hold tight, you'll know when it happens \ud83d\ude80."]}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Output"}),(0,r.jsx)(n.br,{}),"\n","If you're a bit nerdy, we know it \u2014 you'll like some structured data. Well, all you need to do is: run ",(0,r.jsx)(n.code,{children:"sky-bench --json"})," for JSON output!"]})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);