<template>
    <div>
        <Sider class="fixed-left" hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        店铺列表
                    </template>
                    <MenuItem name="1-1">店铺列表</MenuItem>
                    <MenuItem name="1-2">添加店铺</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        店铺分类
                    </template>
                    <MenuItem name="2-1">分类列表</MenuItem>
                    <MenuItem name="2-2">添加分类</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
    </div>
</template>
<style scoped>
    .fixed-left{
        position: fixed;
        left: 0;
        width:200px;
        height: 100%;
        top:64px;
    }
</style>
<script>
    console.log(this.$route,889)
    export default {}
</script>
