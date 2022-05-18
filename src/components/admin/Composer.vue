<script setup>
import DraftList from './DraftList.vue';
import Editor from './Editor.vue';

const props = defineProps(['id']);
</script>

<template>
  <main>
    <DraftList />
    <Editor :id="props.id" />
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
}
</style>
