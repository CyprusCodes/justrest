"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8423],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),f=o,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||a;return r?n.createElement(d,u(u({ref:t},c),{},{components:r})):n.createElement(d,u({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return y}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],l={id:"query-generator",title:"Query Generator",sidebar_label:"Query Generator"},i="Generating a *Query*",s={unversionedId:"query-generator",id:"query-generator",isDocsHomePage:!1,title:"Query Generator",description:"One of the advantages of using XEST framework is that you can generate your queries from your command line with;",source:"@site/docs/query-generator.md",sourceDirName:".",slug:"/query-generator",permalink:"/docs/query-generator",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/query-generator.md",tags:[],version:"current",frontMatter:{id:"query-generator",title:"Query Generator",sidebar_label:"Query Generator"},sidebar:"docs",previous:{title:"Refreshing the Database",permalink:"/docs/refresh"},next:{title:"Seed Generator",permalink:"/docs/seed-generator"}},c=[],p={toc:c};function y(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generating-a-query"},"Generating a ",(0,a.kt)("em",{parentName:"h1"},"Query")),(0,a.kt)("p",null,"One of the advantages of using ",(0,a.kt)("strong",{parentName:"p"},"XEST")," framework is that you can generate your queries from your command line with;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ xx new\n")),(0,a.kt)("p",null,"This will ask the user several questions like a survey user is able to answer 1 question every time to form their query."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u2753 What would you like to generate? (Use arrow keys)"),(0,a.kt)("p",null,"\u25b6\ufe0f query"),(0,a.kt)("p",null,"\u25b6\ufe0f migrations"),(0,a.kt)("p",null,"\u25b6\ufe0f seed"),(0,a.kt)("p",null,"You can choose which one you would like to generate with arrows, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),", which will ask the following question;"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u2753 Choose directory to create a new query file"),(0,a.kt)("p",null,"\u25b6\ufe0f database"),(0,a.kt)("p",null,"\u25b6\ufe0f src"),(0,a.kt)("p",null,"\u25b6\ufe0f test"),(0,a.kt)("p",null,"Asking which directory, folder you want to build your ",(0,a.kt)("strong",{parentName:"p"},"query"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After choosing the directory, then you need to choose the operation type;"),(0,a.kt)("p",null,"\u2753 What type of operation will this query perform?"),(0,a.kt)("p",null,"\u25b6\ufe0f SELECT"),(0,a.kt)("p",null,"\u25b6\ufe0f INSERT"),(0,a.kt)("p",null,"\u25b6\ufe0f UPDATE"),(0,a.kt)("p",null,"\u25b6\ufe0f DELETE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After choosing the type of the operation you need to choose the table that this operation will take on;"),(0,a.kt)("p",null,"\u2753 Select a table"),(0,a.kt)("p",null,"\u25b6\ufe0f migrations"),(0,a.kt)("p",null,"\u25b6\ufe0f users"),(0,a.kt)("p",null,"\u25b6\ufe0f user_types"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Choosing the table lets you decide to select which columns you want to involve in this query, and select the columns to filter."),(0,a.kt)("p",null,"\u2753 What is the name of entity queried?"),(0,a.kt)("p",null,"\u25b6\ufe0f Default: user_types"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2714\ufe0f And DONE! Your query has been successfully created.")))}y.isMDXComponent=!0}}]);