(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(5),c=t.n(r),o=t(8),m=t(7),s=t(3),i=(t(18),t(20),function(e){var a=Object(n.useState)(e.note.title),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(e.note.body),m=Object(s.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),E=b[0],v=b[1];return l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card card-view"},E?l.a.createElement("div",{className:"card-body"},l.a.createElement("textarea",{onChange:function(e){return c(e.target.value)},name:"title",className:"title-textarea",defaultValue:r}),l.a.createElement("textarea",{onChange:function(e){return u(e.target.value)},name:"body",className:"body-textarea",defaultValue:i}),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.saveHandler(e.note.id,r,i),c(r),u(i),v(!1)}},"Save"))):l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},r),l.a.createElement("p",null,i),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-info",onClick:function(e){return v(!0)}},"Edit"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteHandler(e.note.id)}},"Delete")))))}),u=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top bg-light navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ms-auto align-items-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link mx-2",href:"/#"},l.a.createElement("i",{className:"fas fa-plus-circle pe-2"}),"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link mx-2",href:"/#/about"},l.a.createElement("i",{className:"fas fa-bell pe-2"}),"About"))))))},d=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mb-3"},"Notes App"))),l.a.createElement(u,null))},b=function(){return l.a.createElement("footer",{className:"bg-light text-center text-lg-start"},l.a.createElement("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"}},"\xa9 2022 Copyright:",l.a.createElement("a",{className:"text-dark",href:""},"Rosemond Consulting Group")))},E=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=function(e){r(t.filter(function(a){return a.id!==e}))},u=function(e,a,n){var l=t.map(function(t){if(e===t.id)return Object(o.a)({},t,{title:a,body:n})});r(l)};return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"div-board"},l.a.createElement("div",{className:"row"},t.map(function(e){return l.a.createElement(i,{key:e.id,note:e,deleteHandler:c,saveHandler:u})}))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-success add-button",onClick:function(){var e={id:Date.now(),title:"New Note Title",body:"New Note body"};r([].concat(Object(m.a)(t),[e]))}},"Add"))),l.a.createElement(b,null))},v=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"mb-3"},"About"),l.a.createElement("p",null,"This is a note taking app. It allows the user to create notes for their own personal needs.",l.a.createElement("br",null),"It was created to demonstrate various feartures of React.")),l.a.createElement(b,null))},f=t(6),N=t(0),p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,23)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(f.a,null,l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",element:l.a.createElement(E,null)}),l.a.createElement(N.a,{path:"/about",element:l.a.createElement(v,null)})))),p()},9:function(e,a,t){e.exports=t(22)}},[[9,3,2]]]);
//# sourceMappingURL=main.28f61dff.chunk.js.map