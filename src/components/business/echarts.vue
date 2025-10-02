<!-- EchartsDemo.vue -->
<template>
    <div ref="chartRef" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import * as echarts from 'echarts'

    const chartRef = ref(null)
    let chartInstance = null

    onMounted(() => {
        chartInstance = echarts.init(chartRef.value)
        chartInstance.setOption({
            title: { text: '示例折线图' },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: [150, 230, 224, 218, 135, 147, 260]
                }
            ]
        })
        window.addEventListener('resize', resizeChart)
    })

    function resizeChart() {
        chartInstance && chartInstance.resize()
    }

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeChart)
        chartInstance && chartInstance.dispose()
    })
</script>
