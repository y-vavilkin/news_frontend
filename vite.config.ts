import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Этот параметр указывает серверу использовать опрос (polling) 
      // для отслеживания изменений в файлах
      usePolling: true,
    },
    // Этот параметр указывает серверу использовать локальный IP-адрес для хостинга. 
    // Это позволяет доступ к серверу с других устройств в той же сети.
    host: true,

    // Этот параметр заставляет сервер завершить работу, если указанный порт уже занят. 
    // Без этого параметра сервер может попытаться использовать другой доступный порт.
    strictPort: true,
    
    port: 5173
  }
})
