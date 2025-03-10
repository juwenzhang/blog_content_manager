<template>
  <div class="blog-content-manager-home">
    <button
      @click="layoutHandle"
    >
      {{
        homeData?.layout
      }}
    </button>
  </div>
</template>

<script setup lang="ts" name="home">
  import { homeData } from '@/assets/data/homeData.ts'
  import { localCache } from '@/utils/settleCache.ts'
  import { TOKEN_KEY } from '@/constant'
  import { useRouter } from 'vue-router'

  const router:ReturnType<typeof useRouter> = useRouter()
  const layoutHandle = () => {
    localCache.removeCache(TOKEN_KEY)
    router.push(homeData?.redirect as string)
  }
</script>

<style scoped lang="less">

</style>
