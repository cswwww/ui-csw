import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入
import Components from 'unplugin-vue-components/vite' // 自动导入组件
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: ['vue'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dirs: ['src/components', 'src/components/**', 'src/layouts', 'src/layouts/**']
    })
  ],
  build: {
    outDir: 'es', // 打包后文件目录
    minify: false, // 压缩
    rollupOptions: {
      external: ['vue'], // 忽略打包vue文件
      //input: ["index.ts"],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist'
      }
    },
    lib: {
      entry: resolve(__dirname, './src/components/index.ts'),
      name: 'main',
      fileName: 'main'
      // formats: ['es', 'umd', 'cjs']
    }
  }
})
