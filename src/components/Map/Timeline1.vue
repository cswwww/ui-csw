<!--
 * @Date: 2023-12-18 16:25:42
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-11 10:48:01
 * @FilePath: \ui-csw\src\components\Map\Timeline1.vue
 * @Description: 时间轴
-->
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    data: any // 时间轴数据
    label?: string // 时间轴标签字段
    interval?: number // 时间轴间隔，单位：毫秒
  }>(),
  {
    interval: 500,
    label: 'time',
  },
)
const emit = defineEmits<{
  'click:tick': [tickData: any, index: number] // 点击时间轴
  'animate:tick': [tickData: any, index: number] // 时间轴播放
  'animate:stop': [index: number] // 暂停/停止播放
}>()

let timerInterval: ReturnType<typeof setInterval> // 定时器
const currentTick = ref<number>(Number.NaN) // 当前刻度
const hoverTick = ref<number>(Number.NaN) // 鼠标悬停刻度
const isPlaying = ref<boolean>(false) // 是否正在播放

// 操作：点击时间轴
function clickTimeLine(index: number) {
  currentTick.value = index // 更新当前刻度
  clearInterval(timerInterval) // 清除定时器
  isPlaying.value = false // 停止播放

  // 事件：点击时间轴
  emit('click:tick', props.data[currentTick.value], currentTick.value)
}

// 操作：播放
function playTimeLine() {
  const playStop = () => {
    // 停止播放
    emit('animate:stop', currentTick.value)
    isPlaying.value = false
    clearInterval(timerInterval)
  }

  if (!isPlaying.value) {
    isPlaying.value = true
    if (Number.isNaN(currentTick.value)) {
      currentTick.value = 0
      emit('animate:tick', props.data[currentTick.value], currentTick.value)
    }
    else if (currentTick.value >= props.data.length - 1) {
      currentTick.value = 0
    }

    timerInterval = setInterval(() => {
      if (currentTick.value >= props.data.length - 1) {
        playStop()
        return
      }

      currentTick.value += 1
      emit('animate:tick', props.data[currentTick.value], currentTick.value)
    }, props.interval)
  }
  else {
    playStop()
  }
}

watch(
  () => props.data, // 数据变化，重置当前刻度
  () => {
    currentTick.value = Number.NaN
  },
)

defineExpose({
  currentTick,
  isPlaying,
})
</script>

<template>
  <div class="flex h-auto w-full items-center gap-2">
    <!-- 播放按钮 -->
    <div
      class="flex-center size-8 flex-shrink-0 cursor-pointer overflow-hidden rounded-full bg-zx-3 shadow-md"
      @click="playTimeLine"
    >
      <svg v-if="!isPlaying" viewBox="0 0 1024 1024" width="200" height="200">
        <path
          d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z"
          fill="#fff"
          p-id="4525"
        />
      </svg>

      <svg v-else viewBox="0 0 1024 1024" width="200" height="200">
        <path
          d="M874.058005 149.941995a510.06838 510.06838 0 1 0 109.740156 162.738976 511.396369 511.396369 0 0 0-109.740156-162.738976z"
          fill="#fff"
          p-id="9617"
        />
        <path
          d="M417.954256 281.533601a41.046923 41.046923 0 0 0-41.77128 40.201839v385.116718a41.892007 41.892007 0 0 0 83.663287 0v-385.116718a41.167649 41.167649 0 0 0-41.892007-40.201839zM606.045744 281.533601a41.046923 41.046923 0 0 0-41.77128 40.201839v385.116718a41.892007 41.892007 0 0 0 83.663287 0v-385.116718a41.167649 41.167649 0 0 0-41.892007-40.201839z"
          fill="#32e4fe"
          p-id="9618"
        />
      </svg>
    </div>

    <!-- 刻度轴 -->
    <div class="flex w-full gap-1">
      <div
        v-for="(item, index) in data"
        :key="item"
        :class="index === currentTick ? 'bg-zx-3' : 'bg-zx-8'"
        class="relative h-4 w-full cursor-pointer rounded-sm bg-opacity-70 text-zx-1"
        @click="clickTimeLine(index)"
        @mouseenter="() => (hoverTick = index)"
        @mouseleave="() => (hoverTick = NaN)"
      >
        <Transition>
          <div
            v-if="index === hoverTick && index !== currentTick"
            class="absolute bottom-full left-1/2 w-max -translate-x-1/2 text-center text-zx-1 transition-opacity"
          >
            {{ item[label] || item }}
          </div>
        </Transition>

        <div
          v-if="index === currentTick"
          class="absolute left-1/2 top-full w-max -translate-x-1/2 cursor-auto select-none text-center text-zx-3 transition-opacity"
        >
          {{ item[label] || item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
