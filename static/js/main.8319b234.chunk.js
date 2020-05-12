(this["webpackJsonpbookshelf-app"]=this["webpackJsonpbookshelf-app"]||[]).push([[0],{111:function(e,t,a){e.exports=a(148)},116:function(e,t,a){},117:function(e,t){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"books",(function(){return ge}));var r=a(0),l=a.n(r),o=a(42),c=a.n(o),i=(a(116),a(109)),u=(a(117),a(149)),m=a(150),s=a(151),d=a(170),E=a(152),p=a(153),h=a(154),f=a(155),g={left:[{title:"Home Page",to:"/"},{title:"Read Books",to:"/read-books"}],right:[{title:"+ Add Book",to:"/add-book"}]},b=a(38),v=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(u.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(m.a,{tag:b.b,to:"/"},"Bookshelf"),l.a.createElement(s.a,{onClick:function(){return n(!a)}}),l.a.createElement(d.a,{isOpen:a,navbar:!0},l.a.createElement(E.a,{className:"mr-auto",navbar:!0},g.left.map((function(e){return l.a.createElement(p.a,null,l.a.createElement(h.a,{tag:b.b,to:e.to},e.title))}))),g.right.map((function(e){return l.a.createElement(f.a,null,l.a.createElement(h.a,{tag:b.b,to:e.to},e.title))})))))},O=a(24),k=a(59),y=a(60),j=a(72),S=a(70),B=a(32),x=a(82),C=a.n(x),_=["JavaScript","HTML","CSS","Python","Java"],w=[1,2,3,4,5],D=["Not Read","Read"],A="https://5ebaac0e3f97140016992b17.mockapi.io/",T=a(156),F=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(k.a)(this,a),t.call(this,e)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getBooks()}},{key:"render",value:function(){var e=this;if(this.props.loading)return l.a.createElement("h1",null,"Books are loading...");var t=this.props.books,a=[],n="";return n=(a=this.props.filter?t.filter((function(t){return t.category===e.props.filter})):t).length<1?l.a.createElement("h2",null,"NO BOOK HERE"):l.a.createElement(ie,{items:a}),l.a.createElement("div",null,l.a.createElement(de,null),l.a.createElement(T.a,null,n))}}]),a}(r.Component),R={getBooks:function(){return function(e){e({type:"LOAD_BOOKS"}),C.a.get("".concat(A,"/books")).then((function(t){e({type:"SET_BOOKS",payload:t.data})})).catch((function(e){console.log(e)}))}}},U=Object(B.b)((function(e){return{books:e.books.data,loading:e.books.loading,filter:e.books.filter}}),R)(F),K=a(157),L=a(158),N=[{title:"Home Page",path:"/",exact:!0,component:U},{title:"Add Book",path:"/add-book",exact:!1,component:function(){return l.a.createElement(T.a,null,l.a.createElement(K.a,null,l.a.createElement(L.a,{xs:12},l.a.createElement("h3",null,"Add a new book")),l.a.createElement(L.a,null,l.a.createElement(Q,null))))}}],I=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(k.a)(this,a),t.call(this,e)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.title;document.title=e}},{key:"render",value:function(){console.log(this.props);var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(e,null))}}]),a}(r.Component),M=function(){return l.a.createElement("div",null,l.a.createElement(O.c,null,N.map((function(e){return l.a.createElement(O.a,{path:e.path,exact:e.exact,component:function(){var t=e.component;return l.a.createElement(I,{title:e.title},t)}})}))))},q=a(159),H=a(160),J=a(161),P=a(162),V=a(163),W=a(164),X=a(108),$=a(77),z=$.a().shape({title:$.b().required("Title is a required field"),author:$.b().required("Author is a required field")}),G={addBook:function(e,t){return function(a){C.a.post("".concat(A,"/books"),e).then((function(e){console.log(e.data),a({type:"ADD_BOOK",payload:e.data}),t.push("/")})).catch((function(e){console.log(e)}))}}},Q=Object(O.f)(Object(B.b)(null,G)((function(e){return l.a.createElement("div",null,l.a.createElement(X.a,{initialValues:{title:"",author:"",category:"",description:"",rating:"",imageUrl:""},validationSchema:z,onSubmit:function(t){console.log("values:",t),e.addBook(t,e.history)}},(function(e){var t=e.values,a=e.errors,n=(e.touched,e.handleChange),r=(e.handleBlur,e.handleSubmit);e.isSubmitting;return l.a.createElement(q.a,{onSubmit:r},l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"title"},"Title"),l.a.createElement(P.a,{type:"text",name:"title",id:"title",placeholder:"name of the book",value:t.title,onChange:n,invalid:a.title}),a.title&&l.a.createElement(V.a,null,a.title)),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"author"},"Author"),l.a.createElement(P.a,{type:"text",name:"author",id:"author",placeholder:"author of the book",value:t.author,onChange:n,invalid:a.author}),a.author&&l.a.createElement(V.a,null,a.author)),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"imageUrl"},"Image URL"),l.a.createElement(P.a,{type:"text",name:"imageUrl",id:"imageUrl",placeholder:"image of the book",value:t.imageUrl,onChange:n})),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"exampleSelect"},"Category"),l.a.createElement(P.a,{type:"select",name:"category",id:"category",value:t.category,onChange:n},_.map((function(e){return l.a.createElement("option",null,e)})))),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:""},"Description"),l.a.createElement(P.a,{type:"textarea",name:"description",id:"description",value:t.description,onChange:n})),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"exampleSelect"},"Rating"),l.a.createElement(P.a,{type:"select",name:"rating",id:"rating",value:t.rating,onChange:n},w.map((function(e){return l.a.createElement("option",null,e)})))),l.a.createElement(H.a,null,l.a.createElement(J.a,{for:"exampleSelect"},"Status"),l.a.createElement(P.a,{type:"select",name:"status",id:"status",value:t.status,onChange:n},D.map((function(e){return l.a.createElement("option",null,e)})))),l.a.createElement(W.a,{color:"primary"},"Add Book"))})))}))),Y=a(166),Z=a(167),ee=a(168),te=a(169),ae=a(68),ne=a(69),re=a(165);function le(){var e=Object(ae.a)(["\n    margin:25px 0 25px 0;\n    height: 444px;\n            .card-img-top {\n                height:250px ;\n            \n    }\n"]);return le=function(){return e},e}var oe=Object(ne.a)(re.a)(le()),ce=function(e){var t=e.imageUrl,a=e.title,n=e.rating;return l.a.createElement(oe,null,l.a.createElement(Y.a,{top:!0,width:"100%",src:t,alt:a}),l.a.createElement(Z.a,null,l.a.createElement(ee.a,null,l.a.createElement("strong",null,"".concat(n," / 5"))),l.a.createElement(ee.a,null,a),l.a.createElement(te.a,null,"Details"),l.a.createElement(te.a,null,"Edit Book")))},ie=function(e){return l.a.createElement(K.a,null,e.items.map((function(e){return l.a.createElement(L.a,{xs:6,md:4,lg:3},l.a.createElement(ce,e))})))};function ue(){var e=Object(ae.a)(["\n    margin-left:15px;\n    color: ",";\n    cursor: pointer;\n"]);return ue=function(){return e},e}var me=Object(ne.a)(f.a)(ue(),(function(e){return e.active?"#FF8247":"#035491"})),se={changeFilter:function(e){return function(t){t({type:"SET_FILTER",payload:e})}}},de=Object(B.b)((function(e){return{activeFilter:e.books.filter}}),se)((function(e){return l.a.createElement("div",null,l.a.createElement(E.a,{className:"bg-white"},l.a.createElement(me,null," ",l.a.createElement("strong",null,"Categories:")," "),l.a.createElement(me,{active:!e.activeFilter,onClick:function(){e.changeFilter("")}}," All "),_.map((function(t){return l.a.createElement(me,{active:e.activeFilter===t,onClick:function(){e.changeFilter(t)}},t)}))))}));var Ee=function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(146),a(147);var pe=a(110),he=a(29),fe={data:[],loading:!1,filter:""},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":return Object(he.a)(Object(he.a)({},e),{},{data:[].concat(Object(pe.a)(e.data),[t.payload])});case"SET_BOOKS":return Object(he.a)(Object(he.a)({},e),{},{data:t.payload,loading:!1});case"LOAD_BOOKS":return Object(he.a)(Object(he.a)({},e),{},{loading:!0});case"SET_FILTER":return Object(he.a)(Object(he.a)({},e),{},{filter:t.payload});default:return e}},be=a(41),ve=a(107),Oe=Object(be.c)(n),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ye=Object(be.e)(Oe,ke(Object(be.a)(ve.a)));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b.a,null,l.a.createElement(B.a,{store:ye},l.a.createElement(Ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.8319b234.chunk.js.map