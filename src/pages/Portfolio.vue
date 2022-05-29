<script setup>
import { RouterLink } from 'vue-router';
const sites = [
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: `A calculator for time! Uses the experimental Temporal Object to manipulate time\
    entries and perform simple arithmetic with them`,
    uses: ['Temporal', 'Vue 3']
  },
  {
    title: 'typewriter',
    href: 'https://github.com/Peruibeloko/typewriter/',
    description: `Bare-bones headless CMS for simple blogkeeping. Provides a handful of REST\
    endpoints to CRUD posts, which are stored in a MongoDB database. It powers this site's blog!\
    Includes an authentication that I plan on turning into its own thing in the future`,
    uses: ['Express', 'Mongoose', 'Markdown']
  },
  {
    title: 'Q&A Bot',
    href: 'https://github.com/Peruibeloko/qnabot/',
    description:
      'An Express server that powers a Discord bot, and a Vue app that displays the\
    questions sent in the configured channel. It updates in real-time using WebSockets and features\
    ranking by votes',
    uses: ['Express', 'discord.js', 'Vue 3', 'WebSockets']
  }
];
</script>

<template>
  <header>
    <h1>Portfolio</h1>
  </header>
  <main>
    <ul class="card-list">
      <li v-for="(site, i) in sites" class="card" :class="i % 2 === 0 ? 'l' : 'r'">
        <a :href="site.href" target="_blank" rel="noopener noreferrer">
          <h2 class="title">{{ site.title }}</h2>
          <span>🔗</span>
        </a>
        <p class="description">{{ site.description }}</p>
        <ul class="technologies">
          <li v-for="tech in site.uses">{{ tech }}</li>
        </ul>
      </li>
    </ul>
  </main>
  <footer>
    <RouterLink :to="{ name: 'home' }">← Voltar</RouterLink>
  </footer>
</template>

<style lang="css" scoped>
header {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

header h1 {
  border-left: 5px solid var(--main-color);
  padding-left: 0.5rem;
  font-family: var(--sans-serif-title);
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 35rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  border: 3px solid var(--gray);
  border-radius: 1rem;
  background-color: var(--black);
}
.card.l {
  transform: translateX(-30%);
}
.card.r {
  transform: translateX(30%);
}
.card a {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.card a span {
  margin-left: 0.5rem;
  font-size: 0.75rem;
  opacity: 0;
}
.card a:hover span {
  opacity: 1;
}

.card .title {
  font-size: 1.5rem;
  font-family: var(--sans-serif-title);
  font-weight: normal;
  border-left: 3px solid var(--main-color);
  padding-left: 0.5rem;
}

.card .description {
  font-family: var(--sans-serif-regular);
  line-height: 1.3rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
}

.card .technologies {
  align-self: flex-end;
  display: flex;
}

.card .technologies li {
  font-size: 0.75rem;
  font-family: var(--sans-serif-regular);
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--white);
  color: var(--black);
  border-radius: 1rem;
}

footer {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a {
  color: var(--gray);
  border: none;
  font-size: 1rem;
  font-family: var(--sans-serif-regular);
  cursor: pointer;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition-duration: 200ms;
}

footer a:hover {
  border-color: var(--white);
  color: var(--white);
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  .card a span {
    opacity: 1;
  }
  .card.l,
  .card.r {
    transform: none;
  }
}
</style>
