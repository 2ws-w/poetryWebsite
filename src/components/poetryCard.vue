<script setup lang='ts'>
import { ref } from 'vue'
const props: any = defineProps({
    info:{
        
    }
})

</script>
 
<template>
    <div class="card">
        <div class="shiju">
            <span>{{ props.info.shiju1 }}</span>
            <span>{{ props.info.shiju2 }}</span>
        </div>
        <div class="zuozhe">
            {{ props.info.name }}
            <img src="../assets/seal.png" alt="">
        </div>
    </div>
</template>
 
<style scoped lang='scss'>
.card {
    box-sizing: border-box;
    padding: 20px;
    width: 241px;
    height: 350px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 6px 02px rgba(0, 0, 0, 0.1);
    position: relative;
    writing-mode: vertical-rl;
    @include font-set($font-size-lg, black);

    .shiju {
        span {
            padding: 5px;
            display: block;
        }
    }

    .zuozhe {
        position: absolute;
        bottom: 10px;
        left: 10px;

        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>