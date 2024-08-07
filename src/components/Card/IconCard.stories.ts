/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 14:30:10
 * @FilePath: \storybook\src\components\Card\IconCard.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import IconCard from './IconCard.vue'

const meta = {
  title: 'Card/IconCard',
  component: IconCard,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof IconCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    num: 1,
    icon: 'shuijin',
    unit: '台',
    label: '水浸装置'
  }
}
