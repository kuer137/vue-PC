import App from '../app'

const login = (resolve) => require(['../views/login/login.vue'], resolve);  //登录页

const page = (resolve) => require(['../views/index.vue'], resolve);  //内页，已登录
const home = (resolve) => require(['../views/home/index.vue'], resolve);  //首页
const shop = (resolve) => require(['../views/shop/index.vue'], resolve);  //店铺
const good = (resolve) => require(['../views/good/index.vue'], resolve);  //商品

//二级路由
const shoplist = (resolve) => require(['../views/shop/list.vue'], resolve);  //店铺列表
const addshop = (resolve) => require(['../views/shop/add.vue'], resolve);  //添加店铺

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
                    component: shop,
                    children:[
                        {
                            path: '/shop',
                            redirect: '/shop/list'
                        },
                        {
                            path: '/shop/list',
                            component: shoplist
                        },
                        {
                            path: '/shop/add',
                            component: addshop
                        }

                    ]
                },
                {
                    path: '/good',
                    component: good
                }

            ]
        },
    ]
}];