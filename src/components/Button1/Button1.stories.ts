/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 09:43:08
 * @FilePath: \storybook\src\components\Button1\Button1.stories.ts
 * @Description: 组件 - 按钮 - 1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Button1 from './Button1.vue'

const meta = {
  title: 'Button/Button1',
  component: Button1,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Button1>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: '数据按钮'
  }
}
