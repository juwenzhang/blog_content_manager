import { loginConfigCode, loginConfigPhone } from '@/assets/login_info/login_config.ts'
import { localCache } from '@/utils/settleCache.ts'

export function SaveLoginInitLocalData() {
  if (!localCache.getCache('loginConfigCode')) {
    localCache.setCache('loginConfigCode', loginConfigCode)
  }
  if (!localCache.getCache('loginConfigPhone')) {
    localCache.setCache('loginConfigPhone', loginConfigPhone)
  }
}
