(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3905],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63425:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"actions-overview",title:"Actions overview"},l=void 0,c={unversionedId:"actions-overview",id:"actions-overview",isDocsHomePage:!1,title:"Actions overview",description:"Actions are exactly what they say -- they do something! You can think of actions to be like",source:"@site/docs/3.actions-overview.md",sourceDirName:".",slug:"/actions-overview",permalink:"/next/actions-overview",version:"current",sidebarPosition:3,frontMatter:{id:"actions-overview",title:"Actions overview"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/getting-started"},next:{title:"Containers",permalink:"/next/containers"}},s=[{value:"Taking <em>action</em>",id:"taking-action",children:[{value:"SET",id:"set",children:[]},{value:"GET",id:"get",children:[]},{value:"UPDATE",id:"update",children:[]},{value:"DEL",id:"del",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Actions are exactly what they say -- they do something! You can think of actions to be like\nshell commands: you run a command with arguments and you get some corresponding output."),(0,o.kt)("p",null,"Remember the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEYA")," you ran in the earlier document? Yup, that's an action. All kind of ",(0,o.kt)("em",{parentName:"p"},"quering")," in Skytable is done through actions. Actions are classified into two kinds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DDL (Data definition language) Actions: These actions enable us to interact with the structures\nthat store our data"),(0,o.kt)("li",{parentName:"ul"},"DML (Data manipulation language) Actions: These actions enable us to access and manipulate the data stored in our database")),(0,o.kt)("h2",{id:"taking-action"},"Taking ",(0,o.kt)("em",{parentName:"h2"},"action")),(0,o.kt)("p",null,"If you're coming from a SQL background, you might be used to the ",(0,o.kt)("em",{parentName:"p"},"DML")," way of things. That's right, DML actions are ",(0,o.kt)("em",{parentName:"p"},"similar"),".\nLet us try out a few basic DML actions (don't worry ","\u2014"," you'll learn about DDL in the next few documents)."),(0,o.kt)("h3",{id:"set"},"SET"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SET")," action lets us assign a key to a value (in a key/value table). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET x 100\n")),(0,o.kt)("p",null,"will assign the key ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),". But how do we get it?"),(0,o.kt)("h3",{id:"get"},"GET"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," action lets us fetch keys. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GET x\n")),(0,o.kt)("p",null,"will return the ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," that we set in the last step."),(0,o.kt)("h3",{id:"update"},"UPDATE"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE")," action lets us update the values of keys. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE x 200\n")),(0,o.kt)("p",null,"will update the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"200")),(0,o.kt)("h3",{id:"del"},"DEL"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DEL")," action lets us remove keys from the database. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DEL x\n")),(0,o.kt)("p",null,"will remove the key ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," from the database."),(0,o.kt)("p",null,"Didn't we just do a ",(0,o.kt)("strong",{parentName:"p"},"C"),"reate-",(0,o.kt)("strong",{parentName:"p"},"R"),"ead-",(0,o.kt)("strong",{parentName:"p"},"U"),"pdate-",(0,o.kt)("strong",{parentName:"p"},"D"),"elete? The infamous CRUD! Now, you can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"all-actions"},"full index of actions"),"."))}p.isMDXComponent=!0}}]);