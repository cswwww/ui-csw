<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX cswwwx@gmail.com
 * @LastEditTime: 2026-01-20 11:38:47
 * @FilePath: /ui-csw/src/components/Card/Card7.vue
 * @Description: 卡片 - 模板7
-->
<template>
  <div class="dialog-container">
    <div class="title-container">
      <div class="tech-circle">
        <div class="ring ring-1" />
        <div class="ring ring-3" />
      </div>
      <div class="title-content">
        <slot name="title">
          标题
        </slot>

        <!-- 装饰线 -->
        <div class="flex w-full gap-3">
          <div class="relative w-1/2">
            <div class="relative w-full h-[2px] bg-[#2f4d83]" />
            <div class="absolute top-0 left-0 w-2/5 h-[2px] bg-[#558cf9]" />
          </div>
          <div class="relative w-1/2">
            <div class="relative w-full h-[2px] bg-[#2f4d83]" />
            <div class="absolute top-0 left-10 w-[30px] h-[2px] bg-[#558cf9]" />
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-auto box-border p-2 w-full h-full">
      <slot name="content">
        默认内容
      </slot>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  @apply flex gap-2 relative h-[40px] w-full overflow-hidden;
  align-items: center;
}

.title-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(59, 130, 246, 0.4) 30%,
    rgba(59, 130, 246, 0.6) 6%,
    rgba(59, 130, 246, 0.4) 70%,
    transparent 100%
  );
  width: 100%;
  height: 100%;
  border-radius: 0;
  z-index: 0;
  filter: blur(12px);
  border-radius: 50%;
  opacity: 0.8;
}

.title-content {
  @apply relative z-10 text-white text-lg font-bold italic w-full;
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.9);
  position: relative;
  display: inline-block;
  font-style: italic;
  font-weight: bold;
}

.tech-circle {
  @apply relative m-1;
  width: 24px;
  height: 24px;
}

.ring {
  position: absolute;
  border: 2px solid rgba(85, 140, 249, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(85, 140, 249, 0.6);
  animation: pulse 3s infinite ease-in-out;
}

.ring-1 {
  width: 8px;
  height: 8px;
  top: 8px;
  left: 8px;
  border-color: rgba(201, 243, 50, 0.9);
  box-shadow: 0 0 8px rgba(201, 243, 50, 0.8);
  animation-delay: 0s;
}

.ring-2 {
  width: 14px;
  height: 14px;
  top: 5px;
  left: 5px;
  border-color: rgba(85, 140, 249, 0.7);
  box-shadow: 0 0 10px rgba(85, 140, 249, 0.8);
  animation-delay: 0.2s;
}

.ring-3 {
  width: 22px;
  height: 22px;
  top: 1px;
  left: 1px;
  border-color: rgba(85, 140, 249, 0.5);
  box-shadow: 0 0 12px rgba(85, 140, 249, 0.3);
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}
.dialog-container {
  @apply text-zx-1 pointer-events-auto relative box-border flex h-full w-full flex-col rounded-lg;
  border: 1px solid rgba(85, 140, 249, 0.2);
}
</style>
