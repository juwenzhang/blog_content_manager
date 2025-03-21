<template>
  <div class="main-crumb">
    <template v-if="breadcrumbs?.length > 0">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>
          <router-link to="/home">
            {{ breadcrumbs[0].title }}
          </router-link>
        </el-breadcrumb-item>
        <template v-for="(item, index) in breadcrumbs" :key="index">
          <el-breadcrumb-item>
            <router-link :to="String(item.url)">
              {{ item.name }}
            </router-link>
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </template>
  </div>
</template>

<script setup lang="ts" name="MainCrumb">
  import { useLoginStoreAction } from "@/stores/modules/login.ts"
  import { mapPathToBreadcrumbs } from "@/utils/map_routes"
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  const useLoginStore:ReturnType<typeof useLoginStoreAction> = useLoginStoreAction()
  const breadcrumbs = ref<Array<{name:string, url:string, title:string}>>([])
  const route:ReturnType<typeof useRoute> = useRoute()

  onMounted(<T>():T | void => {
    const menuData = useLoginStore.getMenuData
    const handleBreadcrumbs = mapPathToBreadcrumbs(menuData) as
      Array<{name:string, url:string, title:string}>
    watch(route, (newValue) => {
      breadcrumbs.value = handleBreadcrumbs.filter((item) => {
        return item.url === newValue.path
      })
    }, { immediate: true })
  })
</script>

<style scoped lang="less">
</style>
