import iviewArea from 'iview-area';  //地区选择器

import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store';  //状态管理

import './I18n';  //国际化

import {router} from './router/index'

Vue.use(iviewArea);
Vue.use(iView);


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
        //console.log(this.$store,888555666)
        this.$store.commit('initHeadNav');
        this.$store.commit('initRouterParse');  //初始化一级路由
    }
});
