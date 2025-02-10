<script setup>
import { Dialog1, zxButton} from '../../src/components/index.js'
import { ref } from 'vue'
const show = ref(false)
</script>

# Dialog

## Dialog1

<zxButton style="margin-bottom: 10px" @click="show = true" label="点击 弹出" />

<Dialog1 v-model:show="show">
  <template #title>
    标题
  </template>
  <template #content>
    内容
  </template>
</Dialog1>

```vue
<script setup>
import { createDialog, Dialog1 } from '../../src/components/index.js'

const show = ref(true)

// 命令式弹窗
const dialog = createDialog({
  component: Dialog1,
  params: [],
})
</script>

<!-- 声明式弹窗 -->
<Dialog1 v-model:show="show">
  <template #title>
    标题
  </template>
  <template #content>
    内容
  </template>
</Dialog1>

dialog.open()
```
