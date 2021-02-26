(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(342)),o={id:"terrapipe",title:"Terrapipe 1.0"},l={unversionedId:"Protocol/terrapipe",id:"Protocol/terrapipe",isDocsHomePage:!1,title:"Terrapipe 1.0",description:"Copyright (c) 2020 Sayan >",source:"@site/docs/Protocol/terrapipe.md",slug:"/Protocol/terrapipe",permalink:"/next/Protocol/terrapipe",version:"current",sidebar:"docs",previous:{title:"Building from source",permalink:"/next/building-from-source"},next:{title:"Data Types",permalink:"/next/Protocol/data-types"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Types of queries",id:"types-of-queries",children:[]},{value:"Datagroups",id:"datagroups",children:[]}]},{value:"The Metaframe",id:"the-metaframe",children:[]},{value:"The Dataframe",id:"the-dataframe",children:[{value:"Data in Queries",id:"data-in-queries",children:[]},{value:"Data in Responses",id:"data-in-responses",children:[]}]},{value:"Data Types",id:"data-types",children:[]},{value:"Response codes",id:"response-codes",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Copyright (c) 2020 Sayan ",Object(i.b)("a",{parentName:"p",href:"mailto:%3Cohsayan@outlook.com"},"<ohsayan@outlook.com"),">",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Date:")," Aug 23, 2020",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"In effect since:")," v0.4.0",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Date:")," 6",Object(i.b)("sup",null,"th")," Aug, 2020",Object(i.b)("br",{parentName:"p"}),"\n","Copyright ","\xa9"," 2020 Sayan Nandan"))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skybasedb/skybase"},"Skybase")," for client/server communication.\nAll clients willing to communicate with TDB servers must implement this protocol. This document serves as a guide for implementing clients for TDB."),Object(i.b)("h2",{id:"concepts"},"Concepts"),Object(i.b)("p",null,"Terrapipe also works in a request/response action like HTTP, except that we call\nit a query/response action. A client sends a query, and the server returns a response. The bytes sent by a client is called a query packet, while the bytes sent by the server in response to this is called a response packet."),Object(i.b)("p",null,"Each packet (irrespective of query or response), contains two parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The metaframe"),": the first two lines"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The dataframe"),": the remaining lines")),Object(i.b)("h3",{id:"types-of-queries"},"Types of queries"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Simple queries"),": These queries just perform one action (like ",Object(i.b)("inlineCode",{parentName:"li"},"GET")," , ",Object(i.b)("inlineCode",{parentName:"li"},"SET")," , ...)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Batch queries"),": These queries perform multiple actions")),Object(i.b)("h3",{id:"datagroups"},"Datagroups"),Object(i.b)("p",null,"A datagroup is a collection of elements that perform one action, for a query or a collection elements that return the outcome for one action, for a response. Don't worry, read on and you'll understand what it is."),Object(i.b)("h2",{id:"the-metaframe"},"The Metaframe"),Object(i.b)("p",null,"The metaframe is made up of precisely two lines (separated by a LF or ",Object(i.b)("inlineCode",{parentName:"p"},"\\n")," byte). This is what it looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<m>\\n\n*<n>\\n\n")),Object(i.b)("p",null,"Here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<n>")," is the number of datagroups in the query. Since simple queries perform one action only, the value of ",Object(i.b)("inlineCode",{parentName:"li"},"<n>")," is always 1. Batch queries have values of n in the range ",Object(i.b)("inlineCode",{parentName:"li"},"(1, \u221e)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<m>")," is the number of bytes in the following line excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte. So let's say we had ",Object(i.b)("inlineCode",{parentName:"li"},"*1\\n")," in the second line of the metaframe, then ",Object(i.b)("inlineCode",{parentName:"li"},"<m>")," would have a value of 2. ")),Object(i.b)("p",null,"Also make sure that you make matching the ",Object(i.b)("inlineCode",{parentName:"p"},"*")," character non-exhaustive, as we might be adding more packet types in the future which may need symbols other than ",Object(i.b)("inlineCode",{parentName:"p"},"*")," ."),Object(i.b)("h2",{id:"the-dataframe"},"The Dataframe"),Object(i.b)("p",null,"The dataframe is made up of groups called datagroups as we had mentioned earlier. In the case of a query like ",Object(i.b)("inlineCode",{parentName:"p"},"GET x")," , ",Object(i.b)("inlineCode",{parentName:"p"},"GET x")," will be the query datagroup, and the response returned by the server with the key, will be the response datagroup (of course, excluding the metaframe)."),Object(i.b)("p",null,"Every query datagroup will contain all the arguments required to execute that action, including the action itself. Each datagroup has two lines of ",Object(i.b)("em",{parentName:"p"},"boilerplate")," in the beginning. This looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n")),Object(i.b)("p",null,"Here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<q>")," is the number of arguments/elements in the datagroup and"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<p>")," is the number of bytes in the next line, excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte (just like the metaframe)")),Object(i.b)("p",null,"An entire datagroup, has the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n<--- DATA ---\x3e\n")),Object(i.b)("p",null,"We know the first two lines...but wait, what is ",Object(i.b)("inlineCode",{parentName:"p"},"<--- DATA ---\x3e")," ? Let's take a look at what is ",Object(i.b)("em",{parentName:"p"},"data")," looks like in the case of queries and then we'll look at what the ",Object(i.b)("em",{parentName:"p"},"data")," looks like in the case of responses."),Object(i.b)("h3",{id:"data-in-queries"},"Data in Queries"),Object(i.b)("p",null,"For a request like ",Object(i.b)("inlineCode",{parentName:"p"},"GET foo")," , the corresponding data will look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#3\nGET\\n\n#3\\n\nfoo\\n\n")),Object(i.b)("p",null,"So, starting from line 1:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"we have a '#' followed by the number of bytes in the next line (3 in this case), excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.   "),Object(i.b)("li",{parentName:"ol"},"We then have a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte. Looking ahead, we have 3 bytes ( ",Object(i.b)("inlineCode",{parentName:"li"},"GET")," ) followed by a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.  "),Object(i.b)("li",{parentName:"ol"},"We then have  a '#' followed by the number of bytes in the next line (3 again, in this case), followed by a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.  "),Object(i.b)("li",{parentName:"ol"},"And this goes on")),Object(i.b)("p",null,"The idea is, we have a ",Object(i.b)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes (let it be ",Object(i.b)("inlineCode",{parentName:"p"},"n")," ) to be read from the next line and a line feed character ('\\n'). In the next line, we read ",Object(i.b)("inlineCode",{parentName:"p"},"n")," bytes and skip the line feed character. And we keep going on, in this way."),Object(i.b)("p",null,"Not so hard, right? Now let's look at what the data looks like in the case of responses."),Object(i.b)("h3",{id:"data-in-responses"},"Data in Responses"),Object(i.b)("p",null,"Data in responses have the following general structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<tsymbol><length>\\n\n<item>\\n\n<tsymbol><length>\\n\n... and so on\n")),Object(i.b)("p",null,"Here, we can easily make out that ",Object(i.b)("inlineCode",{parentName:"p"},"<length>")," is the number of bytes in the following line (just like a query) and ",Object(i.b)("inlineCode",{parentName:"p"},"<item>")," is well, an argument/element in the datagroup. But then, what is ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," ? Simply put, it is the type of data in the following line."),Object(i.b)("p",null,"But, before you go ahead, here's the simple flow that you must keep in mind:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Read the ",Object(i.b)("inlineCode",{parentName:"li"},"tsymbol")," and match it against the ",Object(i.b)("a",{parentName:"li",href:"#data-types"},"data type")),Object(i.b)("li",{parentName:"ol"},"Parse the data in the next line into the data type"),Object(i.b)("li",{parentName:"ol"},"Repeat for the remaining lines")),Object(i.b)("p",null,"So, to conclude, ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," specifies the type of the ",Object(i.b)("inlineCode",{parentName:"p"},"item")," in the following line. ",Object(i.b)("a",{parentName:"p",href:"#data-types"},"Read on")," to know what values ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," can assume. "),Object(i.b)("h2",{id:"data-types"},"Data Types"),Object(i.b)("p",null,"You can find a full list of data types and their ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," s ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"data-types"},"here")),"."),Object(i.b)("h2",{id:"response-codes"},"Response codes"),Object(i.b)("p",null,"You can find a full list of response codes and their descriptions ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"response-codes"},"here"))),Object(i.b)("p",null,"And that's about it! For a list of actions, ",Object(i.b)("a",{parentName:"p",href:"/actions/overview"},"see this"),"."))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);