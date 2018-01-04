<template>
    <div>
        <head-nav></head-nav>
        <el-tap></el-tap>
        <el-step></el-step>
    </div>
</template>
<script>
    import headNav from '../components/head'
    import elTap from '../components/tap'
    import elStep from '../components/step'
    export default {
        components: {
            elTap,
            elStep,
            headNav
        }
    }
</script>
