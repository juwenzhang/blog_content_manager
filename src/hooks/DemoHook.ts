// usePageContentHook.ts
import { ref, onMounted, type Ref } from 'vue'
import { useSystemStoreAction } from '@/stores/modules/system'
import type { userListType } from '@/types/systemType.ts'

interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}

interface PropsListType {
  type: 'selection' | 'index' | 'normal' | 'timer' | 'handle' | 'custom' // 定制化配置
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
}

interface UsePageContentHookReturnType {
  userList: Ref<Partial<userListType>>
  currentPage: Ref<number>
  pageSize: Ref<number>
  handleSizeChange: (val: number) => void
  handleCurrentChange: (val: number) => void
  handleAddData: () => void
  handleDeleteData: (id: any) => void
  handleEditData: (formData: any) => void
  fetchUserListRequest: (searchForm?: Partial<searchForm>) => Promise<void>
}

function demoHook(props: PropsType): UsePageContentHookReturnType {
  const useSystemStore = useSystemStoreAction()
  const userList = ref<Partial<userListType>>({})
  const currentPage = ref<number>(1)
  const pageSize = ref<number>(10)

  const handleSizeChange = (val: number) => {
    pageSize.value = val
    fetchUserListRequest()
  }

  const handleCurrentChange = (val: number) => {
    currentPage.value = val
    fetchUserListRequest()
  }

  const handleAddData = () => {
    // 你的逻辑
  }

  const handleDeleteData = async (id: any) => {
    const res = await useSystemStore.deleteUserByIdRequest(id)
    if (res) {
      userList.value = res
    }
  }

  const handleEditData = (formData: any) => {
    // 你的逻辑
  }

  const fetchUserListRequest = async (searchForm: Partial<searchForm> = {}) => {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const query_params = { size, offset, searchForm }
    userList.value = await useSystemStore.postUserListRequest(props.pageName, query_params)
  }

  onMounted(async () => {
    await fetchUserListRequest()
  })

  return {
    userList,
    currentPage,
    pageSize,
    handleSizeChange,
    handleCurrentChange,
    handleAddData,
    handleDeleteData,
    handleEditData,
    fetchUserListRequest,
  }
}

export default demoHook
