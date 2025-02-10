<!--
 * @Date: 2023-12-20 15:29:51
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-09 22:12:36
 * @FilePath: \ui-csw\src\components\Card\Card2.vue
 * @Description: 卡片 - 模板2
-->
<template>
  <!-- TODO 样式待调整 -->
  <div
    class="pointer-events-auto box-border flex h-full w-full flex-col bg-zx-9 bg-opacity-60 text-zx-3"
    style="box-shadow: 0 0 1rem #3d6dbc inset"
  >
    <!-- 标题 -->
    <div
      class="relative box-border flex items-center bg-gradient-to-r from-blue-700/80 from-20% to-zx-9/80 px-2 py-1 text-zx-1"
    >
      <div class="flex-1 font-medium">
        <slot name="title" />
      </div>
    </div>

    <!-- 分割线 -->
    <div class="my-[1px] h-[1px] bg-gradient-to-r from-zx-1/80 from-20% to-zx-9/80" />

    <!-- 内容 -->
    <div class="box-border h-[calc(100%-43px)] p-2 pr-4">
      <slot name="content" />
    </div>
  </div>
</template>
