/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-12 15:13:14
 * @FilePath: \storybook\src\components\Button\Button.stories.ts
 * @Description: 组件 - 按钮
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['normal', 'primary', 'active', 'text', 'map']
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    disabled: false
  }
}
