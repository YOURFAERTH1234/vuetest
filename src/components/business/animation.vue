<template>
    <div class="container">
        <button @click="show = !show">
            切换显示
        </button>

        <!-- 用 transition 包裹目标元素 -->
        <transition enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp">
            <div v-if="show" class="box">
                Hello Animate.css 🎉
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const show = ref(true)
</script>

<style scoped>
    .container {
        text-align: center;
        margin-top: 40px;
    }

    .box {
        margin: 20px auto;
        padding: 20px;
        width: 200px;
        background: #42b983;
        color: white;
        border-radius: 8px;
    }
</style>