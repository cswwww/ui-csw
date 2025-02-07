<!--
 * @Date: 2023-12-18 16:25:42
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-06 09:35:41
 * @FilePath: \ui-csw\src\components\Carousel\Carousel.vue
 * @Description: CSS-only infinite scrolling carousel animation
 * @Ref: https://blog.logto.io/css-only-infinite-scroll
-->
<script setup lang="ts">
</script>

<template>
  <div class="carousel">
    <div class="group">
      <div class="card">
        A
      </div>
      <div class="card">
        B
      </div>
      <div class="card">
        C
      </div>
    </div>
    <!-- Add `aria-hidden` to hide the duplicated cards from screen readers. -->
    <div aria-hidden class="group">
      <div class="card">
        A
      </div>
      <div class="card">
        B
      </div>
      <div class="card">
        C
      </div>
    </div>
  </div>
</template>

<style scoped>
  .carousel {
    margin: 0 auto;
    padding: 20px 0;
    max-width: 700px;
    overflow: hidden;
    display: flex;
    > * {
      flex: 0 0 100%;
    }
    &:hover .group {
      animation-play-state: paused;
    }
  }

  /* Group the cards for better structure. */
  .group {
    display: flex;
    gap: 20px;
    /* Add padding to the right to create a gap between the last and first card. */
    padding-right: 20px;
    will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
    animation: scrolling 10s linear infinite;
  }

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .card {
    width: 100%;
    color: white;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 10%) 5px 5px 20px 0;
    padding: 20px;
    font-size: xx-large;
    justify-content: center;
    align-items: center;
    min-height: 200px;

    &:nth-child(1) {
      background: #7958ff;
    }

    &:nth-child(2) {
      background: #5d34f2;
    }

    &:nth-child(3) {
      background: #4300da;
    }
  }
</style>
