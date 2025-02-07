<!--
 * @Date: 2024-03-01 11:00:28
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-05 15:12:36
 * @FilePath: \ui-csw\src\components\Border\Border2.vue
 * @Description: 边框2
 * @Reference: https://juejin.cn/post/7220020535298719802
-->

<template>
  <div class="dialog-2">
    <span class="dialog-rect" />
    <div class="box">
      <slot>
        通过右下角可改变大小
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .dialog-2 {
    @apply relative w-fit h-fit;
    font-size: 20px;
    text-shadow: 0 10px 12px #001025;
  }
  .dialog-2::after {
    @apply absolute;
    content: "";
    border: 3px solid #32c5ff;
    width: 40%;
    height: 70%;
    left: -1px;
    top: -1px;
    z-index: 1;
    border-right: none;
    border-bottom: none;
    border-radius: 6px 0 0 0;
  }

  .box {
    @apply text-zx-1 flex-center;
    width: 300px;
    height: 350px;
    background: linear-gradient(
      180deg,
      rgba(138, 203, 255, 1),
      rgba(41, 106, 143, 1),
      rgba(190, 40, 40, 1)
    );
    border-radius: 6px;
    position: relative;
    z-index: 1;
    /* 添加resize */
    overflow: hidden;
    resize: both;
    min-width: 250px;
    min-height: 100px;
  }
  .box::after {
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    position: absolute;
    /* 定义背景色 */
    background: linear-gradient(181deg, #021734 0%, #3d1328 100%);
    /* 水平垂直 居中 */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    /* 添加圆角 */
    border-radius: 4px;
  }
  .dialog-rect {
    width: 80%;
    height: 90%;
    position: absolute;
    right: -8px;
    bottom: -8px;
    border-radius: 6px;
    background: #66b5f3;
    clip-path: polygon(
      0 0,
      calc(100% - 10px) 0,
      100% 10px,
      100% 100%,
      10px 100%,
      0 calc(100% - 10px)
    );;
  }
  .dialog-rect::after {
    content: "";
    position: absolute;
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    /* 水平垂直 居中 */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    background: #093258;
    border-radius: 4px;
    clip-path: polygon(
      0 0,
      calc(100% - 10px) 0,
      100% 10px,
      100% 100%,
      10px 100%,
      0 calc(100% - 10px)
    );;
  }
</style>
