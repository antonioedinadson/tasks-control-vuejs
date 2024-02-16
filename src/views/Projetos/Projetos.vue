<script lang="ts">
import { computed } from 'vue';
import { dataStore } from '../../store/store';
import Button from '../../components/Button.vue';

export default {
    methods: {
        del(id: string) {
            this.store.dispatch('DEL', id);
            this.$router.go(0);
        }
    },
    setup() {
        const store = dataStore();
        store.dispatch('GET');
        return {
            store,
            projetos: computed(() => store.state.projetos)
        };
    },
    components: { Button }
}
</script>

<template>
    <section class="w-[50%] mx-auto my-4">
        <router-link to="/projetos/create">
            <Button name="Criar" />
        </router-link>
        <table v-if="projetos.length" class="min-w-full rounded my-8">
            <thead class="border-b">
                <tr class="bg-blue-gray-100 text-gray-700">
                    <th class="py-3 px-4 text-left">ID</th>
                    <th class="py-3 px-4 text-left">NOME</th>
                    <th class="py-3 px-4 text-left">#</th>
                </tr>
            </thead>
            <tbody class="text-blue-gray-900">
                <tr v-for="(projeto, index) in projetos" :key="index" class="border-b border-blue-gray-200">
                    <td class="py-3 px-4">{{ projeto.id }}</td>
                    <td class="py-3 px-4">{{ projeto.nome }}</td>
                    <td class="py-3 px-4">
                        <router-link :to="`/projetos/${projeto.id}`">
                            <i class="fa-regular fa-pen-to-square mr-2 cursor-pointer"></i>
                        </router-link>
                        <i @click="del(projeto.id)" class="fa-solid fa-trash-can cursor-pointer"></i>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else class="w-100 text-center p-4">
            <span class="text-slate-500">Nenhum projeto criado.</span>
        </div>
    </section>
</template>