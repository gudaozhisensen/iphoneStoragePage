webpackJsonp([9],{d83H:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("5Wuy"),a=o("mtWM"),s=o.n(a),r={data:function(){return{data:[],stock:[],store:{}}},created:function(){var t=this;s.a.get("../static/data/XS64GB.json").then(function(e){t.data=e.data,t.stock=t.data.store,t.store=t.stock[1].kowloon,console.log(t.store)},function(t){console.log("error")})},components:{detailItem:n.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detailItem",{attrs:{store:this.store}})],1)},staticRenderFns:[]},l=o("VU/8")(r,c,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=9.3d4113f605a87a42d3dc.js.map