<!--
 * @Date: 2024-03-14 09:26:07
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 16:31:45
 * @FilePath: \ui-csw\src\components\Title\Title2.vue
 * @Description: 场景 - 标题
-->
<script setup>
import midTitle from '../../assets/img/midTitle.svg'

defineProps({
  mainTitle: {
    type: String,
    default: '',
  },
  secondTitle: {
    type: String,
    default: '',
  },
  thirdTitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="pointer-events-none absolute left-1/2 top-10 z-10 flex w-80 -translate-x-1/2 select-none flex-col items-center p-6"
  >
    <img :src="midTitle" class="absolute">
    <div class="text-nowrap text-2xl text-zx-3">
      {{ mainTitle }}
      <span v-if="secondTitle">· {{ secondTitle }}</span>
    </div>

    <div v-if="thirdTitle" class="text-nowrap text-lg text-zx-1">
      {{ thirdTitle }}
    </div>
  </div>
</template>
