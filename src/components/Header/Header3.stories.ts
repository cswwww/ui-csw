/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-11-11 11:48:49
 * @FilePath: \component-csw\src\components\Header\Header3.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Header3 from './Header3.vue'

const meta = {
  title: 'Header/Header3',
  component: Header3,
  tags: ['autodocs'],
  args: {},
  render: args => ({
    components: { Header3 },
    setup() {
      return { args }
    },
    template: `<Header3>
      <template #center>空天地隧智能巡检系统</template>
      <template #left>
        <div style="color: black">左侧插槽</div>
      </template>
    <template #right>
        <div style="color: black">右侧插槽</div>
      </template>
    </Header3>`,
  }),
} satisfies Meta<typeof Header3>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
