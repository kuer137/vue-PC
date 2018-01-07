<template>
    <Affix class="ku-login-i18n" :offset-top="20">
        <Span @click="checkChn('cn')">{{ $t('china') }}</Span>
        <Span @click="checkChn('en')">{{ $t('enlish') }}</Span>
    </Affix>
</template>
<style lang="less">
    .ku-login-i18n{
        float: right;
        margin-right: 25px;
        margin-top: 10px;
        cursor: pointer;
        position: fixed;
        top: 0;
        right: 0;
        z-index:999999;
    span{
        color:#fff;
        font-size: 14px;
        padding:8px;
    }
    }
</style>
<script>
    import Vue from 'vue';
    export default {
        methods: {
            checkChn: function (na) {
                if(na=='cn'){
                    console.log(1)
                    Vue.config.lang = 'zh-CN';
                }else{
                    console.log(2);
                    Vue.config.lang = 'en-US';
                }
            }
        }
    }
</script>
