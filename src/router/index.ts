import { number, object } from 'joi'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Info from '../pages/info.vue'
import Read from '../pages/read.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/info/:manga',
        name: 'info',
        component: Info
    },
    {
        path: '/read',
        name: 'read',
        component: Read,                
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
