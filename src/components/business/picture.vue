<template>
    <div class="comic-container" ref="container">
        <div v-for="(img, index) in images" :key="index" class="comic-page">
            <img v-lazy="img" :alt="'page-' + index" class="comic-img" />
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import axios from "axios";

    const images = ref([]);

    onMounted(() => {
        axios.get("http://localhost:8081/api/comics").then(res => {
            // 拼接访问路径
            images.value = res.data.map(name => `http://localhost:8081/${name}`);
        });
        console.log(images.value)
    });
</script>

<style scoped>
    .comic-container {
        width: 100%;
        max-width: 800px;
        margin: auto;
        height: 100vh;
        overflow-y: auto;
        background: #111;
        padding: 10px;

    }

    .comic-page {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    .comic-img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        background: #222;
        padding: 0px;
        margin: 0px;
        display: block;
        /* 防止 inline 元素造成的空隙 */
    }

</style>
