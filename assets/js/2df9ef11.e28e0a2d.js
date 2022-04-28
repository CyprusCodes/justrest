"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6284],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8230:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"CRUD",title:"CRUD Operations with Xest",sidebar_label:"CRUD"},c=void 0,s={unversionedId:"CRUD",id:"CRUD",isDocsHomePage:!1,title:"CRUD Operations with Xest",description:"Crud Operations",source:"@site/docs/CRUD.md",sourceDirName:".",slug:"/CRUD",permalink:"/docs/CRUD",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/CRUD.md",tags:[],version:"current",frontMatter:{id:"CRUD",title:"CRUD Operations with Xest",sidebar_label:"CRUD"},sidebar:"docs",previous:{title:"Routing",permalink:"/docs/routing"},next:{title:"Docker",permalink:"/docs/docker"}},p=[{value:"Crud Operations",id:"crud-operations",children:[{value:"File Structure",id:"file-structure",children:[],level:3},{value:"Create",id:"create",children:[],level:3},{value:"Read",id:"read",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"crud-operations"},"Crud Operations"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://minio.cypruscodes.com/beckend-new-chapter/13.png",alt:"alt_text",title:"crud"})),(0,a.kt)("h3",{id:"file-structure"},"File Structure"),(0,a.kt)("p",null,"The pattern of Xest file structure is actions > controllers > routes.js, it's much easier to understand and apply to any web application.\nWith this convention,several developers can simultaneously work on the application."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder, you will see ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," folders. In the app folder, you will have controller functions, which can be assumed as the brain of the software."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action"),": Where all the action takes place to talk to the database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Controller"),": The brains of the application that controls how data is displayed. Controllers are responsible for handling incoming requests and returning responses to the client."),(0,a.kt)("p",null,"A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions."),(0,a.kt)("p",null,"The controller is a UI-level abstraction. Its responsibilities are to ensure request data is valid and be able to choose which result for an API should be returned."),(0,a.kt)("p",null,"Controller activities may be summarized as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gathering input"),(0,a.kt)("li",{parentName:"ul"},"Executing the request-related action method"),(0,a.kt)("li",{parentName:"ul"},"Preparing view data/response"),(0,a.kt)("li",{parentName:"ul"},"Handling Error")),(0,a.kt)("p",null,"In well-factored apps, it doesn't directly include data access or business logic. Instead, the controller delegates to services handling these responsibilities."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," folder inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," is where you can talk to the database, so it\u2019s where the actions take place."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://minio.cypruscodes.com/beckend-new-chapter/1.png",alt:"alt_text",title:"crud"})),(0,a.kt)("h3",{id:"create"},"Create"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("em",{parentName:"p"},"create")," something within the API e.g user, you need to use ",(0,a.kt)("em",{parentName:"p"},"post")," for controller, ",(0,a.kt)("em",{parentName:"p"},"create")," for actions, and ",(0,a.kt)("em",{parentName:"p"},"insert")," for the query function."),(0,a.kt)("h3",{id:"read"},"Read"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("em",{parentName:"p"},"read")," something within the API e.g user, you need to use ",(0,a.kt)("em",{parentName:"p"},"get")," for controller, ",(0,a.kt)("em",{parentName:"p"},"fetch")," for actions, and ",(0,a.kt)("em",{parentName:"p"},"select")," for the query function."),(0,a.kt)("h3",{id:"update"},"Update"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("em",{parentName:"p"},"update")," something within the API e.g user, you need to use ",(0,a.kt)("em",{parentName:"p"},"put")," for controller, ",(0,a.kt)("em",{parentName:"p"},"modify")," for actions, and ",(0,a.kt)("em",{parentName:"p"},"update")," for the query function."),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("em",{parentName:"p"},"delete")," something within the API e.g user, you need to use ",(0,a.kt)("em",{parentName:"p"},"delete")," for controller, ",(0,a.kt)("em",{parentName:"p"},"remove")," for actions, and ",(0,a.kt)("em",{parentName:"p"},"delete")," for the query function."))}d.isMDXComponent=!0}}]);