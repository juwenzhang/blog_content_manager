<template>
  <div class="system-user-model">
    <el-dialog
      v-model="dialogVisible"
      :title="props.header.addTitle || props.header.editTitle || '新建用户'"
      width="30%"
      center
    >
      <div class="system-user-model-form">
        <el-form label-width="80px" :model="formData" size="large" ref="formRef">
          <template v-for="(item, index) in props.propsList" :key="index">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-model="formData[item.prop]" :placeholder="item.placeholder">
                  <el-option
                    v-for="(option, index) in item.options"
                    :key="index"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'date'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName" />
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <div class="system-user-model-dialog-footer">
          <el-button type="primary" @click="confirmBtnClickHandle">确定</el-button>
          <el-button @click="changeDialogVisible">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="PageModel">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'

interface propsListType {
  type: string
  label: string
  prop: string
  placeholder: string
  slotName?: string
  initialValue?: string
  options?: { label: string; value: string }[]
}
interface propsType<T> {
  header: {
    addTitle?: string
    editTitle?: string
  }
  propsList: T[]
}
const props = defineProps<propsType<propsListType>>()

const formRef: ReturnType<typeof ref<InstanceType<typeof ElForm>>> =
  ref<InstanceType<typeof ElForm>>()
const dialogVisible: ReturnType<typeof ref<boolean>> = ref<boolean>(false)
const initializeData: () => any = function () {
  const initialData: any = {}
  for (const item of props.propsList) {
    initialData[item.prop] = item.initialValue ?? ''
  }
  return initialData
}
const formData: ReturnType<typeof reactive<ReturnType<typeof initializeData>>> =
  reactive<ReturnType<typeof initializeData>>(initializeData())

const changeDialogVisible: <T>() => T | void = <T,>(): T | void => {
  dialogVisible.value = !dialogVisible.value
  const resetFormData = () => {
    formRef.value?.resetFields()
  }
  resetFormData()
}
const confirmBtnClickHandle: <T>() => T | void = <T,>(): T | void => {
  changeDialogVisible()
}
const changeFormData = <T, K>(EditFormData: K): T | void => {
  changeDialogVisible()
  const data = EditFormData as {
    name: string
    realName: string
    roleId: string
    statusId: string
    departmentId: string
    create_time: string
    update_time: string
  }
  formData.username = data.name
  formData.realName = data.realName
  formData.role = data.roleId
  formData.department_id = data.departmentId
}

defineExpose({
  changeDialogVisible,
  changeFormData,
})
</script>

<style scoped lang="less">
.system-user-model {
  .system-user-model-form {
    padding: 0 20px;
  }

  .system-user-model-dialog-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
