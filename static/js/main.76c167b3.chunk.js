(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{107:function(e,t,a){e.exports={modal:"modal_modal__1SpJo",typography:"modal_typography__1GAoP",img:"modal_img__2fW8P"}},138:function(e,t,a){e.exports={filter:"filter_filter__3B_9a"}},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"characters",(function(){return O})),a.d(n,"episodes",(function(){return x})),a.d(n,"locations",(function(){return g})),a.d(n,"watchList",(function(){return y}));var c={};a.r(c),a.d(c,"getCaracter",(function(){return ve}));var r={};a.r(r),a.d(r,"getEpisode",(function(){return Fe}));var o={};a.r(o),a.d(o,"getLocations",(function(){return Qe}));var i={};a.r(i),a.d(i,"getWatchList",(function(){return Xe})),a.d(i,"getCheckedEpisode",(function(){return Ye})),a.d(i,"checkedEpisode",(function(){return $e})),a.d(i,"addEpisode",(function(){return Ze}));var s=a(0),l=a.n(s),d=a(16),j=a.n(d),u=a(29),b=a(135),p=a(10),h={loadingCharacter:!1,loadedCharacter:!1,character:[],info:[],status:["alive","dead","unknown"],gender:["female","male","genderless","unknown"],error:null};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHARACTER_REQUEST":return Object(p.a)(Object(p.a)({},h),{},{loadingCharacter:!0});case"GET_CHARACTER_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loadingCharacter:!1,loadedCharacter:!0,character:t.payload.results,info:t.payload.info});case"GET_CHARACTER_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loadingCharacter:!1,error:t.payload});default:return e}}var f={loadingEpisode:!1,loadedEpisode:!1,episode:[],info:[],error:null};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EPISODE_REQUEST":return Object(p.a)(Object(p.a)({},f),{},{loadingEpisode:!0});case"GET_EPISODE_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loadingEpisode:!1,loadedEpisode:!0,episode:t.payload.results,info:t.payload.info});case"GET_EPISODE_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loadingEpisode:!1,error:t.payload});default:return e}}var m={loadingLocations:!1,loadedLocations:!1,locations:[],info:[],error:null};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOCATIONS_REQUEST":return Object(p.a)(Object(p.a)({},m),{},{loadingLocations:!0});case"GET_LOCATIONS_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loadingLocations:!1,loadedLocations:!0,locations:t.payload.results,info:t.payload.info});case"GET_LOCATIONS_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loadingLocations:!1,error:t.payload});default:return e}}var E=a(23),v={list:[{id:1,episode:"Snow",cheked:!0},{id:2,episode:"Lannister",cheked:!1}],columns:[{field:"id",headerName:"ID",filterable:!1,sortable:!1,minWidth:250},{field:"episode",filterable:!1,headerName:"Episode",flex:1}],checked:[]};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EPISODE":return Object(p.a)(Object(p.a)({},e),{},{list:JSON.parse(t.payload)});case"GET_CHECKED_EPISODE":return Object(p.a)(Object(p.a)({},e),{},{checked:t.payload});case"CHECKED_EPISODE":var a=t.payload;return localStorage.setItem("checked",a),Object(p.a)(Object(p.a)({},e),{},{checked:a});case"ADD_EPISODE":var n={id:Date.now(),episode:t.payload,cheked:!1},c=[].concat(Object(E.a)(e.list),[n]);return localStorage.setItem("episode",JSON.stringify(c)),Object(p.a)(Object(p.a)({},e),{},{list:c});default:return e}}var C=Object(u.c)(Object(p.a)({},n)),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,_=Object(u.e)(C,S(Object(u.a)(b.a))),k=a(43),T=a(7),R=a(125),I=a(28),w=a(137),N=a.n(w),D=a(18),P=a(273),L=a(290),A=a(276),G=a(2);var F=function(e){var t=e.value,a=e.setValue,n=e.tabs,c=Object(D.d)();return Object(G.jsx)(P.a,{position:"static",color:"default",children:Object(G.jsx)(L.a,{value:t,onChange:function(e,t){a(t),localStorage.setItem("page",t)},indicatorColor:"primary",textColor:"primary",children:n.map((function(e,t){return Object(G.jsx)(A.a,Object(p.a)(Object(p.a)({label:e.name},function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}(t)),{},{onClick:function(t){return a=e.link,void c.push(a);var a}}),e.id)}))})})},U=a(142),M=a(288),H=["children","value","index"];var z=function(e){var t=e.children,a=e.value,n=e.index,c=Object(U.a)(e,H);return Object(G.jsx)("div",Object(p.a)(Object(p.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),{},{children:a===n&&Object(G.jsx)(M.a,{div:3,children:t})}))},W=a(289),Q=Object(R.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function J(e){var t=e.count,a=e.page,n=e.handleChange,c=Q();return Object(G.jsx)("div",{className:c.root,children:Object(G.jsx)(W.a,{count:t,color:"primary",page:a,onChange:n})})}var K=a(291);function V(){return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}var B=Object(R.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function q(e){var t=e.handleClose,a=e.open,n=e.children,c=B(),r=l.a.useState(V),o=Object(T.a)(r,1)[0];return Object(G.jsx)("div",{children:Object(G.jsx)(K.a,{open:a,onClose:t,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(G.jsx)("div",{style:o,className:c.paper,children:n})})})}var X=a(74),Y=a(294),Z=a(107),$=a.n(Z),ee=function(e){var t=e.modalInfo;return Object(G.jsxs)("div",{className:$.a.typography,children:[t.image&&Object(G.jsx)(Y.a,{alt:"Remy Sharp",className:$.a.img,src:t.image}),t.name&&Object(G.jsx)(X.a,{component:"h2",color:"textPrimary",children:t.name}),t.status&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",color:"textPrimary",children:Object(G.jsx)("b",{children:"STATUS: "})}),Object(G.jsx)(X.a,{component:"h4",color:"textPrimary",children:t.status})]}),t.species&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",color:"textPrimary",children:Object(G.jsx)("b",{children:"SPECIES: "})}),Object(G.jsx)(X.a,{component:"h4",color:"textPrimary",children:t.species})]}),t.type&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",color:"textPrimary",children:Object(G.jsx)("b",{children:"TYPE: "})}),Object(G.jsx)(X.a,{component:"h4",color:"textPrimary",children:t.type})]}),t.gender&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",color:"textPrimary",children:Object(G.jsx)("b",{children:"GENDER: "})}),Object(G.jsx)(X.a,{component:"h4",color:"textPrimary",children:t.gender})]}),t.created&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",color:"textPrimary",children:Object(G.jsx)("b",{children:"CREATED: "})}),Object(G.jsx)(X.a,{component:"h4",color:"textPrimary",children:t.created})]})]})},te=a(116),ae=a(75),ne=a(97),ce=Object(R.a)((function(e){return{formControl:{margin:e.spacing(1),width:"30ch"},selectEmpty:{marginTop:e.spacing(2)}}}));function re(e){var t=e.items,a=e.label,n=ce(),c=l.a.useState(!0),r=Object(T.a)(c,2),o=r[0],i=r[1];return Object(G.jsx)("div",{children:Object(G.jsxs)(ae.a,{size:"small",variant:"outlined",className:n.formControl,children:[Object(G.jsx)(te.a,{htmlFor:"outlined-age-native-simple",children:a}),Object(G.jsxs)(ne.a,{native:!0,onChange:function(e,t){i(!1)},label:a,children:[o&&Object(G.jsx)("option",{value:""}),t.map((function(e,t){return Object(G.jsx)("option",{value:e,children:e},t)}))]})]})})}var oe=a(138),ie=a.n(oe),se=function(e){var t=e.children;return Object(G.jsx)("div",{className:ie.a.filter,children:t})},le=a(115),de=Object(R.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"30ch"}}}}));function je(e){var t=e.label,a=e.linkRef,n=de();return Object(G.jsx)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:Object(G.jsx)(le.a,{ref:a,size:"small",id:"outlined-basic",label:t,variant:"outlined"})})}var ue=a(60),be=Object(R.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function pe(e){var t=e.onClick,a=e.label,n=be();return Object(G.jsx)("div",{className:n.root,children:Object(G.jsx)(ue.a,{onClick:t,size:"large",variant:"contained",color:"primary",children:a})})}var he=a(139);function Oe(e){var t=e.rows,a=e.columns,n=e.setCheked,c=e.checked;return Object(G.jsx)("div",{style:{height:400,width:"100%"},children:Object(G.jsx)(he.a,{onSelectionModelChange:function(e){return n(e)},rows:t,columns:a,pageSize:5,selectionModel:c,checkboxSelection:!0})})}var fe=a(48),xe=a.n(fe),me=a(63),ge=a(64),Ee=a.n(ge),ve=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(){var e=Object(me.a)(xe.a.mark((function e(a){var n,c;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_CHARACTER_REQUEST"}),(n=console).log.apply(n,t),e.prev=2,e.next=5,Ee.a.get("https://rickandmortyapi.com/api/character/?page=1&name=&status=");case 5:c=e.sent,a({type:"GET_CHARACTER_SUCCESS",payload:c.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a({type:"GET_CHARACTER_ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},ye=a(231),Ce=a(232),Se=a(282),_e=a(281),ke=a(280),Te=(a(225),Object(R.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})));var Re=Object(k.b)((function(e){return{loadingCharacter:e.characters.loadingCharacter,loadedCharacter:e.characters.loadedCharacter,character:e.characters.character,info:e.characters.info,status:e.characters.status,gender:e.characters.gender}}),(function(e){return Object(u.b)(Object(p.a)({},c),e)}))((function(e){var t=Te(),a=l.a.useState(1),n=Object(T.a)(a,2),c=n[0],r=n[1],o=l.a.useState(!1),i=Object(T.a)(o,2),s=i[0],d=i[1],j=l.a.useState({}),u=Object(T.a)(j,2),b=u[0],p=u[1];return l.a.useEffect((function(){e.getCaracter(c)}),[]),Object(G.jsx)("div",{className:t.root,children:e.loadedCharacter&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(se,{children:[Object(G.jsx)(je,{label:"Species"}),Object(G.jsx)(re,{items:e.status,label:"Status"}),Object(G.jsx)(re,{items:e.gender,label:"Gender"}),Object(G.jsx)(pe,{label:"Filter"})]}),Object(G.jsx)(ke.a,{container:!0,children:e.character.map((function(e,a){return Object(G.jsx)(ke.a,{item:!0,xs:6,sm:6,children:Object(G.jsx)(ye.a,{className:t.root,children:Object(G.jsxs)(Ce.a,{alignItems:"flex-start",onClick:function(t){return function(e,t){d(!0),p(t)}(0,e)},children:[Object(G.jsx)(_e.a,{children:Object(G.jsx)(Y.a,{alt:"Remy Sharp",src:e.image})}),Object(G.jsx)(Se.a,{primary:e.name,secondary:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary",children:"Statuse:"}),"  ".concat(e.status)]})}),Object(G.jsxs)("div",{className:"card-info",children:[Object(G.jsxs)("span",{children:[Object(G.jsx)("b",{children:"Species: "})," ",e.species]}),Object(G.jsxs)("span",{children:[Object(G.jsx)("b",{children:"Gender: "})," ",e.gender]})]})]})})},a)}))}),Object(G.jsx)(J,{count:Math.ceil(e.info.pages),page:c,handleChange:function(t,a){r(a),e.getCaracter(a)}}),Object(G.jsx)(q,{handleClose:function(){d(!1)},open:s,children:Object(G.jsx)(ee,{modalInfo:b})})]})})})),Ie=a(6),we=a(285),Ne=a(287),De=a(279),Pe=a(284),Le=a(286),Ae=a(283),Ge=a(110),Fe=function(e){return function(){var t=Object(me.a)(xe.a.mark((function t(a){var n;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_EPISODE_REQUEST"}),t.prev=1,t.next=4,Ee.a.get("https://rickandmortyapi.com/api/episode?page=".concat(e));case 4:n=t.sent,a({type:"GET_EPISODE_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_EPISODE_ERROR",payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},Ue=Object(Ie.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(De.a),Me=Object(Ie.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Ae.a),He=["ID","NAME","AIR DATE","EPISODE"],ze=Object(R.a)({table:{minWidth:700}});var We=Object(k.b)((function(e){return{loadingEpisode:e.episodes.loadingEpisode,loadedEpisode:e.episodes.loadedEpisode,episode:e.episodes.episode,info:e.episodes.info}}),(function(e){return Object(u.b)(Object(p.a)({},r),e)}))((function(e){var t=ze(),a=l.a.useState(1),n=Object(T.a)(a,2),c=n[0],r=n[1];return l.a.useEffect((function(){e.getEpisode(c)}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(se,{children:[Object(G.jsx)(je,{label:"Name"}),Object(G.jsx)(pe,{label:"Filter"})]}),Object(G.jsxs)(Pe.a,{component:Ge.a,children:[Object(G.jsxs)(we.a,{className:t.table,"aria-label":"customized table",children:[Object(G.jsx)(Le.a,{children:Object(G.jsx)(Ae.a,{children:He&&He.map((function(e,t){return Object(G.jsx)(Ue,{children:e},"".concat(t,"__").concat(e))}))})}),Object(G.jsx)(Ne.a,{children:e.episode.map((function(t,a){return Object(G.jsxs)(Me,{children:[Object(G.jsx)(Ue,{children:t.id}),Object(G.jsx)(Ue,{children:t.name}),Object(G.jsx)(Ue,{children:t.air_date}),Object(G.jsx)(Ue,{children:t.episode})]},"".concat(e.locations,"__").concat(a))}))})]}),Object(G.jsx)(J,{count:Math.ceil(e.info.count/20),page:c,handleChange:function(t,a){r(a),e.getEpisode(a)}})]})]})})),Qe=function(e){return function(){var t=Object(me.a)(xe.a.mark((function t(a){var n;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_LOCATIONS_REQUEST"}),t.prev=1,t.next=4,Ee.a.get("https://rickandmortyapi.com/api/location?page=".concat(e));case 4:n=t.sent,a({type:"GET_LOCATIONS_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOCATIONS_ERROR",payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},Je=Object(Ie.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(De.a),Ke=Object(Ie.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Ae.a),Ve=["ID","NAME","TYPE","DIMENSION"],Be=Object(R.a)({table:{minWidth:700}});var qe=Object(k.b)((function(e){return{loadingLocations:e.locations.loadingLocations,loadedLocations:e.locations.loadedLocations,locations:e.locations.locations,info:e.locations.info}}),(function(e){return Object(u.b)(Object(p.a)({},o),e)}))((function(e){var t=Be(),a=l.a.useState(1),n=Object(T.a)(a,2),c=n[0],r=n[1];return l.a.useEffect((function(){e.getLocations(c)}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(se,{children:[Object(G.jsx)(je,{label:"Name"}),Object(G.jsx)(je,{label:"Type"}),Object(G.jsx)(je,{label:"Dimension"}),Object(G.jsx)(pe,{label:"Filter"})]}),Object(G.jsxs)(Pe.a,{component:Ge.a,children:[Object(G.jsxs)(we.a,{className:t.table,"aria-label":"customized table",children:[Object(G.jsx)(Le.a,{children:Object(G.jsx)(Ae.a,{children:Ve&&Ve.map((function(e,t){return Object(G.jsx)(Je,{children:e},"".concat(t,"__").concat(e))}))})}),Object(G.jsx)(Ne.a,{children:e.locations.map((function(t,a){return Object(G.jsxs)(Ke,{children:[Object(G.jsx)(Je,{children:t.id}),Object(G.jsx)(Je,{children:t.name}),Object(G.jsx)(Je,{children:t.type}),Object(G.jsx)(Je,{children:t.dimension})]},"".concat(e.locations,"__").concat(a))}))})]}),Object(G.jsx)(J,{count:Math.ceil(e.info.pages),page:c,handleChange:function(t,a){r(a),e.getLocations(a)}})]})]})})),Xe=function(){return function(e){e({type:"GET_EPISODE",payload:localStorage.getItem("episode")})}},Ye=function(){return function(e){e({type:"GET_CHECKED_EPISODE",payload:localStorage.getItem("checked")})}},Ze=function(e){return{type:"ADD_EPISODE",payload:e}},$e=function(e){return{type:"CHECKED_EPISODE",payload:e}},et=a(94),tt=a.n(et),at=Object(k.b)((function(e){return{list:e.watchList.list,columns:e.watchList.columns,checked:e.watchList.checked}}),(function(e){return Object(u.b)(Object(p.a)({},i),e)}))((function(e){var t=Object(s.useRef)(null);l.a.useEffect((function(){localStorage.getItem("episode")&&e.getWatchList(),localStorage.getItem("checked")&&e.getCheckedEpisode()}),[]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h1",{children:"My Watch List"}),Object(G.jsxs)("div",{className:tt.a.topList,children:[Object(G.jsx)(je,{linkRef:t,label:"Enter Episode"}),Object(G.jsx)(pe,{onClick:function(){var a=t.current.querySelector("input").value;a&&(e.addEpisode(a),t.current.querySelector("input").value="")},label:"Add Episode"})]}),Object(G.jsx)(Oe,{rows:e.list,columns:e.columns,setCheked:e.checkedEpisode,checked:e.checked})]})})),nt=Object(R.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}})),ct=[{id:1,name:"Characters page",link:"characters"},{id:2,name:"Episodes page",link:"episodes"},{id:3,name:"Locations page",link:"locations"},{id:4,name:"My watch list",link:"my-watch"}];var rt=function(){var e=nt(),t=Object(I.a)(),a=l.a.useState(0),n=Object(T.a)(a,2),c=n[0],r=n[1];return l.a.useEffect((function(){localStorage.getItem("page")&&r(+localStorage.getItem("page"))}),[]),Object(G.jsxs)("div",{className:(e.root,tt.a.clear),children:[Object(G.jsx)(F,{value:c,setValue:r,tabs:ct}),Object(G.jsxs)(N.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){r(e)},children:[Object(G.jsx)(z,{value:c,index:0,dir:t.direction,children:Object(G.jsx)(Re,{})}),Object(G.jsx)(z,{value:c,index:1,dir:t.direction,children:Object(G.jsx)(We,{})}),Object(G.jsx)(z,{value:c,index:2,dir:t.direction,children:Object(G.jsx)(qe,{})}),Object(G.jsx)(z,{value:c,index:3,dir:t.direction,children:Object(G.jsx)(at,{})})]})]})},ot=a(141);j.a.render(Object(G.jsx)(ot.a,{children:Object(G.jsx)(k.a,{store:_,children:Object(G.jsx)(rt,{})})}),document.getElementById("root"))},94:function(e,t,a){e.exports={clear:"general_clear__2B2ey",topList:"general_topList__2WTg9"}}},[[226,1,2]]]);
//# sourceMappingURL=main.76c167b3.chunk.js.map