<template>
    <div class="containerthis">
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row>
            <el-button class="iconclass" :icon="Search" circle />
            <el-button class="iconclass" type="primary" :icon="Edit" circle />
            <el-button class="iconclass" type="success" :icon="Check" circle />
            <el-button class="iconclass" type="info" :icon="Message" circle />
            <el-button class="iconclass" type="warning" :icon="Star" circle />
            <el-button class="iconclass" type="danger" :icon="Delete" circle />
        </el-row>

        <div class="container2">
            <el-icon :size="40">
                <Edit />
            </el-icon>
            <el-icon :size="40">
                <Share />
            </el-icon>
            <el-icon :size="40">
                <Delete />
            </el-icon>
            <el-icon :size="40">
                <Loading />
            </el-icon>
            <el-icon :size="40">
                <Search />
            </el-icon>
        </div>
        <div class="container2">
            <el-link href="https://element-plus.org" target="_blank">default</el-link>
            <el-link type="primary">primary</el-link>
            <el-link type="success">success</el-link>
            <el-link type="warning">
                <template #icon>wfwfe</template>
                warning
            </el-link>
            <el-link type="danger">danger</el-link>
            <el-link type="info">info</el-link>
        </div>
        <el-space fill wrap :fill-ratio="fillRatio" :direction="direction" style="width: 100%">
            <div class="container2"> <el-text class="mx-1">Default</el-text>
                <el-text class="mx-1" type="primary">Primary</el-text>
                <el-text class="mx-1" type="success">Success</el-text>
                <el-text class="mx-1" type="info">Info</el-text>
                <el-text class="mx-1" type="warning">Warning</el-text>
                <el-text class="mx-1" type="danger">Danger</el-text>
            </div>
        </el-space>
    </div>
</template>

<script lang="ts" setup>
    import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
    } from '@element-plus/icons-vue'
    import { ref } from 'vue';
    const direction = ref('horizontal')
    const fillRatio = ref(30)
</script>
<style lang="scss">
    .containerthis {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* 水平居中 */
        align-items: center;
        /* 垂直居中 */
        /* 父容器必须有一个高度 */
    }

    .container2 {
        display: flex;
        flex-direction: row;
    }

    .iconclass {
        display: inline
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        border-color: rgb(98, 0, 255);
        min-height: 36px;
    }

    .ep-bg-purple-dark {
        background-color: brown;
    }

    .ep-bg-purple {
        background-color: darkorchid;
    }

    .ep-bg-purple-light {
        background-color: darkkhaki;
    }
</style>