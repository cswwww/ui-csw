<!--
 * @Date: 2024-03-01 11:00:28
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 16:09:01
 * @FilePath: \ui-csw\src\components\Map\Legend1.vue
 * @Description: 地图 - 图例
-->

<script setup>
import { ref } from 'vue'

const props = defineProps({
  legendGroup: {
    // 图例分组
    type: Array,
    default: () => null,
  },
  layerList: {
    // 图层列表
    type: Array,
    default: () => [],
  },
})
const showLegend = ref(true) // 是否显示图例

// 图层分组示例
// const layerGroupExample =
// [
//   {
//     groupTitle: '线路类型',
//     legendList: [
//       { group: '线路', type: 'icon', code: 'xiexian', title: '500kV', color: '#B94842' },
//       { type: 'icon', code: 'xiexian', color: '#2384DD', title: '220kV', group: '线路' },
//       { group: '线路', title: '110kV', type: 'icon', code: 'xiexian', color: '#3EC65B' }
//     ]
//   }
// ]

function getSceneLegend() {
  // 从图层列表中提取图例信息，并生成图例对象数组
  const legendList = props.layerList
    .flatMap(item => (item.legend ? JSON.parse(item.legend) : []))
    .filter(Boolean)

  // 将图例项按组分类，并返回分类后的图例数组
  return legendList.reduce((acc, curr) => {
    const { group = '其他', ...rest } = curr // 如果没有组名，则默认为'其他'
    const existingGroup = acc.find(item => item.groupTitle === group)
    existingGroup
      ? existingGroup.legendList.push(rest)
      : acc.push({ groupTitle: group, legendList: [rest] })
    return acc
  }, [])
}

defineExpose({
  showLegend,
  getSceneLegend,
})
</script>

<template>
  <div class="pointer-events-auto w-56 rounded-md bg-zx-8 bg-opacity-70 p-2">
    <!-- 标题栏 -->
    <div class="mb-1 flex items-center justify-between">
      <slot name="title">
        <div class="pb-1 text-zx-1">
          图例
        </div>
        <span
          class="iconfont clickable-icon icon-shouqi"
          :class="[showLegend ? 'rotate-180' : '']"
          :title="showLegend ? '收起图例' : '展开图例'"
          @click="showLegend = !showLegend"
        />
      </slot>
    </div>

    <!-- 图例内容 -->
    <div v-if="showLegend" class="max-h-[50vh] overflow-y-auto">
      <div v-for="item in legendGroup ? legendGroup : getSceneLegend()" :key="item.groupTitle">
        <div class="mb-1 flex items-center justify-between text-zx-4">
          <div class="text-sm">
            {{ item.groupTitle || ' ' }}
          </div>
          <svg width="22" height="10" viewBox="0 0 22 10">
            <path d="M6 5L1.5 9.33013L1.5 0.669873L6 5Z" fill="#1FC6FF" />
            <path d="M14 5L9.5 9.33013V0.669873L14 5Z" fill="#1FC6FF" fill-opacity="0.72" />
            <path d="M22 5L17.5 9.33013V0.669873L22 5Z" fill="#1FC6FF" fill-opacity="0.32" />
          </svg>
        </div>
        <div
          v-for="legend in item.legendList"
          :key="legend?.title"
          class="mb-1 flex items-center gap-2"
        >
          <!-- ICON -->
          <span
            v-if="legend?.type === 'icon'"
            class="iconfont icon-xian inline-block size-[1.5rem] text-center" :class="[
              `icon-${legend?.code}`,
            ]"
            :style="{ color: legend?.color }"
          />

          <!-- Symbol -->
          <svg
            v-if="legend?.type === 'symbol'"
            class="size-[1.5rem] overflow-hidden"
            aria-hidden="true"
          >
            <use :xlink:href="`#icon-${legend?.code}`" />
          </svg>

          <!-- Circle -->
          <div v-if="legend?.type === 'circle'" class="flex-center size-[1.5rem]">
            <div class="size-[1rem] rounded-full" :style="{ backgroundColor: legend?.color }" />
          </div>

          <div class="text-sm text-zx-1">
            {{ legend?.title }}
          </div>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>
