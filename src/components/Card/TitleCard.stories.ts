/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 14:30:42
 * @FilePath: \storybook\src\components\Card\TitleCard.stories.ts
 * @Description: 组件
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import TitleCard from './TitleCard.vue'

const meta = {
  title: 'Card/TitleCard',
  component: TitleCard,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { TitleCard },
    setup() {
      return { args }
    },
    template: `
    <TitleCard>
      <template #title>标题</template>
      <template #content>内容</template>
    </TitleCard>`,
  }),
} satisfies Meta<typeof TitleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
