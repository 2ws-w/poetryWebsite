<script setup lang='ts'>
import { ref } from 'vue'
//  tips: 跑马灯组件
let scrollBar = ref()
let num = ref(0)
let itemwidth = 240
const remove = (direction: string) => {
    // console.log(scrollBar.value.style.transform, 'scrollBar');
    // let translateX = 
    if (direction === 'left') {
        if (num.value <= 1) return
        // console.log(scrollBar.value.style.transform, '往左移');
        itemwidth += 240
        scrollBar.value.style.transform = `translateX(${itemwidth}px)`
        num.value--

    } else if (direction === 'right') {
        // console.log('往右移');
        
        if (num.value >= 8) return
        itemwidth -= 240
        scrollBar.value.style.transform = `translateX(${itemwidth}px)`
        num.value++
    }

}
</script>
 
<template>
    <div class="zoumadeng">
        <div class="arrow" @click="remove('left')">
            <icon-left-circle size="40px" />
        </div>
        <div class="overBAr">
            <div class="scrollBar" ref="scrollBar">
                <div class="areaItem" ref="areaItem" v-for="(item, index) in 10" :key="index">
                    <div class="img"></div>
                    <div class="info">
                        <span>作者</span>
                        <p>诗集标题</p>
                        <span>查看详情</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrow">
            <icon-right-circle size="40px" @click="remove('right')" />
        </div>
    </div>
</template>
 
<style scoped lang='scss'>
.zoumadeng {
    @include wrapper();
    @include flex-layout(row, center, space-between);
}

.arrow {
    cursor: pointer;
}

.overBAr {
    overflow: hidden;
}

.scrollBar {
    display: flex;
    width: 1100px;
    transition: all 0.5s;
    transform: translateX(0px);
}

// 诗集选项卡
.areaItem {
    flex: none;
    width: 241px;
    padding: 20px;

    .img {
        width: 100%;
        height: 200px;
        background-color: #716e6e;
    }

    // 下方文字
    .info {
        height: 127px;
        width: 100%;
        background-color: rgb(201, 205, 205);
        @include flex-layout(column, center, center);

        span {
            @include font-set($font-size-sm, black, 600);
        }

        p {
            @include font-set($font-size-md, black, 600);
            line-height: 10px;
        }
    }
}
</style>