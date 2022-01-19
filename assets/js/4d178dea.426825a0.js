"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61572],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"ssl",title:"TLS configuration"},l=void 0,c={unversionedId:"ssl",id:"version-0.7.1/ssl",title:"TLS configuration",description:"Skytable lets you secure connections with TLS. This feature is built into Sky with OpenSSL and doesn't require you to have OpenSSL installed. You can enable SSL by using the configuration file or by using command-line arguments.",source:"@site/versioned_docs/version-0.7.1/11.ssl.md",sourceDirName:".",slug:"/ssl",permalink:"/0.7.1/ssl",tags:[],version:"0.7.1",sidebarPosition:11,frontMatter:{id:"ssl",title:"TLS configuration"},sidebar:"version-0.7.1/docs",previous:{title:"Snapshots",permalink:"/0.7.1/snapshots"},next:{title:"Client drivers",permalink:"/0.7.1/clients"}},p=[{value:"Step 1: Create a self-signed certificate and private key",id:"step-1-create-a-self-signed-certificate-and-private-key",children:[],level:3},{value:"Step 2: Add it to your configuration and launch",id:"step-2-add-it-to-your-configuration-and-launch",children:[{value:"With config files",id:"with-config-files",children:[],level:4},{value:"With command-line arguments",id:"with-command-line-arguments",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skytable lets you secure connections with TLS. This feature is built into Sky with OpenSSL and doesn't require you to have OpenSSL installed. You can enable SSL by using the ",(0,r.kt)("a",{parentName:"p",href:"#with-config-files"},"configuration file")," or by using ",(0,r.kt)("a",{parentName:"p",href:"#with-command-line-arguments"},"command-line arguments"),"."),(0,r.kt)("h3",{id:"step-1-create-a-self-signed-certificate-and-private-key"},"Step 1: Create a self-signed certificate and private key"),(0,r.kt)("p",null,"This is outside the scope of this document, but you can read ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/10176685"},"this guide on Stackoverflow")," to get a brief idea of creating one."),(0,r.kt)("h3",{id:"step-2-add-it-to-your-configuration-and-launch"},"Step 2: Add it to your configuration and launch"),(0,r.kt)("h4",{id:"with-config-files"},"With config files"),(0,r.kt)("p",null,"Add the following block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[ssl]\nkey = "/path/to/keyfile.pem"\nchain = "/path/to/chain.pem"\nport = 2004\nonly = true\n')),(0,r.kt)("p",null,"The above block is self-explanatory; you just have to add the paths to the private key and certificate files and add the port (if required)."),(0,r.kt)("p",null,"By setting ",(0,r.kt)("inlineCode",{parentName:"p"},"only")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the server will only accept accept secure connections. In other cases,\nthe server listens to two ports: ",(0,r.kt)("inlineCode",{parentName:"p"},"2003")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2004"),", a non-TLS port and a TLS port (similar to port\n80 and port 443 in HTTP/HTTPS). As expected, you can configure this port number to suit your needs."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We use the terms ",(0,r.kt)("inlineCode",{parentName:"p"},"SSL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TLS")," interchangeably, when what we really mean is TLS."))),(0,r.kt)("h4",{id:"with-command-line-arguments"},"With command-line arguments"),(0,r.kt)("p",null,"Simply start ",(0,r.kt)("inlineCode",{parentName:"p"},"skyd")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"skyd -z cert.pem -k key.pem\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--sslonly")," flag to force the server to only accept secure connections, disabling the non-SSL interface. When this flag is not passed, and other SSL options are given ","\u2014"," the server listens to both SSL and non-SSL requests"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To use TLS with the Skytable shell (",(0,r.kt)("inlineCode",{parentName:"p"},"skysh"),") just run:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"skysh -C /path/to/cert.pem --port [SSLPORT]\n")),(0,r.kt)("p",{parentName:"div"},"and you'll be on a secure connection. Don't forget the SSL port! The skytable daemon binds the secure\nlistener on a different port when in multi-socket mode."))))}u.isMDXComponent=!0}}]);