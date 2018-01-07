<style scoped>
    @import 'styles/common.less';
</style>
<template>
    <div>
        <el-i18n></el-i18n>
        <router-view></router-view>
    </div>
</template>
<script>
    import elI18n from './components/common/i18n'
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        components: {
            elI18n
        },
        beforeDestroy () {

        }
    }
</script>
