<template>
    <div id="app">
        <div class="container">
            <header>
                <h1>Vue3 + Spring Boot WebSocket 聊天室
                    <span class="status" :class="isConnected ? 'connected' : 'disconnected'">
                        {{ isConnected ? '已连接' : '已断开' }}
                    </span>
                </h1>
            </header>

            <div class="chat-container">
                <div class="messages">
                    <div v-for="(message, index) in messages" :key="index"
                        :class="['message', message.type === 'USER' ? 'user' : 'server']">
                        <div>{{ message.content }}</div>
                        <div class="timestamp">{{ formatTime(message.timestamp) }}</div>
                    </div>
                </div>

                <div class="input-area">
                    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息..."
                        :disabled="!isConnected">
                    <button @click="sendMessage" :disabled="!isConnected || !newMessage">发送</button>
                </div>
            </div>

            <div class="user-list">
                <h3>在线用户 ({{ users.length }})</h3>
                <div class="users">
                    <div v-for="(user, index) in users" :key="index" class="user">{{ user }}</div>
                </div>
            </div>
        </div>
    </div>

</template>


<script lang="ts" setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    const isConnected = ref(false);
    const newMessage = ref('');
    const messages: any = ref([]);
    const users = ref([]);
    let websocket: any = null;

    const connectWebSocket = () => {
        // 根据你的后端地址修改这里
        const socketUrl = 'ws://localhost:8081/chat';
        websocket = new WebSocket(socketUrl);

        websocket.onopen = () => {
            isConnected.value = true;
            addMessage('系统', '已连接到聊天服务器', 'SERVER');
        };

        websocket.onmessage = (event: any) => {
            const data = JSON.parse(event.data);

            if (data.type === 'MESSAGE') {
                addMessage(data.sender, data.content, data.type);
            } else if (data.type === 'USER_JOINED') {
                addMessage('系统', `${data.sender} 加入了聊天室`, 'SERVER');
                users.value = data.users;
            } else if (data.type === 'USER_LEFT') {
                addMessage('系统', `${data.sender} 离开了聊天室`, 'SERVER');
                users.value = data.users;
            } else if (data.type === 'USER_LIST') {
                users.value = data.users;
            }
        };

        websocket.onclose = () => {
            isConnected.value = false;
            addMessage('系统', '与服务器的连接已断开', 'SERVER');
        };

        websocket.onerror = (error: any) => {
            console.error('WebSocket错误:', error);
            addMessage('系统', '连接发生错误', 'SERVER');
        };
    };

    const sendMessage = () => {
        if (newMessage.value.trim() && websocket && isConnected.value) {
            const message = {
                type: 'MESSAGE',
                content: newMessage.value.trim(),
                timestamp: new Date().getTime()
            };

            websocket.send(JSON.stringify(message));
            newMessage.value = '';
        }
    };

    const addMessage = (sender: any, content: any, type: any) => {
        messages.value.push({
            sender,
            content,
            type,
            timestamp: new Date().getTime()
        });

        // 滚动到底部
        setTimeout(() => {
            const messagesContainer: any = document.querySelector('.messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 10);
    };

    const formatTime = (timestamp: any) => {
        const date = new Date(timestamp);
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    onMounted(() => {
        connectWebSocket();
    });

    onUnmounted(() => {
        if (websocket) {
            websocket.close();
        }
    });
</script>


<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f7fa;
        color: #333;
        line-height: 1.6;
        padding: 20px;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    header {
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        color: white;
        padding: 20px;
        text-align: center;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .status {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 14px;
        margin-left: 10px;
    }

    .connected {
        background-color: #4caf50;
    }

    .disconnected {
        background-color: #f44336;
    }

    .chat-container {
        display: flex;
        flex-direction: column;
        height: 500px;
    }

    .messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        background-color: #f9f9f9;
    }

    .message {
        margin-bottom: 15px;
        padding: 10px 15px;
        border-radius: 18px;
        max-width: 80%;
        word-wrap: break-word;
    }

    .message.user {
        background-color: #e3f2fd;
        margin-left: auto;
        border-bottom-right-radius: 5px;
    }

    .message.server {
        background-color: #f1f0f0;
        margin-right: auto;
        border-bottom-left-radius: 5px;
    }

    .timestamp {
        font-size: 12px;
        color: #777;
        margin-top: 5px;
        text-align: right;
    }

    .input-area {
        display: flex;
        padding: 15px;
        background-color: white;
        border-top: 1px solid #eee;
    }

    input {
        flex: 1;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 25px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: #a777e3;
    }

    button {
        padding: 12px 25px;
        margin-left: 10px;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        transition: opacity 0.3s;
    }

    button:hover {
        opacity: 0.9;
    }

    button:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    .user-list {
        padding: 15px;
        background-color: #f9f9f9;
        border-top: 1px solid #eee;
    }

    .user-list h3 {
        margin-bottom: 10px;
        color: #666;
    }

    .users {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .user {
        background-color: #e3f2fd;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
    }
</style>