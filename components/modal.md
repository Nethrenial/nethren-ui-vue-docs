<script lang="ts" setup>
import { ref } from 'vue'
import { NModal, NButton, NInput } from '@nethren-ui/vue'

const mode1Modal = ref<InstanceType<typeof NModal>>()
const mode2Modal = ref<InstanceType<typeof NModal>>()
const email = ref("")
</script>

# Modal

Modal component is used as a popup, mostly used with small forms or confirmation dialogs

## Usage

Because of the way NModal is implemented (it uses teleport under the hood), it can be nested within any components.This is perfect because if needed, we can include it withing the toggle button itself.But it's not mandatory! As long as you got a vue ref pointing to the modal component, you can open or close it within any function

::: warning
When using with plain javascript, you won't get intellisense for modal methods via the ref, this is because lsp cannot understand the referenced component's type.
But with ts, we can use the utility type [InstanceType](https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs) to provide a type parameter for the ref<>() generic function.This will provide correct intellisense.
:::

::: info
Size of the modal is decided by the elements or components you include in it.Other than a padding and a border-radius, it doesn't force any sizing on you !
:::

::: code-group

```vue [js]
<script setup>
import { ref } from "vue";
import { NModal, NButton } from "@nethren-ui/vue";

const modal = ref();
</script>

<template>
  <!-- Add any props described here as well -->
  <n-button @click="modal?.openModal()">Open Modal</n-button>
  <n-modal ref="modal">
    <template #modal-header>
      <!-- Enter modal header content , but will be wrapped by a header tag -->
    </template>
    <template #modal-body>
      <!-- Enter body content, but will be wrapped by a div tag -->
    </template>
    <template #modal-footer>
      <!-- Enter footer content, but will be wrapped by a footer tag -->
    </template>
  </n-modal>

  <!-- Or -->
  <n-button @click="modal?.openModal()">
    Open Modal
    <n-modal ref="modal">
      <!-- Same as above -->
    </n-modal>
  </n-button>
</template>
```

```vue [ts]
<script lang="ts" setup>
import { ref } from "vue";
import { NModal, NButton } from "@nethren-ui/vue";

const modal = ref<InstanceType<typeof NModal> | null>(null);
</script>

<template>
  <!-- Add any props described here as well -->
  <n-button @click="modal?.openModal()">Open Modal</n-button>
  <n-modal ref="modal">
    <template #modal-header>
      <!-- Enter modal header content , but will be wrapped by a header tag -->
    </template>
    <template #modal-body>
      <!-- Enter body content, but will be wrapped by a div tag -->
    </template>
    <template #modal-footer>
      <!-- Enter footer content, but will be wrapped by a footer tag -->
    </template>
  </n-modal>

  <!-- Or -->
  <n-button @click="modal?.openModal()">
    Open Modal
    <n-modal ref="modal">
      <!-- Same as above -->
    </n-modal>
  </n-button>
</template>
```

:::

## Different modes

Currently, there are two types of NModal.

### Closes on outside click

This modal can be closed by either calling the `closeModal` method on the model reference, clicking on the default close button or clicking on outside

<div class="gallery">
<NButton @click="mode1Modal?.openModal()">
    Open type 1 modal
    <NModal ref="mode1Modal">
        <template #modal-header>
            <h3 class="text-xl font-semibold">Subscribe to our newsletter</h3>    
        </template>
        <template #modal-body>
            <form class="flex flex-col gap-4 w-[95vw] max-w-[400px]">
                <NInput v-model="email" label="Email" id="email"/>
            </form>
        </template>
        <template #modal-footer>
            <div style="display:flex;align-items:center;justify-content:flex-end;" class="mt-4">
                <NButton @click="mode1Modal?.closeModal()" mode="text" class="mt-4">
                    Submit & Close
                </NButton>
            </div>
        </template>
    </NModal>
</NButton>
</div>

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NModal, NButton, NInput } from "@nethren-ui/vue";

const mode1Modal = ref<InstanceType<typeof NModal>>();
const email = ref("");
</script>
<template>
  <!-- Note that for styling, we've used tailwindcss in the documentation, it will not have any effect on the component styles -->
  <NButton @click="mode1Modal?.openModal()">
    Open type 1 modal
    <NModal ref="mode1Modal">
      <template #modal-header>
        <h3 class="text-xl font-semibold">Subscribe to our newsletter</h3>
      </template>
      <template #modal-body>
        <form class="flex flex-col gap-4 w-[95vw] max-w-[400px]">
          <NInput v-model="email" label="Email" id="email" />
        </form>
      </template>
      <template #modal-footer>
        <div
          style="display:flex;align-items:center;justify-content:flex-end;"
          class="mt-4"
        >
          <NButton @click="mode1Modal?.closeModal()" mode="text" class="mt-4">
            Submit & Close
          </NButton>
        </div>
      </template>
    </NModal>
  </NButton>
</template>
```

### Not closing on outside click

This type doesn't close when clicked outside

<div class="gallery">
<NButton @click="mode2Modal?.openModal()">
    Open type 2 modal
    <NModal ref="mode2Modal" :close-on-outside-click="false">
        <template #modal-header>
            <h3 class="text-xl font-semibold">Subscribe to our newsletter</h3>    
        </template>
        <template #modal-body>
            <form class="flex flex-col gap-4 w-[95vw] max-w-[400px]">
                <NInput v-model="email" label="Email" id="email"/>
            </form>
        </template>
        <template #modal-footer>
            <div style="display:flex;align-items:center;justify-content:flex-end;" class="mt-4">
                <NButton @click="mode2Modal?.closeModal()" mode="text" class="mt-4">
                    Submit & Close
                </NButton>
            </div>
        </template>
    </NModal>
</NButton>
</div>

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { NModal, NButton, NInput } from "@nethren-ui/vue";

const mode2Modal = ref<InstanceType<typeof NModal>>();
const email = ref("");
</script>
<template>
  <!-- Note that for styling, we've used tailwindcss in the documentation, it will not have any effect on the component styles -->
  <NButton @click="mode2Modal?.openModal()">
    Open type 1 modal
    <NModal ref="mode2Modal" :close-on-outside-click="false">
      <template #modal-header>
        <h3 class="text-xl font-semibold">Subscribe to our newsletter</h3>
      </template>
      <template #modal-body>
        <form class="flex flex-col gap-4 w-[95vw] max-w-[400px]">
          <NInput v-model="email" label="Email" id="email" />
        </form>
      </template>
      <template #modal-footer>
        <div
          style="display:flex;align-items:center;justify-content:flex-end;"
          class="mt-4"
        >
          <NButton @click="mode2Modal?.closeModal()" mode="text" class="mt-4">
            Submit & Close
          </NButton>
        </div>
      </template>
    </NModal>
  </NButton>
</template>
```

## Props

| Prop                   | Purpose                                        | Expected values                        | Default   |
| ---------------------- | :--------------------------------------------- | :------------------------------------- | :-------- |
| color                  | Color scheme of the modal (No purpose for now) | [Color scheme value ->](/theme/colors) | "primary" |
| close-on-outside-click | To control the closing behavior                | boolean values                         | true      |
