(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6433],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6720:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"ssl",title:"SSL/TLS configuration"},s={unversionedId:"ssl",id:"ssl",isDocsHomePage:!1,title:"SSL/TLS configuration",description:"Skytable lets you secure connections with TLS/SSL. This feature is built into Sky with OpenSSL and doesn't require you to have OpenSSL installed. You can enable SSL by using the configuration file or by using command-line arguments.",source:"@site/docs/ssl.md",sourceDirName:".",slug:"/ssl",permalink:"/next/ssl",version:"current",frontMatter:{id:"ssl",title:"SSL/TLS configuration"},sidebar:"docs",previous:{title:"Snapshots",permalink:"/next/snapshots"},next:{title:"Benchmarking",permalink:"/next/benchmarking"}},c=[{value:"Step 1: Create a self-signed certificate and private key",id:"step-1-create-a-self-signed-certificate-and-private-key",children:[]},{value:"Step 2: Add this to your configuration and launch",id:"step-2-add-this-to-your-configuration-and-launch",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable lets you secure connections with TLS/SSL. This feature is built into Sky with OpenSSL and doesn't require you to have OpenSSL installed. You can enable SSL by using the ",(0,i.kt)("a",{parentName:"p",href:"#with-config-files"},"configuration file")," or by using ",(0,i.kt)("a",{parentName:"p",href:"#with-command-line-arguments"},"command-line arguments"),"."),(0,i.kt)("h3",{id:"step-1-create-a-self-signed-certificate-and-private-key"},"Step 1: Create a self-signed certificate and private key"),(0,i.kt)("p",null,"This is outside the scope of this document, but you can read ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/10176685"},"this guide on Stackoverflow")," to get a brief idea of creating one."),(0,i.kt)("h3",{id:"step-2-add-this-to-your-configuration-and-launch"},"Step 2: Add this to your configuration and launch"),(0,i.kt)("h4",{id:"with-config-files"},"With config files"),(0,i.kt)("p",null,"Add the following block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# This key is *OPTIONAL*\n[ssl]\nkey = "/path/to/keyfile.pem"\nchain = "/path/to/chain.pem"\nport = 2004 # optional\nonly = true # optional to enable SSL-only requests\n')),(0,i.kt)("p",null,"The above block is self-explanatory; you just have to add the paths to the private key and certificate files and add the port (if required) and set the server to ",(0,i.kt)("inlineCode",{parentName:"p"},"only")," accept secure connections."),(0,i.kt)("h4",{id:"with-command-line-arguments"},"With command-line arguments"),(0,i.kt)("p",null,"Simply start ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"skyd -z cert.pem -k key.pem\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"--sslonly")," flag to force the server to only accept secure connections, disabling the non-SSL interface. When this flag is not passed, and other SSL options are given ","\u2014"," the server listens to both SSL and non-SSL requests"))))}p.isMDXComponent=!0}}]);