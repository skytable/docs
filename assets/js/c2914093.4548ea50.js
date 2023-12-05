"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8275],{195:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(5893),i=o(1151);const r={id:"overview",title:"Skyhash 2 \u2014 Protocol Overview"},a=void 0,s={id:"protocol/overview",title:"Skyhash 2 \u2014 Protocol Overview",description:"Skyhash is the protocol used for communication between Skytable clients (client drivers or libraries) and the Skytable server, written on top of TCP. If you're building an application that needs to talk to Skytable, you'll usually choose a client library that works with your programming language and then start building your application.",source:"@site/docs/protocol/1.overview.md",sourceDirName:"protocol",slug:"/protocol/overview",permalink:"/protocol/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Skyhash 2 \u2014 Protocol Overview"},sidebar:"docs",previous:{title:"Migrating from an older release",permalink:"/resources/migration"},next:{title:"Networking",permalink:"/protocol/networking"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Skyhash is the protocol used for communication between Skytable clients (client drivers or libraries) and the Skytable server, written on top of TCP. If you're building an application that needs to ",(0,n.jsx)(t.em,{children:"talk to"})," Skytable, you'll usually choose a ",(0,n.jsx)(t.a,{href:"/libraries",children:"client library"})," that works with your programming language and then start building your application."]}),"\n",(0,n.jsx)(t.p,{children:"However, if a client driver is not available for your language then you might choose to implement a client driver yourself and while it might sound like a complicated task, we've worked hard to make it as easy for for you to do so. If you've worked with string processing, what you're going to encounter is very similar."}),"\n",(0,n.jsx)(t.admonition,{title:"Looking for error codes?",type:"tip",children:(0,n.jsxs)(t.p,{children:["Did the server return an error code and you're trying to figure out what happened? ",(0,n.jsx)(t.a,{href:"errors",children:(0,n.jsx)(t.strong,{children:"Jump to this page on error codes"})}),"."]})}),"\n",(0,n.jsx)(t.admonition,{title:"New data types are constantly added!",type:"info",children:(0,n.jsx)(t.p,{children:"We keep adding more and more data types with every release. So, if you're working to build a client, then consider keeping the type matching non-exhaustive, and if you encounter an unknown signature (that identifies the data type) then throw some sort of an exception indicating that your client does not support this data type yet."})}),"\n",(0,n.jsx)(t.p,{children:"Here are some good to know things, before a deep dive into the various pieces of the protocol:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The protocol is based on top of TCP, so if your programming language standard library has a TCP client (as most of them do) you can build a client"}),"\n",(0,n.jsxs)(t.li,{children:["You might find the ",(0,n.jsx)(t.a,{href:"https://github.com/skytable/client-rust",children:"official implementation of the Rust client"})," to be a good reference"]}),"\n",(0,n.jsx)(t.li,{children:"If you need help, ask! (on Discord, ping us on Twitter, just reach out!)"}),"\n",(0,n.jsx)(t.li,{children:"If the documentation doesn't seem helpful or you find it confusing, open an issue on the docs repository. We'll fix it."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["With all that out of the way, ",(0,n.jsx)(t.strong,{children:"go ahead and dive in!"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var n=o(7294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);