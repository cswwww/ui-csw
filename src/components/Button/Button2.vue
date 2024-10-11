<!--
 * @Date: 2024-08-07 09:30:04
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-19 14:14:12
 * @FilePath: \storybook\src\components\Button\Button2.vue
 * @Description: 组件 - 按钮 - 1
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: '按钮'
  }
)
</script>

<template>
  <div class="button2">{{ label }}</div>
</template>
<style scoped>
.button2 {
  @apply flex h-[32px] w-[65px] cursor-pointer select-none items-center justify-center text-zx-3 transition hover:bg-zx-1 hover:bg-opacity-20;
  background-image: url('../../assets/img/button2.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
