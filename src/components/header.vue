<script setup lang='ts'>
import { ref } from 'vue'
</script>
<template>
    <div class="header">
        <div class="section">
            <div class="left">
                <div class="logo"></div>
                <div class="title">九州词</div>
            </div>
            <div class="right">
                <p>诗歌</p>
                <p>诗人</p>
                <p>诗歌创作</p>
                <p>杂谈专区</p>
                <p>关于</p>
                <p>简</p>
                <p>登陆</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.header {
    height: 100px;
    background-color: aliceblue;
}

.section {
    height: 100%;
    @include wrapper();
    @include flex-layout(row, center, space-between);

    .left {
        @include flex-layout(row, center, center);
        @include font-set($font-size-title, rgb(50, 49, 49), 600);

        .title {
            padding:10px ;
        }
        .logo {
            width: 150px;
            height: 70px;
            background-color: rgb(167, 201, 196);
        }
    }
    .right {
        @include flex-layout(row, center, center);
        @include font-set($font-size-base, rgb(50, 49, 49), 600);
        p {
            padding: 10px;
        }
    }
}
</style>