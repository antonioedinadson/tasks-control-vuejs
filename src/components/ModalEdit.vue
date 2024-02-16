<template>
    <TransitionRoot as="template" :show="opened">
        <Dialog as="div" class="relative z-10" @close="change">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="p-4">
                                {{ tarefa }}
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts">

import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, watch, PropType } from 'vue';
import { ITask } from '../interfaces/ITask';

export default {

    emits: ['changeModal'],

    components: { Dialog, DialogPanel, TransitionChild, TransitionRoot },

    props: {
        status: Boolean,
        tarefa: Object as PropType<ITask>
    },

    setup(props, { emit }) {

        console.log(props);

        const opened = ref(props.status);
        const tarefa = ref(props.tarefa);

        watch([() => props.status, () => props.tarefa], ([newStatus, newTask]) => {
            opened.value = newStatus;
            tarefa.value = newTask;
        });

        const change = () => {
            emit('changeModal', opened.value);
        }

        return {
            tarefa,
            opened,
            change
        }
    }
}

</script>
