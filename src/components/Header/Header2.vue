<!--
 * @Date: 2023-12-18 16:33:37
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-11 14:35:18
 * @FilePath: \ui-csw\src\components\Header\Header2.vue
 * @Description: 头部导航栏 - 单縂背景图片 - 2
-->
<script setup>
import headerBg from '../../assets/img/header2.svg'
</script>

<template>
  <div class="header-container">
    <img class="header-img" :src="headerBg">
    <div class="header-side">
      <slot name="left" />
    </div>
    <div class="w-[37%] min-w-[700px]">
      <div class="header-title">
        <slot name="center">
          空天地隧智能巡检系统
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
  @apply fixed z-10 box-border flex h-16 w-full justify-between overflow-hidden px-2;
}

.header-img {
  @apply pointer-events-none absolute left-0 top-0 h-16 w-full select-none object-cover;
}

.header-title {
  @apply pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none text-2xl font-semibold text-zx-1 drop-shadow-lg;
  letter-spacing: 0.18em;
  text-shadow: 2px 2px 4px #172554;
}

.header-side {
  @apply relative flex-1;
}
</style>
