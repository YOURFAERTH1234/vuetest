// 1. 按需引入所需的 API
import { createRouter, createWebHistory } from 'vue-router'
// 2. 引入你的路由组件
import HomeView from '../components/HomeView.vue' // 需要创建这个组件
import AboutView from '../components/AboutView.vue' // 需要创建这个组件

// 3. 定义路由规则
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/AboutView.vue')
    }
]

// 4. 创建路由实例
const router = createRouter({
    // 使用 HTML5 历史模式 (需要服务器支持)
    history: createWebHistory(),
    routes // 缩写，相当于 `routes: routes`
})

// 5. 导出路由实例
export default router