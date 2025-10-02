<template>
    <div>
        <el-button type="primary" @click="downloadFile">下载文件</el-button>
    </div>
</template>

<script setup>
    import axios from 'axios'
    import { saveAs } from 'file-saver'

    const downloadFile = () => {
        axios.get('http://localhost:8081/files/download', {
            responseType: 'blob' // 关键：告诉 axios 返回二进制流
        }).then(res => {
            // 生成 blob 并保存
            const blob = new Blob([res.data], { type: res.headers['content-type'] })
            saveAs(blob, 'example.pdf') // 第二个参数是保存的文件名
        }).catch(err => {
            console.error('下载失败', err)
        })
    }
</script>