<!--
 * @Date: 2023-12-20 15:29:51
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-11 14:33:40
 * @FilePath: \storybook\src\components\Card\Card3.vue
 * @Description: 组件 - 卡片
-->
<template>
  <!-- TODO 样式待调整 -->
  <div class="pointer-events-auto box-border flex h-full w-full flex-1 flex-col">
    <!-- 标题 -->
    <div class="title-bg">
      <div class="decoration-1" />
      <div class="decoration-2" />
      <div class="decoration-3" />
      <div class="decoration-4" />
      <div class="decoration-5" />
      <div class="decoration-6" />
      <div class="decoration-7" />
      <div class="decoration-8" />

      <div class="flex-1 text-zx-1">
        <slot name="title" />
      </div>
    </div>

    <!-- 内容 -->
    <div class="box-border h-[calc(100%-40px)] border border-zx-1 border-opacity-35">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.title-bg {
  @apply relative box-border flex h-10 items-center p-1;
  background: linear-gradient(90deg, rgba(31, 180, 255, 0.12) 0%, rgba(31, 180, 255, 0) 100%);
}

.decoration-1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 8%;
  height: 2px;
  background: #1fc6ff;
}

.decoration-2 {
  position: absolute;
  left: 8%;
  top: 0;
  width: 84%;
  height: 2px;
  background: #136480;
}

.decoration-3 {
  position: absolute;
  left: 92%;
  top: 0;
  width: 8%;
  height: 2px;
  background: #1fc6ff;
}

.decoration-4 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2%;
  height: 2px;
  background: #1fc6ff;
}

.decoration-5 {
  position: absolute;
  left: 3%;
  bottom: 0;
  width: 2%;
  opacity: 0.56;
  height: 2px;
  background: #1fc6ff;
}

.decoration-6 {
  position: absolute;
  left: 6%;
  bottom: 0;
  width: 2%;
  opacity: 0.24;
  height: 2px;
  background: #1fc6ff;
}

.decoration-7 {
  position: absolute;
  left: 8%;
  bottom: 0;
  width: 84%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(31, 199, 255, 0) 1%,
    #1fc7ff 50%,
    rgba(31, 199, 255, 0) 94%
  );
}

.decoration-8 {
  @apply absolute bottom-0 right-2;
  width: 8%;
  height: 5px;
  background-color: rgba(31, 198, 255, 0.3);
  transform: skew(-50deg) translateY(-10%);
}
</style>
