"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7546],{4060:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=s(5893),o=s(1151);const r={id:"auth",title:"Authentication and authorization"},i=void 0,a={id:"auth",title:"Authentication and authorization",description:"Skytable supports token-based authentication as an authentication scheme, with more on the way in",source:"@site/versioned_docs/version-0.7.4/9b.auth.md",sourceDirName:".",slug:"/auth",permalink:"/0.7.4/auth",draft:!1,unlisted:!1,tags:[],version:"0.7.4",frontMatter:{id:"auth",title:"Authentication and authorization"},sidebar:"docs",previous:{title:"Command-line configuration",permalink:"/0.7.4/config-cmd"},next:{title:"Persistence",permalink:"/0.7.4/persistence"}},l={},h=[{value:"Token-based authentication",id:"token-based-authentication",level:2},{value:"Permission model",id:"permission-model",level:3},{value:"Enabling authn",id:"enabling-authn",level:3},{value:"Security",id:"security",level:3},{value:"Restoring tokens",id:"restoring-tokens",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Skytable supports token-based authentication as an ",(0,t.jsx)(n.em,{children:"authentication scheme"}),", with more on the way in\nfuture releases. In this document, we explore how you can set up authentication on your Skytable\ninstance."]}),"\n",(0,t.jsx)(n.h2,{id:"token-based-authentication",children:"Token-based authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Token-based authentication is just like password-based authentication with the exception that the\npassword is generated by the server, and is cryptographically strong. All login operations\nare resistant to brute-force search attacks. Read ",(0,t.jsx)(n.a,{href:"#security",children:"more here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"permission-model",children:"Permission model"}),"\n",(0,t.jsx)(n.p,{children:"There are three kinds of users:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Superuser:"})," These users have access to everything"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standard user"}),": These users have access to all tables and keyspaces, but don't have access to the\nactions exclusive to the superusers. For example, the following actions cannot be performed by standard users:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auth deluser"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auth adduser"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anonymous user"}),": This is the default account type you're logged into when you connect to an instance\nthat has authn/authz enabled. This is a very limited account and only has access to the following:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auth claim"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auth login"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, there can only be one superuser, which is the ",(0,t.jsx)(n.code,{children:"root"})," account and any number of standard users."]}),"\n",(0,t.jsx)(n.h3,{id:"enabling-authn",children:"Enabling authn"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set an origin key using your preferred mode of ",(0,t.jsx)(n.a,{href:"config",children:"configuration"}),". The origin key is a 40-character\nlong ASCII string. The simplest way to generate a secure origin key is by using OpenSSL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openssl rand -hex 20\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now launch a ",(0,t.jsx)(n.code,{children:"skysh"})," instance and connect to your instance"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"First claim the root account using your origin key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth claim <origin-key>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The server will respond with the ",(0,t.jsx)(n.em,{children:"root token"}),". ",(0,t.jsx)(n.strong,{children:"Keep this safe; the root user can only be claimed once!"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now create other users. These users are standard users."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth adduser <username>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The server will again respond with a token for the given user"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You can now login using the token:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth login <username> <token>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See the complete documentation for the ",(0,t.jsxs)(n.a,{href:"actions/auth",children:[(0,t.jsx)(n.code,{children:"auth"})," action here"]})]})}),"\n",(0,t.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,t.jsx)(n.p,{children:"The password produced has 54 characters, is cryptographically strong and hence is extremely secure. The password has the following alphabet (character set):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\n"})}),"\n",(0,t.jsx)(n.p,{children:"Every login operation initiates an expensive verification operation that is based on bcrypt; this makes\nlogins resistant to brute-force attacks. Also, just like any password storage system, plaintext passwords\nare never stored by the server."}),"\n",(0,t.jsx)(n.h3,{id:"restoring-tokens",children:"Restoring tokens"}),"\n",(0,t.jsx)(n.p,{children:"Yeah, no matter how well we safeguard our passwords, we tend to lose them. So, don't worry if you did\nlose any of your tokens. Here are two simple ways to restore your tokens:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"You have your root password"}),": First log into your root account and then run:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth restore <username>\n"})}),"\n","for the users who have lost their passwords"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"You have lost your root password"}),": That's okay! See which situation matches yours:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"You still have your origin key"}),": Simply run:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth restore <origin key> root\n"})}),"\n","You can also run:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"auth restore <origin key> <username>\n"})}),"\n","to restore other tokens using the origin key although it's easier to just log into the root account\nand then restore other accounts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"You have lost your origin key"}),": That's fine too, as long you have shell access to the node on\nwhich your instance is running. Simply create a new origin key and ",(0,t.jsx)(n.a,{href:"config",children:"update your configuration"}),". Then follow the above step (2(i)) and you're good to go.","\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This however means that you'll have to shut down your instance"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);