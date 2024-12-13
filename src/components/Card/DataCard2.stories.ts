/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-13 10:27:43
 * @FilePath: \ui-csw\src\components\Card\DataCard2.stories.ts
 * @Description: 组件 - 按钮 - 1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import DataCard2 from './DataCard2.vue'

const meta = {
  title: 'Card/DataCard2',
  component: DataCard2,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { DataCard2 },
    setup() {
      return { args }
    },
    template: '<DataCard2 class="w-72" v-bind="args">123</DataCard2>',
  }),
} satisfies Meta<typeof DataCard2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Label',
    num: 1,
    unit: 'times',
  },
}

