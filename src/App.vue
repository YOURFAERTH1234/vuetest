<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import { useCounterStore } from './stores/counter'
  import { provide, ref } from 'vue'

</script>

<template>

  <div class="view-container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>

  .view-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* 防止滑出内容撑开 */
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 1s ease, opacity 1s ease;
    position: absolute;
    /* 避免两个页面叠在一起撑开布局 */
    width: 100%;
  }

  /* 初始进入状态：在左边屏幕外 */
  .slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
  }

  /* 进入完成：回到原位 */
  .slide-enter-to {
    transform: translateX(0);
    opacity: 1;
  }

  /* 离开开始：在原位 */
  .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }

  /* 离开结束：滑到右边屏幕外 */
  .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
