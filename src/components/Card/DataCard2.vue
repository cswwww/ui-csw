<!--
 * @Date: 2024-03-01 10:21:13
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-11 11:28:12
 * @FilePath: \ui-csw\src\components\Card\DataCard2.vue
 * @Description: 组件 - 指标卡片
-->
<script setup lang="ts">
defineProps({
  label: String,
  num: [Number, String],
  unit: String,
})
</script>

<template>
  <div class="data-card2">
    <div class="text-lg flex flex-col text-zx-3">
      <span class="text-zx-1">{{ label }}</span>
      <span class="font-bold " :class="[num ? 'text-2xl' : 'text-3xl']">{{ num }}
        <span class="text-zx-1">
          {{ unit }}
        </span>
      </span>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.data-card2 {
  @apply flex aspect-[292/125] items-center justify-between p-2;
  background-image: url('../../assets/img/dataCard2.svg');
  background-repeat: no-repeat;
  background-position: left;
}
</style>
