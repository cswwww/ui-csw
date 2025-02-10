/*
 * @Date: 2024-02-19 15:38:49
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-10 09:47:09
 * @FilePath: \ui-csw\src\components\Dialog\Dialog.ts
 * @Description: 函数式调用 - 通用彈窗组件
 * @Notice: 建议搭配组件使用 - Dialog1.vue
 */
import type { Component, VNode } from 'vue'
import { createApp } from 'vue'

interface Options {
  component: Component | VNode
  show?: boolean
  [propName: string]: any
}

function createDialog(option: Options): void {
  const { component, ...props } = option

  const mountNode: HTMLElement = document.createElement('div')
  const Instance = createApp(component, {
    ...props,
    close: (): void => {
      // 关闭弹窗
      Instance.unmount()
      document.body.removeChild(mountNode)
    },
  })

  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}

export default createDialog

// ! How to use
// import Dialog1 from './components/Dialog/Dialog1.vue'
// import Dialog from './components/Dialog/Dialog.ts'
// Dialog({
//   component: Dialog1,
//   params: []
// })
