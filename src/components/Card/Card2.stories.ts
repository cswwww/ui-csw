/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-13 10:03:30
 * @FilePath: \storybook\src\components\Card\Card2.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Card2 from './Card2.vue'

const meta = {
  title: 'Card/Card2',
  component: Card2,
  tags: ['autodocs'],
  args: {},
  render: (args) => ({
    components: { Card2 },
    setup() {
      return { args }
    },
    template: `
    <card-2>
      <template #title>标题</template>
      <template #content>内容</template>
    </card-2>`
  })
} satisfies Meta<typeof Card2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
