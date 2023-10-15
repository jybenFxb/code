import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
//引入清除默认样式
import '@/style/reset.scss'
const app = createApp(App)

//安装vue-router
app.use(router);
app.mount('#app')

