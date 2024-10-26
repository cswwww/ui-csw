<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-12 17:26:12
 * @FilePath: \storybook\src\components\Dialog\Dialog1.vue
 * @Description: 弹出窗 - 模板1
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    show?: boolean
    close?: Function
  }>(),
  {
    show: true,
    close: (fun: Function) => fun()
  }
)

// 操作：关闭弹窗
const emit = defineEmits<{
  'update:show': [show: boolean]
}>()

const handleClose = () => {
  // ! 需搭配 v-model:show 来使用
  emit('update:show', false)
}
</script>

<template>
  <!-- 遮罩层 -->
  <div v-if="show" @click="close(handleClose)" class="dialog-mask" />

  <div v-if="show" class="dialog-container">
    <div class="dialog-title">
      <slot name="title"> 标题 </slot>
      <span title="关闭" class="clickable-icon" style="font-size: 1.6rem" @click="close(handleClose)">×</span>
    </div>

    <div class="dialog-content">
      <slot name="content">默认内容 </slot>
    </div>
  </div>
</template>

<style scoped>
.dialog-container {
  @apply pointer-events-auto fixed left-1/2 top-1/2 z-50 flex max-h-[80vh] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border-2 border-[#00a1ff] bg-zx-8 bg-opacity-90 text-zx-2;
}
.dialog-title {
  @apply flex justify-between border-b border-zx-5 p-4 text-lg;
}
.dialog-content {
  @apply overflow-y-auto overflow-x-hidden p-4;
}
.dialog-mask {
  @apply pointer-events-auto fixed inset-0 z-50 h-full w-full bg-zx-9 bg-opacity-60;
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
