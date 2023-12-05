"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8109],{7800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(5893),i=t(1151);const s={id:"config",title:"Configuration basics"},d=void 0,r={id:"config",title:"Configuration basics",description:"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:",source:"@site/versioned_docs/version-0.7.4/7.cfg.md",sourceDirName:".",slug:"/config",permalink:"/0.7.4/config",draft:!1,unlisted:!1,tags:[],version:"0.7.4",sidebarPosition:7,frontMatter:{id:"config",title:"Configuration basics"},sidebar:"docs",previous:{title:"Index of actions",permalink:"/0.7.4/all-actions"},next:{title:"Configuration Files",permalink:"/0.7.4/config-files"}},c={},l=[{value:"Deployment mode",id:"deployment-mode",level:2},{value:"<code>dev</code> mode",id:"dev-mode",level:3},{value:"<code>prod</code> mode",id:"prod-mode",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Skytable can be configured to a great degree, depending on your requirements. You can configure Skytable using:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"config-files",children:"Configuration files"}),": A simple TOML file to tune your settings"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"config-cmd",children:"Command-line arguments"}),": Use command-line parameters to configure the database"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"config-env",children:"Environment variables"}),": Use environment variables for configuration"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deployment-mode",children:"Deployment mode"}),"\n",(0,o.jsxs)(n.p,{children:["Skytable uses the idea of a ",(0,o.jsx)(n.code,{children:"dev"})," and ",(0,o.jsx)(n.code,{children:"prod"})," mode to make configuration during deployment easier. The ",(0,o.jsx)(n.code,{children:"dev"}),"/",(0,o.jsx)(n.code,{children:"prod"}),"\nmode setting can be changed by using your preferred mode of configuration, as listed above."]}),"\n",(0,o.jsxs)(n.h3,{id:"dev-mode",children:[(0,o.jsx)(n.code,{children:"dev"})," mode"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"dev"})," mode allows you to use any configuration without any hard checks. This is suitable for use\nduring development"]}),"\n",(0,o.jsxs)(n.h3,{id:"prod-mode",children:[(0,o.jsx)(n.code,{children:"prod"})," mode"]}),"\n",(0,o.jsx)(n.p,{children:"In this mode, you are required to use the settings that we recommend for production usage. This includes\nstrict requirements on BGSAVE, TLS and snapshot settings. Here's what's required for production:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Setting"}),(0,o.jsx)(n.th,{children:"Requirement"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Maximum connections"}),(0,o.jsx)(n.td,{children:"Must be lesser than or equal to the resource limits set for that process (on Unix)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Terminal artwork"}),(0,o.jsx)(n.td,{children:"Disabled"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"BGSAVE"}),(0,o.jsx)(n.td,{children:"Enabled"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Snapshot failsafe"}),(0,o.jsx)(n.td,{children:"Set to `true"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"TLS"}),(0,o.jsx)(n.td,{children:"Atleast insecure TCP+TLS multi-socket mode or TLS-only mode must be enabled. If authn/authz is enabled, then TLS-only mode must be enabled"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var o=t(7294);const i={},s=o.createContext(i);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);