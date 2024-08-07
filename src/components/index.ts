import { App } from 'vue'
import { defineAsyncComponent, AsyncComponentLoader } from 'vue'

const componentss = import.meta.glob('./**/*.vue')

// ! 全局组件引用管理
export default {
  install(app: App) {
    for (let [key, value] of Object.entries(componentss)) {
      // 字符串截取，具体看下面console.log()中的name就知道了
      let name = 'zx' + key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(value as AsyncComponentLoader))
    }
  }
}
