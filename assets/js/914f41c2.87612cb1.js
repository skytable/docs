(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7959],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87427:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o={id:"config-files",title:"Configuration Files"},l={unversionedId:"config-files",id:"version-0.4.4/config-files",isDocsHomePage:!1,title:"Configuration Files",description:"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around.",source:"@site/versioned_docs/version-0.4.4/5.cfg-files.md",sourceDirName:".",slug:"/config-files",permalink:"/0.4.4/config-files",version:"0.4.4",sidebarPosition:5,frontMatter:{id:"config-files",title:"Configuration Files"},sidebar:"version-0.4.4/docs",previous:{title:"Persistence",permalink:"/0.4.4/persistence"},next:{title:"Benchmarking",permalink:"/0.4.4/benchmarking"}},s=[{value:"An example configuration",id:"an-example-configuration",children:[]},{value:"Using a configuration file",id:"using-a-configuration-file",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TerrabaseDB supports custom configuration files to let users customize the functioning of TDB. Arguably, TDB has one of the simplest configuration files around."),(0,a.kt)("h2",{id:"an-example-configuration"},"An example configuration"),(0,a.kt)("p",null,"A configuration file is a TOML file, which looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[server]\nhost = "127.0.0.1"\nport = 2003\nnoart = false\n\n[bgsave]\nenabled = true\nevery = 120 # Every 120 seconds\n')),(0,a.kt)("p",null,"This is the default configuration used by TDB when you don't specify a configuration file. Let's understand what each of the keys mean:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server")," :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host")," : This is the IP address to which you want the database server to bind to. It can be any valid IPv4 ",(0,a.kt)("em",{parentName:"li"},"or")," IPv6 address, as a quoted string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," : This is the port to which you want TDB to bind to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noart")," (OPTIONAL): This is ",(0,a.kt)("strong",{parentName:"li"},"an optional argument")," and is recommended for secure environments where displaying terminal artwork might cause problems"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bgsave"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," : This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, TDB will enable BGSAVE by default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"every")," : Run BGSAVE ",(0,a.kt)("inlineCode",{parentName:"li"},"every")," seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used")))),(0,a.kt)("h2",{id:"using-a-configuration-file"},"Using a configuration file"),(0,a.kt)("p",null,"To use a configuration file:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create it! We recommend you to name it as ",(0,a.kt)("inlineCode",{parentName:"li"},"tdb.toml")," for easy identification"),(0,a.kt)("li",{parentName:"ol"},"Start the database server with: ",(0,a.kt)("inlineCode",{parentName:"li"},"tdb -c /path/to/your/file.toml")),(0,a.kt)("li",{parentName:"ol"},"Done \ud83c\udf89")),(0,a.kt)("p",null,"If you're confused about creating a configuration file, we always recommend you to download a sample file from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/terrabasedb/terrabasedb/blob/next/examples/config-files/template.toml"},"this link"),". Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream."),(0,a.kt)("p",null,"That's all that's there for using configuration files!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bonus tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you're using a custom host/port, then you can bind ",(0,a.kt)("inlineCode",{parentName:"p"},"tsh")," to a custom host/port by starting ",(0,a.kt)("inlineCode",{parentName:"p"},"tsh")," like:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tsh [HOST] [PORT]\n")))))}c.isMDXComponent=!0}}]);