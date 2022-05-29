<script setup>
import { inject } from 'vue';

const { isSidebarOpen, updateSidebar } = inject('sidebar', false);
</script>

<template>
  <aside id="socials" :class="{ active: isSidebarOpen }">
    <section id="aside-header">
      <h1>Redes</h1>
      <span id="close" @click="updateSidebar">→</span>
    </section>
    <ul>
      <li id="soundcloud">
        <a href="https://soundcloud.com/dynmic" target="_blank">SoundCloud</a>
      </li>
      <li id="instagram">
        <a href="https://www.instagram.com/dyn.mic/" target="_blank">Instagram</a>
      </li>
      <li id="facebook">
        <a href="https://www.fb.com/dyn.mic.dnb/" target="_blank">Facebook</a>
      </li>
      <li id="twitch">
        <a href="https://www.twitch.tv/dynmicdnb" target="_blank">Twitch</a>
      </li>
      <li id="twitter">
        <a href="https://twitter.com/dynmicdnb" target="_blank">Twitter</a>
      </li>
    </ul>
    <RouterLink :to="{ name: 'home' }" class="home-link">🏠 Home</RouterLink>
  </aside>
</template>

<style lang="css" scoped>
#close {
  display: none;
}

#socials {
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  width: min-content;
}

#socials h1 {
  font-size: 2.5rem;
  font-family: var(--sans-serif-title);
}

#socials ul {
  display: flex;
  flex-direction: column;
}

#socials ul li {
  width: min-content;
  cursor: pointer;
  font-family: var(--sans-serif-regular);
  font-size: 1rem;
  border-left: 5px var(--light-gray) solid;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

#socials ul li,
#socials ul li:hover {
  transition-duration: 0.2s;
}

#socials ul li:hover {
  border-width: 1rem;
}

#soundcloud {
  border-color: #ff5500 !important;
}

#instagram {
  border-color: #dd2a7b !important;
}

#facebook {
  border-color: #2d88ff !important;
}

#twitch {
  border-color: #9147ff !important;
}

#twitter {
  border-color: #1da1f2 !important;
}

.home-link {
  margin-top: 2rem;
  width: fit-content;
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

.home-link:hover {
  border-color: var(--white);
  color: var(--white);
}

@media (max-width: 768px) {
  #socials {
    margin: 0;
    padding: 2rem;
    width: 80vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
    background-color: var(--dark-gray);
  }

  #aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #socials ul {
    margin-top: 3rem;
  }

  #socials ul li {
    width: 100%;
    margin-top: 2rem;
    border-left: none;
    border-bottom: 5px var(--light-gray) solid;
  }

  #socials ul li a {
    width: 100%;
    display: inline-block;
    font-size: 1.5rem;
    text-align: center;
  }

  .home-link {
    margin-top: 10rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  #socials.active {
    transform: translateX(0);
  }

  #close {
    cursor: pointer;
    font-size: 3rem;
    font-weight: bold;
    line-height: 0;
    display: block;
  }
}
</style>
