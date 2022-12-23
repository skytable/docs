"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"getting-started",title:"Getting Started"},o=void 0,l={unversionedId:"getting-started",id:"version-0.7.4/getting-started",title:"Getting Started",description:"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.",source:"@site/versioned_docs/version-0.7.4/2.getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/0.7.4/getting-started",draft:!1,tags:[],version:"0.7.4",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Home",permalink:"/0.7.4/"},next:{title:"Actions and Querying",permalink:"/0.7.4/actions-overview"}},s={},d=[{value:"Get started with bundles",id:"get-started-with-bundles",level:2},{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",level:3},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",level:3},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",level:3},{value:"Step 4: Run the shell <code>skysh</code>",id:"step-4-run-the-shell-skysh",level:3},{value:"Get started with Docker",id:"get-started-with-docker",level:2},{value:"Step 0: Create and start the container",id:"step-0-create-and-start-the-container",level:3},{value:"Step 1: Download and setup the bundle",id:"step-1-download-and-setup-the-bundle",level:3},{value:"Step 2: Connect to the instance",id:"step-2-connect-to-the-instance",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with ",(0,r.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"native binaries (recommended)")," or by using the ",(0,r.kt)("a",{parentName:"p",href:"#get-started-with-docker"},"docker image"),"."),(0,r.kt)("h2",{id:"get-started-with-bundles"},"Get started with bundles"),(0,r.kt)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),(0,r.kt)("p",null,"Head over to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.7.4"},"page")," and download a version for your platform."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're on Debian, consider downloading an appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," (Debian Package) file for your machine.\nThe package will install ",(0,r.kt)("inlineCode",{parentName:"p"},"skyd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"skysh"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sky-bench")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sky-migrate")," on your system while also\nconfiguring a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service unit.")),(0,r.kt)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),(0,r.kt)("p",null,"Unzip the ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a ","*","nix system, run ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x skyd skysh")," to make the files executable. If you're on Windows, right-click the files and then check the ",(0,r.kt)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"APPLY")," button."),(0,r.kt)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),(0,r.kt)("p",null,"In the directory where you extracted the files, run ",(0,r.kt)("inlineCode",{parentName:"p"},"./skyd")," on ","*","nix systems or simply ",(0,r.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows systems. That's all there is to starting the database server!"),(0,r.kt)("h3",{id:"step-4-run-the-shell-skysh"},"Step 4: Run the shell ",(0,r.kt)("inlineCode",{parentName:"h3"},"skysh")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"skysh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",(0,r.kt)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",(0,r.kt)("em",{parentName:"p"},"HEY!"),"."),(0,r.kt)("p",null,"You're done with setting up ",(0,r.kt)("inlineCode",{parentName:"p"},"skyd")," \ud83c\udf89!"),(0,r.kt)("h2",{id:"get-started-with-docker"},"Get started with Docker"),(0,r.kt)("p",null,"First of all, you need to have Docker installed and available on your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," ; you can read the official guide ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),". Once you've got Docker up and running, follow the steps!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may need superuser privileges for installation and running the commands below")),(0,r.kt)("h3",{id:"step-0-create-and-start-the-container"},"Step 0: Create and start the container"),(0,r.kt)("p",null,"We'll create a container where:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We'll call our container ",(0,r.kt)("inlineCode",{parentName:"li"},"mysky")),(0,r.kt)("li",{parentName:"ol"},"We'll expose port 2003 of the container"),(0,r.kt)("li",{parentName:"ol"},"We'll save all our data on the host in a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"skytable")," relative to the current directory. To achieve this, we'll make use of Docker volumes.")),(0,r.kt)("p",null,"Open up a terminal and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --name mysky \\\n    -v ./skytable:/var/lib/skytable \\\n    -p 2003:2003 \\\n    skytable/sdb:v0.7.4\n")),(0,r.kt)("h3",{id:"step-1-download-and-setup-the-bundle"},"Step 1: Download and setup the bundle"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"instructions above")," so that you're ready to run ",(0,r.kt)("inlineCode",{parentName:"p"},"skysh")),(0,r.kt)("h3",{id:"step-2-connect-to-the-instance"},"Step 2: Connect to the instance"),(0,r.kt)("p",null,"Simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"skysh -h 127.0.0.1 -p 2003\n")),(0,r.kt)("p",null,"Now, you're all set!"))}u.isMDXComponent=!0}}]);