/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-19 14:01:14
 * @FilePath: \storybook\src\components\Button\Button2.stories.ts
 * @Description: 组件 - 按钮 - 1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Button2 from './Button2.vue'

const meta = {
  title: 'Button/Button2',
  component: Button2,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Button2 },
    setup() {
      return { args }
    },
    template: '<Button2 v-bind="args" />',
  }),
} satisfies Meta<typeof Button2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
  },
}

export const Icon: Story = {
  args: {
    label: 'Icon',
  },
}
