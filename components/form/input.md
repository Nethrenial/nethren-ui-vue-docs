<script lang="ts" setup>
import { ref } from 'vue'
import { NInput } from '@nethren-ui/vue'

const value = ref('')

function onLabelClick() {
    alert("Clicked on the label")
}

</script>

# Input

Input component can be used as a input field for a form.

::: warning
This n-input component is for input types of text, url, email, password, tel only.Please use the other specially crafted components in Nethren-ui for needs like date input, file input and color inputs.
:::

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
  <n-input
    v-model="value"
    label="Danger color"
    id="value6"
    name="value6"
    color="danger"
  />
  <n-input
    v-model="value"
    label="Dark color"
    id="value6"
    name="value6"
    color="dark"
  />
</div>

```vue
<template>
  <n-input
    color="primary"
    v-model="value"
    label="Primary color"
    id="value1"
    name="value1"
  />
  <n-input
    color="secondary"
    v-model="value"
    label="Secondary color"
    id="value2"
    name="value2"
  />
  <n-input
    color="success"
    v-model="value"
    label="Success color"
    id="value3"
    name="value3"
  />
  <n-input
    color="info"
    v-model="value"
    label="Info color"
    id="value4"
    name="value4"
  />
  <n-input
    color="warning"
    v-model="value"
    label="Warning color"
    id="value5"
    name="value5"
  />
  <n-input
    color="danger"
    v-model="value"
    label="Danger color"
    id="value6"
    name="value6"
  />
  <n-input
    color="dark"
    v-model="value"
    label="Dark color"
    id="value6"
    name="value6"
  />
</template>
```

## With icons

<div class="gallery">
  <n-input
    v-model="value"
    label="With left icon"
    id="left-icon-input"
    name="left-icon-input"
    color="primary"
  >
  <template #leftIcon>
    ❤️
  </template>
  </n-input>
  <n-input
    v-model="value"
    label="With right icon"
    id="right-icon-input"
    name="right-icon-input"
    color="primary"
  >
  <template #rightIcon>
    ❤️
  </template>
  </n-input>
</div>

```vue
<template>
  <n-input
    v-model="value"
    label="With left icon"
    id="left-icon-input"
    name="left-icon-input"
    color="primary"
  >
    <template #leftIcon> ❤️ </template>
  </n-input>
  <n-input
    v-model="value"
    label="With right icon"
    id="right-icon-input"
    name="right-icon-input"
    color="primary"
  >
    <template #rightIcon> ❤️ </template>
  </n-input>
</template>
```

## Different Input types

<div class="gallery">
  <n-input
    v-model="value"
    label="Text"
    type="text"
    id="value7"
    name="value7"
    color="primary"
  />
  <n-input
    v-model="value"
    label="Email"
    type="email"
    id="value8"
    name="value8"
    color="secondary"
  />
    <n-input
    v-model="value"
    label="Password"
    type="password"
    id="value9"
    name="value9"
    color="success"
  />
    <n-input
    v-model="value"
    label="Tel"
    type="tel"
    id="value4"
    name="value4"
    color="info"
  />
    <n-input
    v-model="value"
    label="URL"
    type="url"
    id="value5"
    name="value5"
    color="warning"
  />
  <n-input
    v-model="value"
    label="Search"
    type="search"
    id="value6"
    name="value6"
    color="danger"
  />
</div>

```vue
<template>
<div class="gallery">
  <n-input v-model="value" label="Text" type="text" id="value7" name="value7" color="primary"/>
  <n-input v-model="value" label="Email" type="email" id="value8" name="value8" color="secondary"/>
  <n-input v-model="value" label="Password" type="password" id="value9" name="value9" color="success"/>
  <n-input v-model="value" label="Tel" type="tel" id="value10" name="value10" color="info"/>
  <n-input v-model="value" label="URL" type="url" id="value11" name="value11" color="warning"/>
  <n-input v-model="value" label="Search" type="search" id="value12" name="value12" color="danger"/>
</template>
```

## Special features

### Configuring inner elements

NInput uses three elements mainly to render the component (excluding the ones used by visibility toggle and the errors list).That is a wrapper div, a label element and the input element.To ease with setting attributes for the input element, by default we've enabled attr binding.So every attribute that is not an explicit prop will be inherited by the input tag instead of the wrapper div.So It's not obvious how to set attrs for the wrapper div or the label.To make it possible and full type-safe, NInput has two props that can receive an object of valid vue html attributes (yes, even event listeners and refs!).These have full autocompletion as well thanks to the HTMLAttributes Type and the ReservedProps interface provided by vue.

Here are a few examples,

#### 1. Adding event listeners to inner elements

Try clicking on the label

<div class="gallery">
    <!-- Add a click listener to the inner label element -->
  <n-input
    v-model="value"
    label="Input with interactive label"
    type="text"
    id="value13"
    name="value13"
    color="primary"
    :label-attrs="{
        onClick: onLabelClick
    }"
    :wrapper-attrs="{ style: {marginBlock: '1rem'} }"
  />

</div>

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NInput } from "@nethren-ui/vue";

const value = ref("");

function onLabelClick() {
  alert("Clicked on the label");
}
</script>
<template>
  <n-input
    v-model="value"
    label="Input with interactive label"
    type="text"
    id="value13"
    name="value13"
    color="primary"
    :label-attrs="{
      onClick: onLabelClick,
    }"
  />
</template>
```

::: warning

However, due to using regular js objects here, we cannot use the typical `@click` or `v-on:click` syntax here, we must use onClick.Also only use function references or in-place anonymous functions

Example: `onClick: onLabelClick` or `onClick: () => { onLabelClick() }`

:::

#### 2. Making the component take full width

<div class="gallery">
  <n-input
    v-model="value"
    label="Full width input"
    type="text"
    id="value14"
    name="value14"
    color="primary"
    :wrapper-attrs="{ style: {marginBlock: '1.5rem', width: '100%' } }"
  />

</div>

```vue
<template>
  <n-input
    v-model="value"
    label="Full width input"
    type="text"
    id="value14"
    name="value14"
    color="primary"
    :wrapper-attrs="{ style: { width: '100%' } }"
  />
</template>
```

::: tip

You can either use the regular html inline styles string or vue style object syntax here.
Example: `:wrapper-attrs="{ style: { width: '100%' } }"` and `:wrapper-attrs="{ style: 'width: 100%' }"` has the same effect here

:::

#### 3. How about a bold, italic label?

<div class="gallery">
  <n-input
    v-model="value"
    label="Full width input"
    type="text"
    id="value15"
    name="value15"
    color="primary"
    :label-attrs="{ style: 'font-style: italic;font-weight: bold' }"
    :wrapper-attrs="{ style: {marginBlock: '1.5rem' } }"
  />

</div>

```vue
<template>
  <n-input
    v-model="value"
    label="Full width input"
    type="text"
    id="value15"
    name="value15"
    color="primary"
    :label-attrs="{ style: 'font-style: italic;font-weight: bold' }"
  />
</template>
```

### Visibility toggler for password inputs

Incase you need a visibility toggler for your password inputs, you can use `:with-visibility-toggle="true"` to also include a nicely styled visibility toggle.No need to handle visibility state manually.

<div class="gallery">
  <n-input
    v-model="value"
    label="With visibility toggle"
    type="password"
    id="w-v-t"
    name="w-v-t"
    :with-visibility-toggle="true"
  />
  <n-input
    v-model="value"
    label="With visibility toggle and a left icon !"
    type="password"
    id="w-v-t-i"
    name="w-v-t-i"
    :with-visibility-toggle="true"
  >
    <template #leftIcon>🔒</template>
  </n-input>
</div>

```vue
<template>
  <n-input
    v-model="value"
    label="With visibility toggle"
    type="password"
    id="w-v-t"
    name="w-v-t"
    :with-visibility-toggle="true"
  />
  <!-- For the left icon -->
  <n-input
    v-model="value"
    label="With visibility toggle and a left icon !"
    type="password"
    id="w-v-t-i"
    name="w-v-t-i"
    :with-visibility-toggle="true"
  >
    <template #leftIcon>🔒</template>
  </n-input>
</template>
```

::: warning

Don't use `rightIcon` slot with `with-visibility-toggle` prop enabled, it will break the styling.
But you can use `leftIcon` slot with `with-visibility-toggle` prop enabled.For an example, a lock icon on the left side of a password input and a visibility toggle on the right side.
:::

## Accessibility

- Please try to include labels always.
- Try to give hints of proper input format through placeholders.

## Props

| Prop          | Purpose                        | Expected values                                                                 | Default                                      |
| ------------- | :----------------------------- | :------------------------------------------------------------------------------ | :------------------------------------------- |
| color         | Color scheme of the input      | [Color scheme value ->](/theme/colors)                                          | `"primary"`                                  |
| type          | Type of the input              | `'text'` , `'password'` , `'email'` , `'tel'` , `'url'` , `'search'` , `'text'` | `'text'`                                     |
| v-model       | To bind the input value        | a `string` value                                                                | None (Mandatory to be given)                 |
| errors        | To show validation errors      | array of `string`s                                                              | `undefined`                                  |
| label         | Label of the input             | a `string`                                                                      | `undefined` (Recommended to provide a value) |
| wrapper-attrs | attributes for the wrapper div | an object respecting `HTMLAttributes & ReservedProps` type                      | `undefined`                                  |
| label-attrs   | attributes for the label       | an object respecting `LabelHTMLAttributes & ReservedProps` type                 | `undefined`                                  |
