import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 999999,
    // 库模式打包
    lib: {
      // entry: 'Select/src/index.ts',
      entry: 'components/SearchSelect/index.js',
      // entry: { test: 'Test/src/index.ts', apply: 'Apply/src/index.ts' }, // 打包入口，需要先创建文件
      name: '@kj-web-components/select',
      // 'umd','cjs'
      formats: ['es', 'umd', 'cjs'],
      fileName: 'kSelect',
      // fileName: (format) => `Kj.${format}.js`
    },
    // watch: {
    // 	clearScreen: true
    // },
    outDir: 'distV3',
    emptyOutDir: true,
    // 启用/ 禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时一并获取。
    // cssCodeSplit: true
    // rollupOptions: {
    // 	output: {
    // 		exports: 'named'
    // 	}
    // }
  },
})
