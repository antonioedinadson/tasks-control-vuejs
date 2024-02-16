<template>
    <Formulario @salvarTarefa="salvar" />
    <section class="w-[80%] mx-auto border-t-[1px] my-4">
        <table v-if="tarefas.length" class="min-w-full rounded my-8">
            <thead class="border-b">
                <tr class="bg-blue-gray-100 text-gray-700">
                    <th class="py-3 px-4 text-left">ID</th>
                    <th class="py-3 px-4 text-left">NOME</th>
                    <th class="py-3 px-4 text-left">TEMPO</th>
                    <th class="py-3 px-4 text-left">#</th>
                </tr>
            </thead>
            <tbody class="text-blue-gray-900">
                <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @OpenModal="OpenModal" />
            </tbody>
        </table>
        <div v-else class="w-100 text-center p-4">
            <span class="text-slate-500">Nenhuma tarefa criada.</span>
        </div>
    </section>
    <ModalEdit :status="opened" @changeModal="change" :tarefa="tarefa" />
</template>

<script lang="ts">

import Formulario from '../components/Formulario.vue';
import ModalEdit from '../components/ModalEdit.vue';
import Tarefa from '../components/Tarefa.vue';
import { ITask } from '../interfaces/ITask';
import { dataStore } from '../store/store';
import { computed, ref } from 'vue';

export default {
    components: { Formulario, Tarefa, ModalEdit },
    setup() {

        const opened = ref(false);
        const tarefa = ref();

        const store = dataStore();
        store.dispatch('T_GET');

        const salvar = (tarefa: ITask) => {
            store.dispatch('T_POST', tarefa);
        };

        const OpenModal = (task: ITask) => {
            tarefa.value = task;
            opened.value = true;
        }

        const change = (status: boolean) => {
            opened.value = !status;
        };

        return {
            store,
            opened,
            salvar,
            change,
            OpenModal,
            tarefa,
            tarefas: computed(() => store.state.tarefas),
        }
    },
}
</script>