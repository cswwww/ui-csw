<!--
 * @Date: 2023-12-20 15:29:51
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 14:19:13
 * @FilePath: \storybook\src\components\Card\TitleCard.vue
 * @Description: 组件 - 卡片
-->
<template>
  <div
    class="pointer-events-auto box-border flex h-full w-full flex-col bg-zx-8 bg-opacity-70 text-zx-3"
  >
    <!-- 标题 -->
    <div class="relative box-border flex items-center bg-zx-8 bg-opacity-80 px-2 py-1 text-zx-1">
      <div class="h-4 w-[3px] bg-zx-1" />
      <div class="ml-1 flex-1 font-medium">
        <slot name="title" />
      </div>
    </div>

    <!-- 内容 -->
    <div class="box-border h-full overflow-auto p-2">
      <slot name="content" />
    </div>
  </div>
</template>
