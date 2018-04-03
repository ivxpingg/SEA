/**
 * vue-router2.0 路由配置
 **/

import VueRouter from 'vue-router';
import Routers from "./router";
import iView from 'iview';


const Title = function(title) {
    title = title ? title + '' : '';
    window.document.title = title;
};

const routerConfig = function () {
    // 路由配置
    const RouterConfig = {
        //mode: 'history',
        base: '/',
        routes: Routers
    };
    const router = new VueRouter(RouterConfig);

    router.beforeEach((to, from, next) => {
        console.log('routerBefore');
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

    return router;
}

export default routerConfig;