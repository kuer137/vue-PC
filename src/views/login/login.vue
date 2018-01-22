<template>
    <div class="ku-login-c100">
        <Row>
            <Col span="8" offset="16">
                <Form  class="ku-login-box" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem :label="$t('userName')" prop="userName">
                        <Input v-model="formValidate.userName" :placeholder="$t('userName')" style="width: 300px;">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <br>
                    <FormItem :label="$t('password')" prop="password">
                        <Input v-model="formValidate.password" :placeholder="$t('password')" style="width: 300px;">
                            <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <br>
                    <FormItem>
                        <Button class="ku-login-btn" @click="handleSubmit('formValidate')" icon="log-in" type="info">{{ $t('signin') }}</Button>
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
            margin-left: -80px;
        };
        .ivu-form-item{
            margin-bottom: 0;
        }
    }
</style>
<script>
    import router from 'vue-router';
    export default {
        data () {
            return {
                formValidate: {
                    userName: '',
                    password: ''
                },
                ruleValidate: {
                    userName: [
                        { required: true, message: this.$t('userNnmeNotEnpty'), trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: this.$t('userPasswordEnpty'), trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                const that = this;
                this.$refs[name].validate(function(valid) {
                    if (valid){
                        that.$router.push('page');
                    } else {
                        console.log('fail')
                    }
                })
            }
        }
    }
</script>