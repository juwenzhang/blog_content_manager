<template>
  <div class="blog-content-manager-app">
    <el-config-provider :locale="zhCn">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style scoped lang="less">
.blog-content-manager-app {
  width: 100vw;
  height: 100vh;
}
</style>
