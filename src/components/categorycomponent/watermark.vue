<script setup lang="ts">
    import { reactive, watch } from 'vue'

    const font = reactive({
        color: 'rgba(0, 0, 0, .15)',
    })


</script>

<template>
    <el-watermark :font="font">
        <div style="height: 500px" />
    </el-watermark>
</template>
