<script lang="ts">
export default {
    data() {
        return {
            menu: [
                { name: "Home", link: "/" },
                { name: "Tarefas", link: "/tarefas/" },
                { name: "Projetos", link: "/projetos/" }
            ]
        }
    }
}
</script>

<template>
    <nav class="w-100 flex justify-center bg-slate-200">
        <ul class="my-4 flex gap-2">
            <li v-for="(item, index) in menu" :key="index">
                <router-link :to="item.link">
                    <span class="font-medium text-slate-700">{{ item.name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>