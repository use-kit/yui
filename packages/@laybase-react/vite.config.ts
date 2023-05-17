import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// import libCss from 'vite-plugin-libcss'
import unoCSS from 'unocss/vite'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@laybase/react',
      fileName: 'index',
    },
  },
  plugins: [
    react(),
    dts({
      outputDir: 'dist/types',
    }),
    // libCss(),
    unoCSS(),
  ],
})
