/*
 * @Date: 2024-08-02 14:22:08
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-09 15:29:00
 * @FilePath: \storybook\src\components\Dialog\Dialog1.stories.ts
 * @Description: 组件 - 对话框 - 模板1
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Dialog1 from './Dialog1.vue'

const meta = {
  title: 'Dialog/Dialog1',
  component: Dialog1,
  tags: ['autodocs'],
  args: {
    show: true,
    'onUpdate:show': fn()
  },
  render: (args) => ({
    components: { Dialog1 },
    setup() {
      return { args }
    },
    template: `<dialog-1 v-model:show="args.show" v-bind="args">
      <template #title>Title</template>
      <template #content>
        Content, Content Content, Content Content Content.
      </template>
    </dialog-1>`
  })
} satisfies Meta<typeof Dialog1>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
