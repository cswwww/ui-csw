/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-07 08:54:50
 * @FilePath: \storybook\src\components\Title\LineTitle.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import LineTitle from './LineTitle.vue'

const meta = {
  title: 'Title/LineTitle',
  component: LineTitle,
  tags: ['autodocs'],
  args: {
    label: '标题',
  },
  // render: (args) => ({
  //   components: { LineTitle },
  //   setup() {
  //     return { args }
  //   },
  //   template: '<LineTitle>123</LineTitle>'
  // })
} satisfies Meta<typeof LineTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
