<template>
    <div class="common-layout">
        <el-container>
            <el-header class="headerclass"><router-link class="clickable-box" to="/layout2">
                    layout2</router-link></el-header>
            <el-container>
                <el-aside class="asideclass testtwo" width="200px">
                    <router-link class="clickable-box" to="/"> basic1</router-link>
                    <router-link class="clickable-box" to="/container"> basic2</router-link>
                    <router-link class="clickable-box" to="/autocomplete">autocomplete </router-link>
                    <router-link class="clickable-box" to="/avatar">avatar </router-link>
                    <router-link class="clickable-box" to="/badge">badge </router-link>
                    <router-link class="clickable-box" to="/buju">buju </router-link>
                    <router-link class="clickable-box" to="/calendar">calendar </router-link>
                    <router-link class="clickable-box" to="/card">card </router-link>
                    <router-link class="clickable-box" to="/carousel">carousel </router-link>
                    <router-link class="clickable-box" to="/cascade">cascade </router-link>
                    <router-link class="clickable-box" to="/checkbox">checkbox </router-link>
                    <router-link class="clickable-box" to="/collapse">collapse </router-link>
                    <router-link class="clickable-box" to="/colorpicker">colorpicker </router-link>
                    <router-link class="clickable-box" to="/configprovider">configprovider </router-link>
                    <router-link class="clickable-box" to="/container">container </router-link>
                    <router-link class="clickable-box" to="/datepicker">datepicker </router-link>
                    <router-link class="clickable-box" to="/datetimepicker">datetimepicker </router-link>
                    <router-link class="clickable-box" to="/description">description </router-link>
                    <router-link class="clickable-box" to="/dialog">dialog </router-link>
                    <router-link class="clickable-box" to="/drawer">drawer </router-link>
                    <router-link class="clickable-box" to="/dropdownmenu">dropdownmenu </router-link>
                    <router-link class="clickable-box" to="/form">form </router-link>
                    <router-link class="clickable-box" to="/image">image </router-link>
                    <router-link class="clickable-box" to="/infinitescroll">infinitescroll </router-link>
                    <router-link class="clickable-box" to="/input">input </router-link>
                    <router-link class="clickable-box" to="/loading">loading </router-link>
                    <router-link class="clickable-box" to="/menu">menu </router-link>
                    <router-link class="clickable-box" to="/message">message </router-link>
                    <router-link class="clickable-box" to="/messagebox">messagebox </router-link>
                    <router-link class="clickable-box" to="/notification">notification </router-link>
                    <router-link class="clickable-box" to="/pageheader">pageheader </router-link>
                    <router-link class="clickable-box" to="/popover">popover </router-link>
                    <router-link class="clickable-box" to="/progress">progress </router-link>
                    <router-link class="clickable-box" to="/radio">radio </router-link>
                    <router-link class="clickable-box" to="/rate">rate </router-link>
                    <router-link class="clickable-box" to="/result">result </router-link>
                    <router-link class="clickable-box" to="/scroll">scroll </router-link>
                    <router-link class="clickable-box" to="/select">select </router-link>
                    <router-link class="clickable-box" to="/skeleton">skeleton </router-link>
                    <router-link class="clickable-box" to="/slider">slider </router-link>
                    <router-link class="clickable-box" to="/space">space </router-link>
                    <router-link class="clickable-box" to="/statistic">statistic </router-link>
                    <router-link class="clickable-box" to="/steps">steps </router-link>
                    <router-link class="clickable-box" to="/switch">switch </router-link>
                    <router-link class="clickable-box" to="/table">table </router-link>
                    <router-link class="clickable-box" to="/tabs">tabs </router-link>
                    <router-link class="clickable-box" to="/timeline">timeline </router-link>
                    <router-link class="clickable-box" to="/timepicker">timepicker </router-link>
                    <router-link class="clickable-box" to="/timeselect">timeselect </router-link>
                    <router-link class="clickable-box" to="/tooltip">tooltip </router-link>
                    <router-link class="clickable-box" to="/tour">tour </router-link>
                    <router-link class="clickable-box" to="/transfer">transfer </router-link>
                    <router-link class="clickable-box" to="/tree">tree </router-link>
                    <router-link class="clickable-box" to="/treeselect">treeselect </router-link>
                    <router-link class="clickable-box" to="/upload">upload </router-link>
                    <router-link class="clickable-box" to="/virtualselect">virtualselect </router-link>
                    <router-link class="clickable-box" to="/virtualtable">virtualtable </router-link>
                    <router-link class="clickable-box" to="/virtualtree">virtualtree </router-link>
                    <router-link class="clickable-box" to="/watermark">watermark </router-link>

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
