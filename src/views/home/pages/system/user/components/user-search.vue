<template>
  <div class="system-user-search">
    <el-form :model="searchForm" label-width="80px" ref="formRef" size="large">
      <el-row :gutter="20">
        <!-- part one -->
        <el-col :span="8">
          <el-form-item label="用户名" prop="username">
            <el-input placeholder="请输入用户名" size="large" v-model="searchForm.username" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号" prop="phone">
            <el-input placeholder="请输入手机号" size="large" v-model="searchForm.phone" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="邮箱" prop="email">
            <el-input placeholder="请输入邮箱" size="large" v-model="searchForm.email" />
          </el-form-item>
        </el-col>

        <!--part two-->
        <el-col :span="8">
          <el-form-item label="状态" prop="status">
            <el-select size="large" placeholder="请选择状态" v-model="searchForm.status">
              <el-option label="启用" value="0" />
              <el-option label="禁用" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期" prop="date">
            <el-date-picker
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              range-separator="-"
              format="YYYY/MM/DD"
              value-format="YYYY/MM/DD"
              style="width: 100%"
              size="large"
              v-model="searchForm.date"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="system-user-btn">
        <el-button type="warning" size="large" :icon="'Refresh'" @click="RefreshClickHandle">
          重置
        </el-button>
        <el-button type="primary" size="large" :icon="'Search'" @click="SearchClickHandle">
          查询
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="UserSearch">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}
const formRef: ReturnType<typeof ref<InstanceType<typeof ElForm>>> =
  ref<InstanceType<typeof ElForm>>()
const searchForm: ReturnType<typeof reactive<searchForm>> = reactive<searchForm>({
  username: '',
  phone: '',
  email: '',
  status: '启用',
  date: '',
})
const emit: ReturnType<typeof defineEmits> = defineEmits(['queryClick', 'resetClick'])
const RefreshClickHandle: <T>() => T | void = <T,>(): T | void => {
  if (formRef.value) {
    /**
     * need attach prop on el-form-item
     * if not, it will fail reset
     * if you want not to use this methods to realise reset
     * you can reset form fields by one by one
     * searchForm.username = ''
     * searchForm.phone = ''
     * searchForm.email = ''
     * searchForm.status = ''
     * searchForm.date = ''
     */
    formRef.value?.resetFields() // reset form fields
    emit('resetClick')
  }
}

const SearchClickHandle: <T>() => T | void = <T,>(): T | void => {
  emit('queryClick', searchForm)
}

defineExpose({
  searchForm,
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
