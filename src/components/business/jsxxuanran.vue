<script setup lang="tsx">
    import { defineComponent, ref } from 'vue'

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

            // JSX 直接返回 DOM 结构
            return () => (
                <button
                    style={{
                        padding: '8px 16px',
                        background: '#409EFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={onClick}
                >
                    {props.label}
                </button>
            )
        }
    })
</script>

<template>
    <div>
        <MyButton label="自定义JSX按钮" />
    </div>
</template>
