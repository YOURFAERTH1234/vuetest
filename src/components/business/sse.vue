<template>
    <div class="app">
        <header class="header">
            <h1>🔔 SSE 实时消息演示</h1>
            <p>每5秒从后端接收一条随机消息</p>
        </header>

        <main class="main">
            <div class="controls">
                <button @click="startSSE" :disabled="isConnected" class="btn btn-primary">
                    🚀 开始连接
                </button>
                <button @click="stopSSE" :disabled="!isConnected" class="btn btn-danger">
                    ⏹️ 停止连接
                </button>
                <button @click="clearMessages" class="btn btn-secondary">
                    🗑️ 清空消息
                </button>
            </div>

            <div class="status">
                <span class="status-indicator" :class="{ active: isConnected }">
                    {{ isConnected ? '🟢 已连接' : '🔴 未连接' }}
                </span>
                <span class="message-count">
                    消息数量: {{ messages.length }}
                </span>
            </div>

            <div class="messages-container">
                <div v-if="messages.length === 0" class="empty-state">
                    <p>暂无消息，点击"开始连接"按钮开始接收SSE消息</p>
                </div>

                <div v-for="(message, index) in messages" :key="index" class="message" :class="{
                    'new': index === 0,
                    'connection-message': message.content.includes('SSE连接已建立')
                }">
                    <div class="message-header">
                        <span class="timestamp">{{ formatTime(message.timestamp) }}</span>
                        <span class="message-number">#{{ messages.length - index }}</span>
                        <span v-if="message.content.includes('SSE连接已建立')" class="connection-badge">🔗 连接</span>
                    </div>
                    <div class="message-content">{{ message.content }}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { ref, onUnmounted } from 'vue'

    export default {
        name: 'App',
        setup() {
            const messages = ref([])
            const isConnected = ref(false)
            let eventSource = null

            const startSSE = () => {
                if (eventSource) {
                    eventSource.close()
                }

                try {
                    eventSource = new EventSource('http://localhost:8081/api/sse/stream')

                    eventSource.onopen = () => {
                        isConnected.value = true
                        console.log('SSE连接已建立')
                    }

                    eventSource.onmessage = (event) => {
                        const newMessage = {
                            content: event.data,
                            timestamp: new Date(),
                            type: event.type || 'message'
                        }
                        messages.value.unshift(newMessage)

                        // 限制消息数量，避免内存占用过多
                        if (messages.value.length > 100) {
                            messages.value = messages.value.slice(0, 100)
                        }
                    }

                    eventSource.onerror = (error) => {
                        console.error('SSE连接错误:', error)
                        isConnected.value = false
                        if (eventSource) {
                            eventSource.close()
                            eventSource = null
                        }
                    }
                } catch (error) {
                    console.error('启动SSE连接失败:', error)
                    alert('连接失败，请检查后端服务是否运行')
                }
            }

            const stopSSE = () => {
                if (eventSource) {
                    eventSource.close()
                    eventSource = null
                }
                isConnected.value = false
                console.log('SSE连接已关闭')
            }

            const clearMessages = () => {
                messages.value = []
            }

            const formatTime = (timestamp) => {
                return timestamp.toLocaleTimeString('zh-CN', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })
            }

            // 组件卸载时清理连接
            onUnmounted(() => {
                if (eventSource) {
                    eventSource.close()
                }
            })

            return {
                messages,
                isConnected,
                startSSE,
                stopSSE,
                clearMessages,
                formatTime
            }
        }
    }
</script>

<style scoped>
    .app {
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .header {
        text-align: center;
        padding: 2rem 1rem;
        color: white;
    }

    .header h1 {
        margin: 0 0 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 300;
    }

    .header p {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .main {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem 2rem;
    }

    .controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 120px;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #4CAF50;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #45a049;
        transform: translateY(-2px);
    }

    .btn-danger {
        background: #f44336;
        color: white;
    }

    .btn-danger:hover:not(:disabled) {
        background: #da190b;
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: #2196F3;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #0b7dda;
        transform: translateY(-2px);
    }

    .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: white;
    }

    .status-indicator {
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.2);
    }

    .status-indicator.active {
        background: rgba(76, 175, 80, 0.8);
    }

    .message-count {
        font-size: 0.9rem;
        opacity: 0.8;
    }

    .messages-container {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
    }

    .empty-state {
        text-align: center;
        padding: 3rem 1rem;
        color: #666;
    }

    .empty-state p {
        margin: 0;
        font-size: 1.1rem;
    }

    .message {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 12px;
        background: #f8f9fa;
        border-left: 4px solid #007bff;
        transition: all 0.3s ease;
    }

    .message.new {
        background: #e3f2fd;
        border-left-color: #2196F3;
        animation: slideIn 0.5s ease-out;
    }

    .message.connection-message {
        background: #e8f5e8;
        border-left-color: #4CAF50;
    }

    .connection-badge {
        background: #4CAF50;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 0.5rem;
    }

    .message:last-child {
        margin-bottom: 0;
    }

    .message-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .timestamp {
        font-size: 0.85rem;
        color: #666;
        font-weight: 500;
    }

    .message-number {
        background: #007bff;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
    }

    .message-content {
        font-size: 1rem;
        color: #333;
        line-height: 1.5;
        word-break: break-word;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .header h1 {
            font-size: 2rem;
        }

        .controls {
            flex-direction: column;
            align-items: center;
        }

        .btn {
            width: 100%;
            max-width: 200px;
        }

        .status {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
</style>
