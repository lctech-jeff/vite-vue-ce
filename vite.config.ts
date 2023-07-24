import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('j-'),
        },
      },
    }),
    vueJsx(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue'],
      dts: './src/auto-imports.d.ts',
    }),
  ],
  css: {
    modules: {
      generateScopedName: 'jeff'
    },
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'jeff-vue-ce',
      fileName: 'jeff-vue-ce',
    },
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
  },
  define: {
    'process.env': process.env,
  },
})
