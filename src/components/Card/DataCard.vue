<!--
 * @Date: 2024-03-01 10:21:13
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-18 13:56:16
 * @FilePath: \storybook\src\components\Card\DataCard.vue
 * @Description: 组件 - 指标卡片
-->
<script setup lang="ts">
defineProps({
  label: String,
  num: [Number, String],
  unit: String,
  num2: [Number, String],
  unit2: String,
})
</script>

<template>
  <div
    class="flex items-center justify-between rounded-lg border border-zx-5 bg-zx-7 bg-opacity-60 p-2"
  >
    <div>
      <div class="text-lg text-zx-3">
        <slot>
          {{ label }}
        </slot>
      </div>
    </div>
    <div>
      <span class="mr-2 font-bold text-zx-1" :class="[num2 ? 'text-2xl' : 'text-3xl']">{{
        num
      }}</span>
      <span class="text-zx-1">{{ unit }}</span>
    </div>
    <div v-if="num2">
      <span class="mr-2 text-2xl font-bold text-zx-1">{{ num2 }}</span>
      <span class="text-zx-1">{{ unit2 }}</span>
    </div>
  </div>
</template>
