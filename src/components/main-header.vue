<template>
  <div class="main-header">
    <div class="main-header-icon" @click="MainHeaderIconClick">
      <el-icon size="30px">
        <component :is="isFold ? Expand : Fold"/>
      </el-icon>
    </div>

    <div class="main-header-content">
      <div class="main-header-content-breadcrumb">
        面包屑
      </div>
      <div class="main-header-content-info">
        <MainHeaderInfo/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="MainHeader">
  import { ref } from 'vue'
  import { useHomeStoreAction } from '@/stores/modules/home.ts'
  import { Expand, Fold } from '@element-plus/icons-vue'
  import MainHeaderInfo from '@/components/main-header-info.vue'

  const useHomeStore:ReturnType<typeof useHomeStoreAction> = useHomeStoreAction()
  const isFold:ReturnType<typeof ref<boolean>> = ref<boolean>(
    useHomeStore.isCollapse
  )
  const emit:ReturnType<typeof defineEmits> = defineEmits(['mainHeaderIconClick'])
  const MainHeaderIconClick = () => {
    isFold.value = !isFold.value
    emit('mainHeaderIconClick', isFold.value)
  }
</script>

<style scoped lang="less">
  .main-header {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;

    .main-header-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .main-header-content {
      display: flex;
      justify-content: space-between;
      flex: 1;
      padding: 0 18px;
    }
  }
</style>
