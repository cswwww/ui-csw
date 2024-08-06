/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-06 09:46:15
 * @FilePath: \storybook\src\components\Loading\Loading.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import Loading from './Loading.vue'

const meta = {
  title: 'Simple/Loading',
  component: Loading,
  tags: ['autodocs']
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
