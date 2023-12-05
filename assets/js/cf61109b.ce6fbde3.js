"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6541],{852:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(5893),i=n(1151);const r={id:"administration",title:"Administration"},o=void 0,l={id:"system/administration",title:"Administration",description:"Skytable's access control is very simple:",source:"@site/docs/system/2.administration.md",sourceDirName:"system",slug:"/system/administration",permalink:"/system/administration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"administration",title:"Administration"},sidebar:"docs",previous:{title:"Configuration",permalink:"/system/configuration"},next:{title:"Client drivers",permalink:"/libraries"}},a={},c=[{value:"Types of users",id:"types-of-users",level:2},{value:"Root users",id:"root-users",level:3},{value:"Exclusive rights",id:"exclusive-rights",level:4},{value:"Resetting the root password",id:"resetting-the-root-password",level:4},{value:"Standard users",id:"standard-users",level:3},{value:"Changing account passwords",id:"changing-account-passwords",level:4},{value:"Rights",id:"rights",level:4},{value:"Global management",id:"global-management",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Skytable's access control is very simple:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["there is only one ",(0,t.jsx)(s.code,{children:"root"})," account"]}),"\n",(0,t.jsx)(s.li,{children:"there are zero or more standard users"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"types-of-users",children:"Types of users"}),"\n",(0,t.jsx)(s.h3,{id:"root-users",children:"Root users"}),"\n",(0,t.jsxs)(s.p,{children:["As noted earlier there can be only one ",(0,t.jsx)(s.code,{children:"root"})," account and this is primarily for security concerns. We however do plan to support\ncreating multiple users (the implementation isn't hard but security is key)."]}),"\n",(0,t.jsx)(s.h4,{id:"exclusive-rights",children:"Exclusive rights"}),"\n",(0,t.jsx)(s.p,{children:"Root users have exclusive rights to use plus everything that standard users have access to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"CREATE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"ALTER"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"DROP"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"SYSCTL CREATE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"SYSCTL DROP"})}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"resetting-the-root-password",children:"Resetting the root password"}),"\n",(0,t.jsxs)(s.p,{children:["We strongly recommend that you keep the root password in someplace safe, but if you happen to lose it \u2014 just like many other\ndatabases, you will first need to stop the server to reset it. Once you have stopped the server, you will need to modify the root\npassword that you set in your ",(0,t.jsx)(s.a,{href:"configuration",children:"configuration source"})," (such as CLI/ENV/configuration file). You will then\nneed to restart the server. The server will issue a warning in the logs that the root password has changed but since that is\nwhat you intended, you can safely ignore it."]}),"\n",(0,t.jsx)(s.h3,{id:"standard-users",children:"Standard users"}),"\n",(0,t.jsx)(s.p,{children:"You can have any number of standard users. Standard users can essentially manipulate data but can't modify the objects that store them."}),"\n",(0,t.jsx)(s.h4,{id:"changing-account-passwords",children:"Changing account passwords"}),"\n",(0,t.jsxs)(s.p,{children:["To change the password for a given account, you can follow the ",(0,t.jsx)(s.a,{href:"/blueql/dcl#sysctl-alter-user",children:"instructions on BlueQL's DCL guide here"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"rights",children:"Rights"}),"\n",(0,t.jsx)(s.p,{children:"Standard users can access the following query types:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"SYSCTL REPORT STATUS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"INSERT"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"SELECT"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"UPDATE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"DELETE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"INSPECT"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"global-management",children:"Global management"}),"\n",(0,t.jsxs)(s.p,{children:['The single DDL query that lets you do a "sneak peek" into the status of the entire system is the ',(0,t.jsx)(s.code,{children:"INSPECT GLOBAL"})," query. It\nreturns a JSON string like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n    "spaces:"["space1", "space2"],\n    "users":["root", "staging_server"],\n    "settings:{},\n}\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"spaces"}),": lists all the spaces in the system"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"users"}),": lists all users","\n",(0,t.jsx)(s.admonition,{title:"Access control note",type:"info",children:(0,t.jsxs)(s.p,{children:["This is only returned if you are the ",(0,t.jsx)(s.code,{children:"root"})," user. Standard users cannot see the other users in the system"]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"settings"}),": returns system settings (currently an empty dictionary is returned)"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var t=n(7294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);