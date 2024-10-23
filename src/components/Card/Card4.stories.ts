/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-08 11:49:59
 * @FilePath: \storybook\src\components\Card\Card4.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Card4 from './Card4.vue'

const meta = {
  title: 'Card/Card4',
  component: Card4,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Card4 },
    setup() {
      return { args }
    },
    template: `
    <card-4>
      <template #title>标题</template>
      <template #content>内容</template>
    </card-4>`,
  }),
} satisfies Meta<typeof Card4>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
