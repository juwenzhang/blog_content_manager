interface userType {
  id: number
  name: string
  realName: string
  departmentId: number
  roleId: number
  statusId: number
  create_time: string
  update_time: string
}

export interface userListType {
  list: Partial<userType>[],
  total: number
}

export interface systemStateType {
  systemUserList: Partial<userListType>
}
