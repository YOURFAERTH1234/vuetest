<template>
    <div class="common-layout">
        <el-container>
            <el-header class="headerclass"><router-link class="clickable-box" to="/"> layout</router-link></el-header>
            <el-container>
                <el-aside class="asideclass testtwo" width="200px">
                    <router-link class="clickable-box" to="/layout2"> animate</router-link>
                    <router-link class="clickable-box" to="/layout2/sse"> sse</router-link>
                    <router-link class="clickable-box" to="/layout2/websocket"> websocket</router-link>
                    <router-link class="clickable-box" to="/layout2/svgicon"> svgicon</router-link>
                    <router-link class="clickable-box" to="/layout2/filedownload"> filedownload</router-link>
                    <router-link class="clickable-box" to="/layout2/fileupload"> fileupload</router-link>
                    <router-link class="clickable-box" to="/layout2/video"> video</router-link>
                    <router-link class="clickable-box" to="/layout2/deepseekone"> deepseekone</router-link>
                    <router-link class="clickable-box" to="/layout2/picture"> picture</router-link>
                    <router-link class="clickable-box" to="/layout2/websocchat"> websocchat</router-link>
                    <router-link class="clickable-box" to="/layout2/xuanran"> xuanran</router-link>
                    <router-link class="clickable-box" to="/layout2/jsxxuanran"> jsxxuanran</router-link>
                    <router-link class="clickable-box" to="/layout2/echarts"> echarts</router-link>
                    <router-link class="clickable-box" to="/layout2/axiostest"> axiostest</router-link>
                    <router-link class="clickable-box" to="/layout2/satoken"> satoken</router-link>
                    <router-link class="clickable-box" to="/"> basic1</router-link>
                </el-aside>
                <el-main class="borderblack testdisplay">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">

    .red-border-rounded {
        border: 5px solid red;
        border-radius: 8px;
        margin: 10px;
        /* 可改为你想要的圆角 */
    }

    .common-layout {
        width: 100vw;
        /* 占满全屏宽度 */
        height: 100vh;
        /* 占满全屏高度 */
    }

    .borderblack {
        border: 5px solid rgb(0, 0, 0);
    }

    .asideclass {
        min-width: 15%;
        border: 1px solid rgb(0, 0, 0);
        height: 90vh;
        display: flex;
        flex-direction: column;
        /* 水平居中 */
        align-items: center;
        /* 垂直居中 */
        /* 父容器必须有一个高度 */
    }

    .headerclass {
        height: 10vh;
    }

    .clickable-box {
        width: 100%;
        min-height: 30px;
        background: #ff6b6b;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        position: relative;
    }

    .clickable-box:hover {
        background: white;
        color: #333;

        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    }

</style>
