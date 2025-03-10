import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
function RegisterIcons<T>(app:App<T>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default RegisterIcons;
