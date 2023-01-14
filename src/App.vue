<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import headerVue from './components/header.vue';
import footerVue from './components/footer.vue'
import router from './router/index'
import { lilPinia } from './store/index'
import { useDocumentVisibility, useFavicon } from '@vueuse/core'
const mypinia = lilPinia()


// vueuse 切换其他页面后在切回该网页，内容改变
const visibility = useDocumentVisibility()
let visibleBar = ref()
// 用户点击其他页面后，visibility值会发生改变 监听其值，在改变后 改变网站图标
const icon = useFavicon()
watch(visibility, (current, previous) => {
  if (current === 'hidden') {
    icon.value = 'sun2.png'

  }
  if (current === 'visible') {
    icon.value = 'sun.png'
  }
})
  // 路由守卫
  router.beforeEach((to, from, next) => {
    // console.log(to.path, 'to');
    // console.log(from.path, 'from');
    mypinia.headerAndFooterVisible = true

    // 路由为 登录注册 时，隐藏 头部导航 和 底部导航
    if (to.path === '/login' || to.path === '/sign') {
      mypinia.headerAndFooterVisible = false
      console.log(mypinia.headerAndFooterVisible, '隐藏footer和header');
    }
    next()
  })

</script>

<template>
  <a-layout style="height: 720px;">
    <a-back-top :style="{ position: 'absolute' }" />
    <a-layout-header>
      <headerVue v-if="mypinia.headerAndFooterVisible"></headerVue>
    </a-layout-header>

    <a-layout>

      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>

    </a-layout>

    <a-layout-footer>
      <footerVue v-if='mypinia.headerAndFooterVisible'></footerVue>
    </a-layout-footer>

  </a-layout>

</template>

<style >

</style>
