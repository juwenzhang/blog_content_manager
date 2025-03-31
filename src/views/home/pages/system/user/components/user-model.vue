<template>
  <div class="system-user-model">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <div class="system-user-model-form">
        <el-form label-width="80px" :model="formData" size="large" ref="formRef">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="formData.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="realName" label="真实姓名">
            <el-input v-model="formData.realName" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password />
          </el-form-item>
          <el-form-item prop="phone" label="手机号">
            <el-input v-model="formData.phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item prop="department_id" label="部门编号">
            <el-input v-model="formData.department_id" placeholder="请输入部门编号" />
          </el-form-item>
          <el-form-item prop="role" label="角色">
            <el-select v-model="formData.role" placeholder="请选择角色">
              <el-option label="测试用户" value="测试用户" />
              <el-option label="普通用户" value="普通用户" />
              <el-option label="管理员" value="管理员" />
              <el-option label="超级管理员" value="超级管理员" />
            </el-select>
          </el-form-item>
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

<script setup lang="ts" name="user-model">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
interface formDataType {
  username: string
  realName: string
  password: string
  phone: string
  department_id: string
  role: string
}

const formRef: ReturnType<typeof ref<InstanceType<typeof ElForm>>> =
  ref<InstanceType<typeof ElForm>>()
const dialogVisible: ReturnType<typeof ref<boolean>> = ref<boolean>(false)
let formData: ReturnType<typeof reactive<formDataType>> = reactive<formDataType>({
  username: '',
  realName: '',
  password: '',
  phone: '',
  department_id: '',
  role: '',
})

const changeDialogVisible: <T>() => T | void = <T,>(): T | void => {
  dialogVisible.value = !dialogVisible.value
  formData = {
    username: '',
    realName: '',
    password: '',
    phone: '',
    department_id: '',
    role: '',
  }
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
