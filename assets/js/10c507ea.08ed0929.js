"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5322],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,m=s["".concat(d,".").concat(g)]||s[g]||p[g]||l;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{Z:function(){return r},b:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(2263),r=n(3919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,i=l.forcePrependBaseUrl,o=void 0!==i&&i,d=l.absolute,u=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+c:c}(l,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},2223:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"dialog",title:"Dialog"},d=void 0,u={unversionedId:"api/dialog",id:"api/dialog",isDocsHomePage:!1,title:"Dialog",description:'A dialog is a graphical item that provides the functionality of showing a modal window with a selected message and title (and an icon, if you want). A dialog should be associated to a button-action with type "dialog" (See button actions).',source:"@site/docs/api/dialog.md",sourceDirName:"api",slug:"/api/dialog",permalink:"/docs/api/dialog",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/api/dialog.md",tags:[],version:"current",frontMatter:{id:"dialog",title:"Dialog"},sidebar:"screens",previous:{title:"Include",permalink:"/docs/api/include"},next:{title:"Charts",permalink:"/docs/api/chart"}},c=[{value:"XML skeleton",id:"xml-skeleton",children:[],level:2},{value:"Dialog structure",id:"dialog-structure",children:[],level:2},{value:"Dialog attributes",id:"dialog-attributes",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Standard dialog with title, body and footer",id:"standard-dialog-with-title-body-and-footer",children:[],level:3},{value:"Standard dialog on a new screen",id:"standard-dialog-on-a-new-screen",children:[],level:3}],level:2}],p={toc:c};function s(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'A dialog is a graphical item that provides the functionality of showing a modal window with a selected message and title (and an icon, if you want). A dialog should be associated to a button-action with type "dialog" (See ',(0,l.kt)("a",{parentName:"p",href:"/docs/api/button#button-actions"},"button actions"),")."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"xml-skeleton"},"XML skeleton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<dialog id="[dialog-identifier]" label="[dialog-label]" icon="[dialog-icon]"\n  modal="[is-modal-screen]" style="[dialog-style]" help="[dialog-help]" on-close="[on-close]">\n  [define the content of the dialog]\n</dialog>\n')),(0,l.kt)("h2",{id:"dialog-structure"},"Dialog structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Multiples instances"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dialog-attributes"},"dialog")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Global node of dialog. Defines the dialog attributes")))),(0,l.kt)("h2",{id:"dialog-attributes"},"Dialog attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Dialog identifier. For reference purposes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Dialog title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Note:")," You can use ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/i18n-internationalization"},"i18n")," files (locales)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Icon identifier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Note:")," You can check all iconset at ",(0,l.kt)("a",{parentName:"td",href:"http://fontawesome.io/icons/"},"FontAwesome"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the screen (css classes)"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS classes separated by space (",(0,l.kt)("inlineCode",{parentName:"td"},"' '"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"help"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Help text you want to show"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a literal with the message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on-close"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Behaviour of the stack after closing the dialog"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"accept")," (default), ",(0,l.kt)("inlineCode",{parentName:"td"},"reject"),"- Reject cancels the stack, accept continues executing stack actions")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," You can add the styles ",(0,l.kt)("inlineCode",{parentName:"p"},"modal-lg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"modal-md")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"modal-sm")," to change the width of the dialog.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"standard-dialog-with-title-body-and-footer"},"Standard dialog with title, body and footer"),(0,l.kt)("p",null,"This is an example with a dialog defined inside a modal tag in a screen. First of all, the action related to the dialog (by target attribute)."),(0,l.kt)("img",{alt:"DialogImage",src:n(4996).Z("img/DialogImage.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'\n    <button id="SetContribution" button-type="submit" label="BUTTON_SET_CONTRIBUTION" icon="floppy-o">\n      <button-action type="filter" target="Resume" />\n      <button-action type="dialog" target="Summary" />\n    </button>\n\n    <dialog id="Summary" label="SCREEN_TEXT_SET_CONTRIBUTION" icon="info-circle">\n      <tag type="div" style="modal-body scrollable">\n        <tag-list type="div" id="Resume" initial-load="query" target-action="Resume">\n          <tag type="div" style="text-bg padding-sm">\n            <tag type="i" style="fa fa-arrow-right text-info fa-fw" />\n            <tag>\n              <text> [Value]</text>\n            </tag>\n          </tag>\n        </tag-list>\n      </tag>\n      <tag type="div" style="modal-footer">\n        <tag type="div" style="pull-right">\n          <button label="BUTTON_CANCEL" icon="close" id="ButDiaCan">\n            <button-action type="close" target="Summary" />\n          </button>\n          <button label="BUTTON_ACCEPT" icon="check" id="ButDiaVal" button-type="submit">\n            <button-action type="server" server-action="maintain" target-action="SetContribution" />\n            <button-action type="close" target="Summary" />\n          </button>\n        </tag>\n      </tag>\n    </dialog>\n')),(0,l.kt)("h3",{id:"standard-dialog-on-a-new-screen"},"Standard dialog on a new screen"),(0,l.kt)("p",null,"This example shows a dialog screen included in modal section of a window."),(0,l.kt)("img",{alt:"DialogImagePrint",src:n(4996).Z("img/DialogImagePrint.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'\n<button icon="print" label="BUTTON_PRINT" id="ButPrn" button-type="button">\n  <button-action type="validate"/>\n  <button-action type="dialog" target="PrnOpt"/>\n</button>\n\n<include target-screen="PrnOpt" target-source="center"/>\n\n<screen xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://aweframework.gitlab.io/awe/docs/schemas/screen.xsd" template="window">\n  <tag source="center">\n    <dialog id="PrnOpt" modal="true" style="normal" label="SCREEN_TEXT_PRINT_EMAIL" icon="print" help="HELP_SCREEN_TEXT_PRINT_EMAIL">\n      <tag type="div" style="modal-body row">\n        [body content]\n      </tag>\n      <tag type="div" style="modal-footer">\n        [footer content]\n      </tag>\n    </dialog>\n  </tag>\n</screen>\n')))}s.isMDXComponent=!0}}]);