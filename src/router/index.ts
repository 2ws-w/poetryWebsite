import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue'),
    },
    {
        path: '/poetryPage',
        name: 'poetryPage',
        component: () => import('../views/poetryPage.vue'),
    },
    {
        path: '/poetryDetail',
        name: 'poetryDetail',
        component: () => import('../views/poetryDetail.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router