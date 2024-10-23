<script setup lang="ts">
import Dialog1 from './components/Dialog/Dialog1.vue'
import { createDialog } from './components/index.ts'

onMounted(() => {
  createDialog({
    component: Dialog1,
  })
})
</script>

<template>
  <div>
    <zx-loading />
  </div>
</template>
