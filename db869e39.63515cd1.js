(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(375)),o={id:"getting-started",title:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.",source:"@site/docs/2.getting-started.md",slug:"/getting-started",permalink:"/next/getting-started",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/next/"},next:{title:"Actions overview",permalink:"/next/actions-overview"}},s=[{value:"Get started with bundles",id:"get-started-with-bundles",children:[{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",children:[]},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",children:[]},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",children:[]},{value:"Step 4: Run the shell <code>skysh</code>",id:"step-4-run-the-shell-skysh",children:[]}]},{value:"Get started with Docker",id:"get-started-with-docker",children:[{value:"Step 0: Create a container",id:"step-0-create-a-container",children:[]},{value:"Step 1: Start the container",id:"step-1-start-the-container",children:[]},{value:"Step 2: Find the IP address of the container",id:"step-2-find-the-ip-address-of-the-container",children:[]},{value:"Step 3: Start the command line client",id:"step-3-start-the-command-line-client",children:[]}]}],d={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with ",Object(i.b)("a",{parentName:"p",href:"#get-started-with-bundles"},"native binaries (recommended)")," or by using the ",Object(i.b)("a",{parentName:"p",href:"#get-started-with-docker"},"docker image"),"."),Object(i.b)("h2",{id:"get-started-with-bundles"},"Get started with bundles"),Object(i.b)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),Object(i.b)("p",null,"Head over to this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.5.1"},"page")," and download a version for your platform."),Object(i.b)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),Object(i.b)("p",null,"Unzip the ",Object(i.b)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a *nix system, run ",Object(i.b)("inlineCode",{parentName:"p"},"chmod +x skyd skysh")," to make the files executable. If you're on Windows, right-click the files and then check the ",Object(i.b)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",Object(i.b)("inlineCode",{parentName:"p"},"APPLY")," button."),Object(i.b)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),Object(i.b)("p",null,"In the directory where you extracted the files, run ",Object(i.b)("inlineCode",{parentName:"p"},"./skyd")," on *nix systems or simply ",Object(i.b)("inlineCode",{parentName:"p"},"skyd")," on Windows systems. That's all there is to starting the database server!"),Object(i.b)("h3",{id:"step-4-run-the-shell-skysh"},"Step 4: Run the shell ",Object(i.b)("inlineCode",{parentName:"h3"},"skysh")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"skysh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",Object(i.b)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",Object(i.b)("em",{parentName:"p"},"HEY!"),".\nSee all the available actions ",Object(i.b)("a",{parentName:"p",href:"actions-overview"},"here"),"."),Object(i.b)("p",null,"You're done with setting up ",Object(i.b)("inlineCode",{parentName:"p"},"skyd")," \ud83c\udf89!"),Object(i.b)("h2",{id:"get-started-with-docker"},"Get started with Docker"),Object(i.b)("p",null,"First of all, you need to have Docker installed and available on your ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," ; you can read the official guide ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),". Once you've got Docker up and running, follow the steps!"),Object(i.b)("h3",{id:"step-0-create-a-container"},"Step 0: Create a container"),Object(i.b)("p",null,"Open up a terminal and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker create skytable/sdb:v0.5.1 --name skyvm\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You may need superuser privileges"))),Object(i.b)("p",null,"At the same time, you'll need to set up the bundle by following ",Object(i.b)("a",{parentName:"p",href:"#step-1-download-a-bundle"},"Step 1")," and ",Object(i.b)("a",{parentName:"p",href:"#step-2-make-the-files-runnable"},"Step 2")," from the previous section."),Object(i.b)("h3",{id:"step-1-start-the-container"},"Step 1: Start the container"),Object(i.b)("p",null,"Now run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker start skyvm\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You may need superuser privileges"))),Object(i.b)("h3",{id:"step-2-find-the-ip-address-of-the-container"},"Step 2: Find the IP address of the container"),Object(i.b)("p",null,"In order to connect to the container (which, to ",Object(i.b)("inlineCode",{parentName:"p"},"skysh")," is nothing but a remote server), you'll have to run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' skyvm\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You may need superuser privileges"))),Object(i.b)("p",null,"And you'll get a result like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"172.17.0.1\n")),Object(i.b)("h3",{id:"step-3-start-the-command-line-client"},"Step 3: Start the command line client"),Object(i.b)("p",null,"Open up a terminal in the directory where you downloaded the command line client and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"skysh -h 172.17.0.1\n")),Object(i.b)("p",null,"And you're done!"))}l.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,u=p["".concat(o,".").concat(h)]||p[h]||b[h]||i;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);