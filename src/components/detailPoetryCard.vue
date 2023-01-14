<script setup lang='ts'>
import { ref, computed } from 'vue'
//  '在诗词详情页面展示，诗词内容、诗词注释、诗词翻译'
const props: any = defineProps({
    info: {},
    width: {
        type: Number,//卡片的宽度
    },
    len: {
        type: Number,//每行最多的字数
    }
})

// 文字分段##
const content = props.info.content
let mywidth = computed(() => {
    return props.width + 'px'
})
//文字获取
var text = content;
var textarr = new Array();
var len = 35;//句子最大长度
var arr = text.split(/([。！？])/);//若有其他标点符号作为语句结束，在这里增加即可，比如、；：
var l = 0, s = '';

//文字分段函数
for (let i = 0; i < arr.length; i++) {
    if (l + arr[i].length < len) {
        s += arr[i];
        l += arr[i].length;
    }
    else {
        if (arr[i].startsWith('”')) {
            s += '”';
            arr[i] = arr[i].substring(1);
        }
        textarr.push(s);

        l = arr[i].length;
        s = arr[i];
    }
}
if (s != '') textarr.push(s);
// 文字分段##

const like = ref(false);//评论的爱心
const onLikeChange = () => {
    like.value = !like.value;
};

</script>
 
<template>
    <div class="card" :style='`width:${mywidth}`'>
        <div class="title">{{ props.info.title }} </div>
        <div class="author">{{ props.info.author }}·{{ props.info.dynasty }} </div>
        <div class="content" v-for="(item, index) in textarr ">
            <p>{{ item }}</p>
        </div>

    </div>
    <!-- 注释和解析 ## -->
    <div class="zhushi">
        <a-collapse :default-active-key="['1', 2]">
            <a-collapse-item header="查看注释和解析" key="1">
                <div class="intro">
                    词人蒋竹山这首《江城梅花引》，表现了他乘船阻雪于荆溪（在今江苏南部）时的惆怅情怀。词中以悠扬的节奏、活泼的笔调，在冷清的画面上，织进了热烈的回忆和洒脱的情趣；在淡淡的哀愁中，展示了一个清妍潇洒的艺术境界。吟诵起来，给人的感受，如同欣赏一支优美的随想曲，它即兴抒情，旋律自由又富于幻想。
                </div>
                <div>
                </div>
                <div class="annotation">
                    江城梅花引：词牌名。《中原音韵》注「越调」。《钦定词譜》：「按万俟雅言《梅花引》句读與《江城子》相近，故可合为一調。程正伯词换头句藏短韵者名《摊破江城子》。江皓詞三聲叶者四首，每首有一『笑』字，名《四笑江梅引》。周草窗詞三声叶韵者名《梅花引》，全押平韵者名《明月引》。陈西麓詞名《西湖明月引》。」
                    白鸥（ōu）：白鹭。
                    身留：被雪所阻，被迫不能动身而羁留下来。
                    心留：自己心里情愿留下。
                    灯晕（yūn）舞：昏暗的灯光摇晃不定。
                    旧游：指昔日漫遊的伴友与遊时的情景。
                    漠漠（mò）：密布的样子。
                    黄云：指昏黄的天色。高達夫曾有诗「千里黄雲白日曛，北风吹雁雪纷纷。」
                    木棉裘（qiú）：木棉为絮的冬衣。裘，毛皮衣服。
                </div>
                <div class="translate">
                    那自由自在的白鸥问我：“怎么在这儿停舟？是被迫身留？若是愉悦心留，又为何愁云锁眉头？”江风拍打着船窗的小帘，灯影儿摇曳不休。独对孤灯闲影，冷清清、无聊赖，忆念旧时游。
                    呵！旧游呵，旧游！今日可否仍在心头？只记得花外有楼柳下系舟。梦魂呵，梦魂！梦魂儿飞不到，让寒水空自流。漠漠的黄云，将铁木棉衣湿透。都说没有人似我一般愁，今夜飞雪，有梅花似我一般愁。
                </div>
            </a-collapse-item>
        </a-collapse>
    </div>
    <!-- 注释和解析 @@ -->
    <!-- 评论  ## -->
    <div class="userContent">
        <h1>评论</h1>
        <a-comment author="丁真"
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            content="芝士雪豹" datetime="1 hour">
            <template #actions>
                <span class="action" key="heart" @click="onLikeChange">
                    <span v-if="like">
                        <IconHeartFill :style="{ color: '#f53f3f' }" />
                    </span>
                    <span v-else>
                        <IconHeart />
                    </span>
                    {{ 83 + (like ? 1 : 0) }}
                </span>
                <span class="action">
                    <IconMessage /> 回复
                </span>
            </template>
            <a-comment author="拐凌"
                avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
                content="雪豹闭嘴" datetime="1 hour">
                <template #actions>
                    <span class="action">
                        <IconMessage /> 回复
                    </span>
                </template>
            </a-comment>
        </a-comment>

        <a-comment author="孙笑川"
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
            content="can can need 😍😍😍" datetime="1 hour">
            <template #actions>
                <span class="action">
                    <IconMessage /> 回复
                </span>
            </template>
        </a-comment>
    </div>
    <!-- 评论  @@ -->

</template>
 
<style scoped lang='scss'>
.card {
    @include wrapper;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 6px 02px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 20px 0;
    @include font-set($font-size-base, black);
    @include flex-layout();

    .title {
        @include font-set($font-size-base, black, 600);
        padding: 5px;
    }

    .author {
        @include font-set($font-size-sm, black, 400);
        padding: 10px
    }

    .content {
        line-height: 5px;
    }
}

.zhushi {
    margin-top: 40px;
}

.userContent {

    margin-top: 40px;
    padding: 0 200px;
}
</style>