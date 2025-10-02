<script setup>
import { h, defineComponent, ref } from 'vue'

const count = ref(0)

const MyButton = defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: '点击我'
    }
  },
  setup(props) {
    const onClick = () => {
      alert('你点击了按钮！')
    }

    // 返回渲染函数
    return () =>
      h(
        'button',
        {
          style: {
            padding: '8px 16px',
            background: '#409EFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          },
          onClick
        },
        props.label
      )
  }
})
</script>

<template>
  <div>
    <MyButton label="自定义渲染按钮" />
  </div>
</template>
