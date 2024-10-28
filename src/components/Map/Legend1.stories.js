/*
 * @Date: 2024-08-05 11:08:11
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-28 15:14:41
 * @FilePath: \component-csw\src\components\Map\Legend1.stories.ts
 * @Description: 组件 - 加载动画
 */
import Legend1 from './Legend1.vue'

const meta = {
  title: 'Map/Legend1',
  component: Legend1,
  tags: ['autodocs'],
  args: {
    legendGroup: [],
    layerList: [],
  },
  // render: (args) => ({
  //   components: { Legend1 },
  //   setup() {
  //     return { args }
  //   },
  //   template: '<Legend1>123</Legend1>'
  // })
}

export default meta

export const Primary = {
  args: {
    legendGroup: [
      {
        groupTitle: '线路类型',
        legendList: [
          {
            group: '线路',
            type: 'circle',
            title: '500kV',
            color: '#B94842',
          },
          {
            type: 'circle',

            color: '#2384DD',
            title: '220kV',
            group: '线路',
          },
          {
            group: '线路',
            title: '110kV',
            type: 'circle',
            color: '#3EC65B',
          },
        ],
      },
    ],
  },
}
