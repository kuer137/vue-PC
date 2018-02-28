
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
                        <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="请选择时间" class="kuer-w200"></TimePicker>
                        <p class="kuer-fs-aaa">24小时制，如10：00-20：30</p>
                    </FormItem>
                    <FormItem label="* 店铺电话：">
                        <Input class="kuer-w340" v-model="formItem.tel" placeholder="请输入店铺电话"></Input>
                    </FormItem>
                    <FormItem label="* 店铺地址：">
                        <al-selector class="add-city-selector" v-model="city" id="city" />
                        <p style="clear: both">
                            <Input class="kuer-w340" v-model="formItem.addressDeatail" placeholder="请输入详细地址"></Input>
                            <Button type="primary" class="kuer-ml15">搜索</Button>
                        </p>
                    </FormItem>
                    <FormItem label="">
                        <div id="container" style="width:80%; height:300px"></div>
                        <div id="tip">
                            <input type="text" id="mapkeyword" name="mapkeyword" value="请输入关键字：(选定后搜索)" onfocus='this.value=""'/>
                        </div>
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
    .add-city-selector{
        float: left;
        width: 600px;
        margin-left: 0;
        margin-bottom: 12px;
    }
    #tip {
        background-color: #ddf;
        color: #333;
        border: 1px solid silver;
        box-shadow: 3px 4px 3px 0px silver;
        position: absolute;
        top: 10px;
        right: 25%;
        border-radius: 5px;
        overflow: hidden;
        line-height: 20px;
    }
    #tip input[type="text"] {
        height: 25px;
        border: 0;
        padding-left: 5px;
        width: 280px;
        border-radius: 3px;
        outline: none;
    }

</style>
<script>

    import AMap from 'AMap'  //引入高德地图
    var map,placeSearch,windowsArr = [],marker = [],citycode=["110000"];
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
                    type:'',
                    tel:'',
                    addressDeatail:''
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
                ],
                res_s: ['河北省', '张家口市', '怀来县', '沙城镇'],  //默认城市
                city:[]
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
            //高德地图组件初始化
            init: function () {
                map = new AMap.Map('container', {
//                    center: [116.397428, 39.90923],
                    resizeEnable: true,
                    zoom: 10
                })
                AMap.plugin(['AMap.ToolBar', 'AMap.Scale','AMap.Autocomplete','AMap.PlaceSearch'], function () {
                    map.addControl(new AMap.ToolBar());
                    map.addControl(new AMap.Scale());
                    //提示搜索法
                    console.log(city[0],453)
                    let autoOptions = {
                        city: citycode, //城市，默认全国
                        input: "mapkeyword"//使用联想输入的input的id
                    };
                    let autocomplete= new AMap.Autocomplete(autoOptions);
                    placeSearch = new AMap.PlaceSearch({
                        city:citycode,
                        map:map
                    });
                    AMap.event.addListener(autocomplete, "select", function(e){
                        //TODO 针对选中的poi实现自己的功能
                        placeSearch.setCity(e.poi.adcode);
                        placeSearch.search(e.poi.name)
                    });
                })
            }
        },
        mounted:function () {
            this.init()
        },
        watch: {
            city (val) {
                if(val[0].code){
                    let code = val[0];
                    let array = [];
                    citycode = array.push(val[0].code);
                    console.log(val,val[0],code.name,code.code,citycode,val.length);

                    let searchWord = '';
                    let serrchCode = val[val.length-1].code;
                    for(var x = 0;x<val.length;x++){
                        searchWord += val[x].name;
                    };
                    console.log(serrchCode,searchWord);
                    this.init();

                    //TODO 针对选中的poi实现自己的功能
                    placeSearch.setCity(serrchCode);
                    placeSearch.search(searchWord)

                }
            }
        }
    }
</script>
