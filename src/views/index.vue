<template>
    <div class="layout">
        <Layout>
            <Header>
                <head-nav></head-nav>
            </Header>
            <Layout>
                <Content>
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<style scoped lang="less">

</style>
<script>
    import headNav from '../components/common/head'
    export default {
        components: {
            headNav
        }
    }
</script>
