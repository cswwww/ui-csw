<!--
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-06 09:44:31
 * @FilePath: \storybook\src\components\Button\Button.vue
 * @Description: 组件 - 按钮
-->
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    label?: string
    icon?: string
    type?: 'normal' | 'primary' | 'active' | 'text' | 'map'
  }>(),
  {
    type: 'primary'
  }
)
const classes = computed(() => ({
  'zx-button': true,
  [`button--${props.type}`]: true
}))
</script>

<template>
  <div :class="classes">
    <span v-if="icon" :class="['icon-' + icon, 'iconfont']" />
    <span>
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.zx-button {
  @apply flex w-fit cursor-pointer select-none items-center justify-center gap-1 rounded-sm border px-2 py-1 transition;
}
/* 按钮类型样式 */
.button--normal {
  @apply border-zx-4 text-zx-3 hover:border-zx-5 hover:bg-zx-5 hover:text-zx-1;
}
.button--primary {
  @apply border-zx-4 bg-zx-8 text-zx-3 hover:border-zx-5 hover:bg-zx-5;
}
.button--active {
  @apply border-zx-4 bg-zx-5 text-zx-3 hover:border-zx-5 hover:bg-zx-5;
}
.button--text {
  @apply border-none text-zx-3 hover:text-zx-4;
}
.button--map {
  @apply border-none bg-zx-8 text-zx-3 hover:bg-zx-5;
}
</style>
