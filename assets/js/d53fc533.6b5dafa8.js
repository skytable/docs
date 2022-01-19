"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3801],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"config-files",title:"Configuration Files"},s=void 0,u={unversionedId:"config-files",id:"version-0.5.0/config-files",title:"Configuration Files",description:"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around. TerrabaseDB also allows configuration via command line arguments.",source:"@site/versioned_docs/version-0.5.0/5.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/0.5.0/config-files",tags:[],version:"0.5.0",sidebarPosition:5,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"version-0.5.0/docs",previous:{title:"Persistence",permalink:"/0.5.0/persistence"},next:{title:"Command-line configuration",permalink:"/0.5.0/config-cmd"}},c=[{value:"An example configuration",id:"an-example-configuration",children:[],level:2},{value:"Using a configuration file",id:"using-a-configuration-file",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around. TerrabaseDB also allows configuration via ",(0,r.kt)("a",{parentName:"p",href:"config-cmd"},"command line arguments"),"."),(0,r.kt)("h2",{id:"an-example-configuration"},"An example configuration"),(0,r.kt)("p",null,"A configuration file is a TOML file, which looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\n\n[bgsave]\nenabled = true\nevery = 120 # Every 120 seconds\n')),(0,r.kt)("p",null,"This is the default configuration used by TDB when you don't specify a configuration file. Let's understand what each of the keys mean:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")," : This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,r.kt)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," : This is the port to which you want TDB to bind to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"noart")," (OPTIONAL): This is ",(0,r.kt)("strong",{parentName:"li"},"an optional argument")," and is recommended for secure environments where displaying terminal artwork might cause problems"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bgsave"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," : This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, TDB will enable BGSAVE by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"every")," : Run BGSAVE ",(0,r.kt)("inlineCode",{parentName:"li"},"every")," seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," (OPTIONAL): This key can be used to configure snapshots and is not enabled by default. See ",(0,r.kt)("a",{parentName:"li",href:"snapshots"},"this")," for more information.")),(0,r.kt)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),(0,r.kt)("p",null,"To use a configuration file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",(0,r.kt)("inlineCode",{parentName:"li"},"tdb.toml")," for easy identification"),(0,r.kt)("li",{parentName:"ol"},"Start the database server with: ",(0,r.kt)("inlineCode",{parentName:"li"},"tdb -c /path/to/your/file.toml")),(0,r.kt)("li",{parentName:"ol"},"Done \ud83c\udf89")),(0,r.kt)("p",null,"If you're confused about creating a configuration file, we always recommend you to download a sample file from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terrabasedb/terrabasedb/blob/next/examples/config-files/template.toml"},"this link"),". Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream."),(0,r.kt)("p",null,"That's all that's there for using configuration files!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're using a custom host/port, then you can bind ",(0,r.kt)("inlineCode",{parentName:"p"},"tsh")," to a custom host/port by starting ",(0,r.kt)("inlineCode",{parentName:"p"},"tsh")," like:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tsh -h [HOST] -p [PORT]\n")),(0,r.kt)("p",{parentName:"div"},"You can do the same for ",(0,r.kt)("inlineCode",{parentName:"p"},"tdb-bench"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tdb-bench -h [HOST] -p [PORT]\n")))))}f.isMDXComponent=!0}}]);