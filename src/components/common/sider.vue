<template>
    <div>
        <Sider class="fixed-left" hide-trigger :style="{background: '#fff'}">
            <Menu ref="side_menu" :active-name="activeVal" theme="light" width="auto" :open-names="openVal" @on-select="changeMenu" @on-open-change="openChangeMenu" accordion>
                <Submenu v-for="row in theme" :key="row.val" :name="row.val">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        {{ row.name }}
                    </template>
                    <MenuItem v-for="two in row.twoList" :key="two.val" :name="two.routes">{{ two.name }}</MenuItem>
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
    export default {
        name:'comSider',
        props: {   //父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息
            //子组件要显式地用 props 选项声明它预期的数据(此处是子组件)
            theme:Array,  //列表
            openVal:{
                type:Array
            },  //打开的栏目
            activeVal:String  //选中的栏目
        },
        methods: {
            openChangeMenu(name){
                console.log(name,898989)
            },
            changeMenu (active) {
                this.$router.push(this.$store.state.routerParse+ '/' +active);
                console.log(active,111222333);
            }
        }
    }
</script>
