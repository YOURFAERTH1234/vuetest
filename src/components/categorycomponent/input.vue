<template>
    <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const textarea = ref('')
    const num = ref(1)
    const handleChange = (value: number) => {
        console.log(value)
    }
</script>
