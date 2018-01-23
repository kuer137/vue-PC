<template>
    <div>
        <div style="height: 64px;"></div>
        <Header class="fixed-top">
            <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="changeMenu">
                <div class="layout-logo">
                    <img class="ku-logo-img" src="../../images/icon_logo.jpg" alt="logo">
                </div>
                <div class="layout-nav">
                    <MenuItem name="home">
                        {{ $t('headNav') }}
                    </MenuItem>
                    <MenuItem name="shop">
                        {{ $t('shop') }}
                    </MenuItem>
                    <MenuItem name="3">
                        {{ $t('good') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('member') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('distribute') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('information') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('wholesaler') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('website') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('activation') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('statistics') }}
                    </MenuItem>
                    <MenuItem name="4">
                        {{ $t('setup') }}
                    </MenuItem>
                </div>
                <div class="layout-other">
                    <MenuItem name="4">
                        <Button type="primary">{{ $t('area') }}</Button>
                    </MenuItem>
                    <MenuItem name="4">
                        <Button type="warning">{{ $t('signout') }}</Button>
                    </MenuItem>
                </div>
            </Menu>
        </Header>
    </div>
</template>
<style scoped>
    @import "../../styles/common.less";
    .ku-logo-img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        float: left;
        margin-top: 8px;
        margin-right: 30px;
    }
    .layout-other{
        float: right;
        margin-right: 60px;
    }
</style>
<script>
    import router from 'vue-router';
    export default {
        name: 'headNav',
        data() {
            return {
                activeName:'home'
            }
        },
        methods: {
            changeMenu (active) {
                console.log(active,999);
                this.$router.push(active)
            }
        }
    }
</script>
