(this.webpackJsonpdkapp=this.webpackJsonpdkapp||[]).push([[0],{47:function(e,t,n){e.exports=n(65)},52:function(e,t,n){},53:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(52),n(53),n(28)),m=n(5),i=n(34),s=n(43),u=n(4),d=n(96),h=n(97),p=n(92),v=n(10),f=n(33),E=n(99),g=n(98),b=n(95),q=n(36),I=[{name:"Components",children:[{name:"From1",path:"/Test",children:[]}]},{name:"Javascript Concepts",children:[{name:"Test",path:"/Test",children:[]}]},{name:"CSS",children:[{name:"Test",path:"/Test",children:[]}]},{name:"About1",children:[{name:"Test",children:[{name:"About2",children:[{name:"Test",children:[{name:"Test",children:[{name:"About2",children:[{name:"Test",children:[]}]},{name:"Link1",path:"/Test"}]}]}]},{name:"Link1",path:"/Test"}]}]},{name:"About2",children:[{name:"Test",path:"/Test",children:[]}]},{name:"Home",path:"/Home"},{name:"About",children:[{name:"Test",path:"/Test",children:[]}]}];function w(e){return r.a.createElement(p.a,Object.assign({fontSize:"inherit",style:{width:14,height:14}},e),r.a.createElement("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"}))}function O(e){return r.a.createElement(p.a,Object.assign({fontSize:"inherit",style:{width:14,height:14}},e),r.a.createElement("path",{d:"M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"}))}function T(e){return r.a.createElement(p.a,Object.assign({className:"close",fontSize:"inherit",style:{width:14,height:14}},e),r.a.createElement("path",{d:"M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"}))}function j(e){var t=Object(q.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:e.in?1:0,transform:"translate3d(".concat(e.in?0:20,"px,0,0)")}});return r.a.createElement(q.animated.div,{style:t},r.a.createElement(b.a,e))}var N,S=Object(v.a)((function(e){return{iconContainer:{"& .close":{opacity:.3}},group:{marginLeft:7,paddingLeft:18,borderLeft:"1px dashed ".concat(Object(f.b)(e.palette.text.primary,.4))}}}))((function(e){return r.a.createElement(g.a,Object.assign({},e,{TransitionComponent:j}))})),k=Object(d.a)({root:{height:264,flexGrow:1,maxWidth:400}}),x=function e(t,n,a){return t.map((function(t){var c=void 0;return t.children&&t.children.length>0&&(c=e(t.children,n,void 0===a?t.name:a+"-"+t.name)),r.a.createElement(S,{key:void 0===a?t.name:a+"-"+t.name,nodeId:void 0===a?t.name:a+"-"+t.name,label:t.name,children:c,onClick:function(e){!function(e,t){void 0!==e&&(N.push(e),n(!1)(t))}(t.path,e)}})}))};var z=r.a.memo((function(e){var t=k();return N=Object(m.g)(),r.a.createElement(E.a,{className:t.root,defaultExpanded:e.menuItemProps.menuItemSelectedList,defaultCollapseIcon:r.a.createElement(w,null),defaultExpandIcon:r.a.createElement(O,null),defaultEndIcon:r.a.createElement(T,null),multiSelect:!1,selected:e.menuItemProps.menuItemSelected,onNodeSelect:function(t,n){e.menuItemProps.setSelectedItemNodeId(n)},onNodeToggle:function(t,n){e.menuItemProps.pushMenuItemNodeIds(n)}},x(I,e.menuItemProps.toggleDrawer))})),y=Object(d.a)({list:{width:300},fullList:{width:"auto"}});var M=r.a.memo((function(e){var t,n=y();return r.a.createElement(h.a,{anchor:"left",open:e.isDrawerOpened,onClose:e.toggleDrawer(!1),onOpen:e.toggleDrawer(!0)},(t="left",r.a.createElement("div",{className:Object(u.a)(n.list,Object(s.a)({},n.fullList,"top"===t||"bottom"===t)),role:"presentation"},r.a.createElement(z,{menuItemProps:e.menuItemProps}))))})),C=(n(63),[]),L=r.a.memo((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=function(e){return function(t){!1===e&&u(C),c(e)}},o=Object(a.useState)(C),m=Object(i.a)(o,2),s=m[0],u=m[1],d=Object(a.useState)("Home"),h=Object(i.a)(d,2),p=h[0],v=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"hamburger",onClick:l(!0)},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"logo-container"},r.a.createElement("h3",{className:"logo"},"Deepak",r.a.createElement("span",null,"_keshri")))),r.a.createElement(M,{isDrawerOpened:n,toggleDrawer:l,menuItemProps:{menuItemSelected:p,menuItemSelectedList:s,pushMenuItemNodeIds:function(e){C=e},setSelectedItemNodeId:function(e){v(e)},toggleDrawer:l}}))})),D=function(e){var t=e.component;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main"},r.a.createElement(L,null),r.a.createElement("div",{className:"mainContentSection"},r.a.createElement(t,null))))};n(64);var P=r.a.memo((function(){return r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Welcome Deepak keshri"))}));var A=function(){return r.a.createElement("div",null,"404 Page not found")};var F=function(){return r.a.createElement(r.a.Fragment,null,"login page to implement")};var H=function(){return r.a.createElement("div",null,"Test page")},W=function(){return r.a.createElement(o.a,{basename:"/React"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/Login",exact:!0,component:F}),r.a.createElement(D,{path:"/",exact:!0,component:P}),r.a.createElement(D,{path:"/Home",exact:!0,component:P}),r.a.createElement(D,{path:"/Test",exact:!0,component:H}),r.a.createElement(m.b,{path:"*",exact:!0,component:A})))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e2ee06ef.chunk.js.map