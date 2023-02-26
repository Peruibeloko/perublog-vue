<script setup>
import { provide, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import DraftList from '../components/admin/DraftList.vue';
import Editor from '../components/admin/Editor.vue';

const props = defineProps(['id']);
const draftId = ref(props.id);
provide('draftId', draftId.value);

onBeforeRouteUpdate(to => (draftId.value = to.params.id));
</script>

<template>
  <main>
    <DraftList />
    <Editor />
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
}
</style>
