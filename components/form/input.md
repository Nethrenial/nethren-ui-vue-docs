<script lang="ts" setup>
import { ref } from 'vue'
import { NInput } from '@nethren-ui/vue'

const value = ref('')
</script>

# Input

Input component can be used as a input field for a form.This n-input component is for input types of text, url, email, password, tel only.Please use the other specially crafted components in Nethren-ui for needs like date input, file input and color inputs.

## Usage

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NInput } from "@nethren-ui/vue";

const value = ref("");
</script>

<template>
  <!-- Add any props described here as well -->
  <n-input v-model="value" label="Enter value" id="value" name="value" />
</template>
```

## Different Colors

<div class="gallery">
  <n-input
    v-model="value"
    label="Primary color"
    id="value1"
    name="value1"
    color="primary"
  />
  <n-input
    v-model="value"
    label="Secondary color"
    id="value2"
    name="value2"
    color="secondary"
  />
    <n-input
    v-model="value"
    label="Success color"
    id="value3"
    name="value3"
    color="success"
  />
    <n-input
    v-model="value"
    label="Info color"
    id="value4"
    name="value4"
    color="info"
  />
    <n-input
    v-model="value"
    label="Warning color"
    id="value5"
    name="value5"
    color="warning"
  />
</div>

```vue

```

## Accessibility

- Checkbox has role of checkbox.
- When Checkbox has focus, Space or Enter activates it.
- using `aria-label` attribute is a must when not using any visible label

## Props

| Prop    | Purpose                                 | Expected values                                                            | Default                      |
| ------- | :-------------------------------------- | :------------------------------------------------------------------------- | :--------------------------- |
| color   | To set the color scheme of the checkbox | [Color scheme value ->](/theme/colors)                                     | "primary"                    |
| v-model | To bind the checkbox status             | Boolean (Need to be a vue ref values, ex: `const isEnabled = ref(false)` ) | None (Mandatory to be given) |
