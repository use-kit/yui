import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import libCSS from 'vite-plugin-libcss'
import unoCSS from 'unocss/vite'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@yui/react',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
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
