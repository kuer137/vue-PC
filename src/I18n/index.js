import Vue from 'vue';
import Locales from './locale';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';


//// 多语言配置
Vue.config.lang = 'en-CN';
//const mergeZH = Object.assign(zhLocale, Locales['zh-CN']);
//const mergeEN = Object.assign(enLocale, Locales['en-US']);
//Vue.locale('zh-CN', mergeZH);
//Vue.locale('en-US', mergeEN);
