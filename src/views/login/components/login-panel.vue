<template>
  <div class="login-panel">
    <h1 class="login-panel-title">
      {{ login_message_data.title }}
    </h1>
    <div class="login-panel-tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>
              {{ login_message_data.tabs.login }}
            </span>
          </template>
          <template #default>
            <LoginPanelAccount ref="accountRef" />
          </template>
        </el-tab-pane>

        <el-tab-pane name="phone">
          <template #label>
            <el-icon>
              <PhoneFilled ref="phoneRef" />
            </el-icon>
            <span>
              {{ login_message_data?.tabs.register }}
            </span>
          </template>
          <template #default>
            <LoginPanelPhone ref="phoneRef" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-panel-control-account">
      <el-checkbox
        v-model="isRemPWD"
        :label="login_message_data.control_account.remember_password"
      />
      <el-link type="primary" href="/">
        {{ login_message_data.control_account.forget_password }}
      </el-link>
    </div>
    <div class="login-panel-action-btn">
      <el-button
        type="primary"
        class="login-panel-btn"
        size="default"
        @click="LoginHandleSelect"
        ref="buttonRef"
      >
        {{ login_message_data.btn_login }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLoginStoreAction } from '@/stores/modules/login.ts'
import { login_message_data } from '@/assets/data/loginData.ts'
import { ElButton } from 'element-plus'
import LoginPanelAccount from '@/views/login/components/login-panel-account.vue'
import LoginPanelPhone from '@/views/login/components/login-panel-phone.vue'

type LoginPanelAccountInstance = InstanceType<typeof LoginPanelAccount>
type LoginPanelPhoneInstance = InstanceType<typeof LoginPanelPhone>
type ElButtonInstance = InstanceType<typeof ElButton>

const useLoginStore: ReturnType<typeof useLoginStoreAction> = useLoginStoreAction()
const isRemPWD: ReturnType<typeof ref<boolean>> = ref<boolean>(useLoginStore.isRemPWD || false)
const activeName: ReturnType<typeof ref<string>> = ref<string>(useLoginStore.type || 'account')
const accountRef: ReturnType<typeof ref<LoginPanelAccountInstance | any>> = ref<
  LoginPanelAccountInstance | any
>()
const phoneRef: ReturnType<typeof ref<LoginPanelPhoneInstance | any>> = ref<
  LoginPanelPhoneInstance | any
>()
const buttonRef: ReturnType<typeof ref<ElButtonInstance | any>> = ref<ElButtonInstance>()

const LoginHandleSelect: ReturnType<typeof ref<() => void>> = ref<() => void>()
onMounted(<T,>(): T | void => {
  LoginHandleSelect.value = () => {
    switch (activeName.value) {
      case 'account':
        accountRef.value.LoginHandleAccountAction(isRemPWD.value)
        break
      case 'phone':
        phoneRef.value.LoginHandlePhoneAction(isRemPWD.value)
        break
    }
  }
})
watch(isRemPWD, (newValue) => {
  useLoginStore.setIsRemPWD(newValue)
})
watch(activeName, (newValue) => {
  useLoginStore.setType(newValue)
})
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 15px;
  transform: translateY(-25%);

  .login-panel-title {
    text-align: center;
    margin-bottom: 15px;
  }

  .login-panel-control-account {
    display: flex;
    justify-content: space-between;
  }

  .login-panel-action-btn {
    .login-panel-btn {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border-width: 1px;
      background-color: #6bb5ea;
    }
  }
}
</style>
