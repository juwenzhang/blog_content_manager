<template>
  <div class="blog-content-manager-home">
    <div class="common-layout">
      <el-container class="main-container">
        <el-aside :width="isCollapse ? '60px' : '210px'" class="aside-container">
          <MainNavMenu :isCollapse="Boolean(isCollapse)"/>
        </el-aside>
        <el-container class="extra-container">
          <el-header class="extra-header" height="50px">
            <MainHeader @mainHeaderIconClick="handleFoldEvent"/>
          </el-header>
          <el-main class="extra-main">
            <MainContainer/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts" name="home">
import { onMounted, ref, watch } from 'vue'
  import { MainNavMenu } from '@/components/index.ts'
  import { MainHeader } from '@/components/index.ts'
  import { MainContainer } from '@/components/index.ts'
  import { useHomeStoreAction } from '@/stores/modules/home.ts'
  import { localCache } from '@/utils/settleCache.ts'

  const useHomeStore: ReturnType<typeof useHomeStoreAction> = useHomeStoreAction()
  const isCollapse:ReturnType<typeof ref<boolean>> = ref<boolean>(
    useHomeStore.getIsCollapse || false)

  const handleFoldEvent = <T>(isFold:boolean):T | void => {
    isCollapse.value = isFold
  }
  onMounted(<T>():T | void => {
    watch(isCollapse, (newValue) => {
      localCache.removeCache('isCollapse')
      localCache.setCache('isCollapse', JSON.stringify(newValue))
      useHomeStore.setIsCollapse(newValue)
    })
  })
</script>

<style scoped lang="less">
  .blog-content-manager-home {

    .common-layout {
      height: 100vh;

      .main-container{
        height: 100%;
        .aside-container {
          max-width: 250px;
          overflow-x: hidden;
          overflow-y: auto;
          line-height: 200px;
          text-align: center;
          cursor: pointer;
          background-color: #001529;
          transition: width .3s linear;
          scrollbar-width: none;
          -ms-overflow-style: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .extra-container{
          .extra-header{
            background-color: #f5f0f1;
          }

          .extra-main {
            background-color: #f0f2f5;
          }
        }
      }
    }
  }
</style>
