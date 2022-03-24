"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90572],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(N,o(o({ref:t},s),{},{components:a})):n.createElement(N,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1550:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],p={id:"auth",title:"AUTH"},l=void 0,m={unversionedId:"actions/auth",id:"actions/auth",title:"AUTH",description:"Change global authn/authz settings",source:"@site/docs/actions/AUTH.md",sourceDirName:"actions",slug:"/actions/auth",permalink:"/next/actions/auth",tags:[],version:"current",frontMatter:{id:"auth",title:"AUTH"},sidebar:"docs",previous:{title:"Building from source",permalink:"/next/building-from-source"},next:{title:"DBSIZE",permalink:"/next/actions/dbsize"}},s={},d=[{value:"<code>LOGIN</code>",id:"login",level:3},{value:"<code>CLAIM</code>",id:"claim",level:3},{value:"<code>LOGOUT</code>",id:"logout",level:3},{value:"<code>ADDUSER</code>",id:"adduser",level:3},{value:"<code>DELUSER</code>",id:"deluser",level:3},{value:"<code>RESTORE</code>",id:"restore",level:3},{value:"<code>LISTUSER</code>",id:"listuser",level:3},{value:"<code>WHOAMI</code>",id:"whoami",level:3}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Change global authn/authz settings"),(0,i.kt)("h3",{id:"login"},(0,i.kt)("inlineCode",{parentName:"h3"},"LOGIN")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 10"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH LOGIN <username> <token>"))))),(0,i.kt)("p",null,"Attempts to log in using the provided credentials"),(0,i.kt)("h3",{id:"claim"},(0,i.kt)("inlineCode",{parentName:"h3"},"CLAIM")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/skyhash#strings-"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 10"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH CLAIM <origin key>"))))),(0,i.kt)("p",null,"Attempts to claim the root account using the origin key"),(0,i.kt)("h3",{id:"logout"},(0,i.kt)("inlineCode",{parentName:"h3"},"LOGOUT")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 10"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH LOGOUT"))))),(0,i.kt)("p",null,"Attempts to log out the currently logged in user"),(0,i.kt)("h3",{id:"adduser"},(0,i.kt)("inlineCode",{parentName:"h3"},"ADDUSER")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/skyhash#strings-"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 11"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH ADDUSER <username>"))))),(0,i.kt)("p",null,"Attempts to create a new user with the provided username, returning the token"),(0,i.kt)("h3",{id:"deluser"},(0,i.kt)("inlineCode",{parentName:"h3"},"DELUSER")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 11"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH DELUSER <username>"))))),(0,i.kt)("p",null,"Attempts to delete the user with the provided username"),(0,i.kt)("h3",{id:"restore"},(0,i.kt)("inlineCode",{parentName:"h3"},"RESTORE")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/skyhash#strings-"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/response-codes"},"Rcode 11"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH RESTORE <username>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH RESTORE <origin-key> <username>"))))),(0,i.kt)("p",null,"Attempts to restore the password for the provided user. This will regenerate the token\nand return the newly issued token. However, if you aren't a root account, that is, you\nlost your root password, then you'll need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH RESTORE <origin-key> root"),"."),(0,i.kt)("h3",{id:"listuser"},(0,i.kt)("inlineCode",{parentName:"h3"},"LISTUSER")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#typed-non-null-array"},"Non-null array"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH LISTUSER"))))),(0,i.kt)("p",null,"Attempts to return a list of users for the current database instance"),(0,i.kt)("h3",{id:"whoami"},(0,i.kt)("inlineCode",{parentName:"h3"},"WHOAMI")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Accept type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/data-types#any-array"},"AnyArray"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Return type"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/protocol/skyhash#strings-"},"String"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH WHOAMI"))))),(0,i.kt)("p",null,"Returns a string with the AuthID of the currently logged in user or errors if the user\nis not logged in"))}k.isMDXComponent=!0}}]);