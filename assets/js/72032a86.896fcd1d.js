"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3587],{3828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(5893),i=n(1151);const s={id:"persistence",title:"Persistence"},o=void 0,r={id:"persistence",title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/versioned_docs/version-0.7.4/9.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/0.7.4/persistence",draft:!1,unlisted:!1,tags:[],version:"0.7.4",sidebarPosition:9,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"docs",previous:{title:"Authentication and authorization",permalink:"/0.7.4/auth"},next:{title:"Snapshots",permalink:"/0.7.4/snapshots"}},d={},l=[{value:"How Skytable stores data",id:"how-skytable-stores-data",level:2},{value:"Save failure during termination",id:"save-failure-during-termination",level:3},{value:"Automated background saving",id:"automated-background-saving",level:2},{value:"Reliability of BGSAVE",id:"reliability-of-bgsave",level:3},{value:"BGSAVE Recovery",id:"bgsave-recovery",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works."}),"\n",(0,a.jsx)(t.h2,{id:"how-skytable-stores-data",children:"How Skytable stores data"}),"\n",(0,a.jsxs)(t.p,{children:["As soon as you start Skytable, it will look for a ",(0,a.jsx)(t.code,{children:"PRELOAD"})," file in the data directory. If it\nisn't found \u2014 the server would expect this to be a new instance and will create the\nrequired files for you. Skytable uses a disk storage format called ",(0,a.jsx)(t.strong,{children:"Cyanstore"})," (version ",(0,a.jsx)(t.code,{children:"1A"}),")\nfor storing your data and all files are encoded/decoded in compliance with this format."]}),"\n",(0,a.jsxs)(t.p,{children:["Once you terminate the daemon, it will flush all data to disk. All writes are ",(0,a.jsx)(t.code,{children:"fsync"}),"ed by the time\nthey complete."]}),"\n",(0,a.jsx)(t.h3,{id:"save-failure-during-termination",children:"Save failure during termination"}),"\n",(0,a.jsxs)(t.p,{children:["The server would attempt to do a ",(0,a.jsx)(t.em,{children:"final"})," save operation before it terminates and if this fails, the\nserver would enter into a retry loop. It will try the save operation after every 10 seconds.\nExponential backoff was not chosen because it could increase to extremely large values that may hurt\na sysadmin's time and productivity."]}),"\n",(0,a.jsxs)(t.p,{children:["You might be interested in more features like ",(0,a.jsx)(t.a,{href:"#automated-background-saving",children:"BGSAVE"})," and ",(0,a.jsx)(t.a,{href:"snapshots",children:"snapshots"})," that\ncan be configured and used by users."]}),"\n",(0,a.jsx)(t.h2,{id:"automated-background-saving",children:"Automated background saving"}),"\n",(0,a.jsxs)(t.p,{children:["Skytable supports automated saving of data in the background, via ",(0,a.jsx)(t.code,{children:"BGSAVE"}),". ",(0,a.jsx)(t.code,{children:"BGSAVE"}),", runs every two minutes to flush all the data in the in-memory table onto disk, unless ",(0,a.jsx)(t.a,{href:"config",children:"customized"}),". BGSAVE is enabled by default and we don't recommend disabling it until you're sure that\nyour hardware will never fail; it is likely that this will never be the case. First BGSAVE will create a temporary\nfile and then flush the current in-memory table onto disk. The daemon automatically ",(0,a.jsx)(t.code,{children:"fsync"}),"s after every successful write (whether to the buffers or\nto the actual disk)."]}),"\n",(0,a.jsx)(t.h3,{id:"reliability-of-bgsave",children:"Reliability of BGSAVE"}),"\n",(0,a.jsxs)(t.p,{children:["It can happen that BGSAVE fails to flush data to the disk due to some unforeseen system issues (such as lack of\nempty disk space, permission errors, etc). But if we continue to accept modifications to the data, it is a bad idea\nbecause this data may never get updated! This is why if BGSAVE fails, it will automatically ",(0,a.jsx)(t.em,{children:"poison"})," the in-memory\ntable preventing it from accepting any write/update operations. Poisioning is nothing but a global flag set in the\ndatabase that indicates that the DB shouldn't accept any more updates/writes to data and in such a poisoned state,\nonly reads are permitted."]}),"\n",(0,a.jsx)(t.h3,{id:"bgsave-recovery",children:"BGSAVE Recovery"}),"\n",(0,a.jsxs)(t.p,{children:["BGSAVE will automatically try to recover on every 120s (or whatever duration was set). If the problem\nwas corrected (say it was a permissions issue), then the database server will automatically resume\nwrites and ",(0,a.jsx)(t.em,{children:"unpoison"})," the database."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Avoid editing/changing/removing files from the data directory by hand. All files stored in the data\ndirectory are critical to the server and your data. If you end up corrupting any file due to a bad\nedit \u2014 you might end up losing access to your data!"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);