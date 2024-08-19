import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/deploy-test/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Сохраняет оригинальные имена файлов
      }
    }
  }

})
//  npm run build
//  cd dist
// git init
// git add -A && git commit -m 'deploy'
// git commit -m 'deploy'
// //git push -f 'deploy' git@github.com:Hrayrdev/deploy-test.git master:gh-pages
// git push -f  git@github.com:Frontend-user/deploy-test.git master:gh-pages

// build: {
//   outDir: 'dist'
// npm run build
//  cd dist
//git init
//git add -A
//git commit -m 'deploy'
//git push -f 'deploy' git@github.com:Hrayrdev/deploy-test.git master:gh-pages
//cd -
// }ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_rsa_personal
// import { defineConfig } from 'vite'
//
// export default defineConfig({
//   base: '/deploy-test/',
//   остальные настройки
// })
// module.exports = {
//   publicPath: '/deploy-test/'
// }