// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { setColorPallete } from '@nethren-ui/vue'
import './style.css'
import "@nethren-ui/vue/dist/style.css"
import { off } from 'process'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...\
    if (!import.meta.env.SSR) {
      setColorPallete()
    }
  }
}
