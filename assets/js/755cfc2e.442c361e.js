"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5003],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"Pagination",title:"Pagination",sidebar_label:"Pagination"},s=void 0,p={unversionedId:"Pagination",id:"Pagination",isDocsHomePage:!1,title:"Pagination",description:"Function",source:"@site/docs/pagination.md",sourceDirName:".",slug:"/Pagination",permalink:"/docs/Pagination",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/pagination.md",tags:[],version:"current",frontMatter:{id:"Pagination",title:"Pagination",sidebar_label:"Pagination"},sidebar:"docs",previous:{title:"CRUD",permalink:"/docs/CRUD"},next:{title:"Docker",permalink:"/docs/docker"}},d=[{value:"Function",id:"function",children:[],level:3},{value:"Example Usage:",id:"example-usage",children:[{value:"Table 1 - ORGANIZATION",id:"table-1---organization",children:[],level:4},{value:"Table 2 - PERSONAL INFORMATION",id:"table-2---personal-information",children:[],level:4}],level:3},{value:"Filterable Attributes",id:"filterable-attributes",children:[{value:"Pre-defined Filters",id:"pre-defined-filters",children:[],level:4},{value:"Custom Filters",id:"custom-filters",children:[],level:4}],level:3},{value:"Example Implementation - Client Side:",id:"example-implementation---client-side",children:[],level:3},{value:"<code>usePaginate</code> Custom Hook",id:"usepaginate-custom-hook",children:[{value:"Purpose",id:"purpose",children:[],level:4},{value:"State Variables",id:"state-variables",children:[],level:4},{value:"Functions",id:"functions",children:[],level:4},{value:"Dependencies",id:"dependencies",children:[],level:4},{value:"Usage",id:"usage",children:[],level:4},{value:"Using the <code>usePaginate</code> Hook",id:"using-the-usepaginate-hook",children:[],level:4}],level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"paginate")," function facilitates paginated data retrieval from a database based on specified criteria."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"basePath")),(0,i.kt)("td",{parentName:"tr",align:null},"The base path used for pagination links."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baseTable")),(0,i.kt)("td",{parentName:"tr",align:null},"The primary table from which data is retrieved."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'personal_information'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"selectFields")),(0,i.kt)("td",{parentName:"tr",align:null},"Fields selected from the involved tables."),(0,i.kt)("td",{parentName:"tr",align:null},"Array of Strings"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['personal_information.first_name', 'personal_information.last_name']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"joinStatements")),(0,i.kt)("td",{parentName:"tr",align:null},"SQL join statements connecting related tables."),(0,i.kt)("td",{parentName:"tr",align:null},"Array of SQL Template Strings"),(0,i.kt)("td",{parentName:"tr",align:null},"sql ",(0,i.kt)("inlineCode",{parentName:"td"},"LEFT JOIN organization ON personal_information.organization_id = organization.organization_id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sortableAttributes")),(0,i.kt)("td",{parentName:"tr",align:null},"Attributes allowing data sorting."),(0,i.kt)("td",{parentName:"tr",align:null},"Array of Strings"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['personal_information.personal_information_id', 'personal_information.created_at']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filterableAttributes")),(0,i.kt)("td",{parentName:"tr",align:null},"Attributes that can be filtered with supported operations."),(0,i.kt)("td",{parentName:"tr",align:null},"Array of Objects"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#filterable-attributes"},"See below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mandatoryFilter")),(0,i.kt)("td",{parentName:"tr",align:null},"A condition that must be met for all retrieved records."),(0,i.kt)("td",{parentName:"tr",align:null},"SQL Template String"),(0,i.kt)("td",{parentName:"tr",align:null},"sql ",(0,i.kt)("inlineCode",{parentName:"td"},"AND personal_information.organization_id=1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sortBy")),(0,i.kt)("td",{parentName:"tr",align:null},"Field by which data is sorted."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.sort_by")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"limit")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of records per page."),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.page_size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page")),(0,i.kt)("td",{parentName:"tr",align:null},"Current page number."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.page")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"direction")),(0,i.kt)("td",{parentName:"tr",align:null},"Direction of pagination (next or previous)."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.direction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filters")),(0,i.kt)("td",{parentName:"tr",align:null},"Filters applied to the data."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.filters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cursorValues")),(0,i.kt)("td",{parentName:"tr",align:null},"Cursor values used for pagination."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"req.query.cursor")))),(0,i.kt)("h3",{id:"example-usage"},"Example Usage:"),(0,i.kt)("h4",{id:"table-1---organization"},"Table 1 - ORGANIZATION"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"organization_id (PK)"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"AUTO_INCREMENT, PRIMARY KEY")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"organization_name"),(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR(50)"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL, UNIQUE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created_at"),(0,i.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,i.kt)("td",{parentName:"tr",align:null},"DEFAULT CURRENT_TIMESTAMP")))),(0,i.kt)("h4",{id:"table-2---personal-information"},"Table 2 - PERSONAL INFORMATION"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"personal_information_id"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"AUTO_INCREMENT, PRIMARY KEY")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"first_name"),(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR(50)"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"last_name"),(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR(50)"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR(50)"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL, UNIQUE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"education_level"),(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR(50)"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"organization_id (FK)"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"NOT NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created_at"),(0,i.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,i.kt)("td",{parentName:"tr",align:null},"DEFAULT CURRENT_TIMESTAMP")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Foreign Key:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"organization_id")," references ",(0,i.kt)("inlineCode",{parentName:"p"},"organization(organization_id)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const getPersonalInformation = async (req, res) => {\n  const resultset = await paginate({\n    basePath: req.path,\n    baseTable: "personal_information",\n    selectFields: [\n      "personal_information.personal_information_id",\n      "personal_information.first_name",\n      "personal_information.last_name",\n      "personal_information.email",\n      "personal_information.education_level",\n      "personal_information.organization_id",\n      "personal_information.created_at",\n    ],\n    joinStatements: [\n      sql`LEFT JOIN organization ON personal_information.organization_id = organization.organization_id`,\n      // Add other necessary join statements\n    ],\n    sortableAttributes: [\n      "personal_information.personal_information_id",\n      "personal_information.created_at",\n    ],\n    filterableAttributes: [\n      {\n        column: "personal_information.first_name",\n        operations: [FILTERS.containsIgnoreCase],\n      },\n      {\n        column: "personal_information.personal_information_id",\n        operations: [\n          FILTERS.equals,\n          FILTERS.notEquals,\n          FILTERS.greaterThan,\n          FILTERS.greaterThanOrEqual,\n          FILTERS.lessThan,\n          FILTERS.lessThanOrEqual,\n          FILTERS.in,\n          FILTERS.notIn,\n          FILTERS.between,\n        ],\n      },\n      // Include other filterable attributes\n    ],\n    groupBy: ["personal_information.personal_information_id"],\n    mandatoryFilter: sql`AND personal_information.organization_id=${req.params.orgId}`,\n    sortBy: req.query.sort_by,\n    limit: req.query.page_size,\n    page: req.query.page, // "first" | "last" | null\n    direction: req.query.direction, // next | previous\n    filters: req.query.filters,\n    cursorValues: req.query.cursor,\n  });\n  return res.send(resultset);\n};\n\nmodule.exports = getPersonalInformation;\n')),(0,i.kt)("h3",{id:"filterable-attributes"},"Filterable Attributes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"filterableAttributes")," section in the code allows for defining both pre-defined and custom filters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_information")," table."),(0,i.kt)("h4",{id:"pre-defined-filters"},"Pre-defined Filters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"personal_information.first_name"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Operation: ",(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.containsIgnoreCase")),(0,i.kt)("li",{parentName:"ul"},"Description: Filters based on a case-insensitive partial match of the first name."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"personal_information.personal_information_id"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Operations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.equals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.notEquals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.greaterThan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.greaterThanOrEqual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.lessThan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.lessThanOrEqual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.in")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.notIn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.between")))),(0,i.kt)("li",{parentName:"ul"},"Description: Offers various operations for filtering based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"personal_information_id"),".")))),(0,i.kt)("h4",{id:"custom-filters"},"Custom Filters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"personal_information.personal_information_id"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Operations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERS.containsIgnoreCase")),(0,i.kt)("li",{parentName:"ul"},"Custom Operator: ",(0,i.kt)("inlineCode",{parentName:"li"},"searchPersonByFullName")),(0,i.kt)("li",{parentName:"ul"},"Description: Searches personal information based on a full name match."),(0,i.kt)("li",{parentName:"ul"},"Custom Filter Function:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  column: "personal_information.personal_information_id",\n  operations: [\n    FILTERS.containsIgnoreCase,\n    {\n      operator: "searchPersonByFullName",\n      description: "search personal information by using full name",\n      minimumNumberOfOperands: 1,\n      maximumNumberOfOperands: 1,\n      filterFn: operands => {\n        const filterString = operands[0];\n        if (filterString) {\n          return sql`(LOWER(personal_information.first_name) LIKE ${`%${filterString}%`} OR LOWER(personal_information.last_name) LIKE ${`%${filterString}%`}) `;\n        }\n        return sql``;\n      }\n    }\n  ]\n},\n')),"This function checks for a partial match of the provided full name in ",(0,i.kt)("inlineCode",{parentName:"li"},"first_name")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"last_name"),".")))))),(0,i.kt)("h3",{id:"example-implementation---client-side"},"Example Implementation - Client Side:"),(0,i.kt)("h3",{id:"usepaginate-custom-hook"},(0,i.kt)("inlineCode",{parentName:"h3"},"usePaginate")," Custom Hook"),(0,i.kt)("h4",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginate")," hook manages paginated data retrieval and manipulation through API calls in React."),(0,i.kt)("h4",{id:"state-variables"},"State Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading"),": Indicates if data is being fetched (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),": Stores any API call errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageData"),": Holds the fetched data for the current page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": Additional pagination-related metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageSize"),": Number of items per page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": Array of applied filters to the data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cursor"),": Stores the pagination cursor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"direction")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"page"),": Indicate pagination direction and current page type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sortCriteria"),": Criteria used for data sorting.")),(0,i.kt)("h4",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"goToFirstPage"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"goToLastPage"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"goToPreviousPage"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"goToNextPage"),": Navigate between pages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resetFilters"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"addOrModifyFilter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"removeFilter"),": Filter manipulation functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_setFilters"),": Custom method to set filters directly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh"),": Function to refresh data based on dependency changes.")),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Takes an API call function, dependencies, initial page size, filters, and sorting criteria.")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This hook facilitates managing paginated data fetching, manipulation, and navigation within a React component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nhooks/use-paginate.ts\nimport { useCallback, useEffect, useMemo, useState, useRef } from "react";\nimport { AxiosPromise } from "axios";\n\nenum DIRECTION {\n  NEXT = "next",\n  PREVIOUS = "previous",\n}\n\nenum PAGE_TYPE {\n  FIRST = "first",\n  LAST = "last",\n}\n\nconst usePaginate = (\n  apiCallFn: (queryParams: any) => AxiosPromise<any>,\n  deps: any = [],\n  initialPageSize = 20,\n  initialFilters: any = null,\n  initialSortCriteria: any = null\n) => {\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState<any>(null);\n  const [pageData, setPageData] = useState<any>({});\n  const [metadata, setMetaData] = useState<any>({});\n  const [pageSize, setPageSize] = useState<any>(initialPageSize);\n  const [filters, setFilters] = useState<any>(initialFilters);\n  const [cursor, setCursor] = useState<string | null>(null);\n  const [direction, setDirection] = useState<DIRECTION | null>(null);\n  const [page, setPage] = useState<PAGE_TYPE | null>(null);\n  const [sortCriteria, setSortCriteria] = useState<any>(initialSortCriteria);\n\n  const enrichedDependencies = useMemo(() => {\n    return [...deps, pageSize, sortCriteria, direction, page, cursor, filters];\n  }, [deps, pageSize, sortCriteria, direction, page, cursor, filters]);\n\n  const queryParams = useRef({\n    page_size: pageSize,\n    sort_by: sortCriteria,\n    ...(direction ? { direction } : {}),\n    ...(page ? { page } : {}),\n    ...(cursor ? { cursor } : {}),\n    ...(filters ? { filters } : {}),\n  });\n\n  const refresh = useCallback(async () => {\n    try {\n      const response = await apiCallFn(queryParams.current);\n      if (response.data.errors) {\n        setError(response.data.errors);\n        return;\n      }\n      setPageData(response.data.data);\n      setMetaData(response.data.metadata);\n      setLoading(false);\n    } catch (error) {\n      setError("API Call Failed");\n    }\n  }, [enrichedDependencies]);\n\n  useEffect(() => {\n    queryParams.current = {\n      page_size: pageSize,\n      sort_by: sortCriteria,\n      ...(direction ? { direction } : {}),\n      ...(page ? { page } : {}),\n      ...(cursor ? { cursor } : {}),\n      ...(filters ? { filters } : {}),\n    };\n    refresh();\n  }, enrichedDependencies);\n\n  const goToFirstPage = () => {\n    setPage(PAGE_TYPE.FIRST);\n    setCursor(null);\n    setDirection(null);\n  };\n\n  const goToLastPage = () => {\n    setPage(PAGE_TYPE.LAST);\n    setCursor(null);\n    setDirection(null);\n  };\n\n  const goToPreviousPage = () => {\n    setPage(null);\n    setDirection(DIRECTION.PREVIOUS);\n    if (metadata && metadata.startCursor) {\n      setCursor(metadata.startCursor);\n    }\n  };\n\n  const goToNextPage = () => {\n    setPage(null);\n    setDirection(DIRECTION.NEXT);\n    if (metadata && metadata.endCursor) {\n      setCursor(metadata.endCursor);\n    }\n  };\n\n  const resetFilters = () => {\n    setPage(null);\n    setFilters(initialFilters);\n    setDirection(null);\n    setCursor(null);\n  };\n\n  const addOrModifyFilter = (newFilter: any) => {\n    setFilters((previousFilters: any) => {\n      const existingFilterIndex = previousFilters.findIndex(\n        (filter: any) =>\n          newFilter.column === filter.column &&\n          newFilter.operation === filter.operation\n      );\n\n      if (existingFilterIndex !== -1) {\n        // Replace the existing record with the new one\n        const updatedFilters = [...previousFilters];\n        updatedFilters[existingFilterIndex] = newFilter;\n        return updatedFilters;\n      }\n\n      return [...previousFilters, newFilter];\n    });\n    setPage(null);\n    setDirection(null);\n    setCursor(null);\n  };\n\n  const removeFilter = (filterToRemove: any) => {\n    setFilters((previousFilters: any) => {\n      // Use the filter method to create a new array without the filter to remove\n      const updatedFilters = previousFilters.filter((filter: any) => {\n        return (\n          filter.column !== filterToRemove.column ||\n          filter.operation !== filterToRemove.operation\n        );\n      });\n\n      return updatedFilters;\n    });\n    setPage(null);\n    setDirection(null);\n    setCursor(null);\n  };\n\n  return {\n    goToNextPage,\n    goToPreviousPage,\n    goToFirstPage,\n    goToLastPage,\n    // only use _setFilters if you need bespoke behaviour, otherwise see 3 filter methods below\n    _setFilters: setFilters,\n    addOrModifyFilter,\n    removeFilter,\n    resetFilters,\n    filters,\n    setSortCriteria,\n    sortCriteria,\n    setPageSize,\n    pageSize,\n    refresh,\n    pageData,\n    metadata,\n    loading,\n    error,\n  };\n};\n\nexport default usePaginate;\n')),(0,i.kt)("h4",{id:"using-the-usepaginate-hook"},"Using the ",(0,i.kt)("inlineCode",{parentName:"h4"},"usePaginate")," Hook"),(0,i.kt)("p",null,"To manage pagination on the frontend, you can utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginate")," hook, which facilitates various pagination functionalities and data retrieval."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const {\n  goToNextPage,\n  goToPreviousPage,\n  goToFirstPage,\n  goToLastPage,\n  setPageSize,\n  pageSize,\n  refresh,\n  pageData,\n  metadata,\n  loading,\n  error,\n} = usePaginate(\n  // Fetch data function\n  (queryParams) => {\n    return getPersonalInformations({ orgId: organizationId }, queryParams);\n  },\n  // Dependencies triggering data fetching\n  [organizationId],\n  // Row per page limit\n  rowPerPageLimit,\n  // Initial filters to apply\n  initialFilters,\n  // Default sorting criteria\n  "personal_information.personal_information_id, personal_information.created_at"\n);\n')))}m.isMDXComponent=!0}}]);