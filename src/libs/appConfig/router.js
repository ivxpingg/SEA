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
        requireAuth: false,
        meta: {
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../views/ThemeApp/ThemeApp.vue'], resolve),
        children: [
            {
                path: 'appHome',
                name: 'appHome',
                requireAuth: false,
                meta: {
                    title: '首页'
                },
                component: (resolve) => require(['../../components/ThemeApp/home/appHome.vue'], resolve)
            },
            {
                path: 'layoutChart',
                name: 'layoutChart',
                requireAuth: false,
                meta: {
                    title: '海洋产业定制分析'
                },
                component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/layoutChart.vue'], resolve),
                children: [
                    {
                        path: 'showFace',
                        name: 'showFace',
                        requireAuth: false,
                        meta: {
                            title: '海洋产业定制分析'
                        },
                        component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/module/showFace.vue'], resolve)
                    },
                    {
                        path: 'addOrEdit',
                        name: 'addOrEdit',
                        requireAuth: false,
                        meta: {
                            title: '海洋产业定制分析'
                        },
                        component: (resolve) => require(['../../components/ThemeApp/customLayoutChart/module/addOrEdit.vue'], resolve)
                    },
                    {
                        path: 'addOrEdit/:customId',
                        name: 'addOrEdit_param',
                        requireAuth: false,
                        meta: {
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
        requireAuth: false,
        meta: {
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../views/ObserveApp/ObserveApp.vue'], resolve)
    },
    {
        path: '/AddTheme',
        name: 'AddTheme',
        requireAuth: false,
        meta: {
            title: '添加主题'
        },
        component: (resolve) => require(['../../components/ThemeApp/addTheme/addTheme.vue'], resolve)
    }
];