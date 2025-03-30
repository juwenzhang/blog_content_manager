interface PropsListType {
  type: "selection"
    | "index"
    | "normal"
    | "timer"
    | "handler"
    | "custom"  // 定制化配置
  label: string
  prop?: string
  width?: string
  slotName?: string
}

export const contentConfig = {
  pageName: 'content',
  header: {
    title: '内容管理',
    btnTitle: '添加内容'
  },
  propsList: [
    { type: 'selection', label: '选择', prop: 'selection', width: '80px' },
    { type: 'index', label: '序号', prop: 'id', width: '80px' },
    { type: 'normal', label: '内容标题', prop: 'title', width: '150px' },
    { type: 'normal', label: '内容类型', prop: 'type', width: '150px' },
    { type: 'normal', label: '内容状态', prop: 'statusId', width: '150px' },
    { type: 'normal', label: '内容作者', prop: 'author', width: '150px' },
    { type: 'handler', label: '操作', prop: 'handle', width: '150px' },  // 修改为 'handler'
    { type: 'timer', label: "创建时间", prop: 'create_time' },
    { type: 'timer', label: "更新时间", prop: 'update_time' },
    { type: 'handler', label: '操作', width: '150px' }  // 保持 'handler'
  ] as PropsListType[]
}

