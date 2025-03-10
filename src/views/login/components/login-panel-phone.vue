<template>
  <div class="login-panel-phone">
    <el-form
      size="large"
      :model="phoneInfo"
      :rules="phoneRules"
      ref="phoneForm"
    status-icon
    >
    <el-form-item
      label="手机号"
      label-position="right"
      prop="phone"
    >
      <el-input
        v-model="phoneInfo.phone"
      />
    </el-form-item>
    <el-form-item
      label="验证码"
      label-position="right"
      prop="code"
    >
      <el-input
        v-model="phoneInfo.code"
      />
    </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { loginStoreAction } from '@/stores/modules/login.ts'
  import { faker } from '@faker-js/faker'
  import { phoneRules } from '@/validation/Login.ts'
  import { localCache } from '@/utils/settleCache.ts'
  import { TOKEN_KEY } from "@/constant/index.ts"
  import type { ElForm } from 'element-plus'
  import type { LoginConfigCode } from '@/types/loginType.ts'

  type ElFormInstance = InstanceType<typeof ElForm>

  const loginStore:ReturnType<typeof loginStoreAction> = loginStoreAction()
  const router:ReturnType<typeof useRouter> = useRouter()
  const phoneForm:ReturnType<typeof ref<ElFormInstance | null>> = ref<ElFormInstance | null>(null)
  const phoneInfo:ReturnType<typeof reactive<LoginConfigCode>> = reactive<LoginConfigCode>({
    phone: loginStore.phone || '',
    code: ''
  })

  function LoginHandlePhoneAction(isRemPWD: boolean): void {
    const loginConfigPhone = localCache.getCache("loginConfigPhone") || '{}'
    if (localCache.getCache(TOKEN_KEY)) {
      localCache.removeCache(TOKEN_KEY)
    }
    if (phoneInfo.phone === loginConfigPhone.phone) {
      if (isRemPWD) {
        loginStore.setPhone(phoneInfo.phone)
        phoneInfo.phone = loginStore.phone
      } else {
        loginStore.setClearAll()
      }
      localCache.setCache<string>(TOKEN_KEY, faker.string.uuid().replaceAll("-", ""))
      router.push('/home')
    } else {
      console.log("账号或者验证码不正确")
    }
  }

  defineExpose({
    LoginHandlePhoneAction
  })
</script>

<style scoped lang="less">

</style>
