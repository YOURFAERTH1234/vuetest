<template>
    <div>
        <el-upload :http-request="uploadRequest" :show-file-list="false">
            <el-button type="primary">选择文件上传</el-button>
        </el-upload>

        <el-progress v-if="progress > 0" :percentage="progress" style="margin-top: 20px; width: 300px;" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

    const progress = ref(0)

    const uploadRequest = (option) => {
        const formData = new FormData()
        formData.append('file', option.file)

        axios.post('http://localhost:8081/files/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (e) => {
                if (e.total > 0) {
                    progress.value = Math.round((e.loaded * 100) / e.total)
                }
            }
        }).then(res => {
            option.onSuccess(res.data)
        }).catch(err => {
            option.onError(err)
        })
    }
</script>
