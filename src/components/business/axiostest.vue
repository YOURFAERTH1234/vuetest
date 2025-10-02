<template>
    <div>
        <img :src="imgUrl" @click="refresh" alt="captcha" style="cursor:pointer;">
        <p>点击图片刷新</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const imgUrl = ref(getUrl())

    function getUrl() {
        // 加时间戳防止缓存
        return 'http://localhost:8081/satoken/api/captcha?t=' + Date.now()
    }
    function refresh() {
        imgUrl.value = getUrl()
    }
</script>