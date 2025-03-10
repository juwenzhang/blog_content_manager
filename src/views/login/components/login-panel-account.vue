<template>
  <div class="login-panel-account">
    <el-form
      size="large"
      :model="accountInfo"
      :rules="AccountRules"
      ref="account"
      status-icon
    >
      <el-form-item
        label="账户"
        label-position="right"
        prop="username"
      >
        <el-input
          v-model="accountInfo.username"
          :show-password="true"
        />
      </el-form-item>

      <el-form-item
        label="密码"
        label-position="right"
        prop="password"
      >
        <el-input
          v-model="accountInfo.password"
          :show-password="true"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { loginStoreAction } from '@/stores/modules/login.ts'
  import { AccountRules } from '@/validation/Login.ts'
  import { faker } from '@faker-js/faker'
  import { ElForm } from 'element-plus'
  import { localCache } from '@/utils/settleCache.ts'
  import { TOKEN_KEY } from "@/constant/index.ts"
  import type { LoginAccount } from '@/types/loginType.ts'

  type ElFormInstance = InstanceType<typeof ElForm>

  const router:ReturnType<typeof useRouter> = useRouter()
  const loginStore:ReturnType<typeof loginStoreAction> = loginStoreAction()
  const account:ReturnType<typeof ref> = ref<ElFormInstance | null>(null)
  let accountInfo:ReturnType<typeof reactive<LoginAccount>> = reactive<LoginAccount>({
    username: loginStore.username || '',
    password: loginStore.password || ''
  })

  function LoginHandleAccountAction(isRemPWD: boolean): void {
    const loginConfigCode = localCache.getCache("loginConfigCode") || '{}'
    if (localCache.getCache(TOKEN_KEY)) {
      localCache.removeCache(TOKEN_KEY)
    }
    if (accountInfo.password === loginConfigCode.password
      && accountInfo.username === loginConfigCode.username) {
      if (isRemPWD) {
        loginStore.setUsername(accountInfo.username)
        loginStore.setPassword(accountInfo.password)
        accountInfo = {
          username: loginStore.username,
          password: loginStore.password
        }
      } else {
        loginStore.setClearAll()
      }
      localCache.setCache<string>(TOKEN_KEY, faker.string.uuid().replaceAll("-", ""))
      router.push('/home')
    } else {
      console.log("账号或者密码不正确")
    }
  }

  defineExpose({
    LoginHandleAccountAction
  })
</script>

<style scoped lang="less">

</style>
