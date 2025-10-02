<template>
    <div>
        <h2>子组件</h2>
        <p>接收到的数据：{{ sharedMessage }}</p>
        <button @click="sharedMessage = '子组件修改了父数据'">修改数据</button>
    </div>
</template>

<script setup lang="ts">
    import { inject } from 'vue'

    // inject 获取父组件提供的数据
    const sharedMessage = inject('sharedMessage')

    // 保险起见，给一个默认值（避免父组件没 provide 时报错）
    if (!sharedMessage) {
        throw new Error('sharedMessage 没有被提供')
    }
</script>
