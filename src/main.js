import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import VueRouter from 'vue-router';
import Ajax from './libs/package/ajax';
import Routers from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = Ajax;

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    //mode: 'history',
    base: '/',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

const Title = function(title) {
    title = title ? title + '' : '轨道监管系统';
    window.document.title = title;
};


router.beforeEach((to, from, next) => {

    // next();return ;
    if (to.path === '/' || !to.meta.requireAuth) {
        Title(to.meta.title);
        next();
        return;
    }


    if (to.meta.requireAuth) {

        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            iView.LoadingBar.start();
            Title(to.meta.title);
            next();
        }
        else {
            Util.title(to.meta.title);
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    } else {
        Title(to.meta.title);
        next({
            path: '/',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    }


});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
