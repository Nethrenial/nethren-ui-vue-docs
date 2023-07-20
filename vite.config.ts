import { defineConfig } from 'vite'
import VuePreviewPlugin from './node_modules/vite-plugin-vue-preview/dist/plugin.js'


export default defineConfig({
  plugins: [VuePreviewPlugin({
    props: {
      ssr: true,
      importMap: {
        '@nethren-ui/vue': 'https://cdn.jsdelivr.net/npm/@nethren-ui/vue@0.0.1/dist/nethren-ui.js'
      }
    }
  })],
})