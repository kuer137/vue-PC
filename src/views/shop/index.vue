
<template>
    <div>
        <Layout>
            <com-sider
                    :theme="menuTheme"
                    :activeVal="activeVal"
                    :open-val="openVal"
            ></com-sider>
            <router-view></router-view>
        </Layout>
    </div>
</template>
<style scoped lang="less">
    @import "../../styles/common.less";
</style>
<script>
    import comSider from '../../components/common/sider'

    export default {
        components: {
            comSider
        },
        computed: {  //计算属性将被混入到 Vue 实例中
            menuTheme () {  //侧边导航
                return [
                    {
                        name:'店铺列表',
                        val:'shop',
                        twoList:[
                            {
                                name:'店铺列表',
                                routes:'list',
                                val:'shop-1'
                            },
                            {
                                name:'添加店铺',
                                routes:'add/0',
                                val:'shop-2'
                            }
                        ]
                    },
                    {
                        name:'店铺分类',
                        val:'shop_2',
                        twoList:[
                            {
                                name:'分类列表',
                                routes:'catelist',
                                val:'shop-3'
                            },
                            {
                                name:'添加分类',
                                routes:'addcate',
                                val:'shop-4'
                            }
                        ]
                    }
                ];
            },
            openVal () {
                return ['shop'];
            },
            activeVal () {
                return 'list';
            }
        }
    }
</script>
