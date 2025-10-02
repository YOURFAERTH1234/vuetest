<template>
    <div class="about">
        <h1>This is the About page</h1>
        <p>about当前数量：{{ counter.count }}</p>
        <p>about两倍数量：{{ counter.doubleCount }}</p>
        <button @click="counter.increment">+1</button>
        <button @click="counter.reset">重置</button>
    </div>
</template>

<script setup lang="ts">
    import { useCounterStore } from '../stores/counter'

    const counter = useCounterStore()
</script>