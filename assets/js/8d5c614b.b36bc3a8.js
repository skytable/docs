"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98337],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"getting-started",title:"Getting Started"},s=void 0,d={unversionedId:"getting-started",id:"version-0.4.1/getting-started",title:"Getting Started",description:"Getting started with TerrabaseDB is easy \ud83d\ude0a (and fun!).",source:"@site/versioned_docs/version-0.4.1/2.getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/0.4.1/getting-started",tags:[],version:"0.4.1",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"version-0.4.1/docs",previous:{title:"Home",permalink:"/0.4.1/"},next:{title:"Actions overview",permalink:"/0.4.1/Actions/overview"}},u=[{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",children:[],level:3},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",children:[],level:3},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",children:[],level:3},{value:"Step 4: Run the shell <code>tsh</code>",id:"step-4-run-the-shell-tsh",children:[],level:3}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Getting started with TerrabaseDB is easy \ud83d\ude0a (and fun!)."),(0,i.kt)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),(0,i.kt)("p",null,"Head over to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/releases/v0.4.1"},"this page")," and download a version for your platform. Here's a little guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you're on Linux: Download ",(0,i.kt)("inlineCode",{parentName:"li"},"tdb-bundle-0.4.1-x86_64-linux-gnu.zip")),(0,i.kt)("li",{parentName:"ul"},"If you're using macOS: Download ",(0,i.kt)("inlineCode",{parentName:"li"},"tdb-bundle-0.4.1-x86_64-macos.zip")),(0,i.kt)("li",{parentName:"ul"},"If you're on Windows: Download ",(0,i.kt)("inlineCode",{parentName:"li"},"tdb-bundle-0.4.1-x86_64-windows.zip"))),(0,i.kt)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),(0,i.kt)("p",null,"Unzip the ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a *nix system, run ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x tdb tsh")," to make the files executable. If you're on Windows, right-click the files and then check the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLY")," button."),(0,i.kt)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),(0,i.kt)("p",null,"In the directory where you extracted the files, run ",(0,i.kt)("inlineCode",{parentName:"p"},"./tdb")," on *nix systems or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"tdb")," on Windows systems. That's all there is to starting the database server!"),(0,i.kt)("h3",{id:"step-4-run-the-shell-tsh"},"Step 4: Run the shell ",(0,i.kt)("inlineCode",{parentName:"h3"},"tsh")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tsh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",(0,i.kt)("em",{parentName:"p"},"HEY!"),".\nSee all the available actions ",(0,i.kt)("a",{parentName:"p",href:"Actions/overview"},"here"),"."),(0,i.kt)("p",null,"You're done with setting up ",(0,i.kt)("inlineCode",{parentName:"p"},"tdb")," \ud83c\udf89!"))}c.isMDXComponent=!0}}]);