"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8416],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{Z:function(){return r},b:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3936:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"awe-107",title:"awe-107 Services",sidebar_label:"awe-107 Services"},c=void 0,l={unversionedId:"training/awe-107",id:"training/awe-107",isDocsHomePage:!1,title:"awe-107 Services",description:"Services within AWE are useful to execute any kind of bussiness logic on the server side. It can execute Java or C code to do whatever task we want to.",source:"@site/docs/training/awe-107.md",sourceDirName:"training",slug:"/training/awe-107",permalink:"/docs/training/awe-107",editUrl:"https://github.com/CyprusCodes/xest/tree/main/documentation/docs/docs/training/awe-107.md",tags:[],version:"current",frontMatter:{id:"awe-107",title:"awe-107 Services",sidebar_label:"awe-107 Services"}},p=[{value:"Development of a Java service",id:"development-of-a-java-service",children:[{value:"Definition in <code>global/services.xml</code>",id:"definition-in-globalservicesxml",children:[],level:3},{value:"Service",id:"service",children:[],level:3}],level:2},{value:"Development of a web service",id:"development-of-a-web-service",children:[{value:"Definition in <code>global/services.xml</code>",id:"definition-in-globalservicesxml-1",children:[],level:3},{value:"Definition in <code>webservices/services.xml</code>",id:"definition-in-webservicesservicesxml",children:[],level:3},{value:"Interface of service in <code>xxxWbsFcn.c</code>",id:"interface-of-service-in-xxxwbsfcnc",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Services within ",(0,i.kt)("strong",{parentName:"p"},"AWE")," are useful to execute any kind of bussiness logic on the server side. It can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," code to do whatever task we want to."),(0,i.kt)("p",null,"Services are a kind of action, exposed on the client side as actions of type ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," where the query or maintain to be executed comes along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," attribute (for queries) or ",(0,i.kt)("inlineCode",{parentName:"p"},"<serve>")," element (for maintains)."),(0,i.kt)("p",null,"The service engine is the one who redirects to the appropiate engine depending on the action type (data or maintain) as well as the service type (Java, C web services, message queues, ...)"),(0,i.kt)("img",{alt:"Service engine",src:n(4996).Z("img/training/Services_engine.png")}),(0,i.kt)("p",null,"For the service definition it is necessary to specify in ",(0,i.kt)("inlineCode",{parentName:"p"},"global/services.xml")," file. The complete list of elements and attributes for services can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/service"},"wiki"),"\ud83d\udd17."),(0,i.kt)("h2",{id:"development-of-a-java-service"},"Development of a Java service"),(0,i.kt)("p",null,"Java services are those used for Java code execution as ",(0,i.kt)("em",{parentName:"p"},"Spring Beans"),". We can execute functions from the project as well as third party APIs. The only condition is that the java class has to be loaded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"classpath")," and has ",(0,i.kt)("inlineCode",{parentName:"p"},"@Service")," annotation ."),(0,i.kt)("p",null,"The specific attributes for Java services are documented ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/service#java-element"},"here"),"\ud83d\udd17."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example:")," To help to understand this tutorial we are going to develop a simple Java service where we will execute a method from one of our classes to fill in a criterion. The method will receive 2 parameters and will return as the result its concatenation.")),(0,i.kt)("h3",{id:"definition-in-globalservicesxml"},"Definition in ",(0,i.kt)("inlineCode",{parentName:"h3"},"global/services.xml")),(0,i.kt)("p",null,"To develop the Java service with AWE it will be necessary to specify in ",(0,i.kt)("inlineCode",{parentName:"p"},"services.xml")," the structure of the service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},' <service id="MyJavaService">\n    <java classname="com.app.services.MyService" method="concat">\n      <service-parameter type="STRING" name="text1" />\n      <service-parameter type="STRING" name="text2" />\n    </java>\n  </service>\n')),(0,i.kt)("p",null,"As you can see, our service has and identifier (",(0,i.kt)("inlineCode",{parentName:"p"},"MyJavaService"),"). We told it to execute the method ",(0,i.kt)("inlineCode",{parentName:"p"},"concat")," defined in class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyService")," whose complete path in classpath is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.app.services.MyService"),". Also, we have specified that this method will receive two parameters of type String called ",(0,i.kt)("inlineCode",{parentName:"p"},"text1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text2"),"."),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,"Once the service is defined in the xml, we have to create the bean component class and method to execute. For this, it is recommended to have a logic layer as a ",(0,i.kt)("strong",{parentName:"p"},"controller")," and from there call the method we want to execute defined in the ",(0,i.kt)("strong",{parentName:"p"},"manager"),". This way, we can modify the controller layer without impacting the bussiness logic from the manager, making the code more maintainable."),(0,i.kt)("p",null,"Following this recommendation, we are going to create the Servicios class as a controller."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," This class may extend ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceConfig")," class to be able to access the context of the application.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyService.java"',title:'"MyService.java"'},"package com.app.services;\n\n// Imports\n\n@Service\npublic class MyService extends ServiceConfig {\n\n  /**\n  * Concat two strings\n  * @param text1 text1\n  * @param text2 text2\n  * @return concated text\n  */\n  public ServiceData concatenar(String text1, String text2) {\n    // Define serviceData\n    ServiceData serviceData = new ServiceData();\n    String concatResult = text1 + text2;\n    // Set data as array of label and value. Also you can build DataList and set it.\n    serviceData.setData(new String[] { concatResult, concatResult });\n    return serviceData;\n  }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," As can be seen, a method that receives two strings and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceData")," object has been defined. All services must return this AWE object. This object, among other things, has the ",(0,i.kt)("inlineCode",{parentName:"p"},"Datalist")," property where all the data to be returned is stored.")),(0,i.kt)("p",null,"As we can see, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"concat")," returns the object ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceData")," with the result of the concatenation of two parameters. In this example, the information to be returned was done by creating an array two elements long (label and value) that have the same value."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"}," Note:")," This would be one of the many way to return information in ",(0,i.kt)("strong",{parentName:"p"},"AWE"),". Another way could be creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Datalist")," object with the information relative to rows and columns and adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceData")," object that must be returned.")),(0,i.kt)("h2",{id:"development-of-a-web-service"},"Development of a web service"),(0,i.kt)("p",null,"Web services are a kind of special service used to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," functions throught the web service provided by the ",(0,i.kt)("strong",{parentName:"p"},"ALU")," ",(0,i.kt)("em",{parentName:"p"},"(ALmis Utilities)")," library."),(0,i.kt)("p",null,"The specific attributes for the Web ALU services are documented ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/service#web-element"},"here"),"\ud83d\udd17."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example:")," As we did with Java services, we are going to develop a C service that concatenates two Strings to fill in a criterion.")),(0,i.kt)("h3",{id:"definition-in-globalservicesxml-1"},"Definition in ",(0,i.kt)("inlineCode",{parentName:"h3"},"global/services.xml")),(0,i.kt)("p",null,"The first thing we have to do is define the structure of the service inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"services.xml")," file within the ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," folder, stating that it will be a web service (",(0,i.kt)("inlineCode",{parentName:"p"},"<web />"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Concatenate 2 strings --\x3e\n<service id="ConcatString">\n  <web name="CctStrDat" type="DATA">\n    <service-parameter type="STRING" name="texto1" />\n    <service-parameter type="STRING" name="texto2" />\n  </web>\n</service>\n')),(0,i.kt)("p",null,"As in the previous service, we have given an identifier name ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcatString"),". With the ",(0,i.kt)("inlineCode",{parentName:"p"},"<web />")," tag, we are specifying the type of service we are talking about."),(0,i.kt)("p",null,"In web service is necessary to indicate the name that will match the identifier defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"services.xml")," for this web service inside of folder ",(0,i.kt)("inlineCode",{parentName:"p"},"webservices"),". It is important to point out that we have set the ",(0,i.kt)("em",{parentName:"p"},"type")," attribute to ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA")," so we know that the service is going to return some (in this case, the string concatenation)."),(0,i.kt)("h3",{id:"definition-in-webservicesservicesxml"},"Definition in ",(0,i.kt)("inlineCode",{parentName:"h3"},"webservices/services.xml")),(0,i.kt)("p",null,"This file will hold the proper definition of the web service. This file is used by the engine to convert the parameters and be able to build the SOAP request to the web service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- Return Concat String --\x3e\n  <service name="CctStrDat" type="DATA" call="DoConcatString">\n    <param name="texto1" type="STRING"/>\n    <param name="texto2" type="STRING"/>\n  </service>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"}," Note:")," it is important to note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the service element must have the same value as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute of the service defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"services.xml")," in global folder. The ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," attribute indicates the name of the function to be called in C (will be sent as a parameter).")),(0,i.kt)("h3",{id:"interface-of-service-in-xxxwbsfcnc"},"Interface of service in ",(0,i.kt)("inlineCode",{parentName:"h3"},"xxxWbsFcn.c")),(0,i.kt)("p",null,"Finally, we hace to define the functionality of the actual web service. For this, the file ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxWbsFcn.c")," has been created as a template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/**************************************************************************************************/\n/* %fname    : ALUwbsGetSpeDtaPtr\n * %synop    : Web services specific function interface for data services\n * %descrip  : Web services specific function interface for data services\n * %par      :\n *  - Ide: Function identifier\n *  - Res: (out) Function Pointer\n * %return   : Error code (0: OK)\n * %end\n */\nint ALUwbsGetSpeDtaPtr (char *Ide, ALUwbsFcnDta *Ptr)\n/**************************************************************************************************/\n{\n  ERRdef;\n  *Ptr = NULL;\n\n  /* DATA FUNCTIONS */\n  /* Assign service name to function pointer */\n  /* SAMPLE:\n   * if      (strcmp (Ide, "DatSrv1") == 0) { *Ptr = ALUwbsDatSrv1; }\n   * else if (strcmp (Ide, "DatSrv2") == 0) { *Ptr = ALUwbsDatSrv2; }\n   */\n\n    /*-------- Get data-------*/\n  if      (strcmp (Ide, "UsrChkPwd") == 0)    { *Ptr = (ALUwbsFcnDta) BILwbsUsrChkPwd; }\n  ...\n  else if (strcmp (Ide, "DoConcatString") == 0)       { *Ptr = (ALUwbsFcnDta) DoConcatString; }\n  ...\n  else {\n    ERRchk (ALUwbsGetDtaFcnPtr (Ide, Ptr));\n    if (*Ptr) {\n      goto ERRend;\n    }\n  }\n  ERRend:\n  ERRret;\n}\n\n/**************************************************************************************************/\n/* %fname    : DoConcatString\n * %synop    : Get the concat of two strings\n * %descrip  : Get the concat of two strings\n * %par      :\n *  - LdPar: Parameter List\n *  - Res: (out) Webservice response\n * %return   : Error code (0: OK)\n * %end\n */\nint BILwbsGetCor (void      *LdPar,\n                  wbsResDta *Res)\n/**************************************************************************************************/\n{\n  char     Bas [COD_LENGTH];\n  int      Cod = 0;\n  char    *Ent,\n          *Dst,\n          *Sns;\n  ERRdef;\n\n    /* OUTPUT Initialization */\n  ERRchk(ALUwbsErrDtaIni(Res));\n\n    /* GET PARAMETERS */\n  Txt1 = (char *) DYNgbGetData (LdPar, DYNcbn (LdPar, "texto1"), 0);\n  Txt2 = (char *) DYNgbGetData (LdPar, DYNcbn (LdPar, "texto2"), 0);\n  \n  /* Concat strings */\n  char *result = malloc(strlen(s1)+strlen(s2)+1);//+1 for the zero-terminator\n  //in real code you would check for errors in malloc here\n  strcpy(result, Txt1);\n  strcat(result, s2Txt2\n\n  ERRend:\n  \n    /******** WEB SERVICE DATA MANAGMENT ********/\n  if (Res->ResLst) MMfree (Res->ResLst);\n  Res->ResLst = MMmalloc (char, sizeof (char ) * 50);\n  sprintf (Res->ResLst, "%d%", Cod);\n    /*********************************************/\n\n    /* ERROR Management */\n  ALUwbsErrDtaMgnErrCd (ErrCd, Res);\n\n  ERRret;\n}\n\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"}," Important:")," Do not forget to create the header file ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxWbsDef.h"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"/**************************************************************************************************/\n/* %finame   : xxxWbsDef.h\n * %acronyme :\n * %synop    : Header file for BilWbsFcn\n * %descrip  : Header file for BilWbsFcn\n * %end\n */\n/**************************************************************************************************/\n...\nint   BILwbsUsrChkPwd          (void *LdPar, wbsResDta *Res);\n...\n")))}m.isMDXComponent=!0}}]);