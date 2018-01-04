import Vue from 'vue';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';  //多语言转换

import {router} from './router/index'
import store from './store';

Vue.use(VueI18n);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
