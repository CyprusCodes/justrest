"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4876:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"routing",title:"Routing",sidebar_label:"Routing"},l=void 0,s={unversionedId:"routing",id:"routing",isDocsHomePage:!1,title:"Routing",description:"Routing refers to how an application\u2019s endpoints (URIs) respond to client requests.",source:"@site/docs/routing.md",sourceDirName:".",slug:"/routing",permalink:"/docs/routing",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/routing.md",tags:[],version:"current",frontMatter:{id:"routing",title:"Routing",sidebar_label:"Routing"},sidebar:"docs",previous:{title:"Installation - Ubuntu",permalink:"/docs/installation-ubuntu"},next:{title:"CRUD",permalink:"/docs/CRUD"}},c=[{value:"Common Routing Methods",id:"common-routing-methods",children:[],level:3}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Routing refers to how an application\u2019s endpoints (URIs) respond to client requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\u2514\u2500\u2500 src\n \u2514\u2500\u2500 routes.js\n")),(0,i.kt)("p",null,"You define routing using methods that correspond to HTTP methods; for example, route.get() to handle GET requests and route.post to handle POST requests."),(0,i.kt)("p",null,"You will be creating your endpoints according to your business logic in this file. You should define endpoints so that users can use them to operate CRUD actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"router.METHOD(PATH, HANDLER)\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"router is an instance of Expressjs framework."),(0,i.kt)("li",{parentName:"ul"},"METHOD is an HTTP request method, in lowercase."),(0,i.kt)("li",{parentName:"ul"},"PATH is the path for the endpoint."),(0,i.kt)("li",{parentName:"ul"},"HANDLER is the function executed when the route is matched.")),(0,i.kt)("p",null,"Now let's have a look at the example below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'router.get("/user-types", getUserTypes);\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/user-types")," is the route extension of the URL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getUserTypes")," is the function that does the job to get the user types."),(0,i.kt)("p",null,"These routing methods specify a callback function (sometimes called \u201chandler functions\u201d) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application \u201clistens\u201d for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function."),(0,i.kt)("h3",{id:"common-routing-methods"},"Common Routing Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"router.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"router.post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"router.put")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"router.patch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"router.delete"))),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/routing.html"},"routing section on ExpressJS documentation")," to learn more about how to configure your API endpoints."))}d.isMDXComponent=!0}}]);