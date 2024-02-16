import { Store, createStore, useStore } from 'vuex';
import { IEstado } from '../interfaces/IEstado';
import { v1 } from 'uuid';
import { InjectionKey } from 'vue';
import { IProjeto } from '../interfaces/IProjeto';
import { INotify } from '../interfaces/INotify';
import http from '../utils/axios';
import { ITask } from '../interfaces/ITask';

export const key: InjectionKey<Store<IEstado>> = Symbol();

export const store = createStore<IEstado>({

    /**
     * Actions podem ser síncronas ou assíncronas. 
     * Mutations precisam, obrigatoriamente, serem síncronas.
     */

    state: {
        projetos: [],
        notification: [],
        tarefas: []
    },
    mutations: {
        'ADD'(state, nome: string) {
            const projeto: IProjeto = { id: v1(), nome: nome };
            state.projetos.push(projeto);
        },
        'EDIT'(state, projeto: IProjeto) {
            const index = state.projetos.findIndex(pro => pro.id = projeto.id);
            state.projetos[index] = projeto;
        },
        'DEL'(state, id: string) {
            const index = state.projetos.findIndex(pro => pro.id = id);
            state.projetos.splice(index, 1);
        },
        'NOTIFY'(state, nofity: INotify) {
            state.notification.push(nofity);

            setTimeout(() => {
                state.notification = state.notification.filter(n => n.id !== nofity.id)
            }, 3000);
        },
        'ALL'(state, projetos: IProjeto[]) {
            state.projetos = projetos;
        },

        // -------------------------------------------------------------------------

        'ADD_TAREFA'(state, tar: ITask) {
            const tarefa: ITask = tar;
            state.tarefas.push(tarefa);
        },
        'DEL_TAREFA'(state, id: string) {
            const index = state.tarefas.findIndex(pro => pro.id = id);
            state.tarefas.splice(index, 1);
        },
        'ALL_TAREFA'(state, tar: ITask[]) {
            state.tarefas = tar;
        },
    },
    actions: {
        'GET'({ commit }) {
            http.get('projetos').then(res => commit('ALL', res.data));
        },
        'POST'(context, nome: string) {
            http.post('projetos', { nome });
        },
        'PUT'(context, projeto: IProjeto) {
            http.put(`/projetos/${projeto.id}`, projeto);
        },
        'DEL'(context, id: string) {
            http.delete(`/projetos/${id}`);
        },

        'T_GET'({ commit }) {
            http.get('tarefas').then(res => commit('ALL_TAREFA', res.data));
        },
        'T_POST'({ commit }, tar: ITask) {
            http.post('tarefas', tar).then(res => {
                commit('ADD_TAREFA', res.data);
            })
        },
        'T_DEL'({ commit }, id: string) {
            http.delete(`/tarefas/${id}`).then(res => {
                commit('DEL_TAREFA', id);
            })
        },
    },
    getters: {},
    modules: {}
});

export const dataStore = (): Store<IEstado> => {
    return useStore(key);
}