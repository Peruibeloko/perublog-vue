import router from './routes';
import { createApp, ref } from 'vue';
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
