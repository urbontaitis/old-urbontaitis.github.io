(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{258:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("21c77c22",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n(258)},261:function(t,e,n){var r=n(45)(!1);r.push([t.i,".tag[data-v-ff797220]{margin-right:.5rem;font-size:small}",""]),t.exports=r},275:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(32),{layout:"blog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,n=t.error,r=t.$content,e.prev=1,e.next=4,r("blog",{deep:!0}).fetch();case 4:return o=e.sent,e.abrupt("return",{articles:o});case 8:e.prev=8,e.t0=e.catch(1),n({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Mindaugas Urbontaitis blog",meta:[{hid:"description",name:"description",content:"Mindaugas Urbontaitis personal blog"}],link:[{rel:"canonical",href:"https://www.urbontaitis.lt"}]}}}),c=(n(260),n(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grid",t._l(t.articles,(function(article){return n("card",{key:article.dir,scopedSlots:t._u([{key:"header",fn:function(){return[n("hgroup",[n("h1",[t._v("\n          "+t._s(article.title)+"\n        ")]),t._v(" "),n("h2",[t._v("\n          "+t._s(article.description)+"\n        ")])])]},proxy:!0},{key:"body",fn:function(){return[n("figure",[n("article-image",{attrs:{src:article.img,alt:article.alt}})],1)]},proxy:!0},{key:"footer",fn:function(){return[n("p",t._l(article.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))])],1)})),0),t._v(" "),n("nuxt-link",{attrs:{to:article.dir}},[t._v("Read more")])]},proxy:!0}],null,!0)})})),1)}),[],!1,null,"ff797220",null);e.default=component.exports;installComponents(component,{Card:n(178).default,Grid:n(70).default})}}]);