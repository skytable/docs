"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30287],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,u=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"examples",title:"Examples"},l=void 0,s={unversionedId:"examples",id:"version-0.7.3/examples",title:"Examples",description:"DDL",source:"@site/versioned_docs/version-0.7.3/5b.examples.md",sourceDirName:".",slug:"/examples",permalink:"/0.7.3/examples",draft:!1,tags:[],version:"0.7.3",frontMatter:{id:"examples",title:"Examples"},sidebar:"docs",previous:{title:"DDL",permalink:"/0.7.3/ddl"},next:{title:"Index of actions",permalink:"/0.7.3/all-actions"}},i={},p=[{value:"DDL",id:"ddl",level:2},{value:"Lists",id:"lists",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ddl"},"DDL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'cats' in a keyspace 'animals'. The cat's name will be the key\nwhich as an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," value while the value would be the cat's image in a binary format, so it'll be\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr")," type."),(0,r.kt)("p",{parentName:"li"},"a. Let's create the keyspace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE animals\n")),(0,r.kt)("p",{parentName:"li"},"b. Let's create the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE animals:cat keymap(str,binstr)\n")),(0,r.kt)("p",{parentName:"li"},"c. Let's switch to the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"d. Let's inspect it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT TABLE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"e. Let's drop the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE animals:cat\n")),(0,r.kt)("p",{parentName:"li"},"f. Let's drop the keyspace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE animals\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'favorites' in the 'default' keyspace. This will store a favorite\nname, an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," and an URL, also an ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE favorites keymap(str,str)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a keymap table called 'cache' in the 'default' keyspace that is volatile. Our cache key is an ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," while the value would be some binary data, so ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE cache keymap(str,binstr) volatile\n")))),(0,r.kt)("h2",{id:"lists"},"Lists"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a table called 'notes' in the default keyspace. We'll have usernames linked to a collection\nof notes made by them. Since the names are unicode values, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," type for the key.\nFor the data type, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," type, with the inner type as ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," since the notes will also\nhave unicode characters (like emojis, for example). If we needed to store binary data within the\nlists, we'd simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"binstr")," data type instead."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE notes keymap(str,list<str>)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let's switch to the table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use default:notes\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's add some notes made by our theoretical user ",(0,r.kt)("inlineCode",{parentName:"p"},"joe"),". This is how it goes (",(0,r.kt)("inlineCode",{parentName:"p"},"#")," signs were simply\nadded for explanations, simply ignore them):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'# create an empty list\nLSET sayan\n# now append some notes\nLMOD sayan PUSH "Just woke up. Jotting down today\'s first note!"\nLMOD sayan PUSH "Heading to the subway; gotta get to work fast!"\nLMOD sayan PUSH "Funny that someone broke my chair! Just called someone to get it fixed!"\nLMOD sayan PUSH "Brrr...on my work machine. See you later!"\nLMOD sayan PUSH "Done with work, now heading home!"\nLMOD sayan PUSH "Woot, I\'m home. What a hectic day!"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's read all the notes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LGET sayan\n")),(0,r.kt)("p",{parentName:"li"},"This would have printed out all the notes if we were using the command-line client, like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(1) "Just woke up. Jotting down today\'s first note!"\n(2) "Heading to the subway; gotta get to work fast!"\n(3) "Funny that someone broke my chair! Just called someone to get it fixed!"\n(4) "Brrr...on my work machine. See you later!"\n(5) "Done with work, now heading home!"\n(6) "Woot, I\'m home. What a hectic day!"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's read a maximum of 5 notes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LGET sayan LIMIT 5\n")),(0,r.kt)("p",{parentName:"li"},"This would output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(1) "Just woke up. Jotting down today\'s first note!"\n(2) "Heading to the subway; gotta get to work fast!"\n(3) "Funny that someone broke my chair! Just called someone to get it fixed!"\n(4) "Brrr...on my work machine. See you later!"\n(5) "Done with work, now heading home!"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Now let\'s remove the "broken chair" note because it turns out that I actually had the wrong chair!'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LMOD sayan REMOVE 2\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Remember that array indexes start at 0? Duh!")),(0,r.kt)("p",{parentName:"li"},"Let's see what we have with ",(0,r.kt)("inlineCode",{parentName:"p"},"LGET sayan"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(1) "Just woke up. Jotting down today\'s first note!"\n(2) "Heading to the subway; gotta get to work fast!"\n(3) "Brrr...on my work machine. See you later!"\n(4) "Done with work, now heading home!"\n(5) "Woot, I\'m home. What a hectic day!"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait, I forgot about something! Someone left a mysterious letter on my desk. I discovered it as soon\nas I entered my workplace. Let's insert that:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LMOD sayan INSERT 2 "Just discovered a mysterious letter on my desk! How cool!"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's get our entire bunch of notes now:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LGET sayan\n")),(0,r.kt)("p",{parentName:"li"},"This would output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(1) "Just woke up. Jotting down today\'s first note!"\n(2) "Heading to the subway; gotta get to work fast!"\n(3) "Just discovered a mysterious letter on my desk! How cool!"\n(4) "Brrr...on my work machine. See you later!"\n(5) "Done with work, now heading home!"\n(6) "Woot, I\'m home. What a hectic day!"\n')))))}c.isMDXComponent=!0}}]);