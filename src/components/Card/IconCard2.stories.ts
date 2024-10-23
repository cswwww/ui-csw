/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-18 19:28:51
 * @FilePath: \storybook\src\components\Card\IconCard2.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import IconCard2 from './IconCard2.vue'

const meta = {
  title: 'Card/IconCard2',
  component: IconCard2,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof IconCard2>

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
