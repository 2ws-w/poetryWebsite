<script setup lang="ts">
import headerVue from './components/header.vue';
import footerVue from './components/footer.vue'
import router from './router/index'
import { lilPinia } from './store/index'
const mypinia = lilPinia()

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

<style scoped>

</style>
