webpackJsonp([13],{KywQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("5Wuy"),a=n("mtWM"),s=n.n(a),r={data:function(){return{data:[],stock:[],store:{}}},created:function(){var t=this;s.a.get("../static/data/XS256GB.json").then(function(e){t.data=e.data,t.stock=t.data.store,t.store=t.stock[0].hong_kong,console.log(t.store)},function(t){console.log("error")})},components:{detailItem:o.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detailItem",{attrs:{store:this.store}})],1)},staticRenderFns:[]},i=n("VU/8")(r,c,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=13.31bff993a3a457679393.js.map