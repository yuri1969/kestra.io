(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{399:function(t,a,e){},400:function(t,a,e){},411:function(t,a,e){"use strict";e(399)},412:function(t,a,e){"use strict";e(400)},428:function(t,a,e){"use strict";var n={name:"Home",components:{NavLink:e(87).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(411),e(2)),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);a.a=i.exports},429:function(t,a,e){"use strict";var n=e(145),s=e(147),i={components:{PageEdit:n.a,PageNav:s.a},props:["sidebarItems"]},o=(e(412),e(2)),c=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);a.a=c.exports},449:function(t,a,e){},741:function(t,a,e){"use strict";e(449)},751:function(t,a,e){"use strict";e.r(a);var n=e(428),s=e(146),i=e(429),o=e(145),c={name:"Layout",components:{Home:n.a,Page:i.a,Navbar:s.a,PageEdit:o.a},props:{container:{type:[Boolean],default:!0}},computed:{},mounted:function(){},methods:{}},l=(e(741),e(2)),r=Object(l.a)(c,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"theme-container landing"},[a("Navbar"),this._v(" "),a("main",{staticClass:"page"},[this._t("top"),this._v(" "),this.container?a("div",{staticClass:"container"},[a("Content",{staticClass:"theme-default-content custom"})],1):a("div",[a("Content",{staticClass:"theme-default-content custom"})],1),this._v(" "),this._t("bottom"),this._v(" "),a("Footer")],2)],1)}),[],!1,null,null,null);a.default=r.exports}}]);