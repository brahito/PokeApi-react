(this["webpackJsonppokeapi-app"]=this["webpackJsonppokeapi-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),a=n.n(c),s=n(4),i=n(9),o=n.p+"static/media/logo.6e223bd2.png",u=n(0),d=function(e){var t=e.setSearch,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],d=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("h3",{children:"PokeApi App"}),Object(u.jsx)("img",{src:o,alt:"Logo de pokemon"}),Object(u.jsx)("button",{onClick:function(){},children:"Reset"})]}),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("h3",{children:"Buscar Pokemon:"}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(i.a)(e))})),d(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){d(e.target.value)}})})]})]})},p=n(10),f={fire:"#FDDFDF",grass:"#DEFDE0",electric:"#FCF7DE",water:"#DEF3FD",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#98d7a5",bug:"#f8d5a3",dragon:"#97b3e6",psychic:"#eaeda1",flying:"#F5F5F5",fighting:"#E6E0D4",normal:"#cccccc"},j=n(2),l=n.n(j),b=n(3),h=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pokeapi.co/api/v2/pokemon?limit=150",e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=150");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},O=function(e){var t=e.id,n=e.name,r=e.sprites,c=e.types;return console.log(c),Object(u.jsxs)("div",{className:"card",style:{backgroundColor:f[c[0].type.name]},children:[Object(u.jsx)("div",{className:"card_img",children:Object(u.jsx)("img",{src:r.other["official-artwork"].front_default,alt:""})}),Object(u.jsxs)("div",{className:"id",children:["#",t.toString().padStart(3,"0")]}),Object(u.jsx)("div",{className:"card_name",children:n}),Object(u.jsx)("div",{className:"card_types",children:c.map((function(e){return Object(u.jsx)("div",{className:"card_type",style:{backgroundColor:m[e.type.name]},children:e.type.name})}))})]})},v=function(){var e=function(){var e=Object(r.useState)({data:[],loading:!0}),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){!function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,e.next=5,a(t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var a=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,c({data:n,loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n}(),t=e.data,n=e.loading;return Object(u.jsx)("div",{className:"general-container",children:n?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsx)("div",{className:"grid-container",children:t.map((function(e){return Object(u.jsx)(O,Object(p.a)({},e),e.id)}))})})},g=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=(t[0],t[1]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{setSearch:n}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"btn",children:[Object(u.jsx)("button",{children:"Prev"}),Object(u.jsx)("button",{children:"Next"})]}),Object(u.jsx)(v,{})]})]})};n(17);a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e73214d.chunk.js.map