<template>
    <div id="app">
        <header>
            <h1>Vue 3 漫画阅读器</h1>
            <p class="description">浏览您喜欢的漫画，支持章节选择和页面导航功能</p>
        </header>

        <div class="container">
            <div class="comic-viewer">
                <div class="comic-image-container">
                    <img :src="currentPage" :alt="'第 ' + (currentPageIndex + 1) + ' 页'" class="comic-image">
                </div>

                <div class="comic-info">
                    <h2>{{ currentChapter.title }}</h2>
                    <p>{{ currentChapter.description }}</p>
                    <p>共 {{ currentChapter.pages.length }} 页</p>
                </div>

                <div class="comic-controls">
                    <button class="control-btn" @click="prevPage" :disabled="currentPageIndex === 0">
                        <i class="fas fa-chevron-left"></i> 上一页
                    </button>

                    <div class="page-indicator">
                        第 {{ currentPageIndex + 1 }} / {{ currentChapter.pages.length }} 页
                    </div>

                    <button class="control-btn" @click="nextPage"
                        :disabled="currentPageIndex === currentChapter.pages.length - 1">
                        下一页 <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div class="chapters-list">
                <h2>章节列表</h2>
                <div v-for="(chapter, index) in chapters" :key="index" class="chapter-item"
                    :class="{ active: currentChapter.id === chapter.id }" @click="selectChapter(chapter)">
                    <h3>
                        <span>{{ chapter.title }}</span>
                        <span>共 {{ chapter.pages.length }} 页</span>
                    </h3>
                    <p>
                        <span>{{ chapter.description }}</span>
                        <span class="chapter-date">{{ chapter.date }}</span>
                    </p>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2023 Vue 3 漫画阅读器 | 设计与实现 by Developer</p>
        </footer>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const chapters = reactive([
        {
            id: 1,
            title: "第一章：起源",
            description: "故事的开端",
            date: "2023-01-15",
            pages: [
                "https://picsum.photos/id/10/800/1200",
                "https://picsum.photos/id/11/800/1200",
                "https://picsum.photos/id/12/800/1200",
                "https://picsum.photos/id/13/800/1200",
                "https://picsum.photos/id/14/800/1200"
            ]
        },
        {
            id: 2,
            title: "第二章：冒险开始",
            description: "主角踏上旅程",
            date: "2023-02-20",
            pages: [
                "https://picsum.photos/id/15/800/1200",
                "https://picsum.photos/id/16/800/1200",
                "https://picsum.photos/id/17/800/1200",
                "https://picsum.photos/id/18/800/1200"
            ]
        },
        {
            id: 3,
            title: "第三章：神秘森林",
            description: "探索未知领域",
            date: "2023-03-25",
            pages: [
                "https://picsum.photos/id/19/800/1200",
                "https://picsum.photos/id/20/800/1200",
                "https://picsum.photos/id/21/800/1200",
                "https://picsum.photos/id/22/800/1200",
                "https://picsum.photos/id/23/800/1200",
                "https://picsum.photos/id/24/800/1200"
            ]
        },
        {
            id: 4,
            title: "第四章：古城之谜",
            description: "解开古老秘密",
            date: "2023-04-30",
            pages: [
                "https://picsum.photos/id/25/800/1200",
                "https://picsum.photos/id/26/800/1200",
                "https://picsum.photos/id/27/800/1200"
            ]
        },
        {
            id: 5,
            title: "第五章：最终决战",
            description: "高潮结局",
            date: "2023-05-15",
            pages: [
                "https://picsum.photos/id/28/800/1200",
                "https://picsum.photos/id/29/800/1200",
                "https://picsum.photos/id/30/800/1200",
                "https://picsum.photos/id/31/800/1200",
                "https://picsum.photos/id/32/800/1200"
            ]
        }
    ]);

    const currentChapter = ref(chapters[0]);
    const currentPageIndex = ref(0);
    const currentPage = ref(chapters[0].pages[0]);

    function selectChapter(chapter: any) {
        currentChapter.value = chapter;
        currentPageIndex.value = 0;
        currentPage.value = chapter.pages[0];
    }

    function nextPage() {
        if (currentPageIndex.value < currentChapter.value.pages.length - 1) {
            currentPageIndex.value++;
            currentPage.value = currentChapter.value.pages[currentPageIndex.value];
        }
    }

    function prevPage() {
        if (currentPageIndex.value > 0) {
            currentPageIndex.value--;
            currentPage.value = currentChapter.value.pages[currentPageIndex.value];
        }
    }
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        background: linear-gradient(135deg, #2c3e50, #4ca1af);
        color: #fff;
        min-height: 100vh;
        padding: 20px;
    }

    #app {
        max-width: 1400px;
        margin: 0 auto;
    }

    header {
        text-align: center;
        padding: 20px 0;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .description {
        font-size: 1.1rem;
        opacity: 0.9;
        max-width: 600px;
        margin: 0 auto;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    @media (min-width: 992px) {
        .container {
            flex-direction: row;
        }
    }

    .comic-viewer {
        flex: 2;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .comic-image-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    .comic-image {
        width: 100%;
        display: block;
        transition: transform 0.3s ease;
    }

    .comic-image:hover {
        transform: scale(1.02);
    }

    .comic-info {
        width: 100%;
        max-width: 800px;
        padding: 20px 0;
        text-align: center;
    }

    .comic-info h2 {
        font-size: 1.8rem;
        margin-bottom: 10px;
        color: #ffd700;
    }

    .comic-info p {
        line-height: 1.6;
        opacity: 0.9;
        margin-bottom: 10px;
    }

    .comic-controls {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .control-btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .control-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    .page-indicator {
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
    }

    .chapters-list {
        flex: 1;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        max-height: 800px;
        overflow-y: auto;
    }

    .chapters-list h2 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        text-align: center;
    }

    .chapter-item {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .chapter-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
    }

    .chapter-item.active {
        background: rgba(255, 215, 0, 0.2);
        border-left: 4px solid #ffd700;
    }

    .chapter-item h3 {
        font-size: 1.2rem;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
    }

    .chapter-item p {
        font-size: 0.9rem;
        opacity: 0.8;
        display: flex;
        justify-content: space-between;
    }

    .chapter-date {
        font-size: 0.8rem;
        opacity: 0.7;
    }

    footer {
        text-align: center;
        margin-top: 50px;
        padding: 20px;
        opacity: 0.7;
    }

    /* 滚动条样式 */
    .chapters-list::-webkit-scrollbar {
        width: 8px;
    }

    .chapters-list::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    .chapters-list::-webkit-scrollbar-thumb {
        background: rgba(255, 215, 0, 0.5);
        border-radius: 4px;
    }

    .chapters-list::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 215, 0, 0.7);
    }

    /* 移动设备适配 */
    @media (max-width: 768px) {
        .comic-controls {
            flex-direction: column;
            align-items: center;
        }

        .control-btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>