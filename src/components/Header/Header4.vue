<!--
 * @Date: 2024-12-02 15:49:26
 * @LastEditors: ReBeX cswwwx@gmail.com
 * @LastEditTime: 2025-06-04 08:41:20
 * @FilePath: /ui-csw/src/components/Header/Header4.vue
 * @Description: 头部导航栏 - 中間图片 - 4
-->
<script setup>
import headerBg from '../../assets/img/header4.svg'
</script>

<template>
  <div
    class="header-container"
  >
    <div class="header-side">
      <slot name="left" />
    </div>
    <div class="w-fit mx-2">
      <img class="header-center-img" :src="headerBg">
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
    </div>
  </div>
</template>

<style scoped>
.header-container {
  @apply fixed z-10 box-border flex h-[45px] w-full justify-between overflow-hidden px-2;
}

.header-title {
  @apply pointer-events-none absolute-center select-none text-2xl font-semibold tracking-wider text-zx-1;
}

.header-center-img {
  @apply pointer-events-none -z-10 h-full w-full select-none object-fill;
}

.header-side {
  @apply relative flex-1 flex items-center;
}
</style>
