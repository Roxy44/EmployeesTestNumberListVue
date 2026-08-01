import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  // Relative paths so assets resolve under /RepoName/ on GitHub Pages
  base: './',
  resolve: {
    extensions: ['.js', '.vue', '.json']
  }
})
