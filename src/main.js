import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import './I18n';
import VueI18n from 'vue-i18n';  //国际化

import {router} from './router/index'
import store from './store';

Vue.use(VueI18n);
Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
