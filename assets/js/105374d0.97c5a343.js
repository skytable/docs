"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9757],{2116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const i={id:"deployment-notes",title:"Deployment notes"},r=void 0,a={id:"deployment-notes",title:"Deployment notes",description:"Here are some good to know things about deploying Skytable:",source:"@site/versioned_docs/version-0.7.4/15.deployment-notes.md",sourceDirName:".",slug:"/deployment-notes",permalink:"/0.7.4/deployment-notes",draft:!1,unlisted:!1,tags:[],version:"0.7.4",sidebarPosition:15,frontMatter:{id:"deployment-notes",title:"Deployment notes"},sidebar:"docs",previous:{title:"Benchmarking",permalink:"/0.7.4/benchmarking"},next:{title:"Building from source",permalink:"/0.7.4/building-from-source"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Here are some ",(0,o.jsx)(n.em,{children:"good to know"})," things about deploying Skytable:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Skytable is under active development. If you do find any rough edges, ",(0,o.jsx)(n.a,{href:"https://github.com/skytable/skytable/issues",children:"please open an issue"})]}),"\n",(0,o.jsxs)(n.li,{children:["The daemon will create a ",(0,o.jsx)(n.code,{children:".sky_pid"})," file in its working directory which functions as a PID file\nand indicates other processes to not use the data directory. If the daemon is somehow forcefully\nstopped, the file may not be removed. In that case, you should manually remove the file"]}),"\n",(0,o.jsxs)(n.li,{children:["Skytable currently has a default limit of 50000 connections on a single daemon instance. This limit\ncan be modified ",(0,o.jsx)(n.a,{href:"config",children:"in your configuration"}),".","\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Make sure you change the maximum number of connections according to the available system resources to avoid DoS\nlike attacks that may cause your system to crash"})}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Skytable is inherently multithreaded. As of now, there is no way to stop Skytable from using\nmultiple threads"}),"\n",(0,o.jsx)(n.li,{children:"The best way to deploy Skytable is as a service (and disabling terminal artwork)"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);