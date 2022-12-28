<script setup lang="ts">
import headerVue from './components/header.vue';
import footerVue from './components/footer.vue'


</script>

<template>
  <a-layout style="height: 720px;">

    <a-layout-header>
      <headerVue></headerVue>
    </a-layout-header>

    <a-layout>

      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>

    </a-layout>

    <a-layout-footer>
      <footerVue></footerVue>
    </a-layout-footer>

  </a-layout>
  
</template>

<style scoped>

</style>
