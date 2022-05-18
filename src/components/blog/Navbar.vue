<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(['transition', 'prevPostId', 'nextPostId']);

const navToPrevPost = async () => {
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId: props.prevPostId?.value
    }
  });
};

const navToNextPost = async () => {
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId: props.nextPostId?.value
    }
  });
};

const navToRandomPost = async () => {
  const postId = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/random`).then(val =>
    val.json()
  );
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId
    }
  });
};

const navToFirstPost = async () => {
  const postId = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/first`).then(val =>
    val.json()
  );
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId
    }
  });
};

const navToLastPost = async () => {
  const postId = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/latest`).then(val =>
    val.json()
  );
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId
    }
  });
};
</script>

<template>
  <nav class="navigation">
    <button @click="navToFirstPost">⇇ Primeiro post</button>
    <button @click="navToPrevPost" :disabled="!prevPostId.value">← Post anterior</button>
    <button @click="navToRandomPost">⤧ Post aleatório</button>
    <button @click="navToNextPost" :disabled="!nextPostId.value">Próximo post →</button>
    <button @click="navToLastPost">Último post ⇉</button>
  </nav>
</template>

<style lang="css" scoped>
button {
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

button:hover {
  border-color: var(--white);
  color: var(--white);
}

.navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
}
</style>
