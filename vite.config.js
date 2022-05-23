import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    build: {
      outDir: 'docs'
    },
    define: {
      VITE_BACKEND_URL: env.VITE_BACKEND_URL
    }
  };
});
