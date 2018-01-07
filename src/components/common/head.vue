<template>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="changeMenu">
        <div class="layout-logo">
            <img class="ku-logo-img" src="../../images/icon_logo.jpg" alt="logo">
        </div>
        <div class="layout-nav">
            <MenuItem name="index">
                <Icon type="ios-navigate"></Icon>
                {{ $t('headNav') }}
            </MenuItem>
            <MenuItem name="form">
                <Icon type="ios-keypad"></Icon>
                Item 2
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
            </MenuItem>
            <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
            </MenuItem>
        </div>
    </Menu>
</template>
<style scoped>
    .ku-logo-img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        float: left;
        margin-top: 8px;
        margin-right: 60px;
    }
</style>
<script>
    import router from 'vue-router';
    export default {
        name: 'headNav',
        methods: {
            changeMenu (active) {
                console.log(active,999)
                this.$router.push(active)
            }
        }
    }
</script>
