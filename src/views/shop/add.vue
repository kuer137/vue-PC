
<template>
    <div>
        <Layout :style="{padding: '0 24px 24px', marginLeft: '200px',minHeight:'860px'}">
            <Breadcrumb class="add-ptb25" separator=">">
                <BreadcrumbItem to="/shop/list">店铺列表</BreadcrumbItem>
                <BreadcrumbItem to="/shop/add/0">添加店铺</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <Form :model="formItem" :label-width="120">
                    <FormItem label="行业：">
                        <span>美食</span>
                    </FormItem>
                    <FormItem label="* 店铺名称：">
                        <Input class="kuer-w340" v-model="formItem.name" placeholder="请输入店铺名称"></Input>
                    </FormItem>
                    <FormItem label="* 人均消费：">
                        <InputNumber class="kuer-w340" :max="999999" :min="1" v-model="formItem.consume" placeholder="请输入人均消费"></InputNumber>
                    </FormItem>
                    <FormItem label="店铺优惠：">
                        满 <InputNumber class="kuer-w100" :max="999999" :min="1" v-model="formItem.privilege"></InputNumber> 元送
                        <p class="kuer-fs-aaa">不填的话店铺商品任意消费都赠送</p>
                    </FormItem>
                    <FormItem label="* 店铺分类：">
                        <Select class="kuer-w200" v-model="formItem.type">
                            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                </Form>
            </Content>
        </Layout>
    </div>
</template>
<style scoped lang="less">
    @import "../../styles/common.less";
    .add-ptb25{
        padding:25px 10px;
    }
</style>
<script>

    export default {
        components: {
            //
        },
        data() {
            return {
                formItem:{
                    name:'',
                    consume:1,
                    privilege:1,
                    type:''
                },
                typeList:[
                    {
                        value: 1,
                        label: '日本菜'
                    },
                    {
                        value: 2,
                        label: '韩国菜'
                    }
                ]
            }
        }
    }
</script>
