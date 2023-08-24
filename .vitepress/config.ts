import { HeadConfig, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead: (ctx) => {
    // const head: HeadConfig[] = []
    ctx.head.push(['meta', { name: 'google-site-verification', content: 'RW3gvFxppusEgWCFFxXtXuWgUjhaynRf9SQUHKtuf6A' }])
    return ctx.head
  },

  sitemap: {
    hostname: 'https://nethren-ui-vue-docs.pages.dev'
  },

  title: "Nethren UI - Vue 3 Edition",
  description: "Nethren-UI is a reusable component library providing attractive and accessible ui components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          {
            text: 'Getting started', link: '/overview/getting-started', items: [
              {
                text: 'Installation',
                link: '/overview/getting-started/installation'
              }
            ]
          }
        ]
      },
      {
        text: 'Theme',
        items: [
          {
            text: 'Colors',
            link: '/theme/colors'
          }
        ]
      },
      {
        text: "Components",
        items: [
          {
            text: 'Button',
            link: '/components/button'
          },
          {
            text: 'Switch',
            link: '/components/switch'
          },
          {
            text: 'Form Components',
            items: [
              {
                text: 'Checkbox',
                link: '/components/form/checkbox'
              },
              {
                text: 'Input',
                link: '/components/form/input'
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nethrenial/nethren-ui-vue' }
    ]
  },

})
