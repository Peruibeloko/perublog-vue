<script setup>
import { inject, onMounted, ref } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import axiosSetup from '../../util/axios-setup';
import MonacoWrapperVue from './MonacoWrapper.vue';

const draftId = inject('draftId');
const post = ref({});

const saveDraft = async () => {
  if (draftId) {
    axiosSetup.patch(`/draft/${draftId}`, {
      title: post.value.title,
      content: post.value.post
    });
  } else {
    post.value.id = axiosSetup
      .post('/draft', {
        title: post.value.title,
        content: post.value.post
      })
      .then(res => res.data);
  }
};

const publish = async () => {
  axiosSetup
    .post('/post', {
      title: post.value.title,
      post: post.value.post
    })
    .then(res => res.data);
};

onBeforeRouteLeave(() => {
  if (!post.value.id && post.value.post)
    return window.confirm('Do you really want to leave? you have unsaved changes!');
});

onMounted(async () => {
  post.value = await axiosSetup(`/draft/${draftId}`).then(res => res.data);
});
</script>

<template>
  <form id="composer" @submit="e => e.preventDefault()">
    <input type="text" id="title" v-model="post.title" placeholder="Title" />
    <MonacoWrapperVue v-model="post.post" />
    <fieldset id="footer">
      <button type="button" @click="saveDraft">Save Draft</button>
      <button type="button" @click="publish">Publish</button>
    </fieldset>
  </form>
</template>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
}

form * {
  outline: none;
}

#title {
  border: none;
  border-left: 5px solid var(--main-color);
  font-family: var(--sans-serif-title);
  padding-left: 0.5rem;
  font-size: 2rem;
  margin-bottom: 1rem;
}

#author {
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  border: none;
  border-left: 3px solid var(--main-color);
  font-family: var(--sans-serif-regular);
  font-size: 1.5rem;
}

textarea {
  width: 50rem;
  min-height: 20rem;
  font-size: 1rem;
  font-family: var(--serif-regular);
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--black);
  border: 3px var(--gray) solid;
  border-radius: 1rem;
  resize: none;
}

fieldset {
  border: none;
  display: flex;
  align-items: center;
}

#footer {
  justify-content: flex-end;
}

#footer button:last-of-type {
  margin-left: 1rem;
}

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
</style>
