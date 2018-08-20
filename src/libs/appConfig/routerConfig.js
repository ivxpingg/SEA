/**
 * vue-router2.0 路由配置
 **/

import VueRouter from 'vue-router';
import Routers from "./router";
import iView from 'iview';
import Cookie from '../helpers/cookies';
import Config from '../appConfig/config';


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

    /**
     * 拦截的内容
     * 1. ajax请求返回的登陆信息失效
     * 2. 路由配置需要登陆
     */
    router.beforeEach((to, from, next) => {
        // console.dir('router');
        Title(to.meta.title);
        iView.LoadingBar.start();

        // 目前没有拦截配置
        if (to.query.token !== undefined) {
            // 登陆有效期2个小时
            var addTimes = 2 * 60 * 60 * 1000;
            var path = Config[Config.env].path;
            Cookie.write('sea_qj_token', to.query.token, new Date().getTime() + addTimes, path);       // 前台&后台

            if(to.query.uid !== undefined) {
                Cookie.write('sea_qj_uid', to.query.uid, new Date().getTime() + addTimes, path);           // 前台&后台
            }
            else {
                Cookie.remove('sea_qj_uid');
            }

            if(to.query.usertype !== undefined) {
                Cookie.write('sea_qj_type', '', new Date().getTime() - addTimes, path);
                Cookie.write('sea_qj_usertype', to.query.usertype, new Date().getTime() + addTimes, path); // 前台
            }
            else {
                Cookie.remove('sea_qj_usertype');
            }

            if(to.query.type !== undefined) {
                Cookie.write('sea_qj_usertype', '', new Date().getTime() - addTimes, path);
                Cookie.write('sea_qj_type', to.query.type, new Date().getTime() + addTimes, path);      // 后台
            }
            else {
                Cookie.remove('sea_qj_type');
            }

            if(to.query.syscode !== undefined) {
                Cookie.write('sea_qj_syscode', to.query.syscode, new Date().getTime() + addTimes, path);// 后台
            }
            else {
                Cookie.remove('sea_qj_syscode');
            }

            // next();s
            next({
                path: to.path
            });
        }
        else if (to.meta.requireAuth && Cookie.read('sea_qj_type') !== '3') {
            next({
                name: 'error-403'
            })
        }
        else {
            next();
        }


    });

    router.afterEach(() => {
        iView.LoadingBar.finish();
        window.scrollTo(0, 0);
    });

    return router;
}

export default routerConfig;