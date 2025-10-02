// 1. 按需引入所需的 API
import { createRouter, createWebHistory } from 'vue-router'
// 2. 引入你的路由组件


const layout = () =>
    import(/* webpackChunkName: "Home" */ '@/layout/layout.vue')
const layout2 = () =>
    import(/* webpackChunkName: "Home" */ '@/layout/layout2.vue')
// 3. 定义路由规则
const routes = [
    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [
            {
                path: '',
                name: 'test',
                component: () => import('@/components/basic1.vue'),
            },
            {
                path: 'basic2',
                component: () => import('@/components/basic1.vue'),
            },
            {
                path: 'autocomplete',
                component: () => import('@/components/categorycomponent/autocomplete.vue'),
            },
            {
                path: 'avatar',
                component: () => import('@/components/categorycomponent/avatar.vue'),
            },
            {
                path: 'badge',
                component: () => import('@/components/categorycomponent/badge.vue'),
            },

            {
                path: 'buju',
                component: () => import('@/components/categorycomponent/buju.vue'),
            },
            {
                path: 'calendar',
                component: () => import('@/components/categorycomponent/calendar.vue'),
            },
            {
                path: 'card',
                component: () => import('@/components/categorycomponent/card.vue'),
            },
            {
                path: 'carousel',
                component: () => import('@/components/categorycomponent/carousel.vue'),
            },
            {
                path: 'cascade',
                component: () => import('@/components/categorycomponent/cascade.vue'),
            },
            {
                path: 'checkbox',
                component: () => import('@/components/categorycomponent/checkbox.vue'),
            }, {
                path: 'collapse',
                component: () => import('@/components/categorycomponent/collapse.vue'),
            }, {
                path: 'colorpicker',
                component: () => import('@/components/categorycomponent/colorpicker.vue'),
            }, {
                path: 'configprovider',
                component: () => import('@/components/categorycomponent/configprovider.vue'),
            }, {
                path: 'container',
                component: () => import('@/components/categorycomponent/container.vue'),
            }, {
                path: 'datepicker',
                component: () => import('@/components/categorycomponent/datepicker.vue'),
            }, {
                path: 'datetimepicker',
                component: () => import('@/components/categorycomponent/datetimepicker.vue'),
            }, {
                path: 'description',
                component: () => import('@/components/categorycomponent/description.vue'),
            }, {
                path: 'dialog',
                component: () => import('@/components/categorycomponent/dialog.vue'),
            }, {
                path: 'drawer',
                component: () => import('@/components/categorycomponent/drawer.vue'),
            }, {
                path: 'dropdownmenu',
                component: () => import('@/components/categorycomponent/dropdownmenu.vue'),
            }, {
                path: 'form',
                component: () => import('@/components/categorycomponent/form.vue'),
            }, {
                path: 'image',
                component: () => import('@/components/categorycomponent/image.vue'),
            }, {
                path: 'infinitescroll',
                component: () => import('@/components/categorycomponent/infinitescroll.vue'),
            }, {
                path: 'input',
                component: () => import('@/components/categorycomponent/input.vue'),
            }, {
                path: 'loading',
                component: () => import('@/components/categorycomponent/loading.vue'),
            }, {
                path: 'menu',
                component: () => import('@/components/categorycomponent/menu.vue'),
            }, {
                path: 'message',
                component: () => import('@/components/categorycomponent/message.vue'),
            }, {
                path: 'messagebox',
                component: () => import('@/components/categorycomponent/messagebox.vue'),
            }, {
                path: 'notification',
                component: () => import('@/components/categorycomponent/notification.vue'),
            }, {
                path: 'pageheader',
                component: () => import('@/components/categorycomponent/pageheader.vue'),
            }, {
                path: 'popover',
                component: () => import('@/components/categorycomponent/popover.vue'),
            }, {
                path: 'progress',
                component: () => import('@/components/categorycomponent/progress.vue'),
            }, {
                path: 'radio',
                component: () => import('@/components/categorycomponent/radio.vue'),
            }, {
                path: 'rate',
                component: () => import('@/components/categorycomponent/rate.vue'),
            }, {
                path: 'result',
                component: () => import('@/components/categorycomponent/result.vue'),
            }, {
                path: 'scroll',
                component: () => import('@/components/categorycomponent/scroll.vue'),
            }, {
                path: 'select',
                component: () => import('@/components/categorycomponent/select.vue'),
            }, {
                path: 'skeleton',
                component: () => import('@/components/categorycomponent/skeleton.vue'),
            }, {
                path: 'slider',
                component: () => import('@/components/categorycomponent/slider.vue'),
            }, {
                path: 'space',
                component: () => import('@/components/categorycomponent/space.vue'),
            }, {
                path: 'statistic',
                component: () => import('@/components/categorycomponent/statistic.vue'),
            }, {
                path: 'steps',
                component: () => import('@/components/categorycomponent/steps.vue'),
            }, {
                path: 'switch',
                component: () => import('@/components/categorycomponent/switch.vue'),
            }, {
                path: 'table',
                component: () => import('@/components/categorycomponent/table.vue'),
            }, {
                path: 'tabs',
                component: () => import('@/components/categorycomponent/tabs.vue'),
            }, {
                path: 'timeline',
                component: () => import('@/components/categorycomponent/timeline.vue'),
            }, {
                path: 'timepicker',
                component: () => import('@/components/categorycomponent/timepicker.vue'),
            }, {
                path: 'timeselect',
                component: () => import('@/components/categorycomponent/timeselect.vue'),
            }, {
                path: 'tooltip',
                component: () => import('@/components/categorycomponent/tooltip.vue'),
            }, {
                path: 'tour',
                component: () => import('@/components/categorycomponent/tour.vue'),
            }, {
                path: 'transfer',
                component: () => import('@/components/categorycomponent/transfer.vue'),
            }, {
                path: 'tree',
                component: () => import('@/components/categorycomponent/tree.vue'),
            }, {
                path: 'treeselect',
                component: () => import('@/components/categorycomponent/treeselect.vue'),
            }, {
                path: 'upload',
                component: () => import('@/components/categorycomponent/upload.vue'),
            }, {
                path: 'virtualselect',
                component: () => import('@/components/categorycomponent/virtualselect.vue'),
            }, {
                path: 'virtualtable',
                component: () => import('@/components/categorycomponent/virtualtable.vue'),
            }, {
                path: 'virtualtree',
                component: () => import('@/components/categorycomponent/virtualtree.vue'),
            }, {
                path: 'watermark',
                component: () => import('@/components/categorycomponent/watermark.vue'),
            },
        ],
    },
    {
        path: '/layout2/',
        name: 'layout2',
        component: layout2,
        children: [
            {
                path: '',
                name: 'animation',
                component: () => import('@/components/business/animation.vue'),
            },
            {
                path: 'sse',
                name: 'sse',
                component: () => import('@/components/business/sse.vue'),
            },
            {
                path: 'websocket',
                name: 'websocket',
                component: () => import('@/components/business/websocket.vue'),
            },
            {
                path: 'svgicon',
                name: 'svgicon',
                component: () => import('@/components/business/svgicon/svgexam.vue'),
            },
            {
                path: 'filedownload',
                name: 'filedownload',
                component: () => import('@/components/business/filedownload.vue'),
            },
            {
                path: 'fileupload',
                name: 'fileupload',
                component: () => import('@/components/business/fileupload.vue'),
            },
            {
                path: 'video',
                name: 'video',
                component: () => import('@/components/business/video.vue'),
            },
            {
                path: 'deepseekone',
                name: 'deepseekone',
                component: () => import('@/components/business/deepseekone.vue'),
            },
            {
                path: 'picture',
                name: 'picture',
                component: () => import('@/components/business/picture.vue'),
            },
            {
                path: 'websocchat',
                name: 'websocchat',
                component: () => import('@/components/business/websocchat.vue'),
            },
            {
                path: 'xuanran',
                name: 'xuanran',
                component: () => import('@/components/business/xuanran.vue'),
            },
            {
                path: 'jsxxuanran',
                name: 'jsxxuanran',
                component: () => import('@/components/business/jsxxuanran.vue'),
            },
            {
                path: 'echarts',
                name: 'echarts',
                component: () => import('@/components/business/echarts.vue'),
            },
            {
                path: 'axiostest',
                name: 'axiostest',
                component: () => import('@/components/business/axiostest.vue'),
            },
            {
                path: 'satoken',
                name: 'satoken',
                component: () => import('@/components/business/satoken.vue'),
            },
        ]
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