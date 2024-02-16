<script lang="ts">
import { useStore } from 'vuex';
import Temporazador from './Temporazador.vue';
import { key } from '../store/store';
import { computed } from 'vue';

export default {
    emits: ['salvarTarefa'],
    data() {
        return {
            task: '',
            idProjeto: ''
        }
    },
    components: { Temporazador },
    methods: {
        finalizarTarefa(tempo: number) {
            this.$emit("salvarTarefa", {
                description: this.task,
                projeto_id: this.projetos.find(proj => proj.id = this.idProjeto)?.id,
                time: tempo
            })
        }
    },
    setup() {
        const store = useStore(key);
        store.dispatch('GET');
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
}
</script>
<template>
    <div class="w-100 flex items-center flex-col my-4">
        <section class="w-[50%] my-4">
            <div class="flex justify-cente flex-col items-center gap-2 my-2">

                <input type="text" class="w-[80%] p-2 border rounded" v-model="task" placeholder="Que tarefa quer iniciar?">

                <select class="w-[80%] border p-2 rounded text-slate-400" v-model="idProjeto">
                    <option value="">Selecione o projeto</option>
                    <option v-if="projetos" v-for="projeto in projetos" :value="projeto.id">
                        {{ projeto.nome }}
                    </option>
                    <option v-else value="" disabled>Nenhuma projeto</option>
                </select>

                <Temporazador @TempoFinalizado="finalizarTarefa" />
            </div>
        </section>
    </div>
</template>