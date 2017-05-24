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
    },
    {
      path: '/color',
      component: require('./routers/color.vue')
    },
    {
      path: '/icon',
      component: require('./routers/icon.vue')
    }
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
