<script lang="ts">
import { ITask } from '../interfaces/ITask';
import Cronometro from './Cronometro.vue';
import { PropType } from 'vue'

export default {
    props: {
        tarefa: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    components: { Cronometro }
}
</script>

<template>
    <section class="W-100 flex justify-between my-4 border p-2 rounded bg-slate-50">
        <span>{{ tarefa.description || "Tarefa padrão" }}</span>
        <Cronometro :seconds="tarefa.time" />
    </section>
</template>