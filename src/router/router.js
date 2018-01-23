import App from '../app'

const login = (resolve) => require(['../views/login/login.vue'], resolve);  //登录页

const page = (resolve) => require(['../views/index.vue'], resolve);  //内页，已登录
const home = (resolve) => require(['../views/home/index.vue'], resolve);  //首页
const shop = (resolve) => require(['../views/shop/index.vue'], resolve);  //商品

export const Routers = [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children:[  //二级路由。对应App.vue
        //地址为空时跳转login页面
        {
            path: '',
            redirect: '/login'
        },
        //登录页
        {
            path: '/login',
            component: login
        },
        //内页（已登录）
        {
            path: '/page',
            component: page,
            children:[
                //首页
                {
                    path: '/',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    component: home
                },
                {
                    path: '/shop',
                    component: shop
                }
            ]
        },
    ]
}];