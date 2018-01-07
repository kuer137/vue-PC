<template>
    <div class="layout">
        <Layout>
            <Header>
                <head-nav></head-nav>
            </Header>
            <Layout>
                <Content>
                    <div>
                        <img style="width: 100%;" src="../images/welcome.gif" alt="欢迎">
                    </div>
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
