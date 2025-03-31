import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
function RegisterIcons<T, R>(app: App<T>): R | void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default RegisterIcons
