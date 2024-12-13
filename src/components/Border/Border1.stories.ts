/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-13 15:23:16
 * @FilePath: \ui-csw\src\components\Border\Border1.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Border1 from './Border1.vue'

const meta = {
  title: 'Border/Border1',
  component: Border1,
  tags: ['autodocs'],

  // render: (args) => ({
  //   components: { Border1 },
  //   setup() {
  //     return { args }
  //   },
  //   template: '<Border1>123</Border1>'
  // })
} satisfies Meta<typeof Border1>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
