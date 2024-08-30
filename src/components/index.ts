import { App } from 'vue'
// import { defineAsyncComponent } from 'vue'
import '../style/main.css'
import '../style/font/iconfont.css'
import '../style/font/iconfont.js'

// ! 全局组件引用管理
// import { defineAsyncComponent, AsyncComponentLoader } from 'vue'
// const componentss = import.meta.glob('./**/*.vue')
// export default {
//   install(app: App) {
//     for (let [key, value] of Object.entries(componentss)) {
//       let name = 'zx' + key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
//       app.component(name, defineAsyncComponent(value as AsyncComponentLoader))
//     }
//   }
// }

// ! 组件
import Button from './Button/Button.vue'
import Loading from './Loading/Loading.vue'
import LineTitle from './Title/LineTitle.vue'
import Button1 from './Button/Button1.vue'
import DataCard from './Card/DataCard.vue'
import TitleCard from './Card/TitleCard.vue'
import IconCard from './Card/IconCard.vue'
import Dialog1 from './Dialog/Dialog1.vue'
import Card2 from './Card/Card2.vue'
import Header1 from './Header/Header1.vue'
import Timeline from './Timeline/Timeline.vue'

export {
  Button as zxButton,
  Loading,
  LineTitle,
  Button1,
  DataCard,
  TitleCard,
  IconCard,
  Dialog1,
  Card2,
  Timeline,
  Header1
}

// ! 方法
import createDialog from './Dialog/Dialog.ts'

export { createDialog }

// ! 手动引用组件
export default {
  install(app: App) {
    app.component('zxButton', Button)
    app.component('zxLoading', Loading)
    app.component('LineTitle', LineTitle)
    app.component('Button1', Button1)
    app.component('DataCard', DataCard)
    app.component('TitleCard', TitleCard)
    app.component('IconCard', IconCard)
    app.component('Dialog1', Dialog1)
    app.component('Card2', Card2)
    app.component('Timeline', Timeline)
    app.component('Header1', Header1)
  }
}
