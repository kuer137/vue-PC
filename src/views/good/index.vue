
<template>
    <div>
        <Layout>
            <com-sider
                    :theme="menuTheme"
                    :activeVal="activeVal"
                    :open-val="openVal"
            ></com-sider>
            <Layout :style="{padding: '0 24px 24px', marginLeft: '200px',minHeight:'860px'}">
                商品
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    Content
                </Content>
            </Layout>
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
                        name:'商品列表',
                        val:'good_1',
                        twoList:[
                            {
                                name:'商品列表',
                                route:'good',
                                val:'good-1'
                            },
                            {
                                name:'下架商品',
                                route:'undergood',
                                val:'good-2'
                            }
                        ]
                    },
                    {
                        name:'商品分类',
                        val:'good_2',
                        twoList:[
                            {
                                name:'商品分类',
                                route:'goodcate',
                                val:'good-3'
                            },
                            {
                                name:'添加分类',
                                routes:'addgoodcate',
                                val:'good-4'
                            }
                        ]
                    }
                ];
            },
            openVal () {
                return ['good_1'];
            },
            activeVal () {
                return 'good-1';
            }
        }
    }
</script>
