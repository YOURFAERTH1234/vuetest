<template>
    <div class="chat">
        <div class="messages" ref="msgWrap">
            <div v-for="(m, i) in messages" :key="i" class="msg">
                <strong>{{ m.from }}:</strong> {{ m.text }}
            </div>
        </div>


        <div class="controls">
            <input v-model="name" placeholder="你的名字" />
            <input v-model="input" @keyup.enter="send" placeholder="输入消息并回车" />
            <button @click="connect" v-if="!connected">连接</button>
            <button @click="disconnect" v-if="connected">断开</button>
        </div>
    </div>
</template>


<script setup>
    import { ref, onUnmounted } from 'vue'
    import { Client } from '@stomp/stompjs'
    import SockJS from 'sockjs-client'
    const messages = ref([])
    const input = ref('')
    const name = ref('匿名')
    const connected = ref(false)
    let stompClient = null


    function connect() {
        // 使用 SockJS + stompClient
        stompClient = new Client({
            // 使用 webSocketFactory 以支持 SockJS
            webSocketFactory: () => new SockJS('http://localhost:8081/ws'),
            debug: function (str) {
                console.log(str)
            },
            onConnect: function (frame) {
                console.log('connected', frame)
                connected.value = true
                // 订阅公共频道
                stompClient.subscribe('/topic/public', function (message) {
                    const body = JSON.parse(message.body)
                    messages.value.push(body)
                    // 滚动到底部
                    setTimeout(() => {
                        const wrap = document.querySelector('.messages')
                        if (wrap) wrap.scrollTop = wrap.scrollHeight
                    }, 0)
                })


                // 发送一个加入通知（可选）
                stompClient.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify({ from: name.value, text: name.value + ' 加入了聊天室', type: 'JOIN' }) })
            },
            onStompError: function (frame) {
                console.error('Broker reported error: ' + frame.headers['message'])
                console.error('Additional details: ' + frame.body)
            }
        })


        stompClient.activate()
    }


    function send() {
        if (!stompClient || !connected.value) return
        const msg = { from: name.value, text: input.value, type: 'CHAT' }
        stompClient.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(msg) })
        input.value = ''
    }


    function disconnect() {
        if (stompClient) {
            stompClient.deactivate()
            connected.value = false
        }
    }


    onUnmounted(() => {
        if (stompClient) stompClient.deactivate()
    })
</script>


<style scoped>
    .chat {
        width: 400px;
        margin: 12px auto;
    }

    .messages {
        height: 300px;
        overflow-y: auto;
        border: 1px solid #eee;
        padding: 8px
    }

    .msg {
        margin-bottom: 6px
    }

    .controls {
        display: flex;
        gap: 8px;
        margin-top: 8px
    }

    .controls input {
        flex: 1
    }
</style>