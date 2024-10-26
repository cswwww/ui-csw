<!--
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-12 15:12:48
 * @FilePath: \storybook\src\components\Button\Button.vue
 * @Description: 组件 - 按钮
-->
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    label?: string
    icon?: string
    disabled?: boolean
    type?: 'normal' | 'primary' | 'active' | 'text' | 'map'
  }>(),
  {
    type: 'normal',
    disabled: false
  }
)

// 动态样式属性
const classes = computed(() => ({
  'zx-button': true,
  [`button--${props.type}`]: true,
  'disabled': props.disabled
}))
</script>

<template>
  <div :class="classes">
    <span v-if="icon" :class="['icon-' + icon, 'iconfont']" />
    <span v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.zx-button {
  @apply flex w-fit cursor-pointer select-none items-center justify-center gap-1 rounded-sm px-2 py-1 transition;
}
/* 按钮类型样式 */
.button--normal {
  @apply border border-zx-4 text-zx-3 hover:border-zx-5 hover:bg-zx-5 hover:text-zx-1;
}
.button--primary {
  @apply border border-zx-4 bg-zx-8 text-zx-3 hover:border-zx-5 hover:bg-zx-5;
}
.button--active {
  @apply border border-zx-4 bg-zx-5 text-zx-3 hover:border-zx-5 hover:bg-zx-5;
}
.button--text {
  @apply text-zx-3 hover:text-zx-4;
}
.button--map {
  @apply bg-zx-8 text-zx-3 hover:bg-zx-5;
}
.disabled {
  @apply cursor-not-allowed opacity-50;
}
</style>
