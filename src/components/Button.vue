<script lang="ts">
export default {
    props: {
        name: String,
        disable: {
            type: Boolean,
            defaut: false
        }
    }
}
</script>
<template>
    <button :disabled="disable"
        :class="['bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded']">
        {{ name }}
    </button>
</template>