/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-14 13:43:16
 * @FilePath: \storybook\src\components\Header\Header2.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Header2 from './Header2.vue'

const meta = {
  title: 'Simple/Header2',
  component: Header2,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Header2 },
    setup() {
      return { args }
    },
    template: `<Header2>
      <template #center>空天地隧智能巡检系统</template>
      <template #left>
        <div style="color: white">左侧插槽</div>
      </template>
    <template #right>
        <div style="color: white">右侧插槽</div>
      </template>
    </Header2>`,
  }),
} satisfies Meta<typeof Header2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
