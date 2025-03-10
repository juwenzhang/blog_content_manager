<template>
  <div class="blog-content-manager-login">
    <LoginPanel/>
  </div>
</template>

<script setup lang="ts" name="login">
  import LoginPanel from '@/views/login/components/login-panel.vue'
  import { TOKEN_KEY } from '@/constant'
  import { localCache } from '@/utils/settleCache.ts'
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'

  const router:ReturnType<typeof useRouter> = useRouter()
  onMounted(() => {
    const token = localCache.getCache('token')
    if (token) {
      localCache.removeCache(TOKEN_KEY)
      router.push("/login")
    }
  })
</script>

<style scoped lang="less">
  .blog-content-manager-login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cfe5f3;
  }
</style>
