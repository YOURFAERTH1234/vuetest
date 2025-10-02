<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import { useCounterStore } from './stores/counter'
  import { provide, ref } from 'vue'
  import Child from './components/child.vue'
  const message = ref('Hello from Parent')
  provide('sharedMessage', message)
  const counter = useCounterStore()
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <el-button>Default</el-button>
  <div>
    <h1>父组件</h1>
    <p>父组件的数据：{{ message }}</p>
    <!-- 提供数据给子组件 -->
    <Child />
  </div>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <p>当前数量：{{ counter.count }}</p>
  <p>两倍数量：{{ counter.doubleCount }}</p>
  <button @click="counter.increment">+1</button>
  <button @click="counter.reset">重置</button>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-view />
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
