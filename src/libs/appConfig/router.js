/**
 * Created by sgj on 2018-3-28.
 */

export default [
    {
        path: '/',
        // alias: '/ThemeApp',
        requireAuth: false,
        meta: {
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../App.vue'], resolve),
        children: [

        ]
    },
    {
        path: '/ThemeApp',
        // alias: '/',
        name: 'ThemeApp',
        requireAuth: false,
        meta: {
            title: '厦门海洋生物观测装备公共服务平台'
        },
        component: (resolve) => require(['../../views/ThemeApp/ThemeApp.vue'], resolve),
        children: [
            {
                path: 'test',
                name: 'test',
                requireAuth: false,
                meta: {
                    title: '拖放'
                },
                component: (resolve) => require(['../../components/ThemeApp/dragAndDrop/test.vue'], resolve)
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
    }
];