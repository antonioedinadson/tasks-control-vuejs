<script lang="ts">
import { notification } from '../../mixins/notification';
import { ETypeNotification } from '../../interfaces/INotify';

import { dataStore } from '../../store/store';
import Button from '../../components/Button.vue';

export default {
    props: {
        id: String
    },
    mixins: [notification],
    methods: {
        salvar() {
            if (!this.id) {
                this.store.dispatch('POST', this.projetoNome);
                this.projetoNome = '';
                this.$router.push('/projetos');
                return;
            }

            this.store.dispatch('PUT', { id: this.id, nome: this.projetoNome });
            this.$router.push('/projetos');

            this.notify({
                id: '56565',
                message: '54545 frfrfrfrfr',
                type: ETypeNotification.SUCESSO
            });
        }
    },
    data() {
        return {
            projetoNome: ''
        };
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(pro => pro.id == this.id);
            this.projetoNome = projeto?.nome || '';
        }
    },
    setup() {
        const store = dataStore();
        return {
            store
        };
    },
    components: { Button }
}

</script>

<template>
    <section class="w-[50%] mx-auto my-8">
        <form @submit.prevent="salvar">
            <div class="w-100 flex justify-center gap-2">
                <input placeholder="Nome do projeto" type="text" v-model="projetoNome" class="w-[70%] p-2 border rounded">
                <Button :name="'ssss'" :disable="false" />
            </div>
        </form>
    </section>
</template>../../mixins/notification