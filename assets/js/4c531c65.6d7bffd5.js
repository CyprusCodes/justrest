"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1878],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3021:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"use-mysql",title:"Uses MySQL",sidebar_label:"Uses MySQL"},c=void 0,l={unversionedId:"use-mysql",id:"use-mysql",isDocsHomePage:!1,title:"Uses MySQL",description:"Uses of MySQL with Xest",source:"@site/docs/use-mysql.md",sourceDirName:".",slug:"/use-mysql",permalink:"/docs/use-mysql",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/use-mysql.md",tags:[],version:"current",frontMatter:{id:"use-mysql",title:"Uses MySQL",sidebar_label:"Uses MySQL"},sidebar:"docs",previous:{title:"Seed Generator",permalink:"/docs/seed-generator"},next:{title:"Database Schema File",permalink:"/docs/database-schema-file"}},u=[{value:"Uses of MySQL with Xest",id:"uses-of-mysql-with-xest",children:[],level:3},{value:"Set up a new connection with MySQL Workbench",id:"set-up-a-new-connection-with-mysql-workbench",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"uses-of-mysql-with-xest"},"Uses of MySQL with Xest"),(0,a.kt)("p",null,"In this framework docker runs MySQL server in a container, when the following command is run on your terminal/command line interface;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ xx run\n")),(0,a.kt)("h2",{id:"set-up-a-new-connection-with-mysql-workbench"},"Set up a new connection with MySQL Workbench"),(0,a.kt)("p",null,"If you want to manage, design, alter your database data you can set up a connection with Workbench, in which the details you need are stored under ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. All the necessary information that you need to create the connection between your project and MYSQL Workbench is given within this file."),(0,a.kt)("p",null,"In order to write and read data from a table, that table needs to exist. Luckily ",(0,a.kt)("strong",{parentName:"p"},"Xest")," framework already have a script that connects to our database server before our app runs."))}d.isMDXComponent=!0}}]);