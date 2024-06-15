import { defineConfig } from 'vite'

export default defineConfig({
    build:{},
    // 配置开发服务器
    server:{
        port:8001,
        open: true,
        proxy: {
            // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
            '/api': {
              target: 'http://jsonplaceholder.typicode.com',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
        }
    }
})