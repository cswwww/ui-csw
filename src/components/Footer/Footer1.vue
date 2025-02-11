<!--
 * @Date: 2024-03-14 09:26:07
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-11 15:20:04
 * @FilePath: \ui-csw\src\components\Footer\footer1.vue
 * @Description: 页面底部的导航区域 <footer-bar />
-->
<script setup>
import footerImg from '../../assets/img/footer1.svg'
</script>

<template>
  <!-- 底部装饰 -->
  <footer
    class="from-0 pointer-events-none fixed bottom-0 z-10 box-border flex h-7 w-full select-none justify-between overflow-hidden bg-gradient-to-t from-zx-9 to-transparent"
  >
    <img class="absolute -z-10 h-auto w-full object-cover px-3" :src="footerImg">
  </footer>
</template>
