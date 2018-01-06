<template>
    <div class="ku-login-c100">
        <Row>
            <Col span="8" offset="16">
                <Form  class="ku-login-box" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="用户名" prop="userName">
                        <Input v-model="formValidate.userName" placeholder="用户名" style="width: 300px;">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <br>
                    <FormItem label="password" prop="password">
                        <Input v-model="formValidate.password" placeholder="密码" style="width: 300px;">
                            <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <br>
                    <FormItem>
                        <Button class="ku-login-btn" @click="handleSubmit('formValidate')" icon="log-in" type="info">登录1</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>
<style lang="less" scoped>
    @import '../../styles/common.less';
    .ku-login-c100 {
        &:extend(.ku-w100);
        height: 100%;
        position: fixed;
        top:0;
        left:0;
        background: url("../../images/login-bg.jpg");
        background-size: cover;
    }
    .ku-login-box{
        width: 450px;
        background-color: rgba(147, 196, 186, 0.5);;
        color: #fff;
        font-size: 14px;
        margin-top: 100px;
        padding-top: 30px;
        text-align: center;
        padding-left: 25px;
        button{
            margin-bottom: 30px;
            width:100px;
        };
        .ivu-form-item{
            margin-bottom: 0;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    userName: '',
                    password: ''
                },
                ruleValidate: {
                    userName: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate(function(valid) {
                    if (valid){
                        console.log('success')
                    } else {
                        console.log('fail')
                    }
                })
            }
        }
    }
</script>