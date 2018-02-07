
<template>
    <div>
        <Layout :style="{padding: '0 24px 24px', marginLeft: '200px',minHeight:'860px'}">
            <ButtonGroup :style="{margin:'25px 0'}">
                <Button>美食店铺</Button>
                <Button type="primary">汽车店铺</Button>
            </ButtonGroup>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                Content
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
        }
    }
</script>
