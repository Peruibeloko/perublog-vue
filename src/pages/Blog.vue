<script setup>
import { inject } from 'vue';

import SocialsVue from '../components/blog/Socials.vue';
import HeaderVue from '../components/blog/Header.vue';

const { isSidebarOpen } = inject('sidebar', false);
</script>

<template>
  <main>
    <div id="backdrop" :class="{ active: isSidebarOpen }"></div>
    <div>
      <HeaderVue />
      <SocialsVue />
    </div>
    <RouterView />
  </main>
</template>

<style>
main {
  max-width: 80rem;
  margin: 3rem auto;
  display: flex;
}

@media (max-width: 768px) {
  main {
    margin: 1.5rem 0;
    flex-direction: column;
  }

  #backdrop {
    background-color: hsla(0, 0%, 0%, 0.5);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    opacity: 0;
  }

  #backdrop.active {
    display: block;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
}
</style>
