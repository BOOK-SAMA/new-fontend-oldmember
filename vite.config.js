import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   port: 5173, // กำหนดพอร์ตของเซิร์ฟเวอร์เป็น 5173
  //   host: '45.136.255.192', // กำหนด IP address หรือโฮสต์ที่เซิร์ฟเวอร์จะใช้ เช่น 'localhost' หรือ '0.0.0.0'
  //   // เปิดเบราว์เซอร์โดยอัตโนมัติเมื่อเริ่มเซิร์ฟเวอร์
  // }
  


})
