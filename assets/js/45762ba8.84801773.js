"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3520],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(k,o(o({ref:e},d),{},{components:r})):n.createElement(k,o({ref:e},d))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8555:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={id:"errors",title:"Error Strings",hide_table_of_contents:!0},o=void 0,i={unversionedId:"protocol/errors",id:"version-0.7.4/protocol/errors",title:"Error Strings",description:"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings.",source:"@site/versioned_docs/version-0.7.4/protocol/errors.md",sourceDirName:"protocol",slug:"/protocol/errors",permalink:"/0.7.4/protocol/errors",draft:!1,tags:[],version:"0.7.4",frontMatter:{id:"errors",title:"Error Strings",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Response Codes",permalink:"/0.7.4/protocol/response-codes"}},s={},p=[{value:"Table of errors",id:"table-of-errors",level:2}],d={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In certain situations, the server may return error strings (also known as other errors), instead of the standard response codes. This table is an index of such error strings."),(0,a.kt)("h2",{id:"table-of-errors"},"Table of errors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error String"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unknown action"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"../actions-overview"},"action")," is not known by the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-snapshot-busy"),(0,a.kt)("td",{parentName:"tr",align:null},"A snapshot operation is already in progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-snapshot-disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Snapshots have been disabled on the server-side")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-invalid-snapshot-name"),(0,a.kt)("td",{parentName:"tr",align:null},"The supplied snapshot name has invalid chars")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"default-container-unset"),(0,a.kt)("td",{parentName:"tr",align:null},"The connection level table/keyspace was not set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"container-not-found"),(0,a.kt)("td",{parentName:"tr",align:null},"The keyspace/table was not found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"still-in-use"),(0,a.kt)("td",{parentName:"tr",align:null},"The object couldn't be removed because it is still in use")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-protected-object"),(0,a.kt)("td",{parentName:"tr",align:null},"The object is not user accessible")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wrong-model"),(0,a.kt)("td",{parentName:"tr",align:null},"An action was run against the wrong data model")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-already-exists"),(0,a.kt)("td",{parentName:"tr",align:null},"The table/keyspace already exists")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"not-ready"),(0,a.kt)("td",{parentName:"tr",align:null},"The table/keyspace is not ready")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transactional-failure"),(0,a.kt)("td",{parentName:"tr",align:null},"A transactional action failed to execute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unknown-ddl-query"),(0,a.kt)("td",{parentName:"tr",align:null},"An unknown DDL query was run")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"malformed-expression"),(0,a.kt)("td",{parentName:"tr",align:null},"The expression in a DDL query was illegal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unknown-model"),(0,a.kt)("td",{parentName:"tr",align:null},"A DDL query was run to create a table of an unknown model")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"too-many-args"),(0,a.kt)("td",{parentName:"tr",align:null},"More args than required was passed to a DDL query")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"container-name-too-long"),(0,a.kt)("td",{parentName:"tr",align:null},"The container name was too long")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bad-container-name"),(0,a.kt)("td",{parentName:"tr",align:null},"The supplied container name has illegal chars")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unknown-inspect-query"),(0,a.kt)("td",{parentName:"tr",align:null},"An unknown ",(0,a.kt)("inlineCode",{parentName:"td"},"INSPECT")," query")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unknown-property"),(0,a.kt)("td",{parentName:"tr",align:null},"An unknown table property was passed to ",(0,a.kt)("inlineCode",{parentName:"td"},"CREATE TABLE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keyspace-not-empty"),(0,a.kt)("td",{parentName:"tr",align:null},"The keyspace couldn't be removed because it still has tables")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline-not-supported-yet"),(0,a.kt)("td",{parentName:"tr",align:null},"Pipelining is not supported in this server version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-auth-disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Authn/authz is not enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-auth-already-claimed"),(0,a.kt)("td",{parentName:"tr",align:null},"The username has already been created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-auth-illegal-username"),(0,a.kt)("td",{parentName:"tr",align:null},"The username is too long or has invalid characters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"err-auth-deluser-fail"),(0,a.kt)("td",{parentName:"tr",align:null},"The user cannot be removed")))))}u.isMDXComponent=!0}}]);