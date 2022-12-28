<script setup lang='ts'>
import { ref, reactive } from 'vue'
import detailPoetryCard from '../components/detailPoetryCard.vue';

const arr = {
    title: '江城梅花引 · 荆溪阻雪',
    author: '蒋捷',
    dynasty: '唐',
    content: '白鸥问我泊孤舟，是身留，是心留？心若留时，何事锁眉头？风拍小帘灯晕舞，对闲影，冷清清，忆旧游。旧游。旧游。今在否？花外楼，柳下舟。梦也梦也，梦不到，寒水空流。漠漠黄云，湿透木棉裘。都道无人愁似我，今夜雪，有梅花，似我愁。',
}
const poetrydetail: any = reactive({
    arr: [
        {
            title: '江城梅花引 · 荆溪阻雪',
            author: '蒋捷',
            dynasty: '唐',
            content: '白鸥问我泊孤舟，是身留，是心留？心若留时，何事锁眉头？风拍小帘灯晕舞，对闲影，冷清清，忆旧游。旧游。旧游。今在否？花外楼，柳下舟。梦也梦也，梦不到，寒水空流。漠漠黄云，湿透木棉裘。都道无人愁似我，今夜雪，有梅花，似我愁。',
        }]
})

</script>
 
<template>
    <div class="detail">
        <!-- 面包屑 ## -->
        <div class="crumb">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a href="/"> <icon-home /> 主页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a href="/poetryPage"> 诗歌分类 </a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a href="/poetryDetail"> 诗歌详情 </a></a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <!-- 面包屑 @@ -->
        <!-- 诗歌详情页面 ##-->
        <detailPoetryCard :info="arr" :width="700" style="margin-top:40px"></detailPoetryCard>
        <!-- 诗歌详情页面 @@-->
     

    </div>
</template>
 
<style scoped lang='scss'>
.detail {
    @include wrapper;
}

.crumb {
    padding-top: 20px;
}
</style>