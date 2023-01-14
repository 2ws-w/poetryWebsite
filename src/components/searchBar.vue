<script setup lang='ts'>
import { nextTick } from 'process';
import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

const { proxy }: any = getCurrentInstance()


//  搜索栏
let myinput = ref()//搜索框实例
let historyBar = ref(false)
let searchValue = ref()//用户的输入值
let historyArr: any = reactive({ arr: [] })//历史记录数组
onMounted(() => {
    // 读取搜索历史数组
    if (JSON.parse(localStorage.getItem('history')!)) {
        historyArr.arr = JSON.parse(localStorage.getItem('history')!)
    }
})
const target = ref(null)

// vueuse 监听用户是否点击了区域外
onClickOutside(target, (event) => {
    historyBar.value = false
})

watch(historyArr, (newValue, oldValue) => {
    // console.log(newValue.arr.length, '监听长度');
    if (newValue.arr.length === 0) {
        // 如果没有历史记录，则隐藏历史记录栏
        historyBar.value = false
    }
})

// 用户  获取输入框焦点
const inputFocus = () => {
    if (historyArr.arr.length === 0) return
    historyBar.value = true

}

// 用户按下回车时
const inputChange = () => {
    let keyword = searchValue.value
    // 过滤空值
    if (keyword === undefined) {
        proxy.$message.warning('请输入有效数据！')
        return
    }
    // 过滤空格
    else if (keyword.trim().length === 0) {
        proxy.$message.warning('请输入有效数据！')
        return
    }
    // 判断数组中是否含有该数据
    else if (!historyArr.arr.includes(keyword)) {
        // 不存在
        // 将数据放到历史记录数组首位
        historyArr.arr.unshift(keyword)
        // 存储到localstorage
        localStorage.setItem('history', JSON.stringify(historyArr.arr))
    } else {
        // 存在
        // 删除之前的记录，并重新放在首位
        let index = historyArr.arr.indexOf(keyword)
        historyArr.arr.splice(index, 1)
        historyArr.arr.unshift(keyword)
        localStorage.setItem('history', JSON.stringify(historyArr.arr))
    }
    searchValue.value = ''
}

// 用户关闭 tag
const tagClose = (item: string) => {
    let index = historyArr.arr.indexOf(item)
    // console.log(item,index,'值和索引');
    historyArr.arr.splice(index, 1)
    localStorage.setItem('history', JSON.stringify(historyArr.arr))
}

// 用户选择 tag
const tagChecked = (item: string) => {
    // 点击时赋值
    myinput.value.focus()
    searchValue.value = item
    // 直接跳转页面
}
const clickHistory = () => {
    myinput.value.focus()
}
</script>
 
<template>
    <div class="search" ref="target">
        <div class="searchBar">
            <a-input-search allow-clear v-model="searchValue" ref="myinput" @focus="inputFocus"
                @press-enter="inputChange" :style="{ width: '600px', height: '40px' }" size="large"
                placeholder="落花人独立，微雨燕双飞" />
        </div>
        <!-- <a-input-tag :default-value="['test']" :style="{ width: '320px' }" placeholder="Please Enter" allow-clear /> -->
        <transition name="slide-fade">
            <div class="history" v-if="historyBar" @mousedown.stop.prevent="clickHistory">
                <p>搜索历史</p>
                <TransitionGroup name="list" tag="tab">
                    <template v-for="(item, index) in historyArr.arr" :key="index">
                        <div class="historyTag">
                            <div class="txt" @click="tagChecked(item)"> {{ item }}</div>
                            <div class="icon" @click="tagClose(item)"><icon-close /></div>
                        </div>
                    </template>
                </TransitionGroup>
            </div>
        </transition>


    </div>
</template>
 
<style scoped lang='scss'>
// 输入框 聚焦时
.arco-input-focus {
    box-shadow: 0 0 30px #0000001a;
    border-radius: 0 !important;
}

.arco-input-wrapper {
    transition: all 0.4s;
    border-radius: 15px;
}

.search {
    @include flex-layout();
    @include wrapper();
    height: 60px;
    margin-top: 20px;
    position: relative;
    z-index: 10;

    // background-color: antiquewhite;
    .history {
        box-shadow: 0 0 30px #0000001a;
        box-sizing: border-box;
        position: absolute;
        top: 50px;
        left: 320px;
        // height: 64px;
        padding: 10px 10px 0 10px;
        width: 600px;
        border: 1px solid #165cffb4;
        border: 1px solid #6aa1ff;
        border-top: 0;
        background-color: rgb(255, 255, 255);
        overflow: hidden;

        p {
            margin: 5px 0 10px 0;
        }
    }

    .historyTag {
        align-items: center;
        display: inline-block;
        background-color: #e3e5e7;
        padding: 5px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        border-radius: 5px;
        opacity: .6;
        transition: all 0.1s;
        margin-right: 10px;
        margin-bottom: 10px;

        &:hover {
            opacity: 1;
        }

        & .txt:hover {
            color: #165dff;
        }

        & .icon:hover {
            color: #165dff;
        }

        .txt {
            font-size: 12px;
            display: inline-block;
        }

        .icon {
            display: inline-block;
            font-size: 12px;
            margin-left: 2px;
        }
    }
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    // transform: translateX(10px);
    transform: scale(.2);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}

.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(5px);
    opacity: 0;
}
</style>