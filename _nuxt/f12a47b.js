(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{248:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(39),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(44),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("p",[t._v("Article last updated: "+t._s(t.article.updatedAt))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);