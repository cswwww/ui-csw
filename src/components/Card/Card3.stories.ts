/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-18 11:12:08
 * @FilePath: \storybook\src\components\Card\Card3.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Card3 from './Card3.vue'

const meta = {
  title: 'Card/Card3',
  component: Card3,
  tags: ['autodocs'],
  args: {},
  render: (args) => ({
    components: { Card3 },
    setup() {
      return { args }
    },
    template: `
    <card-3>
      <template #title>标题</template>
      <template #content>内容</template>
    </card-3>`
  })
} satisfies Meta<typeof Card3>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
