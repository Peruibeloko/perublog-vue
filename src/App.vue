<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&family=Noto+Serif&family=PT+Sans:ital@0;1&display=swap');

:root {
  --sans-serif-title: 'Fira Sans', sans-serif;
  --sans-serif-regular: 'PT Sans', sans-serif;
  --serif-regular: 'Noto Serif', serif;
  --main-color: #cc241d;
  --black: #1d2021;
  --dark-gray: #282828;
  --gray: #928374;
  --light-gray: #d5c4a1;
  --white: #ebdbb2;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  background-color: var(--dark-gray);
  color: var(--white);
}

* * {
  background-color: transparent;
}
</style>
