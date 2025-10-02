<template>
    <div class="p-4">
        <div v-if="!token">
            <h2>登录</h2>
            <input v-model="username" placeholder="用户名" />
            <input v-model="password" placeholder="密码" type="password" />
            <button @click="login">登录</button>
        </div>

        <div v-else>
            <p>已登录，token: {{ token }}</p>
            <button @click="getUserInfo">获取用户信息</button>
            <p v-if="userId">当前用户ID：{{ userId }}</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const username = ref('admin')
    const password = ref('123456')
    const token = ref(localStorage.getItem('token') || '')
    const userId = ref('')

    function login() {
        fetch('http://localhost:8081/satokentwo/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${username.value}&password=${password.value}`
        })
            .then(res => res.text())
            .then(tk => {
                token.value = tk
                localStorage.setItem('token', tk)
            })
    }

    function getUserInfo() {
        fetch('http://localhost:8081/satokentwo/userinfo', {
            headers: { 'satoken': token.value }
        })
            .then(res => res.text())
            .then(id => {
                userId.value = id
            })
    }
</script>
