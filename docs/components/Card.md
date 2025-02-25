<script setup>
import { Card2, Card3, Card4, Card5, Card1, Card6 } from '../../src/components/index.js'

const cards = [Card1, Card2, Card3, Card4, Card5, Card6]
</script>

# Card

> 卡片组件

```vue
<Card>
  <template #title>
    标题
  </template>
  <template #content>
    内容
  </template>
</Card>
```

<template v-for="(Component, index) in cards" :key="index">

## Card{{ index + 1 }}

<component :is="Component">
  <template #title>
    标题
  </template>
  <template #content>
    内容
  </template>
</component>

</template>
