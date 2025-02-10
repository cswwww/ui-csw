<!--
 * @Date: 2024-03-01 11:00:28
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-09 21:48:34
 * @FilePath: \ui-csw\src\components\Border\Border1.vue
 * @Description: 边框
 * @Reference: https://juejin.cn/post/7215207897520996389
-->

<template>
  <div class="border-one">
    <slot>
      <div class="text-zx-1 flex-center w-32 h-32 ">
        123
      </div>
    </slot>
  </div>
</template>

<style scoped>
.border-one {
  @apply w-fit h-fit relative rounded-md;
  background: linear-gradient(140deg,
      rgba(138, 203, 255, 0.55),
      rgba(41, 106, 143, 0.5),
      rgba(79, 170, 221, 1));
  clip-path: polygon(10px 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%,
      0 10px);
}

.border-one::after {
  @apply absolute left-1/2 top-1/2 rounded -translate-x-1/2 -translate-y-1/2;
  content: "";
  width: calc(100% - 3px);
  height: calc(100% - 3px);
  background: linear-gradient(180deg, #023863 0%, #002d48 100%);
  z-index: -1;
  clip-path: polygon(10px 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%,
      0 10px);
}
</style>
