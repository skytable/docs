"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88032],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?i.createElement(d,r(r({ref:t},c),{},{components:n})):i.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"config-files",title:"Configuration Files"},s=void 0,u={unversionedId:"config-files",id:"version-0.6.0/config-files",title:"Configuration Files",description:"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via command line arguments.",source:"@site/versioned_docs/version-0.6.0/5.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/0.6.0/config-files",tags:[],version:"0.6.0",sidebarPosition:5,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"version-0.6.0/docs",previous:{title:"Persistence",permalink:"/0.6.0/persistence"},next:{title:"Command-line configuration",permalink:"/0.6.0/config-cmd"}},c={},p=[{value:"An example configuration",id:"an-example-configuration",level:2},{value:"Using a configuration file",id:"using-a-configuration-file",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Skytable supports custom configuration files to let users customize the functioning of Sky. Arguably, Sky has one of the simplest configuration files around. Skytable also allows configuration via ",(0,o.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),"."),(0,o.kt)("h2",{id:"an-example-configuration"},"An example configuration"),(0,o.kt)("p",null,"A configuration file is a TOML file, which looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\n\n[bgsave]\nenabled = true\nevery = 120 # Every 120 seconds\n')),(0,o.kt)("p",null,"This is the default configuration used by Sky when you don't specify a configuration file. Let's understand what each of the keys mean:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"server")," :",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host")," : This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,o.kt)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port")," : This is the port to which you want Sky to bind to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"noart")," (OPTIONAL): This is ",(0,o.kt)("strong",{parentName:"li"},"an optional argument")," and is recommended for secure environments where displaying terminal artwork might cause problems"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bgsave"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enabled")," : This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, Sky will enable BGSAVE by default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"every")," : Run BGSAVE ",(0,o.kt)("inlineCode",{parentName:"li"},"every")," seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snapshot")," (OPTIONAL): This key can be used to configure snapshots and is not enabled by default. See ",(0,o.kt)("a",{parentName:"li",href:"snapshots"},"this")," for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ssl"),": This key can be used to configure SSL/TLS options. See ",(0,o.kt)("a",{parentName:"li",href:"ssl"},"this")," for more information.")),(0,o.kt)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),(0,o.kt)("p",null,"To use a configuration file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",(0,o.kt)("inlineCode",{parentName:"li"},"skyd.toml")," for easy identification"),(0,o.kt)("li",{parentName:"ol"},"Start the database server with: ",(0,o.kt)("inlineCode",{parentName:"li"},"skyd -c /path/to/your/file.toml")),(0,o.kt)("li",{parentName:"ol"},"Done \ud83c\udf89")),(0,o.kt)("p",null,"If you're confused about creating a configuration file, we always recommend you to download a sample file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/blob/next/examples/config-files/template.toml"},"this link"),". Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream."),(0,o.kt)("p",null,"That's all that's there for using configuration files!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're using a custom host/port, then you can bind ",(0,o.kt)("inlineCode",{parentName:"p"},"skysh")," to a custom host/port by starting ",(0,o.kt)("inlineCode",{parentName:"p"},"skysh")," like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"skysh -h [HOST] -p [PORT]\n")),(0,o.kt)("p",{parentName:"div"},"You can do the same for ",(0,o.kt)("inlineCode",{parentName:"p"},"sky-bench"),":"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sky-bench -h [HOST] -p [PORT]\n")))))}m.isMDXComponent=!0}}]);