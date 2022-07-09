"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,k=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"getting-started",title:"Getting Started"},o=void 0,l={unversionedId:"getting-started",id:"version-0.6.4/getting-started",title:"Getting Started",description:"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.",source:"@site/versioned_docs/version-0.6.4/2.getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/0.6.4/getting-started",draft:!1,tags:[],version:"0.6.4",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"version-0.6.4/docs",previous:{title:"Home",permalink:"/0.6.4/"},next:{title:"Actions overview",permalink:"/0.6.4/actions-overview"}},s={},d=[{value:"Get started with bundles",id:"get-started-with-bundles",level:2},{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",level:3},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",level:3},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",level:3},{value:"Step 4: Run the shell <code>skysh</code>",id:"step-4-run-the-shell-skysh",level:3},{value:"Get started with Docker",id:"get-started-with-docker",level:2},{value:"Step 0: Start the container",id:"step-0-start-the-container",level:3},{value:"Step 1: Find the IP address of the container",id:"step-1-find-the-ip-address-of-the-container",level:3},{value:"Step 2: Start the command line client",id:"step-2-start-the-command-line-client",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with ",(0,a.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"native binaries (recommended)")," or by using the ",(0,a.kt)("a",{parentName:"p",href:"#get-started-with-docker"},"docker image"),"."),(0,a.kt)("h2",{id:"get-started-with-bundles"},"Get started with bundles"),(0,a.kt)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),(0,a.kt)("p",null,"Head over to this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/tag/v0.6.4"},"page")," and download a version for your platform."),(0,a.kt)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),(0,a.kt)("p",null,"Unzip the ",(0,a.kt)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a ","*","nix system, run ",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x skyd skysh")," to make the files executable. If you're on Windows, right-click the files and then check the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLY")," button."),(0,a.kt)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),(0,a.kt)("p",null,"In the directory where you extracted the files, run ",(0,a.kt)("inlineCode",{parentName:"p"},"./skyd")," on ","*","nix systems or simply ",(0,a.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows systems. That's all there is to starting the database server!"),(0,a.kt)("h3",{id:"step-4-run-the-shell-skysh"},"Step 4: Run the shell ",(0,a.kt)("inlineCode",{parentName:"h3"},"skysh")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"skysh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",(0,a.kt)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",(0,a.kt)("em",{parentName:"p"},"HEY!"),".\nSee all the available actions ",(0,a.kt)("a",{parentName:"p",href:"actions-overview"},"here"),"."),(0,a.kt)("p",null,"You're done with setting up ",(0,a.kt)("inlineCode",{parentName:"p"},"skyd")," \ud83c\udf89!"),(0,a.kt)("h2",{id:"get-started-with-docker"},"Get started with Docker"),(0,a.kt)("p",null,"First of all, you need to have Docker installed and available on your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," ; you can read the official guide ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),". Once you've got Docker up and running, follow the steps!"),(0,a.kt)("h3",{id:"step-0-start-the-container"},"Step 0: Start the container"),(0,a.kt)("p",null,"Open up a terminal and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name skyvm skytable/sdb:v0.6.4\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may need superuser privileges")),(0,a.kt)("p",null,"At the same time, you'll need to set up the bundle by following ",(0,a.kt)("a",{parentName:"p",href:"#step-1-download-a-bundle"},"Step 1")," and ",(0,a.kt)("a",{parentName:"p",href:"#step-2-make-the-files-runnable"},"Step 2")," from the previous section."),(0,a.kt)("h3",{id:"step-1-find-the-ip-address-of-the-container"},"Step 1: Find the IP address of the container"),(0,a.kt)("p",null,"In order to connect to the container (which, to ",(0,a.kt)("inlineCode",{parentName:"p"},"skysh")," is nothing but a remote server), you'll have to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' skyvm\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may need superuser privileges")),(0,a.kt)("p",null,"And you'll get a result like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"172.17.0.1\n")),(0,a.kt)("h3",{id:"step-2-start-the-command-line-client"},"Step 2: Start the command line client"),(0,a.kt)("p",null,"Open up a terminal in the directory where you downloaded the command line client and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"skysh -h 172.17.0.1\n")),(0,a.kt)("p",null,"And you're done!"))}u.isMDXComponent=!0}}]);