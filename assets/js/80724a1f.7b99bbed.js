"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"auth",title:"Authentication and authorization"},i=void 0,s={unversionedId:"auth",id:"auth",title:"Authentication and authorization",description:"Skytable supports token-based authentication as an authentication scheme, with more on the way in",source:"@site/docs/9b.auth.md",sourceDirName:".",slug:"/auth",permalink:"/next/auth",draft:!1,tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication and authorization"},sidebar:"docs",previous:{title:"Command-line configuration",permalink:"/next/config-cmd"},next:{title:"Persistence",permalink:"/next/persistence"}},l={},u=[{value:"Token-based authentication",id:"token-based-authentication",level:2},{value:"Permission model",id:"permission-model",level:3},{value:"Enabling authn",id:"enabling-authn",level:3},{value:"Security",id:"security",level:3},{value:"Restoring tokens",id:"restoring-tokens",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skytable supports token-based authentication as an ",(0,r.kt)("em",{parentName:"p"},"authentication scheme"),", with more on the way in\nfuture releases. In this document, we explore how you can set up authentication on your Skytable\ninstance."),(0,r.kt)("h2",{id:"token-based-authentication"},"Token-based authentication"),(0,r.kt)("p",null,"Token-based authentication is just like password-based authentication with the exception that the\npassword is generated by the server, and is cryptographically strong. All login operations\nare resistant to brute-force search attacks. Read ",(0,r.kt)("a",{parentName:"p",href:"#security"},"more here"),"."),(0,r.kt)("h3",{id:"permission-model"},"Permission model"),(0,r.kt)("p",null,"There are three kinds of users:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Superuser:")," These users have access to everything"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard user"),": These users have access to all tables and keyspaces, but don't have access to the\nactions exclusive to the superusers. For example, the following actions cannot be performed by standard users:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth deluser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth adduser")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Anonymous user"),": This is the default account type you're logged into when you connect to an instance\nthat has authn/authz enabled. This is a very limited account and only has access to the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth claim")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth login"))))),(0,r.kt)("p",null,"Currently, there can only be one superuser, which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," account and any number of standard users."),(0,r.kt)("h3",{id:"enabling-authn"},"Enabling authn"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set an origin key using your preferred mode of ",(0,r.kt)("a",{parentName:"p",href:"config"},"configuration"),". The origin key is a 40-character\nlong ASCII string. The simplest way to generate a secure origin key is by using OpenSSL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl rand -hex 20\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now launch a ",(0,r.kt)("inlineCode",{parentName:"p"},"skysh")," instance and connect to your instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First claim the root account using your origin key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth claim <origin-key>\n")),(0,r.kt)("p",{parentName:"li"},"The server will respond with the ",(0,r.kt)("em",{parentName:"p"},"root token"),". ",(0,r.kt)("strong",{parentName:"p"},"Keep this safe; the root user can only be claimed once!"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now create other users. These users are standard users."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth adduser <username>\n")),(0,r.kt)("p",{parentName:"li"},"The server will again respond with a token for the given user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now login using the token:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth login <username> <token>\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the complete documentation for the ",(0,r.kt)("a",{parentName:"p",href:"actions/auth"},(0,r.kt)("inlineCode",{parentName:"a"},"auth")," action here"))),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("p",null,"The password produced has 54 characters, is cryptographically strong and hence is extremely secure. The password has the following alphabet (character set):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\n")),(0,r.kt)("p",null,"Every login operation initiates an expensive verification operation that is based on bcrypt; this makes\nlogins resistant to brute-force attacks. Also, just like any password storage system, plaintext passwords\nare never stored by the server."),(0,r.kt)("h3",{id:"restoring-tokens"},"Restoring tokens"),(0,r.kt)("p",null,"Yeah, no matter how well we safeguard our passwords, we tend to lose them. So, don't worry if you did\nlose any of your tokens. Here are two simple ways to restore your tokens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"You have your root password"),": First log into your root account and then run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth restore <username>\n")),"for the users who have lost their passwords"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"You have lost your root password"),": That's okay! See which situation matches yours:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"You still have your origin key"),": Simply run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth restore <origin key> root\n")),"You can also run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"auth restore <origin key> <username>\n")),"to restore other tokens using the origin key although it's easier to just log into the root account\nand then restore other accounts"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"You have lost your origin key"),": That's fine too, as long you have shell access to the node on\nwhich your instance is running. Simply create a new origin key and ",(0,r.kt)("a",{parentName:"li",href:"config"},"update your configuration"),". Then follow the above step (2(i)) and you're good to go.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This however means that you'll have to shut down your instance")))))))}c.isMDXComponent=!0}}]);