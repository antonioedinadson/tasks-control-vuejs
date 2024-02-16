<script lang="ts">
import { ITask } from '../interfaces/ITask';
import Cronometro from './Cronometro.vue';
import { PropType, defineComponent } from 'vue'

import { dataStore } from '../store/store';

export default defineComponent({
    emits: ['openModal'],

    props: {
        tarefa: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    components: { Cronometro },
    setup(props, { emit }) {

        const store = dataStore();

        const del = (id: string) => {
            store.dispatch('T_DEL', id);
        };

        const edit = (tarefa: ITask) => {
            emit('openModal', tarefa);
        };

        return {
            tarefa: props.tarefa,
            edit,
            del
        };
    }
});
</script>

<template>
    <tr>
        <td>
            {{ tarefa.id }}
        </td>
        <td>
            <span>{{ tarefa.description || "Tarefa padrão" }}</span>
        </td>
        <td>
            <Cronometro :seconds="tarefa.time" />
        </td>
        <td>
            <i @click="edit(tarefa)" class="fa-regular fa-pen-to-square mr-2 cursor-pointer"></i>
            <i @click="del(tarefa.id)" class="fa-solid fa-trash-can cursor-pointer"></i>
        </td>
    </tr>
</template>