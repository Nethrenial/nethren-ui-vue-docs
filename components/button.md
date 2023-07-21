<script lang="ts" setup>
import { ref } from 'vue'
import { NButton } from '@nethren-ui/vue'

const loading = ref(false)

function setLoading() {
  if(loading.value) {
    return
  }
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

</script>

# Button

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

## Usage

```vue
<script lang="ts" setup>
import { NButton } from "@nethren-ui/vue";
</script>

<template>
  <!-- Add any props described here as well -->
  <n-button>Button !</n-button>
</template>
```

## Different Modes

<div class="gallery">
    <n-button>Solid</n-button>
    <n-button mode="outline">Outline</n-button>
    <n-button mode="text">Text</n-button>
</div>

```vue
<n-button mode="solid">Solid</n-button>
<n-button mode="outline">Outline</n-button>
<n-button mode="text">Text</n-button>
```

## Different Colors

<div class="gallery">
    <n-button color="primary">Primary</n-button>
    <n-button color="secondary">Secondary</n-button>
    <n-button color="success">Success</n-button>
    <n-button color="info">Info</n-button>
    <n-button color="warning">Warning</n-button>
    <n-button color="danger">Danger</n-button>
    <n-button color="dark">Dark</n-button>
    <n-button color="light">Light</n-button>
</div>

```vue
<n-button color="primary">Primary</n-button>
<n-button color="secondary">Secondary</n-button>
<n-button color="success">Success</n-button>
<n-button color="info">Info</n-button>
<n-button color="warning">Warning</n-button>
<n-button color="danger">Danger</n-button>
<n-button color="dark">Dark</n-button>
<n-button color="light">Light</n-button>
```

## With icons

NButton provides two slots for icons.You can use any sort of icon you like here (svg, emoji, icon fonts etc).

<div class="gallery">
    <n-button color="primary">
      <template #leftIcon>
        ❤️
      </template>
      Left Icon
    </n-button>
    <n-button color="primary">
      <template #rightIcon>
        ❤️
      </template>
      Right Icon
    </n-button>    
    <n-button color="primary">
      <template #leftIcon>
        ❤️
      </template>
      <template #rightIcon>
        ❤️
      </template>
      Both sides
    </n-button>
</div>

```vue
<n-button color="primary">
      <template #leftIcon>
        ❤️
      </template>
      Left Icon
    </n-button>
<n-button color="primary">
      <template #rightIcon>
        ❤️
      </template>
      Right Icon
    </n-button>
<n-button color="primary">
      <template #leftIcon>
        ❤️
      </template>
      <template #rightIcon>
        ❤️
      </template>
      Both sides
    </n-button>
```

## Loading status

<div class="gallery">
    <n-button color="primary" :is-loading="loading" @click="setLoading">
      Run without changing
    </n-button>
    <n-button color="primary" :is-loading="loading" loading-text="Running" @click="setLoading">
      <template #rightIcon>
        🏃‍♂️
      </template>
      Run with changing
    </n-button>    
</div>

```vue
<script setup lang="ts">
import { ref } from "vue";
import { NButton } from "@nethren-ui/vue";

const loading = ref(false);

function setLoading() {
  if (loading.value) {
    return;
  }
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}
</script>
<template>
  <n-button color="primary" :is-loading="loading" @click="setLoading">
    Run without changing
  </n-button>
  <n-button
    color="primary"
    :is-loading="loading"
    loading-text="Running"
    @click="setLoading"
  >
    <template #rightIcon> 🏃‍♂️ </template>
    Run with changing
  </n-button>
</template>
```

## Accessibility

- Button has role of button.
- When Button has focus, Space or Enter activates it.

## Props

| Prop | Purpose | Expected values | Default |
| ---------------- | :-------------- | :--------------- | :------------------- |
| mode  | To change the mode of the button | 'solid', 'outline', 'text' | 'solid' |
| color | To set the color scheme of the button | [Color scheme value ->](/theme/colors) | "primary" |
| is-loading | To control the loading status of the button | boolean | false |
