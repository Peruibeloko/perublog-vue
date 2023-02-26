<script setup>
import { ref, onBeforeMount } from 'vue';
import axiosSetup from '../../util/axios-setup';

const draftList = ref([]);

const getDatetimeString = datetime => {
  const date = new Date(datetime);
  return `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR')}`;
};

onBeforeMount(async () => {
  const { data } = await axiosSetup('/draft');
  draftList.value = data;
});
</script>

<template>
  <nav>
    <h2>Drafts</h2>
    <ul>
      <li v-for="draft in draftList">
        <router-link class="draft" :to="{ name: 'composer', params: { id: draft._id } }">
          <span class="title" :class="{empty: !draft.title}">{{ draft.title || '<no title>' }}</span>
          <span class="last-change-date">Alterado em {{ getDatetimeString(draft.updatedAt) }}</span>
          <span class="creation-date">Criado em {{ getDatetimeString(draft.createdAt) }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
h2 {
  font-family: var(--sans-serif-title);
  border-left: 5px solid var(--main-color);
  padding-left: 0.5rem;
  margin: 1rem;
}
ul {
  display: flex;
  flex-direction: column;
}
.draft {
  margin-left: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  font-family: var(--sans-serif-regular);
}

.draft .last-change-date,
.draft .creation-date,
.draft > span.title.empty {
  color: var(--gray);
  font-style: italic;
}
</style>
