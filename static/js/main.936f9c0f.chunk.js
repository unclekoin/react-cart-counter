(this["webpackJsonpcart-counter"]=this["webpackJsonpcart-counter"]||[]).push([[0],{17:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(7),i=t.n(s),r=(t(14),t(15),t(5)),l=t(8),b=t(6),j=t(9),o=t(0),d=function(e){var n=e.id,t=e.name,c=e.value,a=e.onIncrement,s=e.onDecrement,i=e.onDelete;return Object(o.jsxs)("div",{className:"d-flex align-items-center justify-content-between bg-light ps-3 pe-2 mb-2",children:[Object(o.jsx)("span",{children:t}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"badge me-5 bg-"+(c?"primary":"warning"),children:c||"Empty"}),Object(o.jsxs)("div",{className:"btn-group me-3",role:"group",children:[Object(o.jsx)("button",{onClick:function(){a(n,c)},className:"btn btn-primary",children:"+"}),Object(o.jsx)("button",{onClick:function(){return s(n)},className:"btn btn-primary me-2",disabled:!c,children:"-"})]}),Object(o.jsx)("button",{onClick:function(){return i(n)},className:"btn btn-secondary",children:Object(o.jsx)("i",{className:"bi bi-trash fs-5"})})]})]})},u=["counters","onReset"],m=function(e){var n=e.counters,t=e.onReset,c=Object(j.a)(e,u);return Object(o.jsxs)("div",{className:"d-flex flex-column",children:[n.map((function(e){return Object(o.jsx)(d,Object(b.a)(Object(b.a)({},e),c),e.id)})),Object(o.jsx)("button",{className:"btn btn-primary align-self-end  mt-2 me-2",onClick:t,children:"Reset"})]})},h=function(e){var n=e.totalItems;return Object(o.jsxs)("ul",{className:"nav bg-dark mb-3 mt-3 d-flex align-items-center",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link link-light",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link link-light",href:"/",children:"Services"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link link-light",href:"/",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{className:"nav-link position-relative link-light",href:"/",children:[Object(o.jsx)("i",{className:"bi bi-cart3 fs-3"}),Object(o.jsxs)("span",{className:"position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger",children:[n,Object(o.jsx)("span",{className:"visually-hidden",children:"unread messages"})]})]})})]})};var x=function(){var e=[{id:1,value:0,name:"Spoon"},{id:2,value:4,name:"Fork"},{id:3,value:0,name:"Knife"},{id:4,value:0,name:"Plate"},{id:5,value:0,name:"Cup"}],n=Object(c.useState)(e),t=Object(l.a)(n,2),a=t[0],s=t[1];return Object(o.jsx)("div",{className:"col-lg-8 mx-auto p-3 py-md-5",children:Object(o.jsxs)("main",{children:[Object(o.jsx)(h,{totalItems:a.reduce((function(e,n){return e+n.value}),0)}),Object(o.jsx)(m,{onIncrement:function(e,n){var t=Object(r.a)(a),c=t.findIndex((function(n){return n.id===e}));t[c].value=n+1,s(t)},onDecrement:function(e){var n=Object(r.a)(a),t=n.findIndex((function(n){return n.id===e}));n[t].value&&n[t].value--,s(n)},onDelete:function(e){s((function(n){return n.filter((function(n){return n.id!==e}))}))},onReset:function(){return s(e)},counters:a})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.936f9c0f.chunk.js.map