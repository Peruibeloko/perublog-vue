<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="top-half">
      <section class="photo">
        <img src="https://avatars.githubusercontent.com/u/3859329" alt="Foto de perfil no GitHub" />
      </section>
      <section class="about-me">
        <p>eae</p>
      </section>
    </div>
    <RouterLink to="/portfolio" class="portfolio">Portfolio</RouterLink>
    <RouterLink to="/blog" class="blog">Blog</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60rem;
}

.top-half {
  display: flex;
}

.photo {
  margin-right: 2rem;
}

.photo, .photo img {
  height: 25rem;
}

.photo img {
  border: 3px solid var(--main-color);
  border-radius: 1rem;
}

.about-me {
  font-family: var(--sans-serif-regular);
}

.portfolio,
.blog {
  margin-top: 2rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--sans-serif-regular);
  font-size: 2rem;
  border: 3px solid var(--main-color);
  border-radius: 1rem;
}

:is(.portfolio, .blog):hover {
  background-color: var(--black);
  transition-duration: 100ms;
}
</style>
