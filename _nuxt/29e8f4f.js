(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4],{241:function(t,e,r){var map={"./blog/my-first-article/images/TV_bokstas.jpg":242,"./blog/my-first-article/index.md":243,"./blog/my-second-article/index.md":244};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=241},242:function(t,e,r){t.exports=r.p+"img/TV_bokstas.d784665.jpg"},243:function(t,e){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: My first Blog Post\n| description: Learning how to use @nuxt/content to create a blog")},244:function(t,e){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: My second Blog Post\n| description: Learning how to use @nuxt/content to create a blog")},245:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{return r(241)("./".concat(this.src))}catch(t){return null}}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image"},[r("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){"use strict";r.r(e);var n={},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",[t._t("header")],2),t._v(" "),t._t("body"),t._v(" "),r("footer",[t._t("footer")],2)],2)}),[],!1,null,null,null);e.default=component.exports},247:function(t,e,r){var content=r(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("472d291a",content,!0,{sourceMap:!1})},248:function(t,e,r){"use strict";r(247)},249:function(t,e,r){var n=r(70)(!1);n.push([t.i,".tag[data-v-08b92336]{margin-right:.5rem;font-size:small}",""]),t.exports=n},261:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(30),r(246)),l=r(46),c=r(245),d={components:{Card:o.default,Grid:l.default,MyImage:c.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,r=t.error,n=t.$content,e.prev=1,e.next=4,n("blog",{deep:!0}).fetch();case 4:return o=e.sent,e.abrupt("return",{articles:o});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Mindaugas Urbontaitis blog",meta:[{hid:"description",name:"description",content:"Mindaugas Urbontaitis personal blog"}],link:[{rel:"canonical",href:"https://www.urbontaitis.lt"}]}}},f=(r(248),r(8)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("grid",t._l(t.articles,(function(article){return r("card",{key:article.dir,scopedSlots:t._u([{key:"header",fn:function(){return[r("hgroup",[r("h1",[t._v("\n          "+t._s(article.title)+"\n        ")]),t._v(" "),r("h2",[t._v("\n          "+t._s(article.description)+"\n        ")])])]},proxy:!0},{key:"body",fn:function(){return[r("figure",[r("my-image",{attrs:{src:article.img,alt:article.alt}})],1)]},proxy:!0},{key:"footer",fn:function(){return[r("p",t._l(article.tags,(function(e){return r("span",{key:e,staticClass:"tag"},[r("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))])],1)})),0),t._v(" "),r("nuxt-link",{attrs:{to:article.dir}},[t._v("Read more")])]},proxy:!0}],null,!0)})})),1)}),[],!1,null,"08b92336",null);e.default=component.exports;installComponents(component,{Card:r(246).default,Grid:r(46).default})}}]);