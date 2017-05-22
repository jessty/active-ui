import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import activeui from '../src/index';

Vue.use(VueRouter);
Vue.use(activeui);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/button',
      component: require('./routers/button.vue')
    }
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
