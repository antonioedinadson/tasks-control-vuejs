import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import Tarefas from '../views/Tarefas.vue';
import Projetos from "../views/Projetos/Projetos.vue";
import Home from "../views/Home.vue";
import Formulario from "../views/Projetos/Formulario.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/tarefas",
        component: Tarefas
    },
    {
        path: "/projetos",
        children: [
            {
                path: '',
                component: Projetos
            },
            {
                path: 'create',
                component: Formulario
            },
            {
                path: ':id',
                props: true,
                component: Formulario,
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;