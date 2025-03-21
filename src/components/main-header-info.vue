<template>
  <div class="main-header-info">
    <div class="main-header-info-operation">
      <span>
        <el-icon><Search/></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotRound/></el-icon>
      </span>
      <span>
        <el-icon><Message/></el-icon>
      </span>
    </div>
    <div class="main-header-info-info">
      <el-dropdown>
          <span class="main-header-dropdown">
            <el-avatar :size="30" :src="String(userAvatarUrl)"/>
            <span class="header-username">juwenzhang</span>
          </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="exitClickHandle">
              <el-icon><CircleClose/></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled/></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Lock/></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="MainHeaderInfo">
  import { ChatDotRound, CircleClose, InfoFilled,
    Lock, Message, Search
  } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  import { localCache } from '@/utils/settleCache.ts'
  import { TOKEN_KEY } from '@/constant'
  import { useLoginStoreAction } from '@/stores/modules/login.ts'
  import type { RouteType } from '@/types/RouteType.ts'

  const userAvatarUrl:URL = new URL('@/assets/logo.jpg', import.meta.url)
  const router:ReturnType<typeof useRouter> = useRouter()
  const exitClickHandle = <T>(): T | void => {
    localCache.removeCache(TOKEN_KEY)
    useLoginStoreAction().setClearAll()
    const files = import.meta.glob('@/router/*/*/*.ts', { eager: true })
    for(const key in files) {
      const module = files[key] as { default: RouteType }
      if (router.hasRoute(module.default.name as string)) {
        router.removeRoute(module.default.name as string)
      }
    }
    localCache.removeCache('localRoutes')
    router.push('/login')
  }
</script>

<style scoped lang="less">
  .main-header-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .main-header-info-operation {
      display: flex;
      gap: 10px;
      span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        &:hover {
          background-color: #f8ebeb;
        }
        i {
          font-size: 20px;
        }
        .dot {
          position: absolute;
          top: 3px;
          right: 3px;
          z-index: 10;
          width: 6px;
          height: 6px;
          background-color: red;
          border-radius: 100%;
        }
      }
    }
    .main-header-info-info {
      :global(.el-dropdown-menu__item) {  /* from global get styleName :deep 一样的呐 */
        line-height: 36px !important;
        padding: 6px 22px;
        font-size: 14px;
      }
      .main-header-dropdown {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;

        .header-username {
          margin-left: 5px;
        }
      }
    }
  }
</style>
