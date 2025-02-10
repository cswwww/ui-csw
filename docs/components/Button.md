<script setup>
import { zxButton, Button1, Button2 } from '../../src/components/index.js'
</script>

# Button

> 按钮组件

<div class="flex flex-col gap-2">
  <zx-button label="zx-button" />
  <Button1 label="Button1" num="10" unit="个" />
  <Button2 label="Button2" />
</div>

## zxButton

<div class="flex gap-2">
  <zx-button type="normal" :disabled="false">normal</zx-button>
  <zx-button type="primary" :disabled="false">primary</zx-button>
  <zx-button type="active" :disabled="false">active</zx-button>
  <zx-button type="text" :disabled="false">text</zx-button>
  <zx-button type="map" :disabled="false">map</zx-button>
</div>

<div class="flex gap-2">
  <zx-button type="normal" disabled>normal</zx-button>
  <zx-button type="primary" disabled>primary</zx-button>
  <zx-button type="active" disabled>active</zx-button>
  <zx-button type="text" disabled>text</zx-button>
  <zx-button type="map" disabled>map</zx-button>
</div>

```vue
<zx-button type="normal" icon="icon-add" :disabled="false">
  normal
</zx-button>

<zx-button type="normal" icon="icon-add" :disabled="false" label="normal" />
```

| 参数 | 类型 | 默认值 | 说明 | 可选值 |
| --- | --- | --- | --- | --- |
| label | String | - | 按钮文本 | - |
| icon | String | - | 按钮图标 | - |
| disabled | Boolean | false | 是否禁用 | true, false |
| type | String | normal | 按钮类型 | normal, primary, active, text, map |

## Button1

<Button1 label="Button1" num="10" unit="个" />

```vue
  <Button1 icon="icon-add" label="normal" num="10" unit="个" />
```

| 参数 | 类型 | 默认值 | 说明 | 可选值 |
| --- | --- | --- | --- | --- |
| img | String | - | 按钮图片 | - |
| icon | String | - | 按钮图标 | - |
| label | String | - | 按钮文本 | - |
| num | Number | 0 | 按钮数量 | - |
| unit | String | 个 | 按钮单位 | - |

## Button2

<Button2 label="Button2" />

```vue
<Button2 label="normal" />
```

| 参数 | 类型 | 默认值 | 说明 | 可选值 |
| --- | --- | --- | --- | --- |
| label | String | 按钮 | 按钮文本 | - |
