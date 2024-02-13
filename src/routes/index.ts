import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import Tarefas from '../views/Tarefas.vue';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "tasks",
        component: Tarefas
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;