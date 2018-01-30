import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

Vue.use(Vuex);

console.log(app,456456)

const store = {
    state: {
        stle:1,
        sdfj:2
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        app
    }
};

export default store;
