/**
 * Created by sgj on 2018-3-28.
 */

export default [
    {
        path: '/',
        alias: '/login',
        meta: {
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['./App.vue'], resolve)
    }
];