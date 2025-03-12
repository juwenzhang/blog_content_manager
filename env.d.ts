/// <reference types="vite/client" />
// 全局模块注册信息
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, never>
  export default component
}
