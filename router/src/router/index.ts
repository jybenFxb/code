

import { createRouter, createWebHistory } from 'vue-router'


 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('../page/home.vue')
        },
        {
            path: '/top',
            component: () => import('../page/top.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router