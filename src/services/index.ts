// 统一导出模块
import {
  accountLoginRequest,
  phoneLoginRequest,
  getUserInfoByIdRequest,
} from '@/services/modules/login/login'

export const userListRequest = {
  accountLoginRequest,
  phoneLoginRequest,
  getUserInfoByIdRequest,
}
