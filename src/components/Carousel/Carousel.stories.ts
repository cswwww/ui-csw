/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2025-02-06 09:32:00
 * @FilePath: \ui-csw\src\components\Carousel\Carousel.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Carousel from './Carousel.vue'

const meta = {
  title: 'Simple/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  },
}
