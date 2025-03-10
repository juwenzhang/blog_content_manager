<template>
  <div class="blog-content-manager-app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router"
</script>

<style scoped lang="less">
  .blog-content-manager-app {
    width: 100vw;
    height: 100vh;
  }
</style>
