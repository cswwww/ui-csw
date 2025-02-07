<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-24 19:10:55
 * @FilePath: \ui-csw\src\components\Card\Card5.vue
 * @Description: 卡片 - 模板5
-->

<template>
  <div class="dialog-container">
    <div class="flex justify-between p-2">
      <slot name="title">
        标题
      </slot>
    </div>

    <div class="overflow-auto box-border p-2 w-full h-full">
      <slot name="content">
        默认内容
      </slot>
    </div>

    <span class="dec-l dec-1" />
    <span class="dec-s dec-1" />
    <span class="dec-l dec-2" />
    <span class="dec-s dec-2" />
    <span class="dec-l dec-3" />
    <span class="dec-s dec-3" />
    <span class="dec-l dec-4" />
    <span class="dec-s dec-4" />
  </div>
</template>

<style scoped>
.dialog-container {
  @apply text-zx-1 pointer-events-auto relative z-50 box-border flex h-full w-full flex-col rounded-lg border border-[#02A7F0] bg-opacity-70 ;
  background: radial-gradient(37% 50% at 50% 50%, rgba(3, 17, 32, 0.7) 0%, rgba(12, 34, 70, 0.7) 100%);
}

.dec-l {
  @apply absolute -z-10 border-[#4a9ae1] w-10 h-10;
}

.dec-s {
  @apply absolute -z-10 border-[#7bb0df] w-5 h-5;
}

.dec-1 {
  top: -1px;
  left: -1px;
  border-width: 3px 0 0 3px;
  border-radius: 10px 0 0 0;
}

.dec-2 {
  top: -1px;
  right: -1px;
  border-width: 3px 3px 0 0;
  border-radius: 0 10px 0 0;
}

.dec-3 {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 3px 3px;
  border-radius: 0 0 0 10px;
}

.dec-4 {
  bottom: -1px;
  right: -1px;
  border-radius: 0 0 10px 0;
  border-width: 0 3px 3px 0;
}
</style>
