
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
                    <FormItem label="* 店铺头像：">
                        <div>
                            <div class="add-upload-img">
                                <Icon type="image" size="20"></Icon>
                            </div>
                            <Upload action="http://localhost:8080/#/shop/add/0"
                                    :on-progress="handleProgress"
                                    :on-success="handleSuccess"
                                    :on-error="handleError">
                                <Button type="ghost" icon="ios-cloud-upload-outline">图片上传</Button>
                            </Upload>
                        </div>
                        <p class="kuer-fs-aaa">支持jpg、gif、png格式；建议尺寸: 150* 150 ；不超过2M。</p>
                    </FormItem>
                    <FormItem label="* 店铺主图：">
                        <div>
                            <div class="add-upload-img">
                                <Icon type="image" size="20"></Icon>
                            </div>
                            <Upload action="http://localhost:8080/#/shop/add/0"
                                    :on-progress="handleProgress"
                                    :on-success="handleSuccess"
                                    :on-error="handleError">
                                <Button type="ghost" icon="ios-cloud-upload-outline">图片上传</Button>
                            </Upload>
                        </div>
                        <p class="kuer-fs-aaa">支持jpg、gif、png格式；建议尺寸: 150* 150 ；不超过2M。</p>
                    </FormItem>
                    <FormItem label="* 营业时间：">
                        <Row>
                            <Col>
                                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                            </Col>
                            <Col style="text-align: center">-</Col>
                            <Col>
                                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                            </Col>
                        </Row>
                        <p class="kuer-fs-aaa">24小时制，如10：00-20：30</p>
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
    .add-upload-img{
        width: 58px;
        height:58px;
        line-height: 58px;
        text-align: center;
        display: inline-block;
        float: left;
        border:1px dashed #ccc;
        margin-right: 25px;
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
                    consume:1,  //数字输入框，默认必须是数字
                    privilege:1,
                    type:''
                },
                typeList:[  //店铺分类列表
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
        },
        methods: {
            handleProgress(res,file,fileList){
                console.log("上传的进程的图片内容：res="+res+";file="+file);
                console.log(res)
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
                console.log('上传成功的图片内容：res='+res+";file="+file);
            },
            handleError(res,file,fileList){
                console.log("上传的失败的图片内容：res="+res+";file="+file);
            },
        }
    }
</script>
