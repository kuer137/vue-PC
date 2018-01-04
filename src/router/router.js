// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
        path: '/',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['../views/login/login.vue'], resolve)
};


// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const pageRoute = [
    {
        path: '/nav',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/nav.vue'], resolve)
    },
    {
        path: '/form',
        component: (resolve) => require(['../views/form.vue'], resolve)
    }
];


// 所有上面定义的路由都要写在下面的routers里
export const Routers = [
    loginRouter,
    ...pageRoute
];