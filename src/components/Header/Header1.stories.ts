/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-29 13:40:42
 * @FilePath: \storybook\src\components\Header\Header1.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Header1 from './Header1.vue'

const meta = {
  title: 'Simple/Header1',
  component: Header1,
  tags: ['autodocs'],
  args: {},
  render: (args) => ({
    components: { Header1 },
    setup() {
      return { args }
    },
    template: `<Header1>
      <template #center>星空地智能巡检平台</template>
      <template #left>
        <div style="color: white">左侧插槽</div>
      </template>
    <template #right>
        <div style="color: white">右侧插槽</div>
      </template>
    </Header1>`
  })
} satisfies Meta<typeof Header1>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
