import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import libCSS from 'vite-plugin-libcss'
import unoCSS from 'unocss/vite'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@laybase/vue',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    dts({
      outputDir: 'dist/types',
    }),
    libCSS(),
    unoCSS(),
  ],
})
