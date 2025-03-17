<template>
  <div class="login-panel-account">
    <el-form
      size="large"
      :model="accountInfo"
      :rules="AccountRules"
      ref="account"
      status-icon
      label-width="60px"
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
  import { useLoginStoreAction } from '@/stores/modules/login.ts'
  import { AccountRules } from '@/validation/Login.ts'
  import { faker } from '@faker-js/faker'
  import { type ElForm } from 'element-plus'
  import { localCache } from '@/utils/settleCache.ts'
  import { TOKEN_KEY } from "@/constant/index.ts"
  import type { LoginAccount } from '@/types/loginType.ts'

  type ElFormInstance = InstanceType<typeof ElForm>

  const router:ReturnType<typeof useRouter> = useRouter()
  const useLoginStore:ReturnType<typeof useLoginStoreAction> = useLoginStoreAction()
  const account:ReturnType<typeof ref> = ref<ElFormInstance | null>(null)
  let accountInfo:ReturnType<typeof reactive<LoginAccount>> = reactive<LoginAccount>({
    username: useLoginStore.username || '',
    password: useLoginStore.password || ''
  })

  function LoginHandleAccountAction(isRemPWD: boolean): void {
    const loginConfigCode = localCache.getCache("loginConfigCode") || '{}'
    if (localCache.getCache(TOKEN_KEY)) {
      localCache.removeCache(TOKEN_KEY)
    }
    if (accountInfo.password !== "" && accountInfo.username !== "") {
      if (accountInfo.password === loginConfigCode.password
        && accountInfo.username === loginConfigCode.username) {
        if (isRemPWD) {
          useLoginStore.setUsername(accountInfo.username)
          useLoginStore.setPassword(accountInfo.password)
          accountInfo = {
            username: useLoginStore.username,
            password: useLoginStore.password
          }
        } else {
          useLoginStore.setClearAll()
        }
        useLoginStore.accessId = 0
        localCache.removeCache("accessId")
        localCache.setCache<string>("accessId", useLoginStore.accessId)
      } else {
        if (isRemPWD) {
          useLoginStore.setUsername(accountInfo.username)
          useLoginStore.setPassword(accountInfo.password)
          accountInfo = {
            username: useLoginStore.username,
            password: useLoginStore.password
          }
        } else {
          useLoginStore.setClearAll()
        }
        useLoginStore.accessId = 1
        localCache.removeCache("accessId")
        localCache.setCache<string>("accessId", useLoginStore.accessId)
      }
      localCache.setCache<string>(TOKEN_KEY, faker.string.uuid().replaceAll("-", ""))
      router.push('/home')
    } else {
      window.alert("请输入账号和密码")
    }
  }

  defineExpose({
    LoginHandleAccountAction
  })
</script>

<style scoped lang="less">

</style>
