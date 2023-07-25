<script lang="ts" setup>
import { ref } from 'vue'
import { NSwitch } from '@nethren-ui/vue'

const isChecked = ref(false)
</script>

# Switch

Switch component is used to enable or disable something. (Example: Color mode switching)

## Usage

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NSwitch } from "@nethren-ui/vue";

const isChecked = ref(false);
</script>

<template>
  <!-- Add any props described here as well -->
  <n-switch
    v-model="isChecked"
    aria-label="add some area label (mandatory)"
    id="add-id-mandatory"
  />
</template>
```

## Different Colors

<div class="gallery">
<n-switch v-model="isChecked" aria-label="primary" id="primary-switch" color="primary" />
<n-switch v-model="isChecked" aria-label="secondary" id="secondary-switch" color="secondary" />
<n-switch v-model="isChecked" aria-label="success" id="success-switch" color="success" />
<n-switch v-model="isChecked" aria-label="info" id="info-switch" color="info" />
<n-switch v-model="isChecked" aria-label="warning" id="warning-switch" color="warning" />
<n-switch v-model="isChecked" aria-label="danger" id="danger-switch" color="danger" />
</div>

```vue
<n-switch v-model="isChecked" aria-label="primary" id="primary-switch" color="primary" />
<n-switch v-model="isChecked" aria-label="secondary" id="secondary-switch" color="secondary" />
<n-switch v-model="isChecked" aria-label="success" id="success-switch" color="success" />
<n-switch v-model="isChecked" aria-label="info" id="info-switch" color="info" />
<n-switch v-model="isChecked" aria-label="warning" id="warning-switch" color="warning" />
<n-switch v-model="isChecked" aria-label="danger" id="danger-switch" color="danger" />
```

## Accessibility

- Switch has role of switch.
- When Switch has focus, Space or Enter activates it.
- using  ```aria-label``` attribute is a must when not using any visible label

## Props

| Prop    | Purpose                               | Expected values                                                            | Default                      |
| ------- | :------------------------------------ | :------------------------------------------------------------------------- | :--------------------------- |
| color   | To set the color scheme of the switch | [Color scheme value ->](/theme/colors)                                     | "primary"                    |
| v-model | To bind the switch status             | Boolean (Need to be a vue ref values, ex: `const isEnabled = ref(false)` ) | None (Mandatory to be given) |
