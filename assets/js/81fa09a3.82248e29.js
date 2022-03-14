"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47106],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"getting-started",title:"Getting Started"},s=void 0,d={unversionedId:"getting-started",id:"version-0.7.3/getting-started",title:"Getting Started",description:"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.",source:"@site/versioned_docs/version-0.7.3/2.getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",tags:[],version:"0.7.3",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Home",permalink:"/"},next:{title:"Actions and Querying",permalink:"/actions-overview"}},p={},c=[{value:"Get started with bundles",id:"get-started-with-bundles",level:2},{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",level:3},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",level:3},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",level:3},{value:"Step 4: Run the shell <code>skysh</code>",id:"step-4-run-the-shell-skysh",level:3},{value:"Get started with Docker",id:"get-started-with-docker",level:2},{value:"Step 0: Create and start the container",id:"step-0-create-and-start-the-container",level:3},{value:"Step 1: Download and setup the bundle",id:"step-1-download-and-setup-the-bundle",level:3},{value:"Step 2: Connect to the instance",id:"step-2-connect-to-the-instance",level:3}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with ",(0,i.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"native binaries (recommended)")," or by using the ",(0,i.kt)("a",{parentName:"p",href:"#get-started-with-docker"},"docker image"),"."),(0,i.kt)("h2",{id:"get-started-with-bundles"},"Get started with bundles"),(0,i.kt)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),(0,i.kt)("p",null,"Head over to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.7.3"},"page")," and download a version for your platform."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're on Debian, consider downloading an appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},".deb")," (Debian Package) file for your machine.\nThe package will install ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"skysh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-bench")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-migrate")," on your system while also\nconfiguring a ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," service unit."))),(0,i.kt)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),(0,i.kt)("p",null,"Unzip the ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a ","*","nix system, run ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x skyd skysh")," to make the files executable. If you're on Windows, right-click the files and then check the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLY")," button."),(0,i.kt)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),(0,i.kt)("p",null,"In the directory where you extracted the files, run ",(0,i.kt)("inlineCode",{parentName:"p"},"./skyd")," on ","*","nix systems or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows systems. That's all there is to starting the database server!"),(0,i.kt)("h3",{id:"step-4-run-the-shell-skysh"},"Step 4: Run the shell ",(0,i.kt)("inlineCode",{parentName:"h3"},"skysh")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"skysh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",(0,i.kt)("em",{parentName:"p"},"HEY!"),"."),(0,i.kt)("p",null,"You're done with setting up ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," \ud83c\udf89!"),(0,i.kt)("h2",{id:"get-started-with-docker"},"Get started with Docker"),(0,i.kt)("p",null,"First of all, you need to have Docker installed and available on your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," ; you can read the official guide ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),". Once you've got Docker up and running, follow the steps!"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You may need superuser privileges for installation and running the commands below"))),(0,i.kt)("h3",{id:"step-0-create-and-start-the-container"},"Step 0: Create and start the container"),(0,i.kt)("p",null,"We'll create a container where:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We'll call our container ",(0,i.kt)("inlineCode",{parentName:"li"},"mysky")),(0,i.kt)("li",{parentName:"ol"},"We'll expose port 2003 of the container"),(0,i.kt)("li",{parentName:"ol"},"We'll save all our data on the host in a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"skytable")," relative to the current directory. To achieve this, we'll make use of Docker volumes.")),(0,i.kt)("p",null,"Open up a terminal and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --name mysky \\\n    -v ./skytable:/var/lib/skytable \\\n    -p 2003:2003 \\\n    skytable/sdb:v0.7.3\n")),(0,i.kt)("h3",{id:"step-1-download-and-setup-the-bundle"},"Step 1: Download and setup the bundle"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"instructions above")," so that you're ready to run ",(0,i.kt)("inlineCode",{parentName:"p"},"skysh")),(0,i.kt)("h3",{id:"step-2-connect-to-the-instance"},"Step 2: Connect to the instance"),(0,i.kt)("p",null,"Simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"skysh -h 127.0.0.1 -p 2003\n")),(0,i.kt)("p",null,"Now, you're all set!"))}h.isMDXComponent=!0}}]);