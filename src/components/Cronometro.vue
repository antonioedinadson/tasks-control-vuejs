<script lang="ts">
export default {
    props: {
        seconds: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tempodecorrido(): string {
            return new Date(this.seconds * 1000).toISOString().substr(11, 8);
        }
    },
}
</script>
<template>
    <span class="text-xl mx-4">{{ tempodecorrido }}</span>
</template>