"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39349],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38748:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"errors",title:"Error Strings",hide_table_of_contents:!0},s=void 0,p={unversionedId:"protocol/errors",id:"version-0.7.1/protocol/errors",isDocsHomePage:!1,title:"Error Strings",description:"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings.",source:"@site/versioned_docs/version-0.7.1/protocol/errors.md",sourceDirName:"protocol",slug:"/protocol/errors",permalink:"/protocol/errors",tags:[],version:"0.7.1",frontMatter:{id:"errors",title:"Error Strings",hide_table_of_contents:!0},sidebar:"version-0.7.1/docs",previous:{title:"Response Codes",permalink:"/protocol/response-codes"}},d=[{value:"Table of errors",id:"table-of-errors",children:[]}],u={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings."),(0,o.kt)("h2",{id:"table-of-errors"},"Table of errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error String"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Unknown action"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"../actions-overview"},"action")," is not known by the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-snapshot-busy"),(0,o.kt)("td",{parentName:"tr",align:null},"A snapshot operation is already in progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-snapshot-disabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Snapshots have been disabled on the server-side")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-invalid-snapshot-name"),(0,o.kt)("td",{parentName:"tr",align:null},"The supplied snapshot name has invalid chars")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"default-container-unset"),(0,o.kt)("td",{parentName:"tr",align:null},"The connection level table/keyspace was not set")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"container-not-found"),(0,o.kt)("td",{parentName:"tr",align:null},"The keyspace/table was not found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"still-in-use"),(0,o.kt)("td",{parentName:"tr",align:null},"The object couldn't be removed because it is still in use")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-protected-object"),(0,o.kt)("td",{parentName:"tr",align:null},"The object is not user accessible")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wrong-model"),(0,o.kt)("td",{parentName:"tr",align:null},"An action was run against the wrong data model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"err-already-exists"),(0,o.kt)("td",{parentName:"tr",align:null},"The table/keyspace already exists")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"not-ready"),(0,o.kt)("td",{parentName:"tr",align:null},"The table/keyspace is not ready")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transactional-failure"),(0,o.kt)("td",{parentName:"tr",align:null},"A transactional action failed to execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unknown-ddl-query"),(0,o.kt)("td",{parentName:"tr",align:null},"An unknown DDL query was run")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"malformed-expression"),(0,o.kt)("td",{parentName:"tr",align:null},"The expression in a DDL query was illegal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unknown-model"),(0,o.kt)("td",{parentName:"tr",align:null},"A DDL query was run to create a table of an unknown model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"too-many-args"),(0,o.kt)("td",{parentName:"tr",align:null},"More args than required was passed to a DDL query")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"container-name-too-long"),(0,o.kt)("td",{parentName:"tr",align:null},"The container name was too long")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bad-container-name"),(0,o.kt)("td",{parentName:"tr",align:null},"The supplied container name has illegal chars")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unknown-inspect-query"),(0,o.kt)("td",{parentName:"tr",align:null},"An unknown ",(0,o.kt)("inlineCode",{parentName:"td"},"INSPECT")," query")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unknown-property"),(0,o.kt)("td",{parentName:"tr",align:null},"An unknown table property was passed to ",(0,o.kt)("inlineCode",{parentName:"td"},"CREATE TABLE"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyspace-not-empty"),(0,o.kt)("td",{parentName:"tr",align:null},"The keyspace couldn't be removed because it still has tables")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pipeline-not-supported-yet"),(0,o.kt)("td",{parentName:"tr",align:null},"Pipelining is not supported in this server version")))))}c.isMDXComponent=!0}}]);