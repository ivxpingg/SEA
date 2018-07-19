/**
 * Created by sgj on 2018-3-28.
 */

export default [
    // {
    //     path: '/',
    //     // alias: '/ThemeApp',
    //     requireAuth: false,
    //     meta: {
    //         title: '厦门海洋生物观测装备公共服务平台'
    //     },
    //     component: (resolve) => require(['../../App.vue'], resolve)
    // },
    {
        path: '/ThemeApp',
        name: 'ThemeApp',
        alias: '/',
        meta: {
            requireAuth: false,
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../views/ThemeApp/ThemeApp.vue'], resolve),
        children: [
            {
                path: 'appHome',
                name: 'appHome',
                alias: '/',
                meta: {
                    requireAuth: false,
                    title: '首页'
                },
                component: (resolve) => require(['../../components/ThemeApp/home/appHome.vue'], resolve)
            },
            {
                path: 'layoutChart',
                name: 'layoutChart',
                meta: {
                    requireAuth: false,
                    title: '海洋产业定制分析'
                },
                component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/layoutChart.vue'], resolve),
                children: [
                    {
                        path: 'showFace',
                        name: 'showFace',
                        meta: {
                            title: '海洋产业定制分析',
                            requireAuth: false,
                        },
                        component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/module/showFace.vue'], resolve)
                    },
                    {
                        path: 'addOrEdit',
                        name: 'addOrEdit',
                        meta: {
                            title: '海洋产业定制分析',
                            requireAuth: true,
                        },
                        component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/module/addOrEdit.vue'], resolve)
                    },
                    {
                        path: 'addOrEdit/:customId',
                        name: 'addOrEdit_param',
                        meta: {
                            requireAuth: true,
                            title: '海洋产业定制分析'
                        },
                        component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/module/addOrEdit.vue'], resolve)
                    }
                ]
            }
        ]
    },

    {
        path: '/ObserveApp',
        name: 'ObserveApp',
        meta: {
            requireAuth: false,
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../views/ObserveApp/ObserveApp.vue'], resolve)
    },
    {
        path: '/AddTheme',
        name: 'AddTheme',
        meta: {
            requireAuth: true,
            title: '添加主题'
        },
        component: (resolve) => require(['../../components/ThemeApp/addTheme/addTheme.vue'], resolve)
    },
    {
        path: '/403',
        meta: {
            requireAuth: false,
            title: '403-权限不足'
        },
        name: 'error-403',
        component: (resolve) => require(['../../components/error-page/403.vue'], resolve)
    },
    {
        path: '/*',
        meta: {
            requireAuth: false,
            title: '403-页面不存在'
        },
        name: 'error-404',
        component: (resolve) => require(['../../components/error-page/404.vue'], resolve)
    }
];