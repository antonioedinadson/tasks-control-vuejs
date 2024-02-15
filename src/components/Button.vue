<script lang="ts">
export default {
    name: 'Button',
    props: {
        name: String,
        disable: {
            type: Boolean,
            default: false
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