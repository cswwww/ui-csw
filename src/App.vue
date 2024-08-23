<script setup lang="ts">
import { createDialog } from './components/index.ts'
import Dialog1 from './components/Dialog/Dialog1.vue'

onMounted(() => {
  createDialog({
    component: Dialog1
  })
})
</script>

<template>
  <div>
    <zx-loading />
  </div>
</template>
