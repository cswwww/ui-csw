/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-18 19:28:01
 * @FilePath: \storybook\src\components\Card\IconCard1.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import IconCard1 from './IconCard1.vue'

const meta = {
  title: 'Card/IconCard1',
  component: IconCard1,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof IconCard1>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    num: 1,
    icon: 'shuijin',
    unit: '台',
    label: '水浸装置',
  },
}
