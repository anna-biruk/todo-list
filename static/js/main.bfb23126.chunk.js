(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c);n(10),n(11);var l=function(){return o.a.createElement("div",{className:"menu"},"ToDo List")},i=n(4),u=n(1);n(12),n(13);var s=function(e){var t=e.item,n=Object(a.useState)(!1),c=Object(u.a)(n,2),r=c[0],l=c[1],i="";return r&&(i="text--crossed"),o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",className:"checkbox",onChange:function(e){l(e.target.checked)},id:t}),o.a.createElement("label",{className:i,htmlFor:t},t))},m=[{toDo:"Eat"},{toDo:"Code"},{toDo:"Drink Coffee"},{toDo:"Repeate"},{toDo:"Sleep"},{toDo:"Run"}];var d=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(m),l=Object(u.a)(r,2),d=l[0],v=l[1];return o.a.createElement("div",{className:"list"},d.map((function(e){return o.a.createElement(s,{item:e.toDo})})),o.a.createElement("div",{className:"input"},o.a.createElement("input",{type:"text",className:"text",value:n,onChange:function(e){c(e.target.value)}}),o.a.createElement("input",{type:"button",className:"button",value:"Add",onClick:function(){v([].concat(Object(i.a)(d),[{toDo:n}])),c("")}})))};var v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bfb23126.chunk.js.map