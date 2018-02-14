import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

Vue.use(Vuex);

console.log(app,456456)

const store = new Vuex.Store({
    state: {
        routerParse:'/'
    },
    mutations: {
        changeRouterParse (state, name) {
            state.routerParse = name;
        }
    },
    actions: {
        //
    },
    modules: {
        app
    }
});

export default store;
