<script lang="ts">
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Notification from './components/Notification.vue';

export default {
  components: { Header, Navbar, Notification }
}
</script>

<template>
  <Header />
  <Navbar />
  <Notification />
  <main class="mb-[5rem]">
    <router-view></router-view>
  </main>
</template>