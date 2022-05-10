<script setup>
import { inject } from 'vue';

const { _, updateSidebar } = inject('sidebar', false);
</script>

<template>
  <header>
    <h1>
      <router-link :to="{ name: 'blog' }" title="ibe">Peru</router-link>
    </h1>
    <h2>
      Não tenho muita certeza <br />
      sobre o que é tudo isso aqui
    </h2>
    <div id="hamb" @click="updateSidebar">≡</div>
  </header>
</template>

<style scoped>
header {
  width: fit-content;
  height: fit-content;
}

header h1 {
  width: min-content;
  font-size: 4rem;
  font-family: var(--sans-serif-title);
  border-left: 10px var(--main-color) solid;
  padding: 0.5rem;
}

header h2 {
  color: var(--gray);
  font-size: 1rem;
  font-family: var(--sans-serif-regular);
  margin: 1rem 0;
  width: 15rem;
}

header #hamb {
  display: none;
}

@media (max-width: 768px) {
  header {
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 3px var(--main-color) solid;
  }

  header h1 {
    border-left: none;
  }

  header h2 {
    display: none;
  }

  header #hamb {
    cursor: pointer;
    display: block;
    font-size: 3rem;
    position: absolute;
    top: 3rem;
    right: 2.5rem;
  }
}
</style>
