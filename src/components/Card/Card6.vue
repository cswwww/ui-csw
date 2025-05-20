<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX cswwwx@gmail.com
 * @LastEditTime: 2025-05-20 15:42:12
 * @FilePath: /ui-csw/src/components/Card/Card6.vue
 * @Description: 卡片 - 模板6
 * @Ref: https://github.com/fengtianxi001/MF-TurbineMonitor
-->

<template>
  <div class="layout-panel animate animate__bounceIn text-zx-1">
    <div class="panel-header">
      <slot name="title">
        标题
      </slot>
    </div>
    <div class="panel-body">
      <slot name="content">
        默认内容
      </slot>
    </div>
  </div>
</template>

<style  scoped>
.layout-panel {
  @apply relative h-full ;
  background-image: url('../../assets/img/card6_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.panel-header {
  @apply flex items-center h-[65px] pl-[58px] w-full pb-[20px] pr-2;
  background-image: url('../../assets/img/card6_title.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.panel-body {
  @apply box-border h-[calc(100%-65px)] ;
  padding: 0 10px 10px;
  overflow: hidden;
}
</style>
