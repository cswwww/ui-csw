<!--
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-09 21:10:49
 * @FilePath: \ui-csw\src\components\Button\zxButton.vue
 * @Description: 组件 - 按钮
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'normal',
  },
})

// 动态样式属性
const classes = computed(() => ({
  'zx-button': true,
  [`button--${props.type}`]: true,
  'disabled': props.disabled,
}))
</script>

<template>
  <div :class="classes">
    <span v-if="icon" class="iconfont" :class="[`icon-${icon}`]" />
    <span v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.zx-button {
  @apply flex-center text-zx-3 w-fit cursor-pointer select-none gap-1 rounded-sm px-2 py-1 transition;
}
.disabled {
  @apply cursor-not-allowed opacity-50;
}
/* 按钮类型样式 */
.button--normal {
  @apply border-(1 solid zx-4);
}
.button--normal:not(.disabled) {
  @apply hover:(border-zx-5 bg-zx-5 text-zx-1);
}
.button--primary {
  @apply bg-zx-8 border-(1 solid zx-4);
}
.button--primary:not(.disabled) {
  @apply hover:(border-zx-5 bg-zx-5 text-zx-1);
}
.button--active {
  @apply bg-zx-5 border-(1 solid zx-4);
}
.button--active:not(.disabled) {
  @apply hover:(border-zx-8 bg-zx-8 text-zx-1);
}
.button--text {
  @apply !p-0;
}
.button--text:not(.disabled) {
  @apply hover:text-zx-4 ;
}
.button--map {
  @apply bg-zx-8 ;
}
.button--map:not(.disabled) {
  @apply hover:bg-zx-5;
}
</style>
