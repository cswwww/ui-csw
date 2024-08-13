/*
 * @Date: 2024-02-19 15:38:49
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-12 17:18:20
 * @FilePath: \storybook\src\components\Dialog\Dialog1.js
 * @Description: 函数式调用 - 通用彈窗组件
 */
import { createApp } from 'vue'
import zxDialog from './zxDialog.vue'

const options = {
  show: true, // 是否显示
  component: zxDialog, // 组件
  params: {} // 参数
}
const createDialog = (option = options) => {
  const { component, ...props } = option

  const mountNode = document.createElement('div')
  const Instance = createApp(component, {
    ...props,
    close: () => {
      // 关闭弹窗
      Instance.unmount(mountNode)
      document.body.removeChild(mountNode)
    }
  })

  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}

export default createDialog

// ! How to use
// import zxDialog from '@/components/dialog/zxDialog.js'
//   zxDialog({
//   component: Component,
//   params: []
// })
