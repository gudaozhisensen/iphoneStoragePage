webpackJsonp([16],{X4qa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("5Wuy"),a=n("mtWM"),r=n.n(a),s={data:function(){return{data:[],stock:[],store:{}}},created:function(){var t=this;r.a.get("../static/data/XSMax512GB.json").then(function(e){t.data=e.data,t.stock=t.data.store,t.store=t.stock[2].new_territories,console.log(t.store)},function(t){console.log("error")})},components:{detailItem:o.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detailItem",{attrs:{store:this.store}})],1)},staticRenderFns:[]},i=n("VU/8")(s,c,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=16.d8a84e331a62c9165821.js.map