/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-09-05 16:09:44
 * @FilePath: \storybook\src\components\Title\Title2.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Title2 from './Title2.vue'

const meta = {
  title: 'Title/Title2',
  component: Title2,
  tags: ['autodocs'],
  args: {
    mainTitle: '标题'
  }
} satisfies Meta<typeof Title2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
