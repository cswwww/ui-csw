<!--
 * @Date: 2024-12-02 15:49:26
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 15:56:31
 * @FilePath: \ui-csw\src\components\Header\Header3.vue
 * @Description: 导航栏模板
-->
<script setup>
import navCenter from '../../assets/img/navCenter3.svg'
</script>

<template>
  <div
    class="fixed z-10 flex h-16 w-full justify-between overflow-y-auto px-2"
  >
    <div class="relative flex-1 flex items-center">
      <svg class="float-left" width="13" height="42" viewBox="0 0 13 42" fill="none">
        <path d="M13 1H5L1 5.78599V36.214L5 41H13" stroke="#1FC6FF" />
      </svg>
      <slot name="left" />
    </div>
    <div class="w-fit mx-2">
      <img
        class="pointer-events-none -z-10 h-full w-full select-none object-fill"
        :src="navCenter"
      >
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-2xl font-semibold tracking-wider text-zx-1"
      >
        <slot name="center">
          星空地智能巡检平台
        </slot>
      </div>
    </div>
    <div class="relative flex-1 flex items-center">
      <slot name="right" />
      <svg class="ml-auto" width="13" height="42" viewBox="0 0 13 42" fill="none">
        <path d="M0 1H8L12 5.78599V36.214L8 41H0" stroke="#1FC6FF" />
      </svg>
    </div>
  </div>
</template>
