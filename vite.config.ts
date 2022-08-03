import path from 'path'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({

    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    // 不加antd会报错
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, './src/api'),
      },
      // 别名
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
})
