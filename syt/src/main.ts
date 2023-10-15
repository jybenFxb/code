import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/store'
//引入清除默认样式
import '@/style/reset.scss'
const app = createApp(App)

//安装vue-router
app.use(router);
app.use(pinia)
app.mount('#app')

