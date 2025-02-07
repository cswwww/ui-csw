/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-05 09:04:09
 * @FilePath: \ui-csw\src\components\Border\Border2.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Border2 from './Border2.vue'

const meta = {
  title: 'Border/Border2',
  component: Border2,
  tags: ['autodocs'],

  // render: (args) => ({
  //   components: { Border2 },
  //   setup() {
  //     return { args }
  //   },
  //   template: '<Border2>123</Border2>'
  // })
} satisfies Meta<typeof Border2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
