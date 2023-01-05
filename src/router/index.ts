import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue'),
    },
    {
        path: '/dynastyCategory',
        name: 'dynastyCategory',
        component: () => import('../views/dynastyCategory.vue'),
    },
    {
        path: '/poetryDetail',
        name: 'poetryDetail',
        component: () => import('../views/poetryDetail.vue'),
    },
    {
        path: '/tattle',
        name: 'tattle',
        component: () => import('../views/tattle.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue'),
    },
    {
        path: '/poetryCreate',
        name: 'poetryCreate',
        component: () => import('../views/poetryCreate.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hideCommon: true
        },
        component: () => import('../views/login.vue'),
    },
    {
        path: '/sign',
        name: 'sign',
        meta: {
            hideCommon: true
        },
        component: () => import('../views/sign.vue'),
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router