import { SaveLoginInitLocalData } from "@/shared/login_info"
import { SaveHomeDataInitLocalData } from "@/shared/home_info.ts"
export function initData<T>(): T | void {
  SaveLoginInitLocalData()
  SaveHomeDataInitLocalData()
}
