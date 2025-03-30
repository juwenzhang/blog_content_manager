<template>
  <div class="system-user-search">
    <el-form
      :model="searchForm"
      label-width="80px"
      ref="formRef"
      size="large"
    >
      <el-row :gutter="20">
        <template v-for="(item, index) in formItems" :key="index">
          <el-col :span="8">
            <el-form-item v-bind="item">
              <el-input/>
            </el-form-item>
          </el-col>
        </template>
      </el-row>

      <div class="system-user-btn">
        <el-button
          type="warning"
          size="large"
          :icon="'Refresh'"
          @click="RefreshClickHandle">
          重置
        </el-button>
        <el-button
          type="primary"
          size="large"
          :icon="'Search'"
          @click="SearchClickHandle">
          查询
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="PageSearch">
// 使用我们的组件通信进行一定的组件逻辑抽离
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

interface formItemsType {
  type: string
  label: string
  prop: string
  placeholder?: string
  options?: any[]
}
interface PropsType {
  formItems: formItemsType[]
  /**
   * { type: string, label: string, prop: string }
   */
}
const { formItems } = defineProps<PropsType>()
console.log(formItems)

const formRef: ReturnType<typeof ref<InstanceType<typeof ElForm>>>
  = ref<InstanceType<typeof ElForm>>()
const searchForm: ReturnType<typeof reactive> = reactive<any>({})
const emit: ReturnType<typeof defineEmits> = defineEmits(['queryClick', 'resetClick'])

const RefreshClickHandle:<T>() => T | void = <T>(): T | void => {
  if (formRef.value) {
    formRef.value?.resetFields()  // reset form fields
    emit('resetClick')
  }
}

const SearchClickHandle:<T>() => T | void = <T>(): T | void => {
  emit('queryClick', searchForm)
}

defineExpose({
  searchForm
})
</script>

<style scoped lang="less">
.system-user-search {
  background-color: #fff;
  padding: 20px;
  overflow: hidden;
  margin-bottom: 15px;

  .el-form-item {
    padding: 20px;
    margin-bottom: 0;
    cursor: pointer;
  }

  .system-user-btn {
    text-align: right;
    padding: 0 25px 0 0;
  }
}
</style>
