import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Ajax from './libs/package/ajax';
import Routers from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = Ajax;

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    //mode: 'history',
    base: '/',
    routes: Routers
};
const router = new VueRouter(RouterConfig);


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
