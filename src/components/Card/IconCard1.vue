<!--
 * @Date: 2024-03-01 10:21:13
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-18 20:00:08
 * @FilePath: \storybook\src\components\Card\IconCard1.vue
 * @Description: 指标卡片
-->
<script setup lang="ts">
defineProps({
  num: Number,
  unit: String,
  label: String,
  icon: {
    type: String,
    default: 'mo',
  },
  iconColor: {
    type: String,
    default: '#45a2ff ',
  },
})
</script>

<template>
  <div class="flex h-12 items-center gap-2">
    <div class="relative">
      <svg
        width="47.242706"
        height="47.242706"
        viewBox="0 0 47.2427 47.2427"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <circle
          id="ellipse"
          cx="23.621353"
          cy="23.621368"
          r="23.271843"
          stroke="#125DB5"
          stroke-opacity="1.000000"
          stroke-width="0.699029"
        />
        <path
          id="path"
          d="M40.5899 31.2071C40.4381 31.5341 40.5802 31.9222 40.9072 32.0741C41.2342 32.2259 41.6223 32.0838 41.7741 31.7568L40.5899 31.2071ZM32.8758 41.0327C33.1962 40.8673 33.3219 40.4735 33.1565 40.1532C32.9912 39.8328 32.5975 39.7071 32.2771 39.8725L32.8758 41.0327ZM23.8109 41.9203C13.6001 41.9203 5.32255 33.6428 5.32255 23.432L4.01699 23.432C4.01699 34.3638 12.879 43.2259 23.8109 43.2259L23.8109 41.9203ZM5.32255 23.432C5.32255 13.2212 13.6001 4.94357 23.8109 4.94357L23.8109 3.63803C12.879 3.63803 4.01699 12.5001 4.01699 23.432L5.32255 23.432ZM23.8109 4.94357C34.0217 4.94357 42.2993 13.2212 42.2993 23.432L43.6048 23.432C43.6048 12.5001 34.7428 3.63803 23.8109 3.63803L23.8109 4.94357ZM42.2993 23.432C42.2993 26.2105 41.6867 28.8443 40.5899 31.2071L41.7741 31.7568C42.9492 29.2254 43.6048 26.4043 43.6048 23.432L42.2993 23.432ZM32.2771 39.8725C29.7412 41.1811 26.8634 41.9203 23.8109 41.9203L23.8109 43.2259C27.0765 43.2259 30.1592 42.4345 32.8758 41.0327L32.2771 39.8725Z"
          fill="#0AA7FF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <circle
          id="ellipse"
          cx="37.835056"
          cy="36.698090"
          r="1.705645"
          fill="#F2994A"
          fill-opacity="1.000000"
        />
      </svg>
      <span
        class="iconfont absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
        :class="`icon-${icon}`"
        :style="{ color: iconColor }"
      />
    </div>

    <div>
      <div class="text-zx-2">
        <slot>
          {{ label }}
        </slot>
      </div>
      <div>
        <span class="mr-1 text-xl font-bold text-zx-1">{{ num }}</span>
        <span class="text-zx-2">{{ unit }}</span>
      </div>
    </div>
  </div>
</template>
