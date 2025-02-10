<!--
 * @Date: 2024-03-01 11:00:28
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 16:30:07
 * @FilePath: \ui-csw\src\components\Title\LineTitle.vue
 * @Description: 标题
-->
<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex items-center">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <path
        id="Circle"
        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4ZM6 4C6 2.89542 5.10457 2 4 2C2.89543 2 2 2.89542 2 4C2 5.10458 2.89543 6 4 6C5.10457 6 6 5.10458 6 4Z"
        clip-rule="evenodd"
        fill="#1890FF"
        fill-opacity="1"
        fill-rule="evenodd"
      />
    </svg>
    <div class="mx-2 flex-shrink">
      <slot>{{ label }}</slot>
    </div>
    <div class="h-[1px] flex-auto bg-zx-6" />
  </div>
</template>
