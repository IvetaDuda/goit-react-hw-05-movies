"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[452],{806:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(501),a=r(6871),i="MoviesList_film__list__uRSgm",s="MoviesList_filmCard__wrap__xkctP",c="MoviesList_film__image__J25aD",u="MoviesList_info__5zfGK",o="MoviesList_info__title__UmOdn",p=r(184),f=function(e){var t=e.films,r=(0,a.TH)();return(0,p.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,a=e.original_title,i=e.poster_path,f=e.original_name,l="https://image.tmdb.org/t/p/w500"+i;return(0,p.jsxs)("li",{className:s,children:[(0,p.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,p.jsx)("img",{className:c,src:l,alt:a})}),(0,p.jsx)("div",{className:u,children:a?(0,p.jsx)("h2",{className:o,children:a}):(0,p.jsx)("h2",{className:o,children:f})})]},t)}))})}},8452:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(5861),a=r(885),i=r(7757),s=r.n(i),c=r(2791),u=r(2231),o=r(6066),p=r(2007),f=r.n(p),l=r(806),h="Title_title__mrNq5",d=r(184),m=function(){return(0,d.jsx)("h1",{className:h,children:"Trending today"})},_=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,c.useEffect)((function(){(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u.Z.fetchTrendingMovie().then((function(e){return i(e.results)}))}catch(t){o.Am.error(t.message)}case 1:case"end":return e.stop()}}),e)})))()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(m,{}),(0,d.jsx)(l.Z,{films:r}),(0,d.jsx)(o.Ix,{autoClose:3e3})]})};_.prototype={movies:f().arrayOf(f().shape({id:f().number.isRequired,original_title:f().string.isRequired,original_name:f().string.isRequired,poster_path:f().string.isRequired}))};var v=_},2231:function(e,t,r){var n=r(5861),a=r(7757),i=r.n(a),s=r(4569),c=r.n(s);c().defaults.baseURL="https://api.themoviedb.org/3";var u="c38a13f755f1c1fdbaffd32cebe7bc69";function o(){return(o=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={fetchSearchFilms:function(e){return o.apply(this,arguments)},fetchTrendingMovie:function(){return p.apply(this,arguments)},fetchDetailsMovie:function(e){return f.apply(this,arguments)},fetchCastActors:function(e){return l.apply(this,arguments)},fetchReviews:function(e){return h.apply(this,arguments)}};t.Z=d}}]);
//# sourceMappingURL=452.40bb22ea.chunk.js.map