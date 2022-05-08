import router from './routes';
import { createApp, provide, ref } from 'vue';
import App from './App.vue';

const isSidebarOpen = ref(false);

const updateSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

createApp(App)
  .use(router)
  .provide('sidebar', {
    isSidebarOpen,
    updateSidebar
  })
  .mount('#app');
