/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-12-20 17:06:53
 * @FilePath: \ui-csw\src\components\Card\Card5.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Card5 from './Card5.vue'

const meta = {
  title: 'Card/Card5',
  component: Card5,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Card5 },
    setup() {
      return { args }
    },
    template: `
    <card-5>
      <template #title>标题</template>
      <template #content>内容</template>
    </card-5>
    `,
  }),
} satisfies Meta<typeof Card5>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
