<script lang="ts" setup>
import { ref } from 'vue'
import { NCheckbox } from '@nethren-ui/vue'

const isChecked = ref(false)
</script>

# Checkbox

Checkbox component is used to mark something as enabled or disabled (ex: Remember me).

## Usage

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NCheckbox } from "@nethren-ui/vue";

const isChecked = ref(false);
</script>

<template>
  <!-- Add any props described here as well -->
  <n-checkbox
    v-model="isChecked"
    aria-label="add some area label (mandatory)"
    id="add-id-mandatory"
  />
</template>
```

## Different Colors

<div class="gallery">
<n-checkbox v-model="isChecked" aria-label="primary" id="primary-checkbox" color="primary" />
<n-checkbox v-model="isChecked" aria-label="secondary" id="secondary-checkbox" color="secondary" />
<n-checkbox v-model="isChecked" aria-label="success" id="success-checkbox" color="success" />
<n-checkbox v-model="isChecked" aria-label="info" id="info-checkbox" color="info" />
<n-checkbox v-model="isChecked" aria-label="warning" id="warning-checkbox" color="warning" />
<n-checkbox v-model="isChecked" aria-label="danger" id="danger-checkbox" color="danger" />
</div>

```vue
<n-checkbox v-model="isChecked" aria-label="primary" id="primary-checkbox" color="primary" />
<n-checkbox v-model="isChecked" aria-label="secondary" id="secondary-checkbox" color="secondary" />
<n-checkbox v-model="isChecked" aria-label="success" id="success-checkbox" color="success" />
<n-checkbox v-model="isChecked" aria-label="info" id="info-checkbox" color="info" />
<n-checkbox v-model="isChecked" aria-label="warning" id="warning-checkbox" color="warning" />
<n-checkbox v-model="isChecked" aria-label="danger" id="danger-checkbox" color="danger" />
```

## Accessibility

- Checkbox has role of checkbox.
- When Checkbox has focus, Space or Enter activates it.
- using  ```aria-label``` attribute is a must when not using any visible label

## Props

| Prop    | Purpose                               | Expected values                                                            | Default                      |
| ------- | :------------------------------------ | :------------------------------------------------------------------------- | :--------------------------- |
| color   | To set the color scheme of the checkbox | [Color scheme value ->](/theme/colors)                                     | "primary"                    |
| v-model | To bind the checkbox status             | Boolean (Need to be a vue ref values, ex: `const isEnabled = ref(false)` ) | None (Mandatory to be given) |
