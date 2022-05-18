<script setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import Navbar from './Navbar.vue';

const post = ref({});
const prevPostId = ref('');
const nextPostId = ref('');
const transitionActive = ref(false);

const props = defineProps(['postId']);

const fetchPostData = async postId => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${postId}`).then(val =>
    val.json()
  );
  post.value = res.postData;
  prevPostId.value = res.prevPostId;
  nextPostId.value = res.nextPostId;
};

const transition = async () => {
  transitionActive.value = true;
  return new Promise(resolve =>
    setTimeout(() => {
      transitionActive.value = false;
      resolve();
    }, 500)
  );
};

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.postId === from.params.postId) return false;
  await fetchPostData(to.params.postId);
});

onMounted(async () => await fetchPostData(props.postId));

const navbarProps = {
  prevPostId,
  nextPostId,
  transition
};
</script>

<template>
  <article id="post" :class="{ hide: transitionActive }">
    <h1>
      <router-link :to="{ name: 'post', params: { postId: String(post._id) } }">
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
    <section id="content" v-html="post.content"></section>
    <Navbar v-bind="navbarProps" />
  </article>
</template>

<style lang="css" scoped>
.hide {
  opacity: 0;
}

#post {
  width: 70%;
  margin: 0 auto;
  transition: opacity 0.5s ease;
}
#post .info {
  margin: 1rem 0;
}

#post small {
  font-family: var(--sans-serif-regular);
  font-size: 1rem;
  color: var(--gray);
  font-style: italic;
  display: block;
}

#post > h1 {
  font-size: 2rem;
  font-family: var(--sans-serif-title);
  border-left: 7px var(--main-color) solid;
  padding: 0.5rem;
}

#post #content {
  font-size: 1rem;
  font-family: var(--serif-regular);
  padding: 2rem;
  background-color: var(--black);
  border: 3px var(--gray) solid;
  border-radius: 1rem;
}

#content :deep(h1) {
  margin: 3rem 0;
  padding: 0.5rem;

  text-align: center;
  font-size: 2rem;
  font-family: var(--sans-serif-title);

  border-style: double none;
  border-width: 4px 0;
  border-color: var(--main-color);
}

#content :deep(h2) {
  margin: 2rem 0;
  padding-left: 0.5rem;

  border-left: 3px var(--main-color) solid;
}

#content :deep(h3) {
  margin: 1.5rem 0;
}

#content :deep(p) {
  margin: 1.5rem 1.5rem;
  line-height: 1.7rem;
}

#content :deep(p::first-letter) {
  font-size: 1.4rem;
  line-height: 1rem;
}

#content :deep(blockquote) {
  margin: 0 2rem;
  padding: 1rem;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  font-style: italic;
}

#content :deep(blockquote::before),
#content :deep(blockquote::after) {
  font-size: 2rem;
  line-height: 1rem;
  background-color: transparent;
}

#content :deep(blockquote::before) {
  content: '“';
}

#content :deep(blockquote::after) {
  content: '„';
}

#content :deep(:is(ol, ul)) {
  margin: 0 1.5rem;
  line-height: 1.7rem;
}

#content :deep(:is(ol, ul) li::marker) {
  color: var(--main-color);
}

#content :deep(ul li) {
  list-style: inside square;
}

@media (max-width: 768px) {
  #post {
    width: 100%;
  }

  #post h1 {
    text-align: center;
    margin-top: 1rem;
    border-left: none;
  }

  #post .info {
    margin-top: 0;
    margin-bottom: 3rem;
  }

  #post #content {
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
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
