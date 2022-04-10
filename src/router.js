import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home";
import Todos from "@/views/Todos";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: Todos
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router