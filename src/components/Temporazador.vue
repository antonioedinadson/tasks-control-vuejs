<script lang="ts">
import Button from './Button.vue';
import Cronometro from './Cronometro.vue';

export default {
    data() {
        return {
            task: '',
            seconds: 0,
            cronometer: 0,
            disable: {
                play: false,
                stop: false
            }
        };
    },
    methods: {
        init() {
            this.cronometer = setInterval(() => this.seconds++, 1000);
            this.disable.play = true;
            this.disable.stop = false;
        },
        stop() {
            clearInterval(this.cronometer);
            this.disable.play = false;
            this.disable.stop = true;
            this.$emit('TempoFinalizado', this.seconds);
            this.seconds = 0;
        }
    },
    components: { Button, Cronometro },
    emits: ['TempoFinalizado']
}
</script>
<template>
    <section class="mt-4 text-center">
        <Cronometro class="font-medium" :seconds="seconds" />
        <div class="flex gap-2 items-center mt-4">
            <Button name="PLAY" :disable="disable.play" @click="init" />
            <Button name="STOP" :disable="disable.stop" @click="stop" />
        </div>
    </section>
</template>