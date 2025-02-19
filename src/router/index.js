import { createRouter, createWebHistory } from "vue-router";
import Home from "@//views/Home"
import TaskDetail  from "@/views/TaskDetail"



const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/detail', name : 'TaskDetail', component: TaskDetail
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
