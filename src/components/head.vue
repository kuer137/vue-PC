<template>
    <Menu ref="sideMenu" id="head_nav" mode="horizontal" theme="primary" active-name="1" @on-select="changeMenu">
        <MenuItem name="index">
            <Icon type="ios-paper"></Icon>
            导航
        </MenuItem>
        <MenuItem name="form">
            <Icon type="ios-people"></Icon>
            表单
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
    </Menu>
</template>
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
