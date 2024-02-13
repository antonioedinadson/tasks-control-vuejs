<script lang="ts">
import Formulario from './components/Formulario.vue';
import Header from './components/Header.vue';
import Tarefa from './components/Tarefa.vue';

import { ITask } from './interfaces/ITask';

export default {
  data() {
    return {
      tarefas: [] as ITask[]
    }
  },
  methods: {
    salvar(tarefa: ITask) {
      this.tarefas.push(tarefa);
      console.log(this.tarefas);
    }
  },
  components: { Header, Formulario, Tarefa }
}
</script>

<template>
  <Header />
  <Formulario @salvarTarefa="salvar" />
  <section class="w-[50%] mx-auto border-t-[1px] my-4">
    <div v-if="tarefas.length" class="w-100">
      <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
    <div v-else class="w-100 text-center p-4">
      <span class="text-slate-500">Nenhuma tarefa criada.</span>
    </div>
  </section>
</template>