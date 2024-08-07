/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 14:17:41
 * @FilePath: \storybook\src\components\Card\DataCard.stories.ts
 * @Description: 组件 - 按钮 - 1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import DataCard from './DataCard.vue'

const meta = {
  title: 'Card/DataCard',
  component: DataCard,
  tags: ['autodocs'],
  args: {},
  render: (args) => ({
    components: { DataCard },
    setup() {
      return { args }
    },
    template: '<DataCard class="w-72" v-bind="args" />'
  })
} satisfies Meta<typeof DataCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Label',
    num: 1,
    unit: 'times',
    num2: 0,
    unit2: ''
  }
}

export const Second: Story = {
  args: {
    label: 'Label',
    num: 1,
    unit: 'times',
    num2: 2,
    unit2: 'times'
  }
}
