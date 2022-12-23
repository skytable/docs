"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={id:"config-files",title:"Configuration Files"},r=void 0,l={unversionedId:"config-files",id:"version-0.7.4/config-files",title:"Configuration Files",description:"By using configuration files, you can customize the behavior of Skytable.",source:"@site/versioned_docs/version-0.7.4/7.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/0.7.4/config-files",draft:!1,tags:[],version:"0.7.4",sidebarPosition:7,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"docs",previous:{title:"Configuration basics",permalink:"/0.7.4/config"},next:{title:"Environment Variables",permalink:"/0.7.4/config-env"}},s={},p=[{value:"An example configuration",id:"an-example-configuration",level:2},{value:"Using a configuration file",id:"using-a-configuration-file",level:2},{value:"Using a configuration file with Docker containers",id:"using-a-configuration-file-with-docker-containers",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By using configuration files, you can customize the behavior of Skytable."),(0,o.kt)("h2",{id:"an-example-configuration"},"An example configuration"),(0,o.kt)("p",null,"A configuration file is a TOML file, which has the following basic structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\nmaxcon = 50000\nmode = "prod"\n\n[bgsave]\nenabled = true\nevery = 120\n\n[snapshot]\nevery = 3600\natmost = 4\nfailsafe = true\n\n[ssl]\nkey = "/path/to/keyfile.pem"\nchain = "/path/to/chain.pem"\nport = 2004\nonly = true\n\n[auth]\norigin_key = "origin-key"\n')),(0,o.kt)("p",null,"Let's understand what each of the keys mean along with some other keys that can be used for more\nadvanced configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"server")," (required)"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"host")),": This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,o.kt)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"port")),": This is the port to which you want Sky to bind to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"noart")," (optional)"),": This is recommended for secure environments where displaying terminal artwork might cause problems"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"maxcon")," (optional)"),": Set the maximum number of clients that can query concurrently"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mode")," (optional)"),": Should be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"prod")," for production deployments and ",(0,o.kt)("inlineCode",{parentName:"li"},"dev")," during development"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"bgsave")," (optional)"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled")," (optional)"),": This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, Sky will enable BGSAVE by default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"every")),": Run BGSAVE ",(0,o.kt)("inlineCode",{parentName:"li"},"every"),"seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"snapshot")," (optional)"),": This key can be used to configure snapshots and is not enabled by default.\nSee ",(0,o.kt)("a",{parentName:"li",href:"snapshots"},"this")," for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ssl")," (optional)"),": This key can be used to configure TLS options. See ",(0,o.kt)("a",{parentName:"li",href:"ssl"},"this")," for more\ninformation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"auth")," (optional)"),": This key can be used to configure authn/authz settings. Read ",(0,o.kt)("a",{parentName:"li",href:"auth"},"this for details"))),(0,o.kt)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),(0,o.kt)("p",null,"To use a configuration file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",(0,o.kt)("inlineCode",{parentName:"li"},"skyd.toml"),"for easy identification"),(0,o.kt)("li",{parentName:"ol"},"Start the database server with: ",(0,o.kt)("inlineCode",{parentName:"li"},"skyd -c /path/to/your/file.toml")),(0,o.kt)("li",{parentName:"ol"},"Done \ud83c\udf89")),(0,o.kt)("p",null,"If you're confused about creating a configuration file, we always recommend you to download the template configuration from ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/skytable/skytable/v0.7.4/examples/config-files/template.toml"},"this link"),"."),(0,o.kt)("p",null,"That's all that's there to using configuration files!"),(0,o.kt)("admonition",{title:"Bonus tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're using a custom host/port, then you can bind ",(0,o.kt)("inlineCode",{parentName:"p"},"skysh"),"to a custom host/port by starting ",(0,o.kt)("inlineCode",{parentName:"p"},"skysh"),"like:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"skysh -h [HOST] -p [PORT]\n")),(0,o.kt)("p",{parentName:"admonition"},"You can do the same for ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sky-bench -h [HOST] -p [PORT]\n"))),(0,o.kt)("h2",{id:"using-a-configuration-file-with-docker-containers"},"Using a configuration file with Docker containers"),(0,o.kt)("p",null,"The official Docker image will look for a configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/skytable/skyd.toml")," within the container. To use a file on the host as the configuration file in the container, we'll make use of Docker volumes. Simply follow the ",(0,o.kt)("a",{parentName:"p",href:"#using-a-configuration-file"},"steps above")," and then start your docker image like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --name skyd \\\n  -v /path/to/your/file.toml:/etc/skytable/skyd.toml \\\n  skytable/sdb:v0.7.4\n")))}c.isMDXComponent=!0}}]);