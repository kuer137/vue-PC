import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import './I18n';  //国际化

import {router} from './router/index'
import store from './store';  //公用js

Vue.use(iView);


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
