<style scoped>
    @import 'styles/common.less';
</style>
<template>
    <div>
        <head-nav></head-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import headNav from './components/head'
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        components: {
            headNav
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
