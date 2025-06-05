<!--
 * @Date: 2024-12-02 15:49:26
 * @LastEditors: ReBeX cswwwx@gmail.com
 * @LastEditTime: 2025-06-04 08:41:18
 * @FilePath: /ui-csw/src/components/Header/Header3.vue
 * @Description: 头部导航栏 - 单图片|两图标 - 3
-->
<script setup>
import navCenter from '../../assets/img/navCenter3.svg'
</script>

<template>
  <div
    class="header-container"
  >
    <div class="header-side">
      <svg class="float-left" width="13" height="42" viewBox="0 0 13 42" fill="none">
        <path d="M13 1H5L1 5.78599V36.214L5 41H13" stroke="#1FC6FF" />
      </svg>
      <slot name="left" />
    </div>
    <div class="w-fit mx-2">
      <img class="header-center-img" :src="navCenter">
      <div
        class="header-title"
      >
        <slot name="center">
          平台名称
        </slot>
      </div>
    </div>
    <div class="header-side">
      <slot name="right" />
      <svg class="ml-auto" width="13" height="42" viewBox="0 0 13 42" fill="none">
        <path d="M0 1H8L12 5.78599V36.214L8 41H0" stroke="#1FC6FF" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  @apply fixed z-10 box-border flex h-16 w-full justify-between overflow-y-auto px-2;
}

.header-title {
  @apply pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-2xl font-semibold tracking-wider text-zx-1;
}

.header-center-img {
  @apply pointer-events-none -z-10 h-full w-full select-none object-fill;
}

.header-side {
  @apply relative flex-1 flex items-center;
}
</style>
