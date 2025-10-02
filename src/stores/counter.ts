import { defineStore } from 'pinia'

// 定义一个 counter store
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        },
        reset() {
            this.count = 0
        }
    }
})
