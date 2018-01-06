import Vue from 'vue';
import Locales from './locale';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';


Vue.use(VueI18n);
Vue.use(iView);

//// 多语言配置
Vue.config.lang = 'en-CN';
const mergeZH = Object.assign(zhLocale, Locales['zh-CN']);
const mergeEN = Object.assign(enLocale, Locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);
