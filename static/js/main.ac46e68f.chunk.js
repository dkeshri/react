(this.webpackJsonpdkapp=this.webpackJsonpdkapp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=a(30),i=(a(87),a(88),a(8)),m=a(22),s=a(71),u=a(3),d=a(159),h=a(161),p=a(155),f=a(9),v=a(23),E=a(164),g=a(163),b=a(158),x=a(49),S=[{name:"Home",path:"/Home"},{name:"Test",path:"/Test"},{name:"Components",children:[{name:"Froms",children:[{name:"Formic",path:"/Components/Forms/Formic"}]}]},{name:"Javascript Concepts",children:[{name:"Array Destructuring",path:"/Test",children:[]}]},{name:"CSS",children:[{name:"Gradient",path:"/Test",children:[]}]},{name:"HooksConcepts",children:[{name:"CustomHooksDemo",path:"/CustomHooksDemo",children:[]}]},{name:"AboutUS",children:[{name:"About",path:"/Test",children:[]}]}];function j(e){return o.a.createElement(p.a,Object.assign({fontSize:"inherit",style:{width:14,height:14}},e),o.a.createElement("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"}))}function O(e){return o.a.createElement(p.a,Object.assign({fontSize:"inherit",style:{width:14,height:14}},e),o.a.createElement("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"}))}function y(e){return o.a.createElement(p.a,Object.assign({className:"close",fontSize:"inherit",style:{width:14,height:14}},e),o.a.createElement("path",{d:"M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"}))}function N(e){var t=Object(x.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:e.in?1:0,transform:"translate3d(".concat(e.in?0:20,"px,0,0)")}});return o.a.createElement(x.animated.div,{style:t},o.a.createElement(b.a,e))}var _,C=Object(f.a)((function(e){return{iconContainer:{"& .close":{opacity:.3}},group:{marginLeft:7,paddingLeft:18,borderLeft:"1px dashed ".concat(Object(v.b)(e.palette.text.primary,.4))}}}))((function(e){return o.a.createElement(g.a,Object.assign({},e,{TransitionComponent:N}))})),q=Object(d.a)({root:{height:264,flexGrow:1,maxWidth:400}}),I=function e(t,a,n){return t.map((function(t){var r=void 0;return t.children&&t.children.length>0&&(r=e(t.children,a,void 0===n?t.name:n+"-"+t.name)),o.a.createElement(C,{key:void 0===n?t.name:n+"-"+t.name,nodeId:void 0===n?t.name:n+"-"+t.name,label:t.name,children:r,onClick:function(e){!function(e,t){void 0!==e&&(_.push(e),a(!1)(t))}(t.path,e)}})}))};var w=o.a.memo((function(e){var t=q();return _=Object(i.g)(),o.a.createElement(E.a,{className:t.root,defaultExpanded:e.menuItemProps.menuItemSelectedList,defaultCollapseIcon:o.a.createElement(j,null),defaultExpandIcon:o.a.createElement(O,null),defaultEndIcon:o.a.createElement(y,null),multiSelect:!1,selected:e.menuItemProps.menuItemSelected,onNodeSelect:function(t,a){e.menuItemProps.setSelectedItemNodeId(a)},onNodeToggle:function(t,a){e.menuItemProps.pushMenuItemNodeIds(a)}},I(S,e.menuItemProps.toggleDrawer))})),D=Object(d.a)({list:{width:300},fullList:{width:"auto"}});var k=o.a.memo((function(e){var t,a=D();return o.a.createElement(h.a,{anchor:"left",open:e.isDrawerOpened,onClose:e.toggleDrawer(!1),onOpen:e.toggleDrawer(!0)},(t="left",o.a.createElement("div",{className:Object(u.a)(a.list,Object(s.a)({},a.fullList,"top"===t||"bottom"===t)),role:"presentation"},o.a.createElement(w,{menuItemProps:e.menuItemProps}))))})),T=(a(94),a(36)),F=[],L=Object(d.a)((function(e){return{SelectStyle:{width:"250px",color:"black",margin:"0 20px"}}}));var H,M=function(e){var t=e.seacrchBoxProps;Object(n.useEffect)((function(){0===F.length&&function e(t){t.forEach((function(t){void 0!==t.children&&0!==t.children.length&&e(t.children),void 0!==t.path&&F.push({value:t.path,label:t.name})}))}(S)}),[]);var a=L();return o.a.createElement("div",null,o.a.createElement(T.a,{name:"form-field-name",options:F,onChange:t.onChangeSearchBox,className:a.SelectStyle,placeholder:"Search Topic",value:t.searchBoxSeletedItem,padding:"20px"}))},P=a(37),z=a.n(P),B=function(){return o.a.createElement("div",{className:z.a.container},o.a.createElement("div",{className:z.a.logo_container},o.a.createElement("h3",{className:z.a.h1},"TechWorld"),o.a.createElement("span",{className:z.a.span_subtitle},"Programming")))},R=[],G="Home",U=o.a.memo((function(){var e=Object(i.g)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=function(e){return function(t){!1===e&&h(R),c(e)}},s=Object(n.useState)(R),u=Object(m.a)(s,2),d=u[0],h=u[1],p=Object(n.useState)(G),f=Object(m.a)(p,2),v=f[0],E=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",null,o.a.createElement("div",{className:"logo-container"},o.a.createElement(B,null),o.a.createElement("div",{className:"hamburger",onClick:l(!0)},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"}))),o.a.createElement("div",{className:"SearchBox"},o.a.createElement(M,{seacrchBoxProps:{searchBoxSeletedItem:H,onChangeSearchBox:function(t){H=t,e.push(t.value)}}}))),o.a.createElement(k,{isDrawerOpened:r,toggleDrawer:l,menuItemProps:{menuItemSelected:v,menuItemSelectedList:d,pushMenuItemNodeIds:function(e){R=e},setSelectedItemNodeId:function(e){E(e),G=e},toggleDrawer:l}}))})),W=a(44),A={init:{opacity:0},in:{opacity:1,transition:{duration:.5}},exit:{x:"-100vw",transition:{duration:.5,ease:"easeInOut"}}},J=function(e){var t=e.component;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"main"},o.a.createElement(U,null),o.a.createElement(W.b.div,{className:"mainContentSection",variants:A,initial:"init",animate:"in",exit:"exit"},o.a.createElement(t,null))))};a(108);var V=o.a.memo((function(){return o.a.createElement("div",{className:"Home-container"},o.a.createElement("h1",null,"Welcome Deepak keshri"))}));var K=function(){return o.a.createElement("div",null,"404 Page not found")};var Q=function(){return o.a.createElement(o.a.Fragment,null,"login page to implement")};a(109);var X=function(){return o.a.createElement("div",{className:" pageContainer Testcontainer"},"Test page")},$=a(75),Y=a.n($);var Z=function(e){var t=e.title;return o.a.createElement("div",{className:Y.a.HeaderTitle},o.a.createElement("h1",null,t))},ee=a(76),te=a.n(ee);var ae=function(e){var t=e.title;return o.a.createElement("div",{className:te.a.title},o.a.createElement("h2",null,t))},ne=a(45),oe=a.n(ne);var re=function(){return o.a.createElement("div",{className:"".concat(oe.a.container," pageContainer")},o.a.createElement(Z,{title:"Formic Demos"}),o.a.createElement("div",{className:oe.a.contentContainer},o.a.createElement(ae,{title:"Registration Form"}),o.a.createElement("div",{className:"".concat(oe.a.box)},o.a.createElement("div",null,"Registration Form"))))},ce=a(52),le=a.n(ce),ie={baseUrl:"https://jsonplaceholder.typicode.com",responseType:"json",headers:{"Content-type":"application/json; charset=UTF-8"}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(n.useState)(!1),o=Object(m.a)(a,2),r=o[0],c=o[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){c(!0),u(null),le()({url:e.url,method:e.method,baseURL:ie.baseUrl,responseType:ie.responseType,params:e.params,data:e.data,transformRequest:[function(e,t){return e}],transformResponse:[function(e){return e}],headers:ie.headers}).then((function(e){c(!1),u(e.data)})).catch((function(e){console.log(e)}))}),t),{isLoading:r,fetchedData:s}},se=a(160),ue=a(162),de=a(53),he=a.n(de);var pe=function(){var e=me({url:"/users",method:"Get"},[]);return o.a.createElement("div",null,o.a.createElement(ue.a,{onClick:function(){var t=e.fetchedData;console.log(t)}}," Filter object"))},fe=Object(d.a)((function(e){return{root:{margin:"10px"},paperStyle:{padding:"10px",minHeight:"600px"},paperStyle2:{padding:"20px",margin:"50px"},SelectStyle:{width:"250px"}}}));function ve(){var e=Object(n.useState)({value:0,label:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({value:0,label:""}),l=Object(m.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),h=d[0],p=d[1],f=Object(n.useState)([]),v=Object(m.a)(f,2),E=v[0],g=v[1],b=me({url:"/users",method:"Get"},[]),x=me({url:"/posts",method:"GET"},[]),S=me({url:"/posts",method:"GET",params:{id:a.value}},[a]);Object(n.useEffect)((function(){if(null!=x.fetchedData){var e=x.fetchedData.filter((function(e){return e.userId===i.value})).map((function(e){return{value:e.id,label:e.title}}));p(e),0!==e.length&&r(e[0])}}),[i,x.fetchedData]),Object(n.useEffect)((function(){if(null!=b.fetchedData){var e=b.fetchedData.map((function(e,t){return{value:e.id,label:e.name}}));g(e),s(e[0])}}),[b.fetchedData]);!function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0===a.expires||null===a.expires?(e=new Date).setDate(Date.now()+12096e5):e=a.expires,t=void 0===a.path||null===a.path?"/":a.path,void 0!==a.key&&void 0!==a.value?he.a.save(a.key,a.value,{path:t,expires:e,secure:!0,httpOnly:!0}):console.log("key and value can not be undefined")}({key:"name",value:"deepak"});var j=fe();return o.a.createElement("div",{className:j.root},o.a.createElement(se.a,{elevation:3,className:j.paperStyle},o.a.createElement(T.a,{name:"form-field-name",options:E,onChange:function(e){s(e)},className:j.SelectStyle,value:i,placeholder:"Select User",padding:"20px"}),o.a.createElement(T.a,{name:"form-field-name2",options:h,onChange:function(e){r(e)},className:j.SelectStyle,value:a,placeholder:"Select Post"}),o.a.createElement(se.a,{elevation:2,className:j.paperStyle2},null!=S.fetchedData&&0!==S.fetchedData.length?S.fetchedData[0].body:""),o.a.createElement(ue.a,{onClick:function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=null,a=new Promise((function(a,n){le()({url:e.url,method:e.method,baseURL:ie.baseUrl,responseType:ie.responseType,params:e.params,data:e.data,transformRequest:[function(e,t){return e}],transformResponse:[function(e){return e}],headers:ie.headers}).then((function(e){t=e.data,a({fetchedData:t})})).catch((function(e){n(new Error(e))}))}));return a})({url:"/users",method:"Get"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log("cookie data ".concat(function(e){if(void 0!==e&&null!==e)return he.a.load(e);console.log("key can not be ".concat(e))}("name")))}},"Click me to fetch data"),o.a.createElement(pe,null)))}var Ee=function(){var e=Object(i.h)();return o.a.createElement(W.a,{exitBeforeEnter:!0},o.a.createElement(i.d,{location:e,key:e.key},o.a.createElement(i.b,{path:"/Login",exact:!0,component:Q}),o.a.createElement(J,{path:"/",exact:!0,component:V}),o.a.createElement(J,{path:"/Home",exact:!0,component:V}),o.a.createElement(J,{path:"/Test",exact:!0,component:X}),o.a.createElement(J,{path:"/Components/Forms/Formic",exact:!0,component:re}),o.a.createElement(J,{path:"/CustomHooksDemo",exact:!0,component:ve}),o.a.createElement(i.b,{path:"*",exact:!0,component:K})))};var ge=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{basename:"/React"},o.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports={container:"Logo_container__NpIy8",logo_container:"Logo_logo_container__3WmGw",span_subtitle:"Logo_span_subtitle__21Kl1",h1:"Logo_h1__3Tirc"}},45:function(e,t,a){e.exports={container:"Formic_container__2j57D",textColor:"Formic_textColor__1Mcgr",contentContainer:"Formic_contentContainer__3Vu5X",box:"Formic_box__93QM6"}},75:function(e,t,a){e.exports={HeaderTitle:"Header_HeaderTitle__1NiM7"}},76:function(e,t,a){e.exports={title:"Title_title__2V3vf"}},82:function(e,t,a){e.exports=a(128)},87:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.ac46e68f.chunk.js.map