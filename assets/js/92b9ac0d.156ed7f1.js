"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5289],{793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(4848),i=n(8453);const d={title:"Environment Variables",id:"config-env"},r=void 0,l={id:"config-env",title:"Environment Variables",description:"If you don't want to use configuration files or use command-line arguments, you can choose to use",source:"@site/versioned_docs/version-0.7.4/7a.env-config.md",sourceDirName:".",slug:"/config-env",permalink:"/0.7.4/config-env",draft:!1,unlisted:!1,tags:[],version:"0.7.4",frontMatter:{title:"Environment Variables",id:"config-env"},sidebar:"docs",previous:{title:"Configuration Files",permalink:"/0.7.4/config-files"},next:{title:"Command-line configuration",permalink:"/0.7.4/config-cmd"}},c={},h=[{value:"System",id:"system",level:2},{value:"BGSAVE",id:"bgsave",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"TLS",id:"tls",level:2},{value:"Authn",id:"authn",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you don't want to use configuration files or use command-line arguments, you can choose to use\nenvironment variables for configuration. The environment variables are divided into sections\nfor convenience, per the ",(0,s.jsx)(t.a,{href:"config-files",children:"configuration file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"system",children:"System"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Expected value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SYSTEM_HOST"}),(0,s.jsx)(t.td,{children:"Sets the host"}),(0,s.jsx)(t.td,{children:"A valid IPv4/IPv6 address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SYSTEM_PORT"}),(0,s.jsx)(t.td,{children:"Sets the port"}),(0,s.jsx)(t.td,{children:"16-bit positive integer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SYSTEM_NOART"}),(0,s.jsx)(t.td,{children:"Disables terminal artwork"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"}),"/",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SYSTEM_MAXCON"}),(0,s.jsx)(t.td,{children:"Sets the maximum connections"}),(0,s.jsx)(t.td,{children:"64/32 bit positive integer, depending on system"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_DEPLOYMENT_MODE"}),(0,s.jsx)(t.td,{children:"Sets the deployment mode"}),(0,s.jsxs)(t.td,{children:["Should be set to ",(0,s.jsx)(t.code,{children:"dev"})," or ",(0,s.jsx)(t.code,{children:"prod"})," depending on deployment mode"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"bgsave",children:"BGSAVE"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Expected value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_BGSAVE_ENABLED"}),(0,s.jsx)(t.td,{children:"Enables/disables BGSAVE"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"}),"/",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_BGSAVE_DURATION"}),(0,s.jsx)(t.td,{children:"Sets the BGSAVE interval"}),(0,s.jsx)(t.td,{children:"Non-zero 64-bit positive integer"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"snapshots",children:"Snapshots"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Expected value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SNAPSHOT_ENABLED"}),(0,s.jsx)(t.td,{children:"Enables/disables snapshots"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"}),"/",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SNAPSHOT_DURATION"}),(0,s.jsx)(t.td,{children:"Sets the snapshot interval"}),(0,s.jsx)(t.td,{children:"Non-zero 64-bit positive integer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SNAPSHOT_KEEP"}),(0,s.jsx)(t.td,{children:"Sets the maximum number of snapshots to keep"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"0"})," for keeping all or any positive 32/64 bit integer"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_SNAPSHOT_FAILSAFE"}),(0,s.jsx)(t.td,{children:"Sets if writes should be disabled on snapshot failure"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"}),"/",(0,s.jsx)(t.code,{children:"false"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"tls",children:"TLS"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Expected value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_TLS_PORT"}),(0,s.jsx)(t.td,{children:"Sets the TLS port"}),(0,s.jsx)(t.td,{children:"16-bit positive integer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_TLS_ONLY"}),(0,s.jsx)(t.td,{children:"Enables/disables TLS only mode"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"}),"/",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_TLS_CERT"}),(0,s.jsx)(t.td,{children:"Sets the location of the TLS cert"}),(0,s.jsx)(t.td,{children:"String"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_TLS_KEY"}),(0,s.jsx)(t.td,{children:"Sets the location of the TLS private key"}),(0,s.jsx)(t.td,{children:"String"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_TLS_PASSIN"}),(0,s.jsx)(t.td,{children:"Sets the location of the TLS private key password"}),(0,s.jsx)(t.td,{children:"String"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"authn",children:"Authn"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Expected value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SKY_AUTH_ORIGIN_KEY"}),(0,s.jsx)(t.td,{children:"Sets the authn origin key"}),(0,s.jsx)(t.td,{children:"A 40-byte long ASCII string"})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);