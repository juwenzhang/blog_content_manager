<template>
  <div class="system-user-content">
    <div class="system-user-header">
      <h2 class="system-user-title">用户列表</h2>
      <el-button type="primary" size="large" @click="handleAddData">新建用户</el-button>
    </div>
    <div class="system-user-table">
      <template v-if="userList?.list">
        <el-table :data="userList.list" border stripe size="large">
          <!-- self part -->
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column type="index" label="序号" width="75" align="center" />

          <!-- table content -->
          <el-table-column prop="name" label="姓名" :width="columns" align="center" />
          <el-table-column prop="realName" label="真实姓名" :width="columns" align="center" />
          <el-table-column prop="departmentId" label="部门编号" :width="columns" align="center" />
          <el-table-column prop="roleId" label="角色编号" :width="columns" align="center" />
          <el-table-column prop="statusId" label="状态" :width="columns" align="center">
            <!-- scope slot -->
            <template #default="scope">
              <el-button size="small" :type="scope.row.statusId ? 'success' : 'danger'" plain>
                {{ scope.row.statusId ? '启用' : '禁用' }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间" :width="columns" align="center">
            <template #default="scope">
              {{ formatTimeToUTC(scope.row.create_time) }}
            </template>
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" :width="columns" align="center">
            <template #default="scope">
              {{ formatTimeToUTC(scope.row.update_time) }}
            </template>
          </el-table-column>

          <!-- table operator -->
          <el-table-column align="center">
            <!-- name slot -->
            <template #header>
              <span>操作</span>
            </template>
            <template #default="scope">
              <el-button
                size="small"
                type="primary"
                text
                icon="Edit"
                @click="handleEditData(scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="small"
                type="danger"
                text
                icon="Delete"
                @click="handleDeleteData(scope.row.id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="system-user-pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userList?.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="UserContent">
import { ref, onMounted } from 'vue'
import { useSystemStoreAction } from '@/stores/modules/system'
import { formatTimeToUTC } from '@/utils/formatTime'
import type { userListType } from '@/types/systemType.ts'

interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}

// init page data
const useSystemStore: ReturnType<typeof useSystemStoreAction> = useSystemStoreAction()
const userList: ReturnType<typeof ref<Partial<userListType>>> = ref<Partial<userListType>>({})
const columns: ReturnType<typeof ref<number>> = ref<number>(0)
const handleSizeChange: ReturnType<typeof ref<(val: number) => void>> = ref<(val: number) => void>(
  () => {},
)
const handleCurrentChange: ReturnType<typeof ref<(val: number) => void>> = ref<
  (val: number) => void
>(() => {})
const currentPage = ref<number>(1)
const pageSize = ref<number>(10)
const emit = defineEmits(['showDialog', 'editData'])

// fetch data from server
const fetchUserListRequest = async (searchForm: Partial<searchForm> = {}) => {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const query_params = { size, offset, searchForm }
  return await useSystemStore.postUserListRequest('user', query_params)
}

const handleAddData: <T>() => T | void = <T,>(): T | void => {
  emit('showDialog')
}
const handleDeleteData: <T>(id: T) => void = async <T,>(id: T) => {
  const res = await useSystemStore.deleteUserByIdRequest(id)
  if (res) {
    userList.value = res
  }
}
const handleEditData: <T, K>(formData: K) => T | void = <T, K>(formData: K): T | void => {
  emit('editData', formData)
}

// reset page data after page mounted
onMounted(async () => {
  userList.value = await fetchUserListRequest()
  if (userList.value?.list) {
    columns.value = 1 / Object.keys(userList.value.list[0]).length
  }
  handleSizeChange.value = async () => {
    userList.value = await fetchUserListRequest()
  }
  handleCurrentChange.value = async () => {
    userList.value = await fetchUserListRequest()
  }
})

defineExpose({
  fetchUserListRequest,
})
</script>

<style scoped lang="less">
.system-user-content {
  background-color: #fff;
  padding: 20px;

  .system-user-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .system-user-table {
    cursor: pointer;
    margin-bottom: 15px;

    el-table {
      width: 100%;
    }
  }

  .system-user-pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
