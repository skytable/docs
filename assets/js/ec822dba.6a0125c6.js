"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10986],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"config-files",title:"Configuration Files"},s=void 0,p={unversionedId:"config-files",id:"version-0.7.1/config-files",isDocsHomePage:!1,title:"Configuration Files",description:"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via environment variables and command line arguments.",source:"@site/versioned_docs/version-0.7.1/7.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/config-files",tags:[],version:"0.7.1",sidebarPosition:7,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"version-0.7.1/docs",previous:{title:"Index of actions",permalink:"/all-actions"},next:{title:"Environment Variables",permalink:"/config-env"}},c=[{value:"An example configuration",id:"an-example-configuration",children:[]},{value:"Using a configuration file",id:"using-a-configuration-file",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via ",(0,i.kt)("a",{parentName:"p",href:"config-env"},"environment variables")," and ",(0,i.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),"."),(0,i.kt)("h2",{id:"an-example-configuration"},"An example configuration"),(0,i.kt)("p",null,"A configuration file is a TOML file, which has the following basic structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\nmaxcon = 50000\n\n[bgsave]\nenabled = true\nevery = 120\n\n[snapshot]\nevery = 3600\natmost = 4\nfailsafe = true\n\n[ssl]\nkey = "/path/to/keyfile.pem"\nchain = "/path/to/chain.pem"\nport = 2004\nonly = true\n')),(0,i.kt)("p",null,"Let's understand what each of the keys mean along with some other keys that can be used for more\nadvanced configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"server")," (required)"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"host")),": This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,i.kt)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"port")),": This is the port to which you want Sky to bind to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"noart")," (optional)"),": This is recommended for secure environments where displaying terminal artwork might cause problems"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"maxcon")," (optional)"),": Set the maximum number of clients that can query concurrently"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"bgsave")," (optional)"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"enabled")," (optional)"),": This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, Sky will enable BGSAVE by default"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"every")),": Run BGSAVE ",(0,i.kt)("inlineCode",{parentName:"li"},"every"),"seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"snapshot")," (optional)"),": This key can be used to configure snapshots and is not enabled by default.\nSee ",(0,i.kt)("a",{parentName:"li",href:"snapshots"},"this")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ssl")," (optional)"),": This key can be used to configure SSL/TLS options. See ",(0,i.kt)("a",{parentName:"li",href:"ssl"},"this")," for more\ninformation.")),(0,i.kt)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),(0,i.kt)("p",null,"To use a configuration file:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",(0,i.kt)("inlineCode",{parentName:"li"},"skyd.toml"),"for easy identification"),(0,i.kt)("li",{parentName:"ol"},"Start the database server with: ",(0,i.kt)("inlineCode",{parentName:"li"},"skyd -c /path/to/your/file.toml")),(0,i.kt)("li",{parentName:"ol"},"Done \ud83c\udf89")),(0,i.kt)("p",null,"If you're confused about creating a configuration file, we always recommend you to download a sample file from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/blob/next/examples/config-files/template.toml"},"this link"),". Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream."),(0,i.kt)("p",null,"That's all that's there for using configuration files!"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using a custom host/port, then you can bind ",(0,i.kt)("inlineCode",{parentName:"p"},"skysh"),"to a custom host/port by starting ",(0,i.kt)("inlineCode",{parentName:"p"},"skysh"),"like:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"skysh -h [HOST] -p [PORT]\n")),(0,i.kt)("p",{parentName:"div"},"You can do the same for ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-bench"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sky-bench -h [HOST] -p [PORT]\n")))))}m.isMDXComponent=!0}}]);