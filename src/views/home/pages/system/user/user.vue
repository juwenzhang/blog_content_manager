<template>
  <div class="system-user">
    <UserSearch
      @query-click="queryClickHandler"
      @reset-click="resetClickHandler"
      ref="userSearchRef"
    />
    <UserContent
      ref="userContentRef"
      @show-dialog="showDialogHandler"
      @edit-data="editDataHandler"
    />
    <UserModel ref="userModelRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from '@/views/home/pages/system/user/components/user-search.vue'
import UserContent from '@/views/home/pages/system/user/components/user-content.vue'
import UserModel from '@/views/home/pages/system/user/components/user-model.vue'
import { ref, onMounted } from 'vue'

const userContentRef: ReturnType<typeof ref<InstanceType<typeof UserContent>>> =
  ref<InstanceType<typeof UserContent>>()
const userSearchRef: ReturnType<typeof ref<InstanceType<typeof UserSearch>>> =
  ref<InstanceType<typeof UserSearch>>()
const userModelRef: ReturnType<typeof ref<InstanceType<typeof UserModel>>> =
  ref<InstanceType<typeof UserModel>>()

interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}

const queryClickHandler = <T,>(searchForm: Partial<searchForm>): T | void => {
  userContentRef.value?.fetchUserListRequest(searchForm)
}
const resetClickHandler = <T,>(): T | void => {
  userContentRef.value?.fetchUserListRequest({})
}
const showDialogHandler = <T,>(): T | void => {
  userModelRef.value?.changeDialogVisible()
}
const editDataHandler = <T, K>(formData: K): T | void => {
  userModelRef.value?.changeFormData(formData)
}

onMounted(() => {
  queryClickHandler(userSearchRef.value?.searchForm as Partial<searchForm>)
})
</script>

<style scoped lang="less">
.system-user {
  border-radius: 20px;
}
</style>
