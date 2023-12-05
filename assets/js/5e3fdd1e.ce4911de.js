"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5083],{7349:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(5893),o=i(1151);const t={id:"config-files",title:"Configuration Files"},r=void 0,l={id:"config-files",title:"Configuration Files",description:"By using configuration files, you can customize the behavior of Skytable.",source:"@site/versioned_docs/version-0.7.4/7.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/0.7.4/config-files",draft:!1,unlisted:!1,tags:[],version:"0.7.4",sidebarPosition:7,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"docs",previous:{title:"Configuration basics",permalink:"/0.7.4/config"},next:{title:"Environment Variables",permalink:"/0.7.4/config-env"}},a={},c=[{value:"An example configuration",id:"an-example-configuration",level:2},{value:"Using a configuration file",id:"using-a-configuration-file",level:2},{value:"Using a configuration file with Docker containers",id:"using-a-configuration-file-with-docker-containers",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"By using configuration files, you can customize the behavior of Skytable."}),"\n",(0,s.jsx)(n.h2,{id:"an-example-configuration",children:"An example configuration"}),"\n",(0,s.jsx)(n.p,{children:"A configuration file is a TOML file, which has the following basic structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\nmaxcon = 50000\nmode = "prod"\n\n[bgsave]\nenabled = true\nevery = 120\n\n[snapshot]\nevery = 3600\natmost = 4\nfailsafe = true\n\n[ssl]\nkey = "/path/to/keyfile.pem"\nchain = "/path/to/chain.pem"\nport = 2004\nonly = true\n\n[auth]\norigin_key = "origin-key"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's understand what each of the keys mean along with some other keys that can be used for more\nadvanced configuration:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"server"})," (required)"]}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"host"})}),": This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,s.jsx)(n.em,{children:"or"})," IPv6 address, as a quoted string"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"port"})}),": This is the port to which you want Sky to bind to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"noart"})," (optional)"]}),": This is recommended for secure environments where displaying terminal artwork might cause problems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"maxcon"})," (optional)"]}),": Set the maximum number of clients that can query concurrently"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"mode"})," (optional)"]}),": Should be set to ",(0,s.jsx)(n.code,{children:"prod"})," for production deployments and ",(0,s.jsx)(n.code,{children:"dev"})," during development"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"bgsave"})," (optional)"]}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"enabled"})," (optional)"]}),": This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, Sky will enable BGSAVE by default"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"every"})}),": Run BGSAVE ",(0,s.jsx)(n.code,{children:"every"}),"seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," (optional)"]}),": This key can be used to configure snapshots and is not enabled by default.\nSee ",(0,s.jsx)(n.a,{href:"snapshots",children:"this"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"ssl"})," (optional)"]}),": This key can be used to configure TLS options. See ",(0,s.jsx)(n.a,{href:"ssl",children:"this"})," for more\ninformation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"auth"})," (optional)"]}),": This key can be used to configure authn/authz settings. Read ",(0,s.jsx)(n.a,{href:"auth",children:"this for details"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-a-configuration-file",children:"Using a configuration file"}),"\n",(0,s.jsx)(n.p,{children:"To use a configuration file:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create it! We recommend you to name it as ",(0,s.jsx)(n.code,{children:"skyd.toml"}),"for easy identification"]}),"\n",(0,s.jsxs)(n.li,{children:["Start the database server with: ",(0,s.jsx)(n.code,{children:"skyd -c /path/to/your/file.toml"})]}),"\n",(0,s.jsx)(n.li,{children:"Done \ud83c\udf89"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're confused about creating a configuration file, we always recommend you to download the template configuration from ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/skytable/skytable/v0.7.4/examples/config-files/template.toml",children:"this link"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"That's all that's there to using configuration files!"}),"\n",(0,s.jsxs)(n.admonition,{title:"Bonus tip",type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you're using a custom host/port, then you can bind ",(0,s.jsx)(n.code,{children:"skysh"}),"to a custom host/port by starting ",(0,s.jsx)(n.code,{children:"skysh"}),"like:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"skysh -h [HOST] -p [PORT]\n"})}),(0,s.jsxs)(n.p,{children:["You can do the same for ",(0,s.jsx)(n.code,{children:"sky-bench"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sky-bench -h [HOST] -p [PORT]\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"using-a-configuration-file-with-docker-containers",children:"Using a configuration file with Docker containers"}),"\n",(0,s.jsxs)(n.p,{children:["The official Docker image will look for a configuration file at ",(0,s.jsx)(n.code,{children:"/etc/skytable/skyd.toml"})," within the container. To use a file on the host as the configuration file in the container, we'll make use of Docker volumes. Simply follow the ",(0,s.jsx)(n.a,{href:"#using-a-configuration-file",children:"steps above"})," and then start your docker image like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker run --name skyd \\\n  -v /path/to/your/file.toml:/etc/skytable/skyd.toml \\\n  skytable/sdb:v0.7.4\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(7294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);