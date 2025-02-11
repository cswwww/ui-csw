<!--
 * @Date: 2024-03-14 09:26:07
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-11 21:51:47
 * @FilePath: \ui-csw\src\components\Footer\Footer2.vue
 * @Description: 页脚 2
-->
<script setup>
import footerImg from '../../assets/img/footer2.svg'
</script>

<template>
  <footer class="footer-bg">
    <div class="pointer-events-auto absolute bottom-2 flex-center w-full gap-4">
      <slot />
    </div>
    <img class="fixed bottom-0 -z-10 h-16 w-full object-cover" :src="footerImg">
  </footer>
</template>

<style scoped>
.footer-bg {
  @apply pointer-events-none absolute bottom-0 z-10 box-border h-16 w-full select-none overflow-hidden;
  background: linear-gradient(
    180deg,
    rgba(2, 68, 102, 0) 0%,
    rgba(2, 60, 89, 0.5) 38%,
    rgba(1, 18, 27, 0.8) 100%
  );
}
</style>
