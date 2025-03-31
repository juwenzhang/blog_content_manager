<template>
  <div class="system-user-content">
    <div class="system-user-header">
      <h2 class="system-user-title">{{ header?.title ?? '数据列表' }}</h2>
      <el-button type="primary" size="large" @click="handleAddData" v-if="userPermission.isCreate">
        {{ header?.btnTitle ?? '数据操作' }}
      </el-button>
    </div>
    <div class="system-user-table">
      <template v-if="userList?.list">
        <el-table :data="userList.list" border stripe size="large" :row-key="childrenTree?.rowKey">
          <template v-for="(item, _) in propsList" :key="_">
            <template v-if="item?.type === 'index'">
              <el-table-column type="index" label="序号" width="75" align="center" />
            </template>
            <template v-if="item?.type === 'selection'">
              <el-table-column type="selection" width="55" align="center" />
            </template>
            <template v-if="item?.type === 'normal'">
              <el-table-column align="center" v-bind="item" />
            </template>
            <template v-if="item.type === 'timer'">
              <el-table-column v-bind="item" align="center">
                <template #default="scope">
                  {{ item?.prop && formatTimeToUTC(scope.row[item?.prop]) }}
                </template>
              </el-table-column>
            </template>
            <template v-if="item.type === 'handler'">
              <el-table-column align="center">
                <!-- name slot -->
                <template #header>
                  <span>操作</span>
                </template>
                <template #default="scope">
                  <el-button
                    v-if="userPermission.isUpdate"
                    size="small"
                    type="primary"
                    text
                    icon="Edit"
                    @click="handleEditData(scope.row)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    v-if="userPermission.isDelete"
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
            </template>
            <template v-if="item.type === `custom`">
              <el-table-column align="center" v-bind="item">
                <template #default="scope">
                  <slot :name="item?.slotName" v-bind="scope" :prop="item.prop" />
                </template>
              </el-table-column>
            </template>
          </template>
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

<script setup lang="ts" name="PageContent">
import { ref, onMounted, reactive } from 'vue'
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

// you can mv this interface to other file
// but there is not need to move it to other file
interface PropsListType {
  type: 'selection' | 'index' | 'normal' | 'timer' | 'handler' | 'custom' // 定制化配置
  label: string
  prop?: string
  width?: string
  slotName?: string
}
interface PropsType {
  pageName: string
  header?: {
    title?: string
    btnTitle?: string
  }
  propsList: PropsListType[]
  childrenTree?: {
    rowKey: string
    treeProps?: string
  }
  /**
   * 每个数组内部需要进行{ type:string, label: string, prop: string, width?: string }
   * 页面中会跟你传入的不同类型进行判断如何进行展示吧
   */
}
const { pageName, header, propsList, childrenTree } = defineProps<PropsType>()

// permission control
const userPermission = reactive({
  isCreate: false,
  isDelete: false,
  isUpdate: false,
  isQuery: false,
})

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
  if (userPermission.isQuery) return
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const query_params = { size, offset, searchForm }
  return await useSystemStore.postUserListRequest(pageName, query_params)
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
