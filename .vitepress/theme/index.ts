// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import {setColorPallete} from '@nethren-ui/vue'
// @ts-ignore
import VuePreview from '../../node_modules/vite-plugin-vue-preview/dist/sfc.js'
import './style.css'
import "@nethren-ui/vue/dist/style.css"
import 'vite-plugin-vue-preview/style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    setColorPallete()
    app.component('VuePreview', VuePreview)
  }
}
