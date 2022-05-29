<script setup>
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
  <main>
    <ul class="card-list">
      <li v-for="(site, i) in sites" class="card-wrapper" :class="i % 2 === 0 ? 'l' : 'r'">
        <a :href="site.href" target="_blank" rel="noopener noreferrer">
          <h3 class="title">{{ site.title }}</h3>
          <p class="description">{{ site.description }}</p>
          <ul class="technologies">
            <li v-for="tech in site.uses">{{ tech }}</li>
          </ul>
        </a>
      </li>
    </ul>
  </main>
</template>

<style lang="css" scoped>
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-wrapper a {
  width: 35rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-bottom: 0;
  padding: 1rem;
  border: 3px solid var(--gray);
  border-radius: 1rem;
  background-color: var(--black);
  box-shadow: 0 1rem 2rem hsl(0, 0%, 10%);
}

.card-wrapper.l {
  transform: translateX(-30%);
}
.card-wrapper.r {
  transform: translateX(30%);
}

.card-wrapper:last-of-type {
  margin-bottom: 2rem;
}

.card-wrapper .title {
  font-size: 1.5rem;
  font-family: var(--sans-serif-title);
  font-weight: normal;
  border-left: 3px solid var(--main-color);
  padding-left: 0.5rem;
  margin-bottom: 1rem;
}

.card-wrapper .description {
  font-family: var(--sans-serif-regular);
  line-height: 1.3rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
}

.card-wrapper .technologies {
  align-self: flex-end;
  display: flex;
}

.card-wrapper .technologies li {
  font-size: 0.75rem;
  font-family: var(--sans-serif-regular);
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--white);
  color: var(--black);
  border-radius: 1rem;
}
</style>
