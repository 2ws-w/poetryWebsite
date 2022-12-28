<script setup lang='ts'>
import { ref } from 'vue'
</script>
 
<template>
    <div class="footer">
        <!-- 底部的页尾  ##-->
        <div class="section">
            <!-- 左侧信息 -->
            <div class="section_left">
                <div class="slogen">风一更，雪一更，聒碎乡心梦不成，故园无此声</div>
                <p>github</p>
                <p>wechat</p>
                <p>email</p>
                <p>鸣谢：xxx</p>
            </div>
            <!-- 右侧图片 -->
            <div class="section_right">
                <div class="banner"></div>
            </div>
        </div>
        <!-- 底部的页尾  @@-->

        <!-- 底部的版权及备案信息 ## -->
        <div class="copyright">
            <div class="copy">© 2022 - 2022 九州词 × 玉玉菠萝
            </div>
            <p class="heaet"></p>
        </div>
        <!-- 底部的版权及备案信息 @@ -->

    </div>
</template>
 
<style scoped lang='scss'>
// 底部心跳动画
.heaet {
    display: inline-block;
    // padding-left: ;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    background: #fe2436;
    transform: rotate(-45deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    animation: heartbeat 1.5s linear infinite;

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fe2436;
        top: -50%;
        right: 0;
        border-radius: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fe2436;
        right: -50%;
        border-radius: 100%;
    }

    @keyframes heartbeat {
        0% {
            transform: rotate(-45deg) scale((1.0));
        }

        100% {
            transform: rotate(-45deg) scale((1.0));
        }

        100% {
            transform: rotate(-45deg) scale((0.82));
        }
    }
}

.footer {
    background-color: aliceblue;
    @include flex-layout();
}

// < !-- 底部的页尾 ##-->
.section {
    width: 100%;
    @include wrapper();
    @include flex-layout(row, center, space-between);
    height: 250px;

    .section_left {
        .slogen {
            @include font-set($font-size-lg, rgb(46, 46, 46), 600);
        }

        p {
            @include font-set($font-size-base, rgb(46, 46, 46), 600);
        }
    }

    .section_right {
        .banner {
            width: 500px;
            height: 180px;
            background-color: rgb(158, 153, 153);
        }
    }
}

//  < !-- 底部的版权及备案信息 ## -->
.copyright {
    width: 100%;
    background-color: rgb(224, 245, 245);
    @include flex-layout(row, center, center);

    .copy {
        margin-right: 10px;
    }
}
</style>