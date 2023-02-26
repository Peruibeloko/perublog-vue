<script setup>
import { ref, inject, onMounted } from 'vue';
import * as monaco from 'monaco-editor';

import axiosSetup from '../../util/axios-setup';

const draftId = inject('draftId');
defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const editor = ref(null);

onMounted(async () => {
  monaco.editor.defineTheme('gruvbox', {
    base: 'vs-dark',
    inherit: true,
    rules: [{ token: '', background: '1D2021' }],
    colors: {
      'editor.background': '#1D2021'
    }
  });

  const editorInstance = monaco.editor.create(editor.value, {
    language: 'markdown',
    theme: 'gruvbox',
    fontSize: '16px',
    tabSize: 2,
    fontFamily: 'monospace'
  });

  const content = await axiosSetup.get(`/draft/${draftId}`).then(res => res.data.post);
  editorInstance.setValue(content);

  editorInstance.getModel().onDidChangeContent(e => {
    emit('update:modelValue', editorInstance.getValue());
  });
});
</script>
<template>
  <div ref="editor" class="content"></div>
</template>

<style lang="css" scoped>
.content {
  width: 50rem;
  height: 30rem;
  margin-bottom: 1rem;
  border: 3px var(--gray) solid;
  border-radius: 1rem;
  overflow: hidden;
}
</style>
