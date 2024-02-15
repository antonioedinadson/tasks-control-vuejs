<script lang="ts">

import { computed } from 'vue';
import { dataStore } from '../store/store';

import { ETypeNotification } from '../interfaces/INotify';

export default {
    setup() {
        const store = dataStore();
        return {
            notifications: computed(() => store.state.notification),
            context: {
                [ETypeNotification.SUCESSO]: "bg-green-200",
                [ETypeNotification.WARNING]: "bg-orange-200",
                [ETypeNotification.ERROR]: "bg-red-200",
            }
        }
    }
}
</script>

<template>
    <div class="absolute flex flex-col gap-2 my-4 right-10 text-center">
        <div v-for="notification in notifications" :key="notification.id" class="w-auto mx-auto p-2 rounded"
            :class="context[notification.type]">
            <span class="font-medium">
                {{ notification.message }}
            </span>
        </div>
    </div>
</template>