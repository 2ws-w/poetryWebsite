<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { useParallax } from '@vueuse/core'

const target = ref(null)
const container = ref(null)
const { tilt, roll, source } = useParallax(container)

let arr = ['MOXID', 'HBN Nanotubes', 'VAM Unit', 'Reactive Boots', 'ENIE', 'Signal Amplifier', 'GEO+', 'CAMO']
let checkIndex = ref(0)
const checkItem = (index: number) => {
    console.log(index, 'index');
}
const parallax = reactive(useParallax(target))
console.log(parallax, 'parallax');
const cardStyle = computed(() => ({
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20
        }deg)`
}))
</script>
 
<template>
    <div class='container3'>
        <!-- <h1>{{ parallax }}</h1> -->
        <div class="mydiv" ref="target">
            <div class="movediv" :style="cardStyle">

                <div class="item" @click="checkIndex = index" :class="{ 'checked': index == checkIndex }"
                    v-for="(item, index) in arr" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>

    </div>
    <div class='container1'>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <div class='container2'>
        <div class="section ">
            <div class="item" @click="checkIndex = index" :class="{ 'checked': index == checkIndex }"
                v-for="(item, index) in arr" :key="index">
                {{ item }}
            </div>
        </div>
    </div>

</template>
 
<style scoped lang='scss'>
.container3 {
    height: 100vh;
    @include flex-layout();

    .mydiv {
        @include flex-layout();
        width: 600px;
        height: 600px;
        border: 1px solid black;
        margin: 3em auto;
        perspective: 300px;
    }

    .movediv {
        width: 200px;
        height: 300px;
        background-color: rgb(73, 132, 226);
        box-shadow: 0 0 10px 0px rgba(68, 67, 67, 0.265) ;
        @include flex-layout();
    }

}

.container1 {
    @include wrapper();
    @include flex-layout(row, center, center);
    height: 100vh;

    .item {
        width: 40px;
        height: 110px;
        background-image: url("../assets/images/h.png");
        background-size: 40px 100%;
        background-repeat: no-repeat;
        background-color: rgb(114, 107, 107);
        margin: 10px;
        transition: all 0.4s;
        padding: 0;

        &:hover {
            // height: 600px;
            padding: 130px 0;
        }
    }

}

.container2 {
    @include wrapper();
    @include flex-layout(row, center, center);
    height: 100vh;

    .section {
        width: 300px;
        // height: 400px;
        // border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        transition: all 0.2s;

        .item {
            padding: 20px;
            margin: 5px;
            border: 2px dashed black;
            font-weight: 900;
            cursor: pointer;
            transition: all .2s;
        }

        .checked {
            color: white;
            border: 2px dashed black;
            background-color: black;

        }

        // background-color: rgb(255, 255, 255);
    }
}
</style>