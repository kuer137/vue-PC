const routers = [
    {
        path: '/',
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
export default routers;