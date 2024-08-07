import { App } from 'vue'
import { defineAsyncComponent } from 'vue'
import '../style/main.css'
import '../style/font/iconfont.css'
import '../style/font/iconfont.js'

// import { defineAsyncComponent, AsyncComponentLoader } from 'vue'

// ! 全局组件引用管理
// const componentss = import.meta.glob('./**/*.vue')
// export default {
//   install(app: App) {
//     for (let [key, value] of Object.entries(componentss)) {
//       let name = 'zx' + key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
//       app.component(name, defineAsyncComponent(value as AsyncComponentLoader))
//     }
//   }
// }

// ! 手动引用组件
export default {
  install(app: App) {
    app.component(
      'zxButton',
      defineAsyncComponent(() => import('./Button/Button.vue'))
    )
    app.component(
      'zxLoading',
      defineAsyncComponent(() => import('./Loading/Loading.vue'))
    )
    app.component(
      'lineTitle',
      defineAsyncComponent(() => import('./Title/LineTitle.vue'))
    )
    app.component(
      'zxButton1',
      defineAsyncComponent(() => import('./Button1/Button1.vue'))
    )
    app.component(
      'dataCard',
      defineAsyncComponent(() => import('./Card/DataCard.vue'))
    )
  }
}
