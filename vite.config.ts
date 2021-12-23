import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        (name) => {
          if (name.startsWith('Wc'))
            return { importName: name, path: 'wc-ui-library' };
        },
      ],
    }),
  ],
});
