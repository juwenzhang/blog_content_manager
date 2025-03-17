import "normalize.css"
import "@/assets/css/index.less"
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'
import RegisterIcons from '@/shared/register_icons.ts'
import { initData } from '@/shared/init.ts'

const app:ReturnType<typeof createApp> = createApp(App)
initData()
// 实现全局注册图标
app.use(RegisterIcons)
app.use(router)
app.use(pinia)

app.mount('#app')
