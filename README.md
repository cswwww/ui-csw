# ui-csw 组件库

基于 Vue 3 的小型可视化大屏业务组件库。

## 安装

```bash
npm install ui-csw
```

## 使用方法

### 完整引入

```javascript
import components from 'ui-csw'
import { createApp } from 'vue'
import 'ui-csw/dist/main.css'

const app = createApp(App)
app.use(components)
```

### 按需引入
```javascript
import { Loading, zxButton } from 'ui-csw'
import 'ui-csw/dist/main.css'
```

## 作者

ReBeX (cswwwx@gmail.com)
