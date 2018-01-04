<template>
    <div class="ku-login-c100">
        <Row>
            <Col span="8" offset="16">
                <div class="ku-login-box" align="center">
                    <label for="user">
                        <Input id="user" title="用户名" v-model="value" placeholder="用户名" style="width: 300px;margin-left: 70px;">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </label>
                    <br>
                    <label for="password">
                        <Input id="password" title="用户名" v-model="value" placeholder="密码" style="width: 300px;margin-left: 70px;">
                            <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </label>
                    <br>
                    <Button class="ku-login-btn" icon="log-in" type="info">登录</Button>
                </div>
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
        background-color: rgba(147, 196, 186, 0.5);;
        color: #fff;
        font-size: 14px;
        margin-top: 100px;
        padding-top: 30px;
        margin-right: 50px;
        text-align: center;
        label{
            padding-top: 25px;
        };
        button{
            margin-bottom: 30px;
            width:100px;
        }
    }
</style>