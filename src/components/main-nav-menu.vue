<template>
  <div class="main-nav-menu">
    <div class="main-env-menu-logo" @click="menuLogoClickHandler">
      <img src="@/assets/logo.jpg" alt="">
      <div class="main-nav-menu-title" v-show="!isCollapse">
        blog-manager
      </div>
    </div>

    <div class="main-nav-menu-menu">
      <el-menu
        :default-active="defaultActive"
        :collapse="isCollapse"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="(item, index) in Object.keys(homeMenuData)" :key="index">
          <el-sub-menu :index="String(index)">
            <template #title>
              <el-icon><component :is="componentList[index]"/></el-icon>
              <span>{{ Object.keys(homeMenuData)[index] }}</span>
            </template>
            <template
              v-for="(sub_item, sub_index) in homeMenuData[item]"
              :key="sub_index"
            >
              <el-menu-item
                :class="{ 'is-active'
                  : currentIndex.index === index
                  && currentIndex.subIndex === sub_index
                }"
                @click="subMenuClickHandler(index, sub_index, sub_item.url)"
              >
                {{ sub_item.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts" name="MainNavMenu">
  import { ref, computed, type Component, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { Monitor, ChatDotRound, Setting, ShoppingBag } from '@element-plus/icons-vue'
  import { useHomeStoreAction } from "@/stores/modules/home.ts"
  import { useLoginStoreAction } from '@/stores/modules/login.ts'
  import { localCache } from '@/utils/settleCache.ts'

  const componentList:Array<Component> = [Monitor, Setting, ShoppingBag, ChatDotRound]
  const useHomeStore:ReturnType<typeof useHomeStoreAction> = useHomeStoreAction()
  const useLoginStore:ReturnType<typeof useLoginStoreAction> = useLoginStoreAction()
  const router:ReturnType<typeof useRouter> = useRouter()
  const { isCollapse } = defineProps({
    isCollapse: { type: Boolean, default: localCache.getCache('isCollapse') }
  })
  const defaultActive = computed(() =>
    `${currentIndex.value.index}-${currentIndex.value.subIndex}`
  )
  const currentIndex = ref<{index:number,subIndex:number}>({index:0, subIndex:0})
  const homeMenuData = useLoginStore.getAccessId === 0
    ? useHomeStore.getAdminHomeData
    : useHomeStore.getUserHomeData
  const subMenuClickHandler = <T>(index:number, sub_index:number, url:string):T | void => {
    currentIndex.value = { index, subIndex: sub_index }
    router.push(url)
  }
  const menuLogoClickHandler = <T>():T | void => {
    router.push('/login')
  }
  onMounted(<T>():T | void => {
    useLoginStore.setMenuData(homeMenuData)
  })
</script>

<style scoped lang="less">
  .main-nav-menu {
    color: black;
    height: 100%;
    background-color: #001529;
    .main-env-menu-logo {
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 10px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;

      img {
        height: 100%;
        margin: 0 10px;
      }

      .main-nav-menu-title {
        font-size: 16px;
        font-weight: 700;
        color: white;
        white-space: nowrap;
      }
    }

    .main-nav-menu-menu {
      .el-menu {
        border-right:none;
        user-select: none;

        .el-sub-menu {
          .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135;

            &:hover {
              background-color: #fff;
            }

            &.is-active {
              background-color: #0a60bd;
            }
          }
        }
      }
    }
  }
</style>
