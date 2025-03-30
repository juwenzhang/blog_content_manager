export function useGetUserPermissionHook(permissionID: string, permissionList: string[]){
  return !!permissionList.find(() => permissionList.includes(permissionID))
}
