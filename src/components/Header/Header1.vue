<!--
 * @Date: 2023-12-18 16:33:37
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 19:27:33
 * @FilePath: \ui-csw\src\components\Header\Header1.vue
 * @Description: 头部导航栏 - 三图片 - 1
-->
<script setup>
import navCenter from '../../assets/img/navCenter.svg'
import navLeft from '../../assets/img/navLeft.svg'
import navRight from '../../assets/img/navRight.svg'
</script>

<template>
  <div class="header-container">
    <div class="header-side">
      <img class="header-side-img right-0" :src="navLeft">
      <slot name="left" />
    </div>
    <div class="w-[600px]">
      <img
        class="header-center-img"
        :src="navCenter"
      >
      <div class="header-title">
        <slot name="center">
          星空地智能巡检平台
        </slot>
      </div>
    </div>
    <div class="header-side">
      <img class="header-side-img left-0" :src="navRight">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  @apply fixed z-10 box-border flex h-16 w-full justify-between overflow-hidden bg-gradient-to-t from-transparent from-10% via-zx-7 via-30% to-zx-9 px-2;
}

.header-title {
  @apply pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none text-2xl font-semibold tracking-wider text-zx-1;
}

.header-center-img {
  @apply pointer-events-none -z-10 h-full w-full select-none object-fill;
}

.header-side {
  @apply relative flex-1;
}

.header-side-img {
  @apply pointer-events-none absolute top-9 -z-10 h-2 w-auto select-none object-cover;
}
</style>
