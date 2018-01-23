<template>
    <div class="layout">
        <Layout>
            <head-nav></head-nav>
            <Layout>
                <Content>
                    <router-view></router-view>
                </Content>
            </Layout>
            <fooder></fooder>
        </Layout>
    </div>
</template>
<style scoped lang="less">
</style>
<script>
    import headNav from '../components/common/head'
    import fooder from '../components/common/bottom'
    export default {
        components: {
            headNav,
            fooder
        }
    }
</script>
