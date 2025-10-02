<template>
    <div id="app">
        <header>
            <h1>Vue 3 视频播放器</h1>
            <p class="description">选择您喜欢的视频进行播放，支持多个视频间的无缝切换</p>
        </header>

        <div class="container">
            <div class="main-player">
                <div class="video-container">
                    <video ref="videoPlayer" :src="currentVideo.src" controls autoplay></video>
                </div>

                <div class="video-info">
                    <h2>{{ currentVideo.title }}</h2>
                    <p>{{ currentVideo.description }}</p>
                </div>

                <div class="video-controls">
                    <button class="control-btn" @click="playVideo">
                        <i class="fas fa-play"></i> 播放
                    </button>
                    <button class="control-btn" @click="pauseVideo">
                        <i class="fas fa-pause"></i> 暂停
                    </button>
                    <button class="control-btn" @click="toggleMute">
                        <i class="fas" :class="{ 'fa-volume-mute': isMuted, 'fa-volume-up': !isMuted }"></i>
                        {{ isMuted ? '取消静音' : '静音' }}
                    </button>
                </div>
            </div>

            <div class="video-list">
                <div v-for="(video, index) in videos" :key="index" class="video-card"
                    :class="{ active: currentVideo.id === video.id }" @click="selectVideo(video)">
                    <div class="card-thumb">
                        <img :src="video.thumbnail" :alt="video.title">
                        <span class="duration">{{ video.duration }}</span>
                    </div>
                    <div class="card-content">
                        <h3>{{ video.title }}</h3>
                        <p>{{ video.views }}次观看</p>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2023 Vue 3 视频播放器 | 设计与实现 by Developer</p>
        </footer>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const videoPlayer: any = ref(null);
    const isMuted = ref(false);

    const videos = reactive([
        {
            id: 1,
            title: "美丽的海底世界",
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://picsum.photos/id/29/400/225",
            description: "探索神秘的海底世界，欣赏美丽的珊瑚礁和海洋生物。",
            views: "125万",
            duration: "12:36"
        },
        {
            id: 2,
            title: "高山日出美景",
            src: "https://assets.codepen.io/6093409/river.mp4",
            thumbnail: "https://picsum.photos/id/26/400/225",
            description: "站在高山之巅，欣赏壮丽的日出景象，感受大自然的神奇。",
            views: "89万",
            duration: "08:45"
        },
        {
            id: 3,
            title: "城市夜景延时摄影",
            src: "https://assets.codepen.io/6093409/smoke.mp4",
            thumbnail: "https://picsum.photos/id/28/400/225",
            description: "现代都市的繁华夜景，车水马龙，灯火辉煌。",
            views: "156万",
            duration: "05:20"
        },
        {
            id: 4,
            title: "森林徒步旅行",
            src: "https://assets.codepen.io/6093409/smoke.mp4",
            thumbnail: "https://picsum.photos/id/30/400/225",
            description: "跟随我们的镜头，一起探索原始森林的神秘与美丽。",
            views: "76万",
            duration: "15:42"
        }
    ]);

    const currentVideo = ref(videos[0]);

    function selectVideo(video: any) {
        currentVideo.value = video;
        // 确保视频播放器重新加载新视频
        if (videoPlayer.value) {
            videoPlayer.value.load();
            videoPlayer.value.play();
        }
    }

    function playVideo() {
        if (videoPlayer.value) {
            videoPlayer.value.play();
        }
    }

    function pauseVideo() {
        if (videoPlayer.value) {
            videoPlayer.value.pause();
        }
    }

    function toggleMute() {
        if (videoPlayer.value) {
            videoPlayer.value.muted = !videoPlayer.value.muted;
            isMuted.value = videoPlayer.value.muted;
        }
    }

</script>
<style lang="scss">
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

    .main-player {
        flex: 2;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
    }

    .video-container {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        /* 16:9 Aspect Ratio */
        border-radius: 10px;
        overflow: hidden;
        background: #000;
    }

    .video-container video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .video-info {
        padding: 20px 0;
    }

    .video-info h2 {
        font-size: 1.8rem;
        margin-bottom: 10px;
    }

    .video-info p {
        line-height: 1.6;
        opacity: 0.9;
    }

    .video-controls {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
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

    .video-list {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
    }

    @media (min-width: 992px) {
        .video-list {
            display: flex;
            flex-direction: column;
        }
    }

    .video-card {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .video-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        background: rgba(0, 0, 0, 0.4);
    }

    .video-card.active {
        border: 2px solid #fdbb2d;
        background: rgba(253, 187, 45, 0.2);
    }

    .card-thumb {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        /* 16:9 Aspect Ratio */
    }

    .card-thumb img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        padding: 15px;
    }

    .card-content h3 {
        font-size: 1.1rem;
        margin-bottom: 8px;
    }

    .card-content p {
        font-size: 0.9rem;
        opacity: 0.8;
    }

    .duration {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.7);
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
    }

    footer {
        text-align: center;
        margin-top: 50px;
        padding: 20px;
        opacity: 0.7;
    }
</style>