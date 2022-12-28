<script setup lang='ts'>
import { ref, computed } from 'vue'
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
</script>
 
<template>
    <div class="card" :style='`width:${mywidth}`'>
        <div class="title">{{ props.info.title }} </div>
        <div class="author">{{ props.info.author }}·{{ props.info.dynasty }} </div>
        <div class="content" v-for="(item, index) in textarr ">
            <p>{{ item }}</p>
        </div>
    </div>
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
</style>