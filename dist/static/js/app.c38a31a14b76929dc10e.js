webpackJsonp([22],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"theHeader"},[t("div",{staticClass:"pageHeader-wrapper"},[t("div",{staticClass:"pageHeader  clearfix"},[t("div",{staticClass:"pageHeader__logo-wrapper"},[t("a",{staticClass:"pageHeader__logo-link",attrs:{href:"/tc/"}},[t("img",{staticClass:"pageHeader__logo-img",attrs:{src:"https://www.smartone.com/IMG_V4/icon/menu-icon/logo_r.svg"}})])]),this._v(" "),t("div",{staticClass:"pageHeader__lang-wrapper"},[t("div",{staticClass:"pageHeader__btn-lang",attrs:{onclick:"ChangeLang();"}},[t("img",{staticClass:"pageHeader__btn-lang-img",attrs:{src:"https://www.smartone.com/Register_ServicePlan/images/common/btn_en.png",border:"0"}})])])])])])}]};var i=e("VU/8")({name:"theHeader",data:function(){return{}}},r,!1,function(n){e("fCJF")},null,null).exports,a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"theFooter"},[t("div",{staticClass:"page_bottom_remark"},[t("div",{staticClass:"content-block"},[t("p",[t("small",[this._v("Remarks:")])]),this._v(" "),t("ul",[t("li",[this._v("Stock availability status shown at this page is for reference only. Actual stock availability is subject to system record at individual store when you visit at that moment.")]),this._v(" "),t("li",[this._v("Stock is limited and on a first come, first served basis.")])])])]),this._v(" "),t("div",{staticClass:"pageCopyright"},[this._v(" \n        Copyright 2019. All rights reserved. SmarTone Mobile Communications Limited. \n      ")])])}]};var c=e("VU/8")({name:"theFooter",data:function(){return{}}},a,!1,function(n){e("c9Zn")},null,null).exports,s=e("mtWM"),l=e.n(s),u={name:"indexDetail",data:function(){return{data:[],XS:[],XSMAX:[],memory:"",choosedType_xs:null,choosedType_max:null,show:!1}},created:function(){var n=this;l.a.get("../static/data/models.json").then(function(t){n.data=t.data,n.XS=n.data.XS,console.log(n.data),n.XSMAX=n.data.XSMAX},function(n){console.log("error")})},computed:{},methods:{memoryItem:function(n){this.$router.push({path:"/XS/"+n}),console.log(n)},choosed_xs:function(n){this.choosedType_xs=n},choosed_max:function(n){this.choosedType_max=n},show_tag:function(){alert("aa")}}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"storckTab_wrapper"},[e("div",{staticClass:"stockTabCombo_wrapper"},[e("img",{attrs:{src:"https://www.smartone.com/service-site/iPhone-Availability/images/common/iphonex.png",alt:"",width:"180px"},on:{click:n.show_tag}}),n._v(" "),e("h5",[e("b",[n._v(n._s(n.XS.name_en))])]),n._v(" "),e("div",{staticClass:"stockTabCombo_item"},n._l(this.XS.group,function(t,o){return e("router-link",{key:t.groupid,staticClass:"selectButtons_span",attrs:{to:"/XS/"+t.memory+"/hongKong",memory:t.memory},on:{click:n.show_tag}},[e("span",[n._v(n._s(t.memory))]),n._v(" "),n.show==!n.show?e("span",{staticClass:"zzjs"}):n._e()])}),1)]),n._v(" "),e("div",{staticClass:"stockTabCombo_wrapper"},[e("img",{attrs:{src:"https://www.smartone.com/service-site/iPhone-Availability/images/common/iphonex.png",alt:"",width:"180px"}}),n._v(" "),e("h5",[e("b",[n._v(n._s(n.XSMAX.name_en))])]),n._v(" "),e("div",{staticClass:"stockTabCombo_item"},n._l(this.XSMAX.group,function(t,o){return e("router-link",{key:t.groupid,staticClass:"selectButtons_span",attrs:{to:"/XSMAX/"+t.memory}},[e("span",[n._v(n._s(t.memory))]),e("span",{staticClass:"zzjs"})])}),1)])])},staticRenderFns:[]};var m={components:{"v-header":i,"v-index":e("VU/8")(u,h,!1,function(n){e("nByE")},null,null).exports,"v-footer":c}},p={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("v-header"),this._v(" "),t("div",{staticClass:"iphoneStockWrapper"},[t("v-index"),this._v(" "),t("keep-alive",[t("router-view")],1)],1),this._v(" "),t("v-footer")],1)},staticRenderFns:[]};var d=e("VU/8")(m,p,!1,function(n){e("hX6R")},null,null).exports,f=[{path:"/XS/64GB",component:d,children:[{path:"/XS/64GB",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){return n(e("y89F"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(7)]).then(function(){return n(e("BxrI"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(6)]).then(function(){return n(e("Wurx"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(5)]).then(function(){return n(e("Vxuj"))}.bind(null,e)).catch(e.oe)}}]},{path:"/XS/256GB",component:function(n){return Promise.all([e.e(0),e.e(3)]).then(function(){return n(e("ydTH"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(13)]).then(function(){return n(e("KywQ"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(12)]).then(function(){return n(e("TSDH"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(11)]).then(function(){return n(e("bPj7"))}.bind(null,e)).catch(e.oe)}}]},{path:"/XS/512GB",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){return n(e("psCa"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(10)]).then(function(){return n(e("m6IH"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(9)]).then(function(){return n(e("d83H"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(8)]).then(function(){return n(e("ftRz"))}.bind(null,e)).catch(e.oe)}}]}]},{path:"/XSMAX/64GB",component:d,children:[{path:"/XSMAX/64GB",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){return n(e("/gTn"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(4)]).then(function(){return n(e("jqdU"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(15)]).then(function(){return n(e("i3LB"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(14)]).then(function(){return n(e("Mg5X"))}.bind(null,e)).catch(e.oe)}}]},{path:"/XSMAX/256GB",component:function(n){return Promise.all([e.e(0),e.e(3)]).then(function(){return n(e("T38F"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(20)]).then(function(){return n(e("BJ0S"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(19)]).then(function(){return n(e("x/gp"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(18)]).then(function(){return n(e("yka4"))}.bind(null,e)).catch(e.oe)}}]},{path:"/XSMAX/512GB",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){return n(e("MsXw"))}.bind(null,e)).catch(e.oe)},children:[{path:"hongKong",component:function(n){return Promise.all([e.e(0),e.e(4)]).then(function(){return n(e("jqdU"))}.bind(null,e)).catch(e.oe)}},{path:"kowLoon",component:function(n){return Promise.all([e.e(0),e.e(17)]).then(function(){return n(e("ByXC"))}.bind(null,e)).catch(e.oe)}},{path:"newTerritories",component:function(n){return Promise.all([e.e(0),e.e(16)]).then(function(){return n(e("X4qa"))}.bind(null,e)).catch(e.oe)}}]}]},{path:"",redirect:function(n){return console.log(n.fullPath,n.query),"/XS/64GB"}}],_=e("/ocq"),v=e("NYxO");o.a.prototype.$ajax=l.a,o.a.config.productionTip=!1,o.a.use(_.a),o.a.use(v.a);var g=new _.a({routes:f,linkActiveClass:"active"});new o.a({router:g}).$mount("#app")},c9Zn:function(n,t){},fCJF:function(n,t){},hX6R:function(n,t){},nByE:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.c38a31a14b76929dc10e.js.map