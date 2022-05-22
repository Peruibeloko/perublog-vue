<script setup>
import { useRouter } from 'vue-router';
import axiosSetup from '../../util/axios-setup';

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
  const postId = await axiosSetup.get('/post/random').then(res => res.data);
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId
    }
  });
};

const navToFirstPost = async () => {
  const postId = await axiosSetup.get('/post/first').then(res => res.data);
  await props.transition();
  await router.push({
    name: 'post',
    params: {
      postId
    }
  });
};

const navToLastPost = async () => {
  const postId = await axiosSetup.get('/post/latest').then(res => res.data);
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
    <button @click="navToFirstPost" :disabled="!prevPostId.value">⇇ Primeiro post</button>
    <button @click="navToPrevPost" :disabled="!prevPostId.value">← Post anterior</button>
    <button @click="navToRandomPost">⤧ Post aleatório</button>
    <button @click="navToNextPost" :disabled="!nextPostId.value">Próximo post →</button>
    <button @click="navToLastPost" :disabled="!nextPostId.value">Último post ⇉</button>
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

button:disabled {
  opacity: 0;
  cursor: default;
}

.navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
}
</style>
