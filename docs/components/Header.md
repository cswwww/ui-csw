<script setup>
import { Header1, Header2, Header3, Header4, Header5 } from '../../src/components/index.js'

const headers = [Header1, Header2, Header3, Header4, Header5]

</script>

# Header

> 导航栏组件

```vue
<Header>
  <template #left>
    Left
  </template>
  <template #center>
    Center
  </template>
  <template #right>
    Right
  </template>
</Header>
```

<template v-for="(Component, index) in headers" :key="index">

## Header{{ index + 1 }}

<div class="relative w-full transform-scale-100 h-[60px]">
  <component :is="Component">
    <template #left>Left</template>
    <template #center>Center</template>
    <template #right>Right</template>
  </component>
</div>

</template>
