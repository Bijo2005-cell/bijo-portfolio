import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
<<<<<<< HEAD
            '/api': 'http://localhost:5000'
=======
            '/api': 'http://localhost:8000'
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
        }
    }
})
