"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2902],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=o(n),k=r,N=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{Z:function(){return r},b:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(2263),r=n(3919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,i=l.forcePrependBaseUrl,p=void 0!==i&&i,s=l.absolute,o=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(p)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+u:u}(l,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},8462:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={id:"rest",title:"Rest API Module",sidebar_label:"Rest API Module"},s=void 0,o={unversionedId:"rest",id:"rest",isDocsHomePage:!1,title:"Rest API Module",description:'What\'s a REST api? REST stands for Representational State Transfer. (It is sometimes spelled "REST".) It',source:"@site/docs/rest-module.md",sourceDirName:".",slug:"/rest",permalink:"/docs/rest",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/rest-module.md",tags:[],version:"current",frontMatter:{id:"rest",title:"Rest API Module",sidebar_label:"Rest API Module"}},u=[{value:"<strong>AWE Rest configuration properties</strong>",id:"awe-rest-configuration-properties",children:[],level:2},{value:"<strong>Services</strong>",id:"services",children:[{value:"<strong>Authenticate service</strong>",id:"authenticate-service",children:[],level:3},{value:"<strong>Query service</strong>",id:"query-service",children:[],level:3},{value:"<strong>Maintain service</strong>",id:"maintain-service",children:[],level:3}],level:2},{value:"<strong>Client API Rest examples</strong>",id:"client-api-rest-examples",children:[],level:2}],m={toc:u};function d(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"What's a REST api? REST stands for ",(0,l.kt)("strong",{parentName:"p"},"Re"),"presentational ",(0,l.kt)("strong",{parentName:"p"},"S"),"tate ",(0,l.kt)("strong",{parentName:"p"},"T"),'ransfer. (It is sometimes spelled "REST".) It\nrelies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol\nis used.'),(0,l.kt)("p",null,"REST is an architecture style for designing networked applications. The idea is that, rather than using complex\nmechanisms such as CORBA, RPC or SOAP to connect between machines, simple HTTP is used to make calls between machines."),(0,l.kt)("p",null,"Much like Web Services, a REST service is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Platform-independent (you don't care if the server is Unix, the client is a Mac, or anything else)"),(0,l.kt)("li",{parentName:"ul"},"Language-independent (C# can talk to Java, etc.)"),(0,l.kt)("li",{parentName:"ul"},"Standards-based (runs on top of HTTP)"),(0,l.kt)("li",{parentName:"ul"},"Can easily be used in the presence of firewalls")),(0,l.kt)("p",null,"To activate this module, follow this steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("strong",{parentName:"li"},"awe-rest dependencies")," to pom.xml descriptor.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n...\n  <dependency>\n    <groupId>com.almis.awe</groupId>\n    <artifactId>awe-rest-spring-boot-starter</artifactId>\n  </dependency>\n...\n</dependencies>\n")),(0,l.kt)("img",{alt:"AWE Rest",src:n(4996).Z("img/AWE_Rest.png")}),(0,l.kt)("h2",{id:"awe-rest-configuration-properties"},(0,l.kt)("strong",{parentName:"h2"},"AWE Rest configuration properties")),(0,l.kt)("p",null,"This module provides the following properties to overwrite the ",(0,l.kt)("inlineCode",{parentName:"p"},"awe-rest-spring-boot-starter")," starter:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awe.rest.jwt.authorization-header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Authorization")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication header name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awe.rest.jwt.jwt-prefix"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JWT token prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awe.rest.jwt.jwt-secret"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"${security.master.key}")," security property"),(0,l.kt)("td",{parentName:"tr",align:null},"JWT secret password for sign token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awe.rest.jwt.jwt-issuer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AWE ISSUER")),(0,l.kt)("td",{parentName:"tr",align:null},"JWT issuer name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awe.rest.jwt.jwt-expiration-time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60m")),(0,l.kt)("td",{parentName:"tr",align:null},"JWT time valid token to expire")))),(0,l.kt)("h2",{id:"services"},(0,l.kt)("strong",{parentName:"h2"},"Services")),(0,l.kt)("p",null,"In this time AWE rest API has three services: ",(0,l.kt)("inlineCode",{parentName:"p"},"AUTHENTICATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"QUERY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MAINTAIN")," group by ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected API")," (if it\nrequires authentication) and ",(0,l.kt)("inlineCode",{parentName:"p"},"Public API")," (if the queries or maintenance are public and do not require authentication)."),(0,l.kt)("p",null,"AWE REST module, uses ",(0,l.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," (Json Web Token) as authentication method"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Complete ",(0,l.kt)("em",{parentName:"h5"},"swagger")," documentation of awe rest services is")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"available ",(0,l.kt)("a",{parentName:"p",href:"http://staging.aweframework.com/swagger-ui/"},"here"),"."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Path"),(0,l.kt)("th",{parentName:"tr",align:null},"Require authentication"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authenticate-service"},"authenticate")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/authenticate")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to authentication. Provide a JWT token to set as http header (Default value ",(0,l.kt)("inlineCode",{parentName:"td"},"Authorization"),") in protected services")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query-service"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/data/{queryId}")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to launch the queries of web application. Return JSON with data query -  ",(0,l.kt)("strong",{parentName:"td"},"IMPORTANT:")," If the query is private (needs jwt token) first you have to call ",(0,l.kt)("inlineCode",{parentName:"td"},"/api/authenticate")," REST service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#maintain-service"},"maintain")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/maintain/{maintainId}")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to launch the maintains of web application. Return JSON with maintain result - ",(0,l.kt)("strong",{parentName:"td"},"IMPORTANT:")," If the maintain is private (needs jwt token) first you have to call ",(0,l.kt)("inlineCode",{parentName:"td"},"/api/authenticate")," REST service")))),(0,l.kt)("h3",{id:"authenticate-service"},(0,l.kt)("strong",{parentName:"h3"},"Authenticate service")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"authenticate")," service has the following ",(0,l.kt)("strong",{parentName:"p"},"inputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Query parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the user name to authenticate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ex.:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"test"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Query parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the user password to authenticate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ex.:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"test"))))),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"authenticate")," service has the following ",(0,l.kt)("strong",{parentName:"p"},"outputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutPut"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the user name for which the token has been generated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the jwt token. Used to authentication process. ",(0,l.kt)("strong",{parentName:"td"},"Note:")," If you want call ",(0,l.kt)("inlineCode",{parentName:"td"},"/api/data")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"/api/maintain")," rest api, you have to send this parameter as http header in the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the jwt issuer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiresAt"),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Expiration time of jwt token")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The output is in ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," format")),(0,l.kt)("p",null,"This is example of json output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expiresAt": "2021-04-26T16:16:18.000+00:00",\n  "issuer": "AWE issuer",\n  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaXNzIjoiQVdFIElTU1VFUiIsImV4cCI6MT",\n  "username": "foo"\n}\n')),(0,l.kt)("h3",{id:"query-service"},(0,l.kt)("strong",{parentName:"h3"},"Query service")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"data")," service has the following ",(0,l.kt)("strong",{parentName:"p"},"inputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI query parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"URI parameter to set the name of query in the request"),(0,l.kt)("td",{parentName:"tr",align:null},"Ex.: ",(0,l.kt)("inlineCode",{parentName:"td"},"UsrLst"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RequestParameter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Json object (body)"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter list of query in JSON format"),(0,l.kt)("td",{parentName:"tr",align:null},"Ex.: ",(0,l.kt)("inlineCode",{parentName:"td"},'{"parameters": {"parName1": "value1","parName2": "value2","parName3": ["valueList1","valueList2","valueList3"]}}'))))),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"data")," service has the following ",(0,l.kt)("strong",{parentName:"p"},"outputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutPut"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of operation ",(0,l.kt)("inlineCode",{parentName:"td"},"(ok, info, warning, error)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Title of response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Message response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataList"),(0,l.kt)("td",{parentName:"tr",align:null},"Json object"),(0,l.kt)("td",{parentName:"tr",align:null},"Data result  of query service")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The output is in ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," format")),(0,l.kt)("h3",{id:"maintain-service"},(0,l.kt)("strong",{parentName:"h3"},"Maintain service")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"maintain")," service as POST has the following ",(0,l.kt)("strong",{parentName:"p"},"inputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maintainId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI query parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"URI parameter to set the name of maintain in the request"),(0,l.kt)("td",{parentName:"tr",align:null},"Ex.: ",(0,l.kt)("inlineCode",{parentName:"td"},"UsrDel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RequestParameter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Json object (body)"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter list of query in JSON format"),(0,l.kt)("td",{parentName:"tr",align:null},"Ex.: ",(0,l.kt)("inlineCode",{parentName:"td"},'{"parameters": {"IdeOpe": 2} }'))))),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"maintain")," service has the following ",(0,l.kt)("strong",{parentName:"p"},"outputs"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OutPut"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of operation ",(0,l.kt)("inlineCode",{parentName:"td"},"(ok, info, warning, error)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Title of response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Message response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resultDetails"),(0,l.kt)("td",{parentName:"tr",align:null},"Json object"),(0,l.kt)("td",{parentName:"tr",align:null},"Maintain result details")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The output is in ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," format")),(0,l.kt)("h2",{id:"client-api-rest-examples"},(0,l.kt)("strong",{parentName:"h2"},"Client API Rest examples")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Login client example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Authenticate\n@Test\npublic void authenticateUser() {\n    // Init rest template\n    RestTemplate restTemplate = new RestTemplate();\n    HttpHeaders headers = new HttpHeaders();\n    // Build authenticate request\n    UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("http://localhost:8080/api/authenticate"))\n    .queryParam("username","test")\n    .queryParam("password","test");\n    HttpEntity<String> entity = new HttpEntity<>(headers);\n    ResponseEntity<LoginResponse> response = restTemplate.exchange(\n            builder.toUriString(),\n            HttpMethod.POST, \n            entity, \n            LoginResponse.class);\n    // LoginResponse has token info\n    ...\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Data client example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Data without parameters\n@Test\npublic void protectedQueryAuthorized() {\n    // Init rest template\n    RestTemplate restTemplate = new RestTemplate();\n    HttpHeaders headers = new HttpHeaders();\n    String queryId = "query";\n    \n    //Authenticate user (call /api/authenticate to get jwt token)\n    headers.add("Authorization", jwtToken);\n\n    HttpEntity<String> entity = new HttpEntity<>(headers);\n    \n    ResponseEntity<AweRestResponse> response = restTemplate.exchange("http://localhost:8080/api/data/" + queryId,\n        HttpMethod.POST,\n        entity,\n        AweRestResponse.class);\n        // AweRestResponse has response info\n        ...\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Data with parameters\n@Test\npublic void protectedQueryParametersAuthorized() {\n    // Init rest template\n    RestTemplate restTemplate = new RestTemplate();\n    HttpHeaders headers = new HttpHeaders();\n    String queryId = "query";\n    \n    //Authenticate user (call /api/authenticate to get jwt token)\n    headers.add("Authorization", jwtToken);\n\n    // Build parameters request\n    headers.setContentType(MediaType.APPLICATION_JSON);\n    RequestParameter parameters = new RequestParameter();\n    Map<String, Object> paramMap = new HashMap<>();\n    paramMap.put("param1", 1);\n    paramMap.put("param2", "value2");\n    paramMap.put("param3", Arrays.asList("value1", "value2"));\n    parameters.setParameters(paramMap);\n\n    HttpEntity<RequestParameter> entity = new HttpEntity<>(parameters, headers);     \n    ResponseEntity<AweRestResponse> response = restTemplate.exchange("http://localhost:8080/api/data/" + queryId,\n        HttpMethod.POST,\n        entity,\n        AweRestResponse.class);\n        // AweRestResponse has response info\n        ...\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Maintain client example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Maintain without parameters\n@Test\npublic void protectedMaintainAuthorized() {\n    // Init rest template\n    RestTemplate restTemplate = new RestTemplate();\n    HttpHeaders headers = new HttpHeaders();\n    String maintainId = "MAINTAIN";\n\n    //Authenticate user (call /api/authenticate to get jwt token)\n    headers.add("Authorization", jwtToken);\n\n    HttpEntity<String> entity = new HttpEntity<>(headers);\n\n    ResponseEntity<AweRestResponse> response = restTemplate.exchange("http://localhost:8080/api/maintain/" + maintainId,\n    HttpMethod.POST,\n    entity,\n    AweRestResponse.class);\n    // AweRestResponse has response of maintain result\n    ...\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Maintain with parameters\n@Test\npublic void protectedMaintainParametersAuthorized() {\n    // Init rest template\n    RestTemplate restTemplate = new RestTemplate();\n    HttpHeaders headers = new HttpHeaders();\n    String maintainId = "MAINTAIN";\n\n    // Build parameters request\n    headers.setContentType(MediaType.APPLICATION_JSON);\n    RequestParameter parameters = new RequestParameter();\n    Map<String, Object> paramMap = new HashMap<>();\n    paramMap.put("userId", 1);\n    parameters.setParameters(paramMap);\n\n    //Authenticate user (call /api/authenticate to get jwt token)\n    headers.add("Authorization", jwtToken);\n\n    HttpEntity<RequestParameter> entity = new HttpEntity<>(parameters, headers);\n    ResponseEntity<AweRestResponse> response = restTemplate.exchange("http://localhost:8080/api/maintain/" + maintainId,\n    HttpMethod.POST,\n    entity,\n    AweRestResponse.class);\n    // AweRestResponse has response of maintain result\n    ...\n}\n')))}d.isMDXComponent=!0}}]);