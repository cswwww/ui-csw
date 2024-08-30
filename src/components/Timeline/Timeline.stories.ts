/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-08-30 10:27:04
 * @FilePath: \storybook\src\components\Timeline\Timeline.stories.ts
 * @Description: 组件 - 加载动画
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Timeline from './Timeline.vue'

const meta = {
  title: 'Simple/Timeline',
  component: Timeline,
  tags: ['autodocs']
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: [
      {
        date: '1',
        time: '2020-10-10'
      },
      {
        date: '2',
        time: '2020-10-11'
      },
      {
        date: '3',
        time: '2020-10-12'
      },
      {
        date: '4',
        time: '2020-10-13'
      },
      {
        date: '5',
        time: '2020-10-14'
      }
    ],
    interval: 500,
    label: 'time',
    'onClick:tick': fn(),
    'onAnimate:stop': fn(),
    'onAnimate:tick': fn()
  }
}
