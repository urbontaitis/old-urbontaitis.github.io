(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{305:function(t,e,r){"use strict";r.r(e);var n=r(21),c=r(6),l=(r(30),r(42),r(9),r(96),r(22),r(34),r(135)),o=r(137),d=r(134),h={components:{prevNextArticle:l.default,TableOfContent:o.default},layout:"blog",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l,o,d,article,h,f,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,l=t.error,e.prev=1,e.next=4,r("blog",{deep:!0}).fetch();case 4:return o=e.sent,d=Object(n.a)(o,1),article=d[0],e.next=9,r("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 9:return h=e.sent,f=Object(n.a)(h,2),v=f[0],m=f[1],e.abrupt("return",{article:article,prev:v,next:m});case 16:e.prev=16,e.t0=e.catch(1),l({statusCode:404,message:"Page could not be found"});case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:d.a.name},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}],link:[{rel:"canonical",href:"https://www.urbontaitis.lt/blog/"+this.article.slug}]}}},f=r(2),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("hgroup",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("h2",[t._v(t._s(t.article.description))])]),t._v(" "),r("small",[t._v("Posted "+t._s(t._f("formatDate")(t.article.updatedAt))+".")]),t._v(" "),r("lazy-image",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("table-of-content",{attrs:{content:t.article.toc}}),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("hr"),t._v(" "),t._l(t.article.tags,(function(t){return r("tag",{key:t,attrs:{slug:t}})})),t._v(" "),r("hr"),t._v(" "),r("prev-next-article",{attrs:{next:t.next,prev:t.prev}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableOfContent:r(137).default,PrevNextArticle:r(135).default})}}]);