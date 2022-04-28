"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8278],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=r,b=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(b,l(l({ref:e},p),{},{components:n})):a.createElement(b,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{Z:function(){return r},b:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return o},Z:function(){return l}});var a=n(2263),r=n(3919);function o(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,i=void 0!==l&&l,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return e+n;var p=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+p:p}(o,n,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},1369:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"context-menu",title:"Context menu"},u=void 0,c={unversionedId:"api/context-menu",id:"api/context-menu",isDocsHomePage:!1,title:"Context menu",description:"Awe engine allows define context menu inside a grid, criterias or charts. With these menus, you can add functionality to your window.",source:"@site/docs/api/context-menu.md",sourceDirName:"api",slug:"/api/context-menu",permalink:"/docs/api/context-menu",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/api/context-menu.md",tags:[],version:"current",frontMatter:{id:"context-menu",title:"Context menu"},sidebar:"screens",previous:{title:"Pivot Table",permalink:"/docs/api/pivot-table"},next:{title:"Messages",permalink:"/docs/api/messages"}},p=[{value:"Xml structure",id:"xml-structure",children:[],level:2},{value:"Context menu elements",id:"context-menu-elements",children:[{value:"Context button attributes",id:"context-button-attributes",children:[],level:3},{value:"Button action attributes",id:"button-action-attributes",children:[],level:3},{value:"Context separator attributes",id:"context-separator-attributes",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function s(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Awe engine allows define context menu inside a grid, criterias or charts. With these menus, you can add functionality to your window."),(0,o.kt)("img",{alt:"GridContextMenu",src:n(4996).Z("img/GridContextMenu.png")}),(0,o.kt)("h2",{id:"xml-structure"},"Xml structure"),(0,o.kt)("p",null,"The xml structure of context menus is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<context-button id="[Id]" label="[label]" icon=[icon]">\n  <context-button id="[Id]"  label="[label]" icon=[icon]>\n    <button-action type="[action-type]" target="[target]" silent="[silent]" />\n  </context-button>\n    <context-button id="[Id]"  label="[label]" icon=[icon]>\n      <button-action type="[action-type]" target="[target]" silent="[silent]" />\n    </context-button>\n    <context-separator/>\n    <context-button id="[Id]"  label="[label]" icon=[icon]>\n      <button-action type="[action-type]" target="[target]" silent="[silent]" />\n      ... more button actions\n    </context-button>\n    <dependencies/>\n    .. more context-button\n    .. more context-separator\n  </context-button>\n  .. more context-button\n  .. more context-separator\n</context-button>\n')),(0,o.kt)("h2",{id:"context-menu-elements"},"Context menu elements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Element"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"),(0,o.kt)("th",{parentName:"tr",align:null},"Multiples instances"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#context-button-attributes"},"context-button")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Context button element of the menu. Defines one element of the context menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#button-action-attributes"},"button-action")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Action of the context button. You can define a list of button actions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#context-separator-attributes"},"context-separator")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Separator line of context button list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/dependencies"},"dependency")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"List of dependencies attached to the button")))),(0,o.kt)("h3",{id:"context-button-attributes"},"Context button attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Context button identifier"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"label")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Label of the context button."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Note:")," You can use ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/i18n-internationalization"},"i18n")," files (locales)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Icon name of the context button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Note:")," You can check all iconset at ",(0,o.kt)("a",{parentName:"td",href:"http://fontawesome.io/icons/"},"FontAwesome"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The context button has the same attributes as button element. You can see more info ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/button#button-attributes"},"here"))),(0,o.kt)("h3",{id:"button-action-attributes"},"Button action attributes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can see all attributes of ",(0,o.kt)("inlineCode",{parentName:"p"},"button-action ")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/button#button-actions"},"here"))),(0,o.kt)("h3",{id:"context-separator-attributes"},"Context separator attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Context separator identifier"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Context menu inside a grid")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<grid id="GrdSta" style="expand" initial-load="query" server-action="data" target-action="QryUniTst" max="30">\n  <column label="PARAMETER_TEXT" name="Als" sort-field="Als" align="left" charlength="20" style="separator" />\n  <group-header name="GrpHeaCol" label="PARAMETER_TEXT">\n    <column label="PARAMETER_TEXT" name="Des" sort-field="Des" align="left" charlength="40" />\n    <column label="PARAMETER_TEXT" name="Prg" sort-field="Prg" align="center" charlength="40" \n            component="progress" value="50" server-action="data" target-action="QryChkPrg" />\n  </group-header>\n  <context-button id="CtxGrdStaAdd" label="BUTTON_NEW" icon="plus-circle" >\n    <button-action type="screen" target="matrix_test" />\n    <dependency target-type="show" initial="true">\n      <dependency-element id="GrdSta" column="Als" attribute="selectedRowValue" condition="!=" value="awemadora02" />\n      <dependency-element id="GrdSta" event="select-row" />\n    </dependency>\n  </context-button>\n  <context-button id="CtxGrdStaDel" label="BUTTON_DELETE" icon="trash">\n    <button-action type="screen" target="matrix_test" />\n    <dependency target-type="show" initial="true">\n      <dependency-element id="GrdSta" column="Als" attribute="selectedRowValue" condition="==" value="awemadora02" />\n      <dependency-element id="GrdSta" event="select-row" />\n    </dependency>\n  </context-button>\n</grid>\n')))}s.isMDXComponent=!0}}]);