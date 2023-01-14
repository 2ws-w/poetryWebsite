<script setup lang='ts'>
import { useElementByPoint, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })


</script>
 
<template>

</template>
 
<style scoped lang='scss'>

</style>