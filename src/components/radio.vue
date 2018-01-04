<template>
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple'
            }
        }
    }
</script>
