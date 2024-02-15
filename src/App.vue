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
  <router-view></router-view>
</template>