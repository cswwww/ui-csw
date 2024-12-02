# ui-csw 组件库

一个基于 Vue 3 的轻量级组件库。

## 安装

```bash
npm install ui-csw
```

## 使用方法

### 完整引入

```javascript
import components from 'ui-csw'
import { createApp } from 'vue'
import 'ui-csw/dist/style.css'
const app = createApp(App)
app.use(components)
```

### 按需引入
```javascript
import { Loading, zxButton } from 'ui-csw'
import 'ui-csw/dist/style.css'
```

## 组件列表

### 按钮组件
- `zxButton` - 基础按钮组件
- `Button1` - 按钮样式一
- `Button2` - 按钮样式二

### 卡片组件
- `Card2` - 卡片样式二
- `Card3` - 卡片样式三
- `Card4` - 卡片样式四
- `DataCard` - 数据卡片
- `DataCard2` - 数据卡片样式二
- `IconCard1` - 图标卡片一
- `IconCard2` - 图标卡片二
- `TitleCard` - 标题卡片

### 对话框组件
- `Dialog1` - 对话框组件
- `createDialog` - 对话框创建方法

### 头部组件
- `Header1` - 头部样式一
- `Header2` - 头部样式二
- `Header3` - 头部样式三

### 其他组件
- `Loading` - 加载组件
- `Legend1` - 图例组件
- `Timeline` - 时间轴组件
- `LineTitle` - 线性标题组件

## 方法

### createDialog
创建动态对话框的方法

```javascript
import { createDialog } from 'ui-csw'
createDialog({
// 配置项
})
```

## 作者

ReBeX (cswwwx@gmail.com)
