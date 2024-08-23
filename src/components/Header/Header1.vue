<!--
 * @Date: 2023-12-18 16:33:37
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-23 10:39:10
 * @FilePath: \storybook\src\components\Header\Header1.vue
 * @Description: 导航栏模板
-->
<script setup lang="ts">
import navLeft from '../../assets/img/navLeft.svg'
import navRight from '../../assets/img/navRight.svg'
import navCenter from '../../assets/img/navCenter.svg'
</script>

<template>
  <div
    class="fixed z-10 box-border flex h-16 w-full justify-between overflow-hidden bg-gradient-to-t from-transparent from-10% via-zx-7 via-30% to-zx-9 px-2"
  >
    <div class="relative flex-1">
      <img
        class="pointer-events-none absolute right-0 top-9 -z-10 h-2 w-auto select-none object-cover"
        :src="navLeft"
        alt=""
      />
      <slot name="left" />
    </div>
    <div class="w-[600px]">
      <img
        class="pointer-events-none -z-10 h-full w-full select-none object-fill"
        :src="navCenter"
        alt=""
      />
      <div
        class="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none text-2xl font-semibold tracking-wider text-zx-1"
      >
        <slot name="center"> 星空地智能巡检平台 </slot>
      </div>
    </div>
    <div class="relative flex-1">
      <img
        class="pointer-events-none absolute left-0 top-9 -z-10 h-2 w-auto select-none object-cover"
        :src="navRight"
        alt=""
      />
      <slot name="right" />
    </div>
  </div>
</template>
