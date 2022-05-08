<script setup>
import { onMounted, ref } from 'vue';

const posts = ref([]);

onMounted(async () => {
  posts.value = await fetch('http://192.168.15.20:9595/post/').then(val => val.json());
});
</script>

<template>
  <ul id="post-list">
    <li v-for="post in posts">
      <article id="post">
        <h1>
          <router-link :to="`/blog/${post._id}`">
            {{ post.title }}
          </router-link>
        </h1>
        <div class="info">
          <small id="author">Post feito por {{ post.author }}</small>
          <small id="date"
            >{{ new Date(post.datetime).toLocaleDateString('pt-BR') }} às
            {{ new Date(post.datetime).toLocaleTimeString('pt-BR') }}</small
          >
        </div>
      </article>
    </li>
  </ul>
</template>

<style scoped>
#post-list {
  width: 70%;
  margin: 0 auto;
}

#post-list li:first-of-type {
  margin-top: 0;
}

#post-list li {
  background: linear-gradient(to right, var(--black) 70%, transparent);
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 1rem;
}
#post .info {
  margin-top: 1rem;
}

#post small {
  font-family: var(--sans-serif-regular);
  font-size: 1rem;
  color: rgb(93, 93, 93);
  font-style: italic;
  display: block;
}

#post > h1 {
  font-size: 2rem;
  font-family: var(--sans-serif-title);
  border-left: 7px var(--main-color) solid;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  #post-list li:first-of-type {
    margin-top: 2rem;
  }

  #post-list {
    width: 100%;
  }

  #post-list li {
    border-radius: 0;
    border: 1px var(--gray) solid;
    border-left: none;
    border-right: none;
  }

  #post h1 {
    text-align: center;
    border-left: none;
  }

  #author {
    text-align: center;
    margin-top: 0;
    font-size: 0.5rem;
  }

  #date {
    text-align: center;
    margin-top: 0;
    font-size: 0.5rem;
  }
}
</style>
