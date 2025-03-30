<template>
  <div class="login-panel-phone">
    <el-form
      size="large"
      :model="phoneInfo"
      :rules="phoneRules"
      ref="phoneForm"
      status-icon
      label-width="70px"
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
import { useLoginStoreAction } from '@/stores/modules/login.ts'
import { faker } from '@faker-js/faker'
import { phoneRules } from '@/validation/Login.ts'
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from "@/constant/index.ts"
import { type ElForm } from 'element-plus'
import type { LoginConfigCode } from '@/types/loginType.ts'

type ElFormInstance = InstanceType<typeof ElForm>

const useLoginStore:ReturnType<typeof useLoginStoreAction> = useLoginStoreAction()
const router:ReturnType<typeof useRouter> = useRouter()
const phoneForm:ReturnType<typeof ref<ElFormInstance | null>> = ref<ElFormInstance | null>(null)
const phoneInfo:ReturnType<typeof reactive<LoginConfigCode>> = reactive<LoginConfigCode>({
  phone: useLoginStore.phone || '',
  code: ''
})

function LoginHandlePhoneAction(isRemPWD: boolean): void {
  const loginConfigPhone = localCache.getCache("loginConfigPhone") || '{}'
  if (localCache.getCache(TOKEN_KEY)) {
    localCache.removeCache(TOKEN_KEY)
  }
  if (phoneInfo.phone !== "" && phoneInfo.code !== "") {
    if (phoneInfo.phone === loginConfigPhone.phone) {
      if (isRemPWD) {
        useLoginStore.setPhone(phoneInfo.phone)
        phoneInfo.phone = useLoginStore.phone
      } else {
        useLoginStore.setClearAll()
      }
      useLoginStore.accessId = 0
      localCache.removeCache("accessId")
      localCache.setCache<LoginConfigCode>("accessId", useLoginStore.accessId)
    } else {
      if (isRemPWD) {
        useLoginStore.setPhone(phoneInfo.phone)
        phoneInfo.phone = useLoginStore.phone
      } else {
        useLoginStore.setClearAll()
      }
      useLoginStore.accessId = 1
      localCache.removeCache("accessId")
      localCache.setCache<LoginConfigCode>("accessId", useLoginStore.accessId)
    }
    localCache.setCache<string>(TOKEN_KEY, faker.string.uuid().replaceAll("-", ""))
    router.push('/home')
  } else {
    window.alert("请输入手机号和验证码")
  }
}

defineExpose({
  LoginHandlePhoneAction
})
</script>

<style scoped lang="less">

</style>
