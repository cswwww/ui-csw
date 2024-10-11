<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-08 11:55:25
 * @FilePath: \storybook\src\components\Card\Card4.vue
 * @Description: 卡片 - 模板4
-->

<template>
  <div class="dialog-container">
    <div class="dialog-title">
      <slot name="title"> 标题 </slot>
    </div>

    <div class="dialog-content">
      <slot name="content">默认内容 </slot>
    </div>
  </div>
</template>

<style scoped>
.dialog-container {
  @apply pointer-events-auto relative z-50 box-border flex h-full w-full flex-col rounded-lg border-2 border-[#00a1ff] bg-zx-8 bg-opacity-80 text-zx-2;
}
.dialog-title {
  @apply flex justify-between border-b border-zx-5 p-2;
}
.dialog-content {
  @apply box-border h-full overflow-auto p-2;
}
.dialog-mask {
  @apply pointer-events-auto fixed inset-0 z-40 h-full w-full bg-zx-9 bg-opacity-60;
}

.dialog-container::before {
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 30px;
  width: calc(100% - 60px);
  content: '';
  border-top: 2px solid #016886;
  border-bottom: 2px solid #016886;
  z-index: -1;
}
.dialog-container::after {
  position: absolute;
  top: 30px;
  right: -2px;
  left: -2px;
  height: calc(100% - 60px);
  content: '';
  border-right: 2px solid #016886;
  border-left: 2px solid #016886;
  z-index: -1;
}
</style>
