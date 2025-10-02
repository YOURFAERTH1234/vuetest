import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.ts'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'animate.css'
import 'virtual:svg-icons-register'

import SvgIcon from '@/components/business/svgicon/svgicon.vue'
import VueLazyLoad from 'vue3-lazyload'



window.global = window
const pinia = createPinia()
const app = createApp(App).use(router)
app.component('SvgIcon', SvgIcon)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VueLazyLoad, {
    loading: '/loading.gif', // 占位图（加载中）
    error: '/error.png'      // 加载失败时的替代图
})
app.mount('#app')

