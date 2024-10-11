<!--
 * @Date: 2023-12-18 16:33:37
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-29 10:41:35
 * @FilePath: \storybook\src\components\Header\Header2.vue
 * @Description: 导航栏模板
-->
<script setup lang="ts">
import headerBg from '../../assets/img/header2.svg'
</script>

<template>
  <div class="fixed z-10 box-border flex h-16 w-full justify-between overflow-hidden px-2">
    <img
      class="pointer-events-none absolute left-0 top-0 h-16 w-full select-none object-cover"
      :src="headerBg"
      alt=""
    />
    <div class="relative flex-1">
      <slot name="left" />
    </div>
    <div class="w-[700px]">
      <div class="tech-art-title">
        <slot name="center"> 空天地隧智能巡检系统 </slot>
      </div>
    </div>
    <div class="relative flex-1">
      <slot name="right" />
    </div>
  </div>
</template>
<style scoped>
.tech-art-title {
  @apply pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none text-2xl font-semibold text-zx-1 drop-shadow-lg;

  letter-spacing: 0.18em;
  text-shadow: 2px 2px 4px #172554;
}
</style>
