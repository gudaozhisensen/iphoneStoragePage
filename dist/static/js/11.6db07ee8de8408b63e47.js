webpackJsonp([11],{bPj7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("5Wuy"),r=n("mtWM"),s=n.n(r),a={data:function(){return{data:[],stock:[],store:{}}},created:function(){var t=this;s.a.get("../static/data/XS64GB.json").then(function(e){t.data=e.data,t.stock=t.data.store,t.store=t.stock[2].new_territories,console.log(t.store)},function(t){console.log("error")})},components:{detailItem:o.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detailItem",{attrs:{store:this.store}})],1)},staticRenderFns:[]},i=n("VU/8")(a,c,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=11.6db07ee8de8408b63e47.js.map