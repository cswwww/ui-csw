<script setup lang="ts">
const show: Ref<boolean> = ref(true)
</script>

<template>
  <div>
    <div>Storybook</div>
    <Button class="m-9" label="123" />
    <zxButton>asd</zxButton>
    <zx-loading />
    <dialog-1 v-model:show="show">
      <template #title> 标题 </template>
      <template #content> 内容 </template>
    </dialog-1>
  </div>
</template>
