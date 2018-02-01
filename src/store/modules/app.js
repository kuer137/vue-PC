import Vue from 'vue';

const app = {
    state: {
        lang: 'zh-CN',
        initHeadNavName: '',
        currentPath: [
            {
                title: '首页',
                path: '',
                name: 'home_index'
            }
        ] // 面包屑数组
    },
    mutations: {
        initHeadNav (state) {
            if (localStorage.initHeadNavName) {
                state.initHeadNavName = localStorage.initHeadNavName;
            }
        }
    }
};

export default app;
