import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import Util from '../libs/util';
import {Routers, loginRouter, pageRoute} from './router';

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    //mode: 'history',  //依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式.
    mode:'hash',  //默认，使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器
    routes: Routers
};
export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});