"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{8224:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a,r=n(5861),i=n(885),s=n(7757),c=n.n(s),o=n(501),l=n(6871),u=n(2791),d=n(5667),v=n(2231),p={container:"MovieDetails_container__Ys+c9",btnGoBack:"MovieDetails_btnGoBack__wj+OK",iconArrow:"MovieDetails_iconArrow__8l6Vv",arrow:"MovieDetails_arrow__Du2Lt",containerMovieDetails:"MovieDetails_containerMovieDetails__7Q5RO",imgActor:"MovieDetails_imgActor__oSrSl",name:"MovieDetails_name__LW6-I",scope:"MovieDetails_scope__PjtQO",scopeItem:"MovieDetails_scopeItem__2JkPc",overview:"MovieDetails_overview__U5Vnb",overviewItems:"MovieDetails_overviewItems__OeqN2",genresTitle:"MovieDetails_genresTitle__6SHlq",genreslist:"MovieDetails_genreslist__iI5R9",genrestext:"MovieDetails_genrestext__iZrkb",genresItem:"MovieDetails_genresItem__HUJ-X",additionalInfo:"MovieDetails_additionalInfo__4J0eA",additionalList:"MovieDetails_additionalList__0IfAN",additionalItem:"MovieDetails_additionalItem__bwtlD",additionalLink:"MovieDetails_additionalLink__4ZR-w"},f=n(6403),m=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){var n=e.title,r=e.titleId,i=h(e,m);return u.createElement("svg",_({viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?u.createElement("title",{id:r},n):null,a||(a=u.createElement("g",{"data-name":1,id:"_1"},u.createElement("path",{d:"M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"}))))}var x=u.forwardRef(g),w=(n.p,n(6066)),j=n(184),b=function(){var e=(0,u.useState)(null),t=(0,i.Z)(e,2),n=t[0],a=t[1],s=(0,l.UO)().movieId,m=(0,l.TH)(),_=(0,l.s0)();(0,u.useEffect)((function(){(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s){e.next=3;break}return e.abrupt("return");case 3:v.Z.fetchDetailsMovie(s).then((function(e){return a(e)})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),w.Am.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}),[s]);var h=function(){n&&g()},g=function(){d.NY.scrollMore(500)};return(0,j.jsxs)("div",{className:p.container,children:[(0,j.jsx)("button",{className:p.btnGoBack,onClick:function(){var e,t;_(null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies")},children:(0,j.jsx)(x,{className:p.iconArrow})}),n&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:p.containerMovieDetails,children:[n.poster_path?(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.original_title,width:"400",className:p.imgActor}):(0,j.jsx)("img",{src:f,alt:n.original_title,width:"400",className:p.imgActor}),(0,j.jsxs)("div",{className:p.info,children:[(0,j.jsxs)("h2",{className:p.name,children:[n.original_title," (",n.release_date.slice(0,4),")"]}),(0,j.jsxs)("h3",{className:p.scope,children:["User score:",(0,j.jsxs)("span",{className:p.scopeItem,children:[Math.round(10*n.vote_average)," %"]})]}),(0,j.jsx)("h3",{className:p.overview,children:"Overview:"}),(0,j.jsx)("span",{className:p.overviewItems,children:n.overview}),(0,j.jsxs)("div",{className:p.genresBox,children:[(0,j.jsx)("h3",{className:p.genresTitle,children:"genres:"}),(0,j.jsx)("ul",{className:p.genreslist,children:n.genres.map((function(e){return(0,j.jsx)("li",{className:p.genresItem,children:(0,j.jsx)("p",{className:p.genrestext,children:e.name})},e.id)}))})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{className:p.additionalInfo,children:"Additional information"}),(0,j.jsxs)("ul",{className:p.additionalList,children:[(0,j.jsx)("li",{className:p.additionalItem,children:(0,j.jsx)(o.rU,{className:p.additionalLink,onClick:h,to:"cast",children:"Cast"})}),(0,j.jsx)("li",{className:p.additionalItem,children:(0,j.jsx)(o.rU,{className:p.additionalLink,onClick:h,to:"reviews",children:"Reviews"})})]})]})]})]}),(0,j.jsx)(l.j3,{context:s})]})]})}},2231:function(e,t,n){var a=n(5861),r=n(7757),i=n.n(r),s=n(4569),c=n.n(s);c().defaults.baseURL="https://api.themoviedb.org/3";var o="c38a13f755f1c1fdbaffd32cebe7bc69";function l(){return(l=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/all/day?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={fetchSearchFilms:function(e){return l.apply(this,arguments)},fetchTrendingMovie:function(){return u.apply(this,arguments)},fetchDetailsMovie:function(e){return d.apply(this,arguments)},fetchCastActors:function(e){return v.apply(this,arguments)},fetchReviews:function(e){return p.apply(this,arguments)}};t.Z=f},6403:function(e,t,n){e.exports=n.p+"static/media/defaultImg.64e8cef3084907a7cecd.png"}}]);
//# sourceMappingURL=224.f0f17f04.chunk.js.map