(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),s=n(13),o=n(4),l=(n(23),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.credentials="same-origin",t.headers={"Content-Type":"application/json",Accept:"application/json"},t.body&&(t.body=JSON.stringify(t.body)),fetch(e,t).then(function(e){return e.status>=300?Promise.reject(e):204===e.status?Promise.resolve():Promise.resolve(e.json())})}),u="https://swapi.co/api/",p=function(){return l("".concat(u,"people"))},m=function(){return l("".concat(u,"planets"))},f=function(){return l("".concat(u,"starships"))};var d={getPeople:function(){return function(e){return e({type:"SET_LOADING",value:!0}),p().then(function(t){e({type:"SET_LIST",value:t.results})})}},getPlanets:function(){return function(e){return e({type:"SET_LOADING",value:!0}),m().then(function(t){e({type:"SET_LIST",value:t.results})})}},getStarships:function(){return function(e){return e({type:"SET_LOADING",value:!0}),f().then(function(t){e({type:"SET_LIST",value:t.results})})}}},g=Object(o.b)(function(e){return{loading:e.loading,list:e.list}},d)(function(e){var t=e.loading,n=e.list,i=e.getPeople,c=e.getPlanets,o=e.getStarships,l=Object(a.useState)(""),u=Object(s.a)(l,2),p=u[0],m=u[1],f=n.filter(function(e){return~e.name.toLowerCase().indexOf(p.toLowerCase())});return r.a.createElement("div",{id:"app"},r.a.createElement("h1",null,"Star Wars API Demo"),r.a.createElement("div",{className:"spacing"},r.a.createElement("button",{className:"inline",onClick:i},"Get People"),r.a.createElement("button",{className:"inline",onClick:c},"Get Planets"),r.a.createElement("button",{className:"inline",onClick:o},"Get Starships")),r.a.createElement("div",{className:"spacing"},r.a.createElement("input",{placeholder:"Filter",onInput:function(e){return m(e.target.value)}})),t&&r.a.createElement("div",{className:"spacing","v-if":"loading"},"Loading..."),!t&&r.a.createElement("ul",{className:"spacing"},f.map(function(e){return r.a.createElement("li",{key:e.name},e.name)})))}),E=n(3),v=n(12),S=Object(E.c)(function(e,t){switch(t.type){case"SET_LOADING":return Object.assign({},e,{loading:t.value});case"SET_LIST":return Object.assign({},e,{loading:!1,list:t.value});default:return e}},{loading:!1,list:[]},Object(E.a)(v.a));c.a.render(r.a.createElement(o.a,{store:S},r.a.createElement(g,null)),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.fe33ae05.chunk.js.map