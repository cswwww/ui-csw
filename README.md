# UI-CSW 组件库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/ui-csw.svg)](https://badge.fury.io/js/ui-csw)
[![GitHub stars](https://img.shields.io/github/stars/cswwww/ui-csw.svg?style=social)](https://github.com/cswwww/ui-csw/stargazers)

基于 Vue 3 的可视化大屏业务组件库，提供丰富的数据展示和交互组件，帮助开发者快速构建专业的数据可视化大屏应用。

## ✨ 特性

- 🚀 基于 Vue 3 + Vite 构建
- 🎨 使用 UnoCSS 实现原子化 CSS，样式高度可定制
- 🛠️ 开箱即用

## 📦 安装

使用 npm 或 pnpm 安装：

```bash
# 使用 npm
npm install ui-csw

# 使用 pnpm
pnpm add ui-csw
```

## 🔨 快速开始

### 完整引入

```javascript
import UI from 'ui-csw'
import { createApp } from 'vue'
import App from './App.vue'
import 'ui-csw/dist/main.css'

const app = createApp(App)
app.use(UI)
app.mount('#app')
```

### 按需引入

```javascript
import { Button, Card } from 'ui-csw'
import 'ui-csw/dist/button.css'
import 'ui-csw/dist/card.css'

app.component('Button', Button)
app.component('Card', Card)
```

## 📚 文档

完整的组件文档请访问：[UI-CSW 文档](https://cswwww.github.io/ui-csw/)

## 🛠 开发指南

### 开发环境

- Node.js 16+
- pnpm 7+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev

# 启动文档开发服务器
pnpm docs:dev
```

### 构建

```bash
# 构建组件库
pnpm build

# 构建文档
pnpm docs:build
```

## 📄 许可证

[MIT](LICENSE) © [CSWWW](https://github.com/cswwww)
