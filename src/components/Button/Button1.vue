<!--
 * @Date: 2024-08-07 09:30:04
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-09 21:38:50
 * @FilePath: \ui-csw\src\components\Button\Button1.vue
 * @Description: 组件 - 按钮 - 1
-->
<script setup>
defineProps({
  img: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  num: {
    type: [Number, String],
    default: 0,
  },
  unit: {
    type: String,
    default: '个',
  },
})
</script>

<template>
  <div
    class="flex h-auto w-full cursor-pointer items-center gap-4 rounded-md border-(1 solid zx-4) bg-zx-9 bg-opacity-30 p-1 text-zx-1 transition hover:(border-zx-5 bg-zx-5 bg-opacity-50)"
  >
    <img v-if="img" class="size-10" :src="img">
    <div v-if="icon" class="size-10 rounded-lg bg-zx-6 bg-opacity-50">
      <div
        class="iconfont flex-center size-10 text-2xl"
        :class="`icon-${icon}`"
      />
    </div>
    <div class="flex w-full justify-between">
      <div class="text-xl">
        {{ label }}
      </div>
      <div class="text-xl">
        {{ num }}<span class="ml-2 text-xs">{{ unit }}</span>
      </div>
    </div>
  </div>
</template>
