/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 10:34:51
 * @FilePath: \storybook\src\components\Button1\Button1.stories.ts
 * @Description: 组件 - 按钮 - 1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Button1 from './Button1.vue'

const meta = {
  title: 'Button/Button1',
  component: Button1,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Button1 },
    setup() {
      return { args }
    },
    template: '<Button1 class="w-52" v-bind="args" />',
  }),
} satisfies Meta<typeof Button1>

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
    icon: 'iconfont图标',
    num: 100,
    unit: 'p',
  },
}
