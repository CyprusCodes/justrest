"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9684:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"template",title:"Template"},c=void 0,p={unversionedId:"api/template",id:"api/template",isDocsHomePage:!1,title:"Template",description:"A template is a JSP file which contains a link between the AWE engine and the XML descriptor. Those links are called source points. Each JSP template has one or more source points. These source points are the places where our generated code in the XML descriptor will be located once each page is generated.",source:"@site/docs/api/template.md",sourceDirName:"api",slug:"/api/template",permalink:"/docs/api/template",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/api/template.md",tags:[],version:"current",frontMatter:{id:"template",title:"Template"},sidebar:"screens",previous:{title:"Screen Element",permalink:"/docs/api/screen"},next:{title:"Layout",permalink:"/docs/api/layout"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A template is a JSP file which contains a link between the AWE engine and the ",(0,o.kt)("em",{parentName:"p"},"XML descriptor"),". Those links are called ",(0,o.kt)("strong",{parentName:"p"},"source points"),". Each JSP template has ",(0,o.kt)("em",{parentName:"p"},"one or more source points"),". These ",(0,o.kt)("em",{parentName:"p"},"source points")," are the places where our generated code in the ",(0,o.kt)("em",{parentName:"p"},"XML descriptor")," will be located once each page is generated."),(0,o.kt)("p",null,"To set contains of a tag into a source, just fill the source attribute of the tag with the name of the source (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},'<tag source="center">'),")."),(0,o.kt)("p",null,"Currently AWE has 2 standard templates defined with their sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"full"),": For full screen windows. Contains the following sources:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"center:")," Window center container. Place to define the screen structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hidden:")," Hidden container for hidden criteria and messages."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"window"),": Template for inner application windows inside a full template view. It has the next sources:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"buttons:")," Source to place buttons in the upper right zone of the screen."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"center:")," Window center container. Place to define the screen structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"modal:")," Source to place ",(0,o.kt)("em",{parentName:"li"},"includes")," with modal windows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hidden:")," Hidden container for hidden criteria and messages.")))))}m.isMDXComponent=!0}}]);