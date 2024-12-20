<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-20 17:10:33
 * @FilePath: \ui-csw\src\components\Card\Card5.vue
 * @Description: 卡片 - 模板4
-->

<template>
  <div class="dialog-container">
    <div class="dialog-title">
      <slot name="title">
        标题
      </slot>
    </div>

    <div class="dialog-content">
      <slot name="content">
        默认内容
      </slot>
    </div>

    <img src="@/assets/img/card5deo.png" alt="" class="absolute top-0 translate-x-[2px] -translate-y-[2px] right-0 h-[39px] w-[39px]">
    <img src="@/assets/img/card5deo.png" alt="" class="rotate-180 absolute bottom-0 left-0 -translate-x-[2px] translate-y-[2px]  h-[39px] w-[39px]">
    <img src="@/assets/img/card5deo.png" alt="" class="rotate-90 absolute bottom-0 right-0 translate-x-[2px] translate-y-[2px]  h-[39px] w-[39px]">
    <img src="@/assets/img/card5deo.png" alt="" class="-rotate-90 absolute top-0 left-0 -translate-x-[2px] -translate-y-[2px]  h-[39px] w-[39px]">
  </div>
</template>

<style scoped>
.dialog-container {
  @apply text-zx-1 pointer-events-auto relative z-50 box-border flex h-full w-full flex-col rounded-lg border border-[#02A7F0]  bg-opacity-70 ;
  background: radial-gradient(37% 50% at 50% 50%, rgba(3, 17, 32, 0.7) 0%, rgba(12, 34, 70, 0.7) 100%);
}
.dialog-title {
  @apply flex justify-between p-2;
}
.dialog-content {
  @apply box-border h-full overflow-auto p-2;
}
</style>
