// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import axios from 'axios'
import Vuex from 'vuex'
// import store from './store/index'

 Vue.prototype.$ajax = axios;

 Vue.config.productionTip = false
 Vue.use(VueRouter)
 Vue.use(Vuex)


const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // store
 
}).$mount('#app')
