(window.webpackJsonp=window.webpackJsonp||[]).push([[7,24,25],{345:function(t,e,a){"use strict";a.r(e);var s=a(347),i=a(343),n=a(344),r=a(346),l={name:"Layout",components:{Home:s.a,Page:n.a,Navbar:i.a,PageEdit:r.a},props:{container:{type:[Boolean],default:!0}},computed:{},mounted:function(){},methods:{}},o=a(9),c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container landing"},[e("Navbar"),this._v(" "),e("main",{staticClass:"page"},[this._t("top"),this._v(" "),this.container?e("div",{staticClass:"container"},[e("Content",{staticClass:"theme-default-content custom"})],1):e("div",[e("Content",{staticClass:"theme-default-content custom"})],1),this._v(" "),this._t("bottom"),this._v(" "),e("LandingFooter")],2)],1)}),[],!1,null,null,null);e.default=c.exports},371:function(t,e,a){},398:function(t,e,a){"use strict";a.r(e);a(74),a(76);var s=["second","minute","hour","day","week","month","year"],i=["秒","分钟","小时","天","周","个月","年"],n={},r=function(t,e){n[t]=e},l=function(t){return n[t]||n.en_US},o=[60,60,24,7,365/7/12,12];function c(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function d(t,e){for(var a=t<0?1:0,s=t=Math.abs(t),i=0;t>=o[i]&&i<o.length;i++)t/=o[i];return(t=Math.floor(t))>(0===(i*=2)?9:1)&&(i+=1),e(t,i,s)[a].replace("%s",t.toString())}function u(t,e){return(+(e?c(e):new Date)-+c(t))/1e3}r("en_US",(function(t,e){if(0===e)return["just now","right now"];var a=s[Math.floor(e/2)];return t>1&&(a+="s"),[t+" "+a+" ago","in "+t+" "+a]})),r("zh_CN",(function(t,e){if(0===e)return["刚刚","片刻后"];var a=i[~~(e/2)];return[t+" "+a+"前",t+" "+a+"后"]}));var v={filters:{timeago:function(t){return e=new Date(t),a="en_US",d(u(e,s&&s.relativeDate),l(a));var e,a,s},formatDate:function(t){return new Date(t).toLocaleString()}},props:{lastUpdated:{type:[String,Date,Number],required:!0}}},f=a(9),p=Object(f.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.lastUpdated,title:this.lastUpdated,pubdate:"pubdate"}},[this._v("\n    "+this._s(this._f("timeago")(this.lastUpdated))+"\n")])}),[],!1,null,null,null);e.default=p.exports},464:function(t,e,a){"use strict";a(371)},635:function(t,e,a){"use strict";a.r(e);a(20),a(191),a(74),a(121);var s=a(398),i={components:{Layout:a(345).default,TimeAgo:s.default},computed:{filteredList:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/blogs/")&&"/blogs/"!==t.path})).sort((function(t,e){return new Date(e.frontmatter.date||e.lastUpdated)-new Date(t.frontmatter.date||t.lastUpdated)}))}}},n=(a(464),a(9)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{scopedSlots:t._u([{key:"top",fn:function(){return[a("section",{staticClass:"bg-half bg-light d-table w-100"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"page-next-level"},[a("h4",{staticClass:"title"},[t._v(" Blog ")]),t._v(" "),a("div",{staticClass:"page-next"},[a("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[a("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Kestra")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Blog")])])])])])])])])]),t._v(" "),a("div",{staticClass:"position-relative"},[a("div",{staticClass:"shape overflow-hidden text-white"},[a("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.filteredList,(function(e){return a("div",{key:e.key,staticClass:"col-lg-4 col-md-6 mb-4 pb-2"},[a("div",{staticClass:"card blog rounded border-0 shadow overflow-hidden"},[a("div",{staticClass:"position-relative"},[a("img",{staticClass:"card-img-top",attrs:{src:e.frontmatter.image,alt:e.title}}),t._v(" "),a("router-link",{staticClass:"overlay rounded-top bg-dark",attrs:{to:e.path}})],1),t._v(" "),a("div",{staticClass:"card-body content"},[a("h5",[a("router-link",{staticClass:"card-title title text-dark",attrs:{to:e.path}},[t._v("\n                                            "+t._s(e.title)+"\n                                        ")])],1),t._v(" "),a("div",{staticClass:"post-meta d-flex justify-content-between mt-3"},[a("ul",{staticClass:"list-unstyled mb-0"}),t._v(" "),a("router-link",{staticClass:"text-muted readmore",attrs:{to:e.path}},[t._v("Read More "),a("i",{staticClass:"mdi mdi-chevron-right"})])],1)]),t._v(" "),a("div",{staticClass:"author"},[a("small",{staticClass:"text-light date"},[a("i",{staticClass:"mdi mdi-calendar-check"}),t._v(" "),a("time-ago",{staticClass:"item-date",attrs:{"last-updated":e.frontmatter.date||e.lastUpdated}})],1)])])])})),0)])])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=r.exports}}]);