import { Store, createStore, useStore } from 'vuex';
import { IEstado } from '../interfaces/IEstado';
import { v1 } from 'uuid';
import { InjectionKey } from 'vue';
import { IProjeto } from '../interfaces/IProjeto';
import { INotify } from '../interfaces/INotify';

export const key: InjectionKey<Store<IEstado>> = Symbol();

export const store = createStore<IEstado>({

    /**
     * Actions podem ser síncronas ou assíncronas. 
     * Mutations precisam, obrigatoriamente, serem síncronas.
     */

    state: {
        projetos: [],
        notification: []
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
        }
    },
    actions: {},
    getters: {},
    modules: {}
});

export const dataStore = (): Store<IEstado> => {
    return useStore(key);
}