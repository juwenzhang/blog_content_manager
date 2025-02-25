import "normalize.css"
import "@/assets/css/index.less"
import { createApp } from 'vue'
import App from '@/App.vue'
import { loginConfig } from '@/assets/login_info/login_config.ts'
import router from '@/router'
import pinia from '@/stores'

// 进行项目的登录信息的初始化
if (localStorage.getItem('loginConfig')) {
  localStorage.clear()
} else {
  localStorage.setItem('loginConfig', JSON.stringify(loginConfig))
}

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
