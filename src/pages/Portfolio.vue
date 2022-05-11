<script setup>
const sites = [
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calcusssssssssssssssssssslator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  },
  {
    title: 'Time Calculator',
    href: 'https://peruibeloko.github.io/time-calculator/',
    description: 'A calculator for time!'
  }
];
</script>

<template>
  <main>
    <ul>
      <li v-for="site in sites">
        <a :href="site.href" target="_blank" rel="noopener noreferrer">
          <h3>{{ site.title }}</h3>
          <p>{{ site.description }}</p>
        </a>
      </li>
    </ul>
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
  justify-content: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

li {
  padding: 2rem;
  border: 3px solid var(--main-color);
  font-family: var(--sans-serif-regular);
  text-align: center;
}

li h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
