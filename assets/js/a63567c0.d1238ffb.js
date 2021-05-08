(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(376)),o={id:"terrapipe",title:"Terrapipe 1.0"},l={unversionedId:"Protocol/terrapipe",id:"version-0.5.1/Protocol/terrapipe",isDocsHomePage:!1,title:"Terrapipe 1.0",description:"Copyright (c) 2020 Sayan >",source:"@site/versioned_docs/version-0.5.1/Protocol/terrapipe.md",slug:"/Protocol/terrapipe",permalink:"/Protocol/terrapipe",version:"0.5.1",sidebar:"version-0.5.1/docs",previous:{title:"USET",permalink:"/Actions/uset"},next:{title:"Data Types",permalink:"/Protocol/data-types"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Types of queries",id:"types-of-queries",children:[]},{value:"Datagroups",id:"datagroups",children:[]}]},{value:"The Metaframe",id:"the-metaframe",children:[]},{value:"The Dataframe",id:"the-dataframe",children:[{value:"Data in Queries",id:"data-in-queries",children:[]},{value:"Data in Responses",id:"data-in-responses",children:[]}]},{value:"Data Types",id:"data-types",children:[]},{value:"Response codes",id:"response-codes",children:[]},{value:"Notes",id:"notes",children:[]},{value:"A complete query/response example",id:"a-complete-queryresponse-example",children:[{value:"The Query Packet",id:"the-query-packet",children:[]},{value:"The Response Packet",id:"the-response-packet",children:[]}]}],s={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Copyright (c) 2020 Sayan ",Object(i.b)("a",{parentName:"p",href:"mailto:%3Cohsayan@outlook.com"},"<ohsayan@outlook.com"),">",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Date:")," Aug 23, 2020",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"In effect since:")," v0.4.0",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Date:")," 6",Object(i.b)("sup",null,"th")," Aug, 2020",Object(i.b)("br",{parentName:"p"}),"\n","Copyright ","\xa9"," 2020 Sayan Nandan"))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/skytable/terrabase"},"Skytable")," for client/server communication.\nAll clients willing to communicate with Skytable must implement this protocol. This document serves as a guide for implementing clients for Skytable."),Object(i.b)("h2",{id:"concepts"},"Concepts"),Object(i.b)("p",null,"Terrapipe also works in a request/response action like HTTP, except that we call\nit a query/response action. A client sends a query, and the server returns a response. The bytes sent by a client is called a query packet, while the bytes sent by the server in response to this is called a response packet."),Object(i.b)("p",null,"Each packet (irrespective of query or response), contains two parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The metaframe"),": the first two lines"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The dataframe"),": the remaining lines")),Object(i.b)("h3",{id:"types-of-queries"},"Types of queries"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Simple queries"),": These queries just perform one action (like ",Object(i.b)("inlineCode",{parentName:"li"},"GET")," , ",Object(i.b)("inlineCode",{parentName:"li"},"SET")," , ...)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Batch queries"),": These queries perform multiple actions")),Object(i.b)("h3",{id:"datagroups"},"Datagroups"),Object(i.b)("p",null,"A datagroup is a collection of elements that perform one action, for a query or a collection elements that return the outcome for one action, for a response. Don't worry, read on and you'll understand what it is."),Object(i.b)("h2",{id:"the-metaframe"},"The Metaframe"),Object(i.b)("p",null,"The metaframe is made up of precisely two lines (separated by a LF or ",Object(i.b)("inlineCode",{parentName:"p"},"\\n")," byte). This is what it looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<m>\\n\n*<n>\\n\n")),Object(i.b)("p",null,"Here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<n>")," is the number of datagroups in the query. Since simple queries perform one action only, the value of ",Object(i.b)("inlineCode",{parentName:"li"},"<n>")," is always 1. Batch queries have values of n in the range ",Object(i.b)("inlineCode",{parentName:"li"},"(1, \u221e)")," depending on the number of actions\nthey perform"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<m>")," is the number of bytes in the following line excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte. So let's say we had ",Object(i.b)("inlineCode",{parentName:"li"},"*1\\n")," in the second line of the metaframe, then ",Object(i.b)("inlineCode",{parentName:"li"},"<m>")," would have a value of 2. ")),Object(i.b)("p",null,"Also make sure that you make matching the ",Object(i.b)("inlineCode",{parentName:"p"},"*")," character non-exhaustive, as we might be adding more packet types in the future which may need symbols other than ",Object(i.b)("inlineCode",{parentName:"p"},"*")," ."),Object(i.b)("h2",{id:"the-dataframe"},"The Dataframe"),Object(i.b)("p",null,"The dataframe is made up of groups called datagroups as we had mentioned earlier. In the case of a query like ",Object(i.b)("inlineCode",{parentName:"p"},"GET x")," , ",Object(i.b)("inlineCode",{parentName:"p"},"GET x")," will be the query datagroup, and the response returned by the server with the key, will be the response datagroup (of course, excluding the metaframe)."),Object(i.b)("p",null,"Every query datagroup will contain all the arguments required to execute that action, including the action itself. Each datagroup has two lines of ",Object(i.b)("em",{parentName:"p"},"boilerplate")," in the beginning. This looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n")),Object(i.b)("p",null,"Here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<q>")," is the number of arguments/elements in the datagroup and"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<p>")," is the number of bytes in the next line, excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte (just like the metaframe)")),Object(i.b)("p",null,"An entire datagroup, has the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n<--- DATA ---\x3e\n")),Object(i.b)("p",null,"We know the first two lines...but wait, what is ",Object(i.b)("inlineCode",{parentName:"p"},"<--- DATA ---\x3e")," ? Let's take a look at what is ",Object(i.b)("em",{parentName:"p"},"data")," looks like in the case of queries and then we'll look at what the ",Object(i.b)("em",{parentName:"p"},"data")," looks like in the case of responses."),Object(i.b)("h3",{id:"data-in-queries"},"Data in Queries"),Object(i.b)("p",null,"For a request like ",Object(i.b)("inlineCode",{parentName:"p"},"GET foo")," , the corresponding data will look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#3\nGET\\n\n#3\\n\nfoo\\n\n")),Object(i.b)("p",null,"So, starting from line 1:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"we have a '#' followed by the number of bytes in the next line (3 in this case), excluding the ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.   "),Object(i.b)("li",{parentName:"ol"},"We then have a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte. Looking ahead, we have 3 bytes ( ",Object(i.b)("inlineCode",{parentName:"li"},"GET")," ) followed by a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.  "),Object(i.b)("li",{parentName:"ol"},"We then have  a '#' followed by the number of bytes in the next line (3 again, in this case), followed by a ",Object(i.b)("inlineCode",{parentName:"li"},"\\n")," byte.  "),Object(i.b)("li",{parentName:"ol"},"And this goes on")),Object(i.b)("p",null,"The idea is, we have a ",Object(i.b)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes (let it be ",Object(i.b)("inlineCode",{parentName:"p"},"n")," ) to be read from the next line and a line feed character ('\\n'). In the next line, we read ",Object(i.b)("inlineCode",{parentName:"p"},"n")," bytes and skip the line feed character. And we keep going on, in this way."),Object(i.b)("p",null,"Not so hard, right? Now let's look at what the data looks like in the case of responses."),Object(i.b)("h3",{id:"data-in-responses"},"Data in Responses"),Object(i.b)("p",null,"Data in responses have the following general structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<tsymbol><length>\\n\n<item>\\n\n<tsymbol><length>\\n\n... and so on\n")),Object(i.b)("p",null,"Here, we can easily make out that ",Object(i.b)("inlineCode",{parentName:"p"},"<length>")," is the number of bytes in the following line (just like a query) and ",Object(i.b)("inlineCode",{parentName:"p"},"<item>")," is well, an argument/element in the datagroup. But then, what is ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," ? Simply put, it is the type of data in the following line."),Object(i.b)("p",null,"But, before you go ahead, here's the simple flow that you must keep in mind:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Read the ",Object(i.b)("inlineCode",{parentName:"li"},"tsymbol")," and match it against the ",Object(i.b)("a",{parentName:"li",href:"#data-types"},"data type")),Object(i.b)("li",{parentName:"ol"},"Parse the data in the next line into the data type"),Object(i.b)("li",{parentName:"ol"},"Repeat for the remaining lines")),Object(i.b)("p",null,"So, to conclude, ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," specifies the type of the ",Object(i.b)("inlineCode",{parentName:"p"},"item")," in the following line. ",Object(i.b)("a",{parentName:"p",href:"#data-types"},"Read on")," to know what values ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," can assume. "),Object(i.b)("h2",{id:"data-types"},"Data Types"),Object(i.b)("p",null,"You can find a full list of data types and their ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>")," s ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"data-types"},"here")),"."),Object(i.b)("h2",{id:"response-codes"},"Response codes"),Object(i.b)("p",null,"You can find a full list of response codes and their descriptions ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"response-codes"},"here"))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("p",null,"The line that has a ",Object(i.b)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes in the next line or the line that has a ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>"),"\nfollowed by the number of bytes in the next line (in the case of responses) is often referred to as a sizeline."),Object(i.b)("h2",{id:"a-complete-queryresponse-example"},"A complete query/response example"),Object(i.b)("p",null,"Let's say we're going to run ",Object(i.b)("inlineCode",{parentName:"p"},"GET foo")," to get a key called 'foo'. Since we're just running one action, this\ntells us that this is a simple query."),Object(i.b)("h3",{id:"the-query-packet"},"The Query Packet"),Object(i.b)("h4",{id:"the-metaframe-1"},"The Metaframe"),Object(i.b)("p",null,"Since simple queries just do one thing, they'll just have one data group. So the metaframe is fairly simple:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n // The next line has the `*1` chars, so 2 chars excluding the LF character\n*1\\n // This query has one action, so one datagroup\n")),Object(i.b)("h4",{id:"the-dataframe-1"},"The Dataframe"),Object(i.b)("p",null,"Now, what about the dataframe? Well, there is a single datagroup for the ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," action with two arguments.\nHence, the ",Object(i.b)("em",{parentName:"p"},"boilerplate")," for the dataframe will look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n // The next line has the `&2` chars, so 2 chars excluding the LF character\n&2\\n // The datagroup has two arguments, so this value is 2\n")),Object(i.b)("p",null,"Now, what about the data? ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," and ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," are the two arguments, so the data in the dataframe will look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#3\\n // 'GET' has 3 chars excluding the LF\nGET\\n // The data item `GET` itself\n#3\\n // `foo` also has 3 chars excluding the LF\nfoo\\n // The data item `foo` itself\n")),Object(i.b)("h4",{id:"the-complete-query-packet"},"The complete query packet"),Object(i.b)("p",null,"So, ",Object(i.b)("inlineCode",{parentName:"p"},"GET foo")," will produce the following query packet:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n\n*1\\n\n#2\\n\n&2\\n\n#3\\n\nGET\\n\n#3\\n\nfoo\\n\n")),Object(i.b)("p",null,"Pretty simple, right?"),Object(i.b)("h3",{id:"the-response-packet"},"The Response Packet"),Object(i.b)("p",null,"We'll assume that a key ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," exists, and it holds the value ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),". Since we aren't going to be building\nresponses, but rather parsing them ","\u2014"," let's understand the parts of a response that will be returned by the server in this case:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n\n*1\\n\n#2\\n\n&1\\n\n+3\\n\nbar\\n\n")),Object(i.b)("h4",{id:"the-metaframe-2"},"The Metaframe"),Object(i.b)("p",null,"Like you know, the metaframe is always made up of two lines (i.e two parts separated by a LF character or ",Object(i.b)("inlineCode",{parentName:"p"},"\\n"),").\nSo, in our case, the response's metaframe is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n\n*1\\n\n")),Object(i.b)("p",null,"We start our parsing with the first line. Let's read in the sizeline. For this, we ignore the LF char and look\nat the remaining parts. What is it that we have? It's ",Object(i.b)("inlineCode",{parentName:"p"},"#2"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For more information on sizelines, ",Object(i.b)("a",{parentName:"p",href:"#notes"},"read this note"))),Object(i.b)("p",null,"This means that our next line will have 2 chars excluding the LF. Good!"),Object(i.b)("p",null,"Now we read the first 2 chars as that's the only important bit for us and ignore the linefeed. This leaves us\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"*1"),". Since we're in the metaframe, it's easy to understand that ",Object(i.b)("inlineCode",{parentName:"p"},"*1")," is telling us that the response\npacket is one for a simple query and NOT a pipelined query."),Object(i.b)("p",null,"So, as of now, we know that this reponse corresponds to a simple query."),Object(i.b)("h4",{id:"the-dataframe-2"},"The Dataframe"),Object(i.b)("p",null,"In our case, the dataframe will be the remaining part:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#2\\n\n&1\\n\n+3\\n\nbar\\n\n")),Object(i.b)("p",null,"We know that we need to read the boilerplate for the dataframe that is again two lines or parts separated by LF\nchars. So, we read in the sizeline. "),Object(i.b)("p",null,"To read the sizeline, we just read upto the ",Object(i.b)("inlineCode",{parentName:"p"},"\\n")," character and then ignore the ",Object(i.b)("inlineCode",{parentName:"p"},"LF"),". This leaves us with ",Object(i.b)("inlineCode",{parentName:"p"},"#2"),".\nAgain, just like queries, this means that the next line will have 2 chars excluding the LF. Great!\nSo, we read the first 2 chars and ignore the linefeed. In our case,\nthis is ",Object(i.b)("inlineCode",{parentName:"p"},"&1"),". This tells us that there is going to be a datagroup with one element."),Object(i.b)("h5",{id:"the-data"},"The data"),Object(i.b)("p",null,"In our case, the data is made of the remaining part:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+3\\n\nbar\\n\n")),Object(i.b)("p",null,"So, we read the sizeline again. This sizeline begins with a ",Object(i.b)("inlineCode",{parentName:"p"},"+")," and not ",Object(i.b)("inlineCode",{parentName:"p"},"#"),". This is obvious because sizelines\nbegin with ",Object(i.b)("inlineCode",{parentName:"p"},"<tsymbol>"),"s in the case of the data in response dataframes.\nSo, we have ",Object(i.b)("inlineCode",{parentName:"p"},"+3")," (ignoring the LF). From the ",Object(i.b)("a",{parentName:"p",href:"data-types"},"data type list"),", we know that ",Object(i.b)("inlineCode",{parentName:"p"},"+")," indicates a string\nin the following line. Good! And the ",Object(i.b)("inlineCode",{parentName:"p"},"3")," tells us that the next line is 3 chars long, excluding the linefeed!"),Object(i.b)("p",null,"So, in other words, we have a 3 character long string in the next line.\nNow let's read in 3 characters and ignore the linefeed. Hey, we have a 3 char string 'bar'."),Object(i.b)("p",null,"So, our response becomes (in pseudocode data-structure):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'SimpleResponse {\n    datagroup: [String("bar")]\n}\n')),Object(i.b)("p",null,"If we ran ",Object(i.b)("inlineCode",{parentName:"p"},"MGET x y z"),", and x and y existed with values ",Object(i.b)("inlineCode",{parentName:"p"},"ex")," and ",Object(i.b)("inlineCode",{parentName:"p"},"why")," and z didn't exist, we'd have three\nelements in the datagroup:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'SimpleResponse {\n    datagroup: [String("ex"), String("why"), RespCode(1)]\n}\n')),Object(i.b)("p",null,"Phew, we're done!"))}c.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,u=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);