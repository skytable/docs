"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7768],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(c,o(o({ref:t},h),{},{components:n})):a.createElement(c,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"terrapipe",title:"Terrapipe 1.0"},s=void 0,p={unversionedId:"Protocol/terrapipe",id:"version-0.5.2/Protocol/terrapipe",title:"Terrapipe 1.0",description:"Copyright (c) 2020 Sayan >",source:"@site/versioned_docs/version-0.5.2/Protocol/terrapipe.md",sourceDirName:"Protocol",slug:"/Protocol/terrapipe",permalink:"/0.5.2/Protocol/terrapipe",tags:[],version:"0.5.2",frontMatter:{id:"terrapipe",title:"Terrapipe 1.0"},sidebar:"version-0.5.2/docs",previous:{title:"USET",permalink:"/0.5.2/Actions/uset"},next:{title:"Data Types",permalink:"/0.5.2/Protocol/data-types"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Types of queries",id:"types-of-queries",level:3},{value:"Datagroups",id:"datagroups",level:3},{value:"The Metaframe",id:"the-metaframe",level:2},{value:"The Dataframe",id:"the-dataframe",level:2},{value:"Data in Queries",id:"data-in-queries",level:3},{value:"Data in Responses",id:"data-in-responses",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Response codes",id:"response-codes",level:2},{value:"Notes",id:"notes",level:2},{value:"A complete query/response example",id:"a-complete-queryresponse-example",level:2},{value:"The Query Packet",id:"the-query-packet",level:3},{value:"The Metaframe",id:"the-metaframe-1",level:4},{value:"The Dataframe",id:"the-dataframe-1",level:4},{value:"The complete query packet",id:"the-complete-query-packet",level:4},{value:"The Response Packet",id:"the-response-packet",level:3},{value:"The Metaframe",id:"the-metaframe-2",level:4},{value:"The Dataframe",id:"the-dataframe-2",level:4},{value:"The data",id:"the-data",level:5}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Copyright (c) 2020 Sayan ",(0,i.kt)("a",{parentName:"p",href:"mailto:%3Cohsayan@outlook.com"},"<ohsayan@outlook.com"),">",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Date:")," Aug 23, 2020",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"In effect since:")," v0.4.0",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Date:")," 6",(0,i.kt)("sup",null,"th")," Aug, 2020",(0,i.kt)("br",{parentName:"p"}),"\n","Copyright ","\xa9"," 2020 Sayan Nandan"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Terrapipe is an application layer protocol, like HTTP, built on top of TCP which is used by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/terrabase"},"Skytable")," for client/server communication.\nAll clients willing to communicate with Skytable must implement this protocol. This document serves as a guide for implementing clients for Skytable."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"Terrapipe also works in a request/response action like HTTP, except that we call\nit a query/response action. A client sends a query, and the server returns a response. The bytes sent by a client is called a query packet, while the bytes sent by the server in response to this is called a response packet."),(0,i.kt)("p",null,"Each packet (irrespective of query or response), contains two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The metaframe"),": the first two lines"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The dataframe"),": the remaining lines")),(0,i.kt)("h3",{id:"types-of-queries"},"Types of queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple queries"),": These queries just perform one action (like ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," , ",(0,i.kt)("inlineCode",{parentName:"li"},"SET")," , ...)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batch queries"),": These queries perform multiple actions")),(0,i.kt)("h3",{id:"datagroups"},"Datagroups"),(0,i.kt)("p",null,"A datagroup is a collection of elements that perform one action, for a query or a collection elements that return the outcome for one action, for a response. Don't worry, read on and you'll understand what it is."),(0,i.kt)("h2",{id:"the-metaframe"},"The Metaframe"),(0,i.kt)("p",null,"The metaframe is made up of precisely two lines (separated by a LF or ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")," byte). This is what it looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#<m>\\n\n*<n>\\n\n")),(0,i.kt)("p",null,"Here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<n>")," is the number of datagroups in the query. Since simple queries perform one action only, the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"<n>")," is always 1. Batch queries have values of n in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"(1, \u221e)")," depending on the number of actions\nthey perform"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<m>")," is the number of bytes in the following line excluding the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte. So let's say we had ",(0,i.kt)("inlineCode",{parentName:"li"},"*1\\n")," in the second line of the metaframe, then ",(0,i.kt)("inlineCode",{parentName:"li"},"<m>")," would have a value of 2. ")),(0,i.kt)("p",null,"Also make sure that you make matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character non-exhaustive, as we might be adding more packet types in the future which may need symbols other than ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," ."),(0,i.kt)("h2",{id:"the-dataframe"},"The Dataframe"),(0,i.kt)("p",null,"The dataframe is made up of groups called datagroups as we had mentioned earlier. In the case of a query like ",(0,i.kt)("inlineCode",{parentName:"p"},"GET x")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"GET x")," will be the query datagroup, and the response returned by the server with the key, will be the response datagroup (of course, excluding the metaframe)."),(0,i.kt)("p",null,"Every query datagroup will contain all the arguments required to execute that action, including the action itself. Each datagroup has two lines of ",(0,i.kt)("em",{parentName:"p"},"boilerplate")," in the beginning. This looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n")),(0,i.kt)("p",null,"Here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<q>")," is the number of arguments/elements in the datagroup and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<p>")," is the number of bytes in the next line, excluding the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte (just like the metaframe)")),(0,i.kt)("p",null,"An entire datagroup, has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#<p>\\n\n&<q>\\n\n<--- DATA ---\x3e\n")),(0,i.kt)("p",null,"We know the first two lines...but wait, what is ",(0,i.kt)("inlineCode",{parentName:"p"},"<--- DATA ---\x3e")," ? Let's take a look at what is ",(0,i.kt)("em",{parentName:"p"},"data")," looks like in the case of queries and then we'll look at what the ",(0,i.kt)("em",{parentName:"p"},"data")," looks like in the case of responses."),(0,i.kt)("h3",{id:"data-in-queries"},"Data in Queries"),(0,i.kt)("p",null,"For a request like ",(0,i.kt)("inlineCode",{parentName:"p"},"GET foo")," , the corresponding data will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#3\nGET\\n\n#3\\n\nfoo\\n\n")),(0,i.kt)("p",null,"So, starting from line 1:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"we have a '#' followed by the number of bytes in the next line (3 in this case), excluding the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte.   "),(0,i.kt)("li",{parentName:"ol"},"We then have a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte. Looking ahead, we have 3 bytes ( ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ) followed by a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte.  "),(0,i.kt)("li",{parentName:"ol"},"We then have  a '#' followed by the number of bytes in the next line (3 again, in this case), followed by a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," byte.  "),(0,i.kt)("li",{parentName:"ol"},"And this goes on")),(0,i.kt)("p",null,"The idea is, we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes (let it be ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," ) to be read from the next line and a line feed character ('\\n'). In the next line, we read ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," bytes and skip the line feed character. And we keep going on, in this way."),(0,i.kt)("p",null,"Not so hard, right? Now let's look at what the data looks like in the case of responses."),(0,i.kt)("h3",{id:"data-in-responses"},"Data in Responses"),(0,i.kt)("p",null,"Data in responses have the following general structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<tsymbol><length>\\n\n<item>\\n\n<tsymbol><length>\\n\n... and so on\n")),(0,i.kt)("p",null,"Here, we can easily make out that ",(0,i.kt)("inlineCode",{parentName:"p"},"<length>")," is the number of bytes in the following line (just like a query) and ",(0,i.kt)("inlineCode",{parentName:"p"},"<item>")," is well, an argument/element in the datagroup. But then, what is ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," ? Simply put, it is the type of data in the following line."),(0,i.kt)("p",null,"But, before you go ahead, here's the simple flow that you must keep in mind:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the ",(0,i.kt)("inlineCode",{parentName:"li"},"tsymbol")," and match it against the ",(0,i.kt)("a",{parentName:"li",href:"#data-types"},"data type")),(0,i.kt)("li",{parentName:"ol"},"Parse the data in the next line into the data type"),(0,i.kt)("li",{parentName:"ol"},"Repeat for the remaining lines")),(0,i.kt)("p",null,"So, to conclude, ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," specifies the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," in the following line. ",(0,i.kt)("a",{parentName:"p",href:"#data-types"},"Read on")," to know what values ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," can assume. "),(0,i.kt)("h2",{id:"data-types"},"Data Types"),(0,i.kt)("p",null,"You can find a full list of data types and their ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>")," s ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"data-types"},"here")),"."),(0,i.kt)("h2",{id:"response-codes"},"Response codes"),(0,i.kt)("p",null,"You can find a full list of response codes and their descriptions ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"response-codes"},"here"))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The line that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," followed by the number of bytes in the next line or the line that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>"),"\nfollowed by the number of bytes in the next line (in the case of responses) is often referred to as a sizeline."),(0,i.kt)("h2",{id:"a-complete-queryresponse-example"},"A complete query/response example"),(0,i.kt)("p",null,"Let's say we're going to run ",(0,i.kt)("inlineCode",{parentName:"p"},"GET foo")," to get a key called 'foo'. Since we're just running one action, this\ntells us that this is a simple query."),(0,i.kt)("h3",{id:"the-query-packet"},"The Query Packet"),(0,i.kt)("h4",{id:"the-metaframe-1"},"The Metaframe"),(0,i.kt)("p",null,"Since simple queries just do one thing, they'll just have one data group. So the metaframe is fairly simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n // The next line has the `*1` chars, so 2 chars excluding the LF character\n*1\\n // This query has one action, so one datagroup\n")),(0,i.kt)("h4",{id:"the-dataframe-1"},"The Dataframe"),(0,i.kt)("p",null,"Now, what about the dataframe? Well, there is a single datagroup for the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," action with two arguments.\nHence, the ",(0,i.kt)("em",{parentName:"p"},"boilerplate")," for the dataframe will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n // The next line has the `&2` chars, so 2 chars excluding the LF character\n&2\\n // The datagroup has two arguments, so this value is 2\n")),(0,i.kt)("p",null,"Now, what about the data? ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," are the two arguments, so the data in the dataframe will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#3\\n // 'GET' has 3 chars excluding the LF\nGET\\n // The data item `GET` itself\n#3\\n // `foo` also has 3 chars excluding the LF\nfoo\\n // The data item `foo` itself\n")),(0,i.kt)("h4",{id:"the-complete-query-packet"},"The complete query packet"),(0,i.kt)("p",null,"So, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET foo")," will produce the following query packet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n\n*1\\n\n#2\\n\n&2\\n\n#3\\n\nGET\\n\n#3\\n\nfoo\\n\n")),(0,i.kt)("p",null,"Pretty simple, right?"),(0,i.kt)("h3",{id:"the-response-packet"},"The Response Packet"),(0,i.kt)("p",null,"We'll assume that a key ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," exists, and it holds the value ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),". Since we aren't going to be building\nresponses, but rather parsing them ","\u2014"," let's understand the parts of a response that will be returned by the server in this case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n\n*1\\n\n#2\\n\n&1\\n\n+3\\n\nbar\\n\n")),(0,i.kt)("h4",{id:"the-metaframe-2"},"The Metaframe"),(0,i.kt)("p",null,"Like you know, the metaframe is always made up of two lines (i.e two parts separated by a LF character or ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),").\nSo, in our case, the response's metaframe is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n\n*1\\n\n")),(0,i.kt)("p",null,"We start our parsing with the first line. Let's read in the sizeline. For this, we ignore the LF char and look\nat the remaining parts. What is it that we have? It's ",(0,i.kt)("inlineCode",{parentName:"p"},"#2"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more information on sizelines, ",(0,i.kt)("a",{parentName:"p",href:"#notes"},"read this note"))),(0,i.kt)("p",null,"This means that our next line will have 2 chars excluding the LF. Good!"),(0,i.kt)("p",null,"Now we read the first 2 chars as that's the only important bit for us and ignore the linefeed. This leaves us\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"*1"),". Since we're in the metaframe, it's easy to understand that ",(0,i.kt)("inlineCode",{parentName:"p"},"*1")," is telling us that the response\npacket is one for a simple query and NOT a pipelined query."),(0,i.kt)("p",null,"So, as of now, we know that this reponse corresponds to a simple query."),(0,i.kt)("h4",{id:"the-dataframe-2"},"The Dataframe"),(0,i.kt)("p",null,"In our case, the dataframe will be the remaining part:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#2\\n\n&1\\n\n+3\\n\nbar\\n\n")),(0,i.kt)("p",null,"We know that we need to read the boilerplate for the dataframe that is again two lines or parts separated by LF\nchars. So, we read in the sizeline. "),(0,i.kt)("p",null,"To read the sizeline, we just read upto the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")," character and then ignore the ",(0,i.kt)("inlineCode",{parentName:"p"},"LF"),". This leaves us with ",(0,i.kt)("inlineCode",{parentName:"p"},"#2"),".\nAgain, just like queries, this means that the next line will have 2 chars excluding the LF. Great!\nSo, we read the first 2 chars and ignore the linefeed. In our case,\nthis is ",(0,i.kt)("inlineCode",{parentName:"p"},"&1"),". This tells us that there is going to be a datagroup with one element."),(0,i.kt)("h5",{id:"the-data"},"The data"),(0,i.kt)("p",null,"In our case, the data is made of the remaining part:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+3\\n\nbar\\n\n")),(0,i.kt)("p",null,"So, we read the sizeline again. This sizeline begins with a ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),". This is obvious because sizelines\nbegin with ",(0,i.kt)("inlineCode",{parentName:"p"},"<tsymbol>"),"s in the case of the data in response dataframes.\nSo, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"+3")," (ignoring the LF). From the ",(0,i.kt)("a",{parentName:"p",href:"data-types"},"data type list"),", we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," indicates a string\nin the following line. Good! And the ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," tells us that the next line is 3 chars long, excluding the linefeed!"),(0,i.kt)("p",null,"So, in other words, we have a 3 character long string in the next line.\nNow let's read in 3 characters and ignore the linefeed. Hey, we have a 3 char string 'bar'."),(0,i.kt)("p",null,"So, our response becomes (in pseudocode data-structure):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'SimpleResponse {\n    datagroup: [String("bar")]\n}\n')),(0,i.kt)("p",null,"If we ran ",(0,i.kt)("inlineCode",{parentName:"p"},"MGET x y z"),", and x and y existed with values ",(0,i.kt)("inlineCode",{parentName:"p"},"ex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"why")," and z didn't exist, we'd have three\nelements in the datagroup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'SimpleResponse {\n    datagroup: [String("ex"), String("why"), RespCode(1)]\n}\n')),(0,i.kt)("p",null,"Phew, we're done!"))}m.isMDXComponent=!0}}]);