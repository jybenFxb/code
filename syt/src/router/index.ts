

import { createRouter,createWebHistory } from 'vue-router'


export default  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: ()=>import('@/page/home.vue')
        },
        {
            path: '/xq',
            component: ()=>import('@/page/content.vue')
        }
    ]
})