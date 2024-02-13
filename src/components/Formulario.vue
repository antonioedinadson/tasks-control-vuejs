<script lang="ts">
import Temporazador from './Temporazador.vue';

export default {
    data() {
        return {
            task: '',
        }
    },
    emits: ['salvarTarefa'],
    components: { Temporazador },
    methods: {
        finalizarTarefa(tempo: number) {
            this.$emit("salvarTarefa", {
                description: this.task,
                time: tempo
            })
        }
    },
}
</script>
<template>
    <div class="w-100 flex items-center flex-col my-4">
        <section class="w-[50%] my-4">
            <div class="flex justify-center items-center gap-2 my-2">
                <input type="text" class="w-[50%] p-2 border rounded" v-model="task" placeholder="Que tarefa quer iniciar?">
                <Temporazador @TempoFinalizado="finalizarTarefa" />
            </div>
        </section>
    </div>
</template>