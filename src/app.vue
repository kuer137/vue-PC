
<template>
    <div>
        <el-i18n></el-i18n>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    @import 'styles/common.less';
</style>
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

        },
        watch:{
            '$route' (to){
//                console.log(this.$store,562325)
            }
        }
    }
</script>
