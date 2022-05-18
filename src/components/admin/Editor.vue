<script setup>
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const saveDraft = async () => {};
const publish = async () => {};

const props = defineProps(['id']);

const post = ref({
  title: '',
  content: '',
  id: props.id ?? ''
});

onBeforeRouteLeave(() => {
  if (!post.value.id && post.value.content)
    return window.confirm('Do you really want to leave? you have unsaved changes!');
});
</script>

<template>
  <form id="composer" @submit="e => e.preventDefault()">
    <input type="text" id="title" v-model="post.title" />
    <textarea id="content" v-model="post.content"></textarea>
    <button type="button" @click="saveDraft">Save Draft</button>
    <button type="button" @click="publish">Publish</button>
  </form>
</template>

<style lang="css" scoped></style>
