<!--
 * @Date: 2024-04-29 09:44:29
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-25 15:21:16
 * @FilePath: \ui-csw\src\components\Card\Card6.vue
 * @Description: 卡片 - 模板6
 * @Ref: https://github.com/fengtianxi001/MF-TurbineMonitor
-->

<template>
  <div class="layout-panel animate animate__bounceIn">
    <div class="panel-header">
      <div class="panel-header-title">
        <slot name="title">
          标题
        </slot>
      </div>
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
  position: relative;
  height: 100%;
  color: #fff;
  background-image: url('../../assets/img/card6_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.panel-header {
    display: flex;
    align-items: center;
    height: 65px;
    font-family: Douyu;
    background-image: url('../../assets/img/card6_title.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

  }
  .panel-header-title {
      position: relative;
      top: -12px;
      left: 70px;
      font-size: 15px;
    }
.panel-body {
    box-sizing: border-box;
    height: calc(100% - 65px);
    padding: 0 10px 10px;
    overflow: hidden;
  }
</style>
