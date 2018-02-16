
<template>
    <div>
        <Layout :style="{padding: '0 24px 24px', marginLeft: '200px',minHeight:'860px'}">
            <ButtonGroup :style="{margin:'25px 0'}">
                <Button>美食店铺</Button>
                <Button type="primary">汽车店铺</Button>
            </ButtonGroup>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <Row type="flex" justify="space-between">
                    <Col>
                        <router-link :to="'/shop/add'">
                            <Button type="primary" icon="plus-round">添加店铺</Button>
                        </router-link>
                    </Col>
                    <Col>
                        <Form :model="formItem">
                            <Row type="flex" justify="end">
                                <Col>
                                    <FormItem>
                                        <Input class="kuer-w200" v-model="formItem.input" placeholder="请输入店铺名称或店铺ID"></Input>
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem class="kuer-ml10">
                                        <Select class="kuer-w120" v-model="formItem.select" placeholder="选择分类">
                                            <Option value="1">日本菜</Option>
                                            <Option value="2">韩国菜</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem class="kuer-ml10">
                                        <Button type="ghost" class="kuer-w100" style="margin-left: 8px">搜索</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                <section>
                    <Table :columns="columns1" :data="data1"></Table>
                </section>
            </Content>
        </Layout>
    </div>
</template>
<style scoped lang="less">
    @import "../../styles/common.less";
</style>
<script>

    export default {
        components: {
            //
        },
        data () {
            return {
                formItem: {
                    input: '',
                    select: ''
                },
                columns1: [
                    {
                        title: '店铺ID',
                        key: 'id',
                        sortable: true
                    },
                    {
                        title: '店铺名称',
                        key: 'name'
                    },
                    {
                        title: '人均消费(元)',
                        key: 'expense',
                        align:'center',
                        render:(h,params) => {
                            return h('div',[
                                h('Icon',{
                                    props: {
                                        type: 'social-yen'
                                    }
                                }),
                                h('strong', params.row.expense)
                            ]);
                        }
                    },
                    {
                        title: '菜系',
                        key: 'type',
                        align:'center',
                        render:(h,params) => {
                            if(params.row.type==1){
                                return h('span','日本菜');
                            }else{
                                return h('span','韩国菜');
                            }
                        },
                        filters: [  //筛选
                            {
                                label: '日本菜',
                                value: 1
                            },
                            {
                                label: '韩国菜',
                                value: 2
                            }
                        ],
                        filterMultiple: false,  //数据过滤是否为多选，此处为单选
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.type == 1;
                            } else if (value === 2) {
                                return row.type ==2
                            }
                        }
                    },
                    {
                        title:'操作',
                        key:'todo',
                        width: 310,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
//                                    on: {
//                                        click: () => {
//                                            this.show(params.index)
//                                        }
//                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log("商品的序号："+params.index);
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
//                                    on: {
//                                        click: () => {
//                                            this.remove(params.index)
//                                        }
//                                    }
                                }, '发布商品'),
                                h('Button', {
                                    props: {
                                        type: 'ghost',
                                        size: 'small'
                                    },
//                                    on: {
//                                        click: () => {
//                                            this.remove(params.index)
//                                        }
//                                    }
                                }, '商品列表')
                            ]);
                        }
                    }
                ],
                data1: [  //模拟的表格数据
                    {
                        id: '11',
                        name: '我是美食噢噢噢噢',
                        expense: '56',
                        type: 1,
                        todo:'999',
                        other:3
                    },
                    {
                        id: '12',
                        name: '我是美食啦啦啦',
                        expense: '43',
                        type: 2,
                        todo:'000',
                        other:5
                    },
                    {
                        id: '6',
                        name: '超级好吃的店',
                        expense: '100',
                        type: 2,
                        todo:'000',
                        other:3
                    }
                ]
            }
        },
        methods: {
            remove (index) {   //删除
                this.data1.splice(index, 1);
            }
        }
    }
</script>
