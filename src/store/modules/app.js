import Vue from 'vue';

const app = {
    state: {
        lang: 'zh-CN',
        currentPageName: '',
        currentPath: [
            {
                title: '首页',
                path: '',
                name: 'home_index'
            }
        ] // 面包屑数组
    },
    mutations: {
        //
    }
};

export default app;
