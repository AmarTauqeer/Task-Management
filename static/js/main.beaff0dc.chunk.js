(this["webpackJsonptask-management"]=this["webpackJsonptask-management"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),l=n.n(c),i=(n(12),n(13),n(4)),r=n(3),s=(n(14),n(15),function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(r.a)(n,2),l=c[0],i=c[1],s=function(e){e.preventDefault(),l&&(t(l),i(""))};return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:s},o.a.createElement("h3",null,"Task Management"),o.a.createElement("input",{type:"text",id:"task",value:l,placeholder:"Enter new task",onChange:function(e){i(e.target.value)},style:{width:"340px"}}),o.a.createElement("input",{type:"submit",id:"submit",className:"fill",value:"Add",onClick:s})))}),m=function(){var e=Object(a.useState)([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(r.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"Todo-list"},o.a.createElement(s,{addTodo:function(e){var t=[].concat(Object(i.a)(n),[{text:e,isCompleted:!1}]);c(t)}}),n.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("div",{className:"row",style:{height:"40px",marginTop:"3px"}},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("span",{className:e.isCompleted?"strike-through":""},e.text)),o.a.createElement("div",{className:"col-sm-3",style:{textAlign:"right",height:"40px"}},o.a.createElement("input",{type:"button",value:"complete",className:"lineThrough",onClick:function(){return function(e){var t=Object(i.a)(n);t[e].isCompleted=!t[e].isCompleted,c(t)}(t)}}),o.a.createElement("button",{className:"deleteButton",onClick:function(){return function(e){var t=Object(i.a)(n);t.splice(e,1),console.log(t),c(t)}(t)}},"X"))))})))};var u=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.beaff0dc.chunk.js.map