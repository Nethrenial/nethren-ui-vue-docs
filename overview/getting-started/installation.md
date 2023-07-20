# Installation
Please note that nethren-ui only supports Vue3. If you are using Vue2, you may look at other libraries like vuesax

## In a vite-based project
::: code-group
```bash [npm]
npm install @nethren-ui/vue
```

```bash [yarn]
yarn add @nethren-ui/vue
```

```bash [pnpm]
pnpm add @nethren-ui/vue
```
:::

Then in the main.js or main.ts (or if in nuxt 3, app.vue),
```ts
import { createApp } from 'vue'
import { setColorPallet } from '@nethren-ui/vue'
import App from './App.vue'
import '@nethren-ui/vue/dist/style.css'

// setting the default color pallete.
// To see the pallete and how to configure it, check the documentation.
setColorPallette()
createApp(App).mount("#app")

```

Then in any vue components, you can import the component separately and use it
```vue
<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
</script>

<template>
  <NButton>This works</NButton>
  <n-button>This too </n-button>
</template>
```


## Fonts
Nethren UI recommends Roboto or any other good sans-serif fonts

### Icons
Nethren UI recommends using iconify to use any open source icons you may want.Use it alongside unplugin-icons plugin for best DX :wink: