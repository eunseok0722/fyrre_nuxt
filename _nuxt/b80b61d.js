(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,5],{421:function(t,e,n){"use strict";n.r(e);n(29),n(47);var c={name:"MagazineList",props:{postsList:{type:[Array,Object],default:function(){return{}}},ctgr:{type:String,default:"ALL"}},data:function(){return{}},computed:{},methods:{showList:function(t){return this.ctgr===t||"ALL"===this.ctgr}}},r=n(17),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"temp-contents"},[e("ul",{staticClass:"list-ty3"},t._l(t.postsList,(function(c){return e("transition",{key:c.id,attrs:{mode:"in-out",name:"mgzn"}},[t.showList(c.category)?e("li",{staticClass:"ty-item main-podcast-item"},[e("div",{staticClass:"ty3-top"},[e("div",{staticClass:"txt-r"},[t._v(t._s(c.date))]),t._v(" "),e("div",{staticClass:"label-category"},[t._v("\n              "+t._s(c.category)+"\n            ")])]),t._v(" "),e("div",{staticClass:"ty-cover"},[e("NuxtLink",{attrs:{to:"/magazine/".concat(c.id)}},[e("img",{attrs:{alt:c.tit,src:n(142)("./".concat(c.url))}}),t._v(" "),e("i",{staticClass:"blind"},[t._v("Post 자세히보기")])])],1),t._v(" "),e("div",{staticClass:"ty-text"},[e("div",{staticClass:"article-summary"},[e("div",{staticClass:"post-tit"},[e("NuxtLink",{attrs:{to:"/magazine/".concat(c.id)}},[t._v("\n                  "+t._s(c.tit)+"\n                ")])],1),t._v(" "),e("div",{staticClass:"txt-r post-lh"},[t._v("\n                "+t._s(c.description)+"\n              ")])]),t._v(" "),e("ul",{staticClass:"detail-list"},[e("li",[e("span",{staticClass:"tit-r"},[t._v("Text")]),t._v(" "),e("span",{staticClass:"txt-r"},[t._v(t._s(c.text))])]),t._v(" "),e("li",[e("span",{staticClass:"tit-r"},[t._v("Duration")]),t._v(" "),e("span",{staticClass:"txt-r"},[t._v(t._s(c.duration))])])])])]):t._e()])})),1)])}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);var c={name:"CompCategories",data:function(){return{}},computed:{categoriesList:function(){return this.$store.state.magazine.categoriesList}},methods:{ctgrState:function(t){this.$store.commit("magazine/ctgrState",t)},ctgrActivate:function(t){this.$store.commit("magazine/ctgrActivate",t)}}},r=n(17),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter-categories"},[e("div",{staticClass:"tit-l"},[t._v("CATEGORIES")]),t._v(" "),e("ul",{staticClass:"ctgy-list"},t._l(t.categoriesList,(function(n,c){return e("li",{key:n.id,staticClass:"category-item"},[e("div",{class:{"label-category":!0,active:n.ctgrActive},on:{click:function(e){t.ctgrState(n.category),t.ctgrActivate(c)}}},[e("button",[t._v(t._s(n.category))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);var c={name:"MagazineMain",data:function(){return{}},computed:{list:function(){return this.$store.getters["magazine/mgzList"]},pageFrom:function(){return this.$store.state.magazine.pageDft.from},pageTo:function(){return this.$store.state.magazine.pageDft.to},mgzLstLength:function(){return this.$store.getters["magazine/mgzLstLength"]},ctgr:function(){return this.$store.state.magazine.ctgr}},methods:{pagePrv:function(){this.$store.commit("magazine/pagePrv")},pageNxt:function(){this.$store.commit("magazine/pageNxt")}}},r=n(17),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"content"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"main-title-svg"},[e("svg",{attrs:{fill:"none",height:"215",viewBox:"0 0 1520 215",width:"1520",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M93.591 210.436H130.051L184.598 72.3465V210.436H224.217V4.30633H171.966L111.965 157.038L52.2502 4.30633H0V210.436H39.6183V73.4948L93.591 210.436Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M404.145 210.436H450.941L374.001 4.30633H326.344L248.83 210.436H292.755L308.545 166.225H388.642L404.145 210.436ZM349.024 51.9631L376.585 131.487H320.889L349.024 51.9631Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M558.162 214.743C623.905 214.743 664.672 166.512 662.088 99.3328H555.865V134.071H615.58C609.838 159.622 590.603 177.708 560.171 177.708C518.831 177.708 496.725 147.277 496.725 107.658C496.725 63.4467 521.989 39.0441 555.291 39.0441C582.851 39.0441 601.799 54.834 608.115 75.7915H659.504C646.011 31.0056 608.689 0 556.439 0C496.151 0 451.939 45.6472 451.939 106.51C451.939 170.244 498.447 214.743 558.162 214.743Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M819.359 210.436H866.155L789.215 4.30633H741.558L664.044 210.436H707.968L723.758 166.225H803.856L819.359 210.436ZM764.238 51.9631L791.798 131.487H736.103L764.238 51.9631Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M1044.28 210.436V172.828H934.903L1040.84 39.3312V4.30633H882.079V41.915H987.154L881.792 175.986V210.436H1044.28Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M1119.66 210.436V4.30633H1076.02V210.436H1119.66Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M1296.17 210.436H1338.95V4.30633H1298.76V140.961L1208.9 4.30633H1161.81V210.436H1201.72V66.6047L1296.17 210.436Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M1520 172.541H1424.97V123.161H1509.38V85.5526H1424.97V42.2021H1517.99V4.30633H1381.34V210.436H1520V172.541Z",fill:"black"}})])]),t._v(" "),e("Categories")],1),t._v(" "),e("section",{staticClass:"section section-temp sec-magazine-cont"},[e("MagazineList",{attrs:{ctgr:t.ctgr,"posts-list":t.list}}),t._v(" "),e("div",{staticClass:"btn-wrap"},[t.pageFrom>0?e("div",{staticClass:"btn-go-back"},[e("button",{on:{click:t.pagePrv}},[t._v("PREV")])]):t._e(),t._v(" "),t.pageTo<=t.mgzLstLength?e("div",{staticClass:"btn-view-more"},[e("button",{on:{click:t.pageNxt}},[t._v("NEXT")])]):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Categories:n(425).default,MagazineList:n(421).default})}}]);