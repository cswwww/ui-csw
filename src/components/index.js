// import { defineAsyncComponent } from 'vue'
import '../style/main.css'

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
import Button1 from './Button/Button1.vue'
import Button2 from './Button/Button2.vue'
import Border1 from './Border/Border1.vue'
import Card2 from './Card/Card2.vue'
import Card3 from './Card/Card3.vue'
import Card4 from './Card/Card4.vue'
import Card5 from './Card/Card5.vue'
import DataCard from './Card/DataCard.vue'
import DataCard2 from './Card/DataCard2.vue'
import IconCard1 from './Card/IconCard1.vue'
import IconCard2 from './Card/IconCard2.vue'
import TitleCard from './Card/TitleCard.vue'
import Dialog1 from './Dialog/Dialog1.vue'
import Header1 from './Header/Header1.vue'
import Header2 from './Header/Header2.vue'
import Header3 from './Header/Header3.vue'
import Loading from './Loading/Loading.vue'
import Legend1 from './Map/Legend1.vue'
import Timeline from './Timeline/Timeline.vue'
import LineTitle from './Title/LineTitle.vue'

// ! 方法
import createDialog from './Dialog/Dialog.ts'

export {
  Button as zxButton,
  Button1,
  Button2,
  Border1,
  Card2,
  Card3,
  Card4,
  Card5,
  DataCard,
  DataCard2,
  Dialog1,
  Header1,
  Header2,
  Header3,
  IconCard1,
  IconCard2,
  Legend1,
  LineTitle,
  Loading,
  Timeline,
  TitleCard,
}

export { createDialog }

// ! 手动引用组件
export default {
  install(app) {
    app.component('zxButton', Button)
    app.component('zxLoading', Loading)
    app.component('LineTitle', LineTitle)
    app.component('Button1', Button1)
    app.component('Button2', Button2)
    app.component('Border1', Border1)
    app.component('DataCard', DataCard)
    app.component('TitleCard', TitleCard)
    app.component('IconCard1', IconCard1)
    app.component('IconCard2', IconCard2)
    app.component('Dialog1', Dialog1)
    app.component('Card2', Card2)
    app.component('DataCard2', DataCard2)
    app.component('Card3', Card3)
    app.component('Card4', Card4)
    app.component('Card5', Card5)
    app.component('Timeline', Timeline)
    app.component('Header1', Header1)
    app.component('Header2', Header2)
    app.component('Header3', Header3)
    app.component('Legend1', Legend1)
  },
}
