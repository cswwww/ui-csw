<script setup>
import { Legend1, Timeline1, MapTitle } from '../../src/components/index.js'

const layerGroupExample = [
  {
    groupTitle: '线路类型',
    legendList: [
      { group: '线路', type: 'circle', code: 'xiexian', title: '500kV', color: '#B94842' },
      { type: 'circle', code: 'xiexian', color: '#2384DD', title: '220kV', group: '线路' },
      { group: '线路', title: '110kV', type: 'circle', code: 'xiexian', color: '#3EC65B' }
    ]
  }
]

const timelineData = [
      {
        date: '1',
        time: '2020-10-10',
      },
      {
        date: '2',
        time: '2020-10-11',
      },
      {
        date: '3',
        time: '2020-10-12',
      },
      {
        date: '4',
        time: '2020-10-13',
      },
      {
        date: '5',
        time: '2020-10-14',
      },
    ]
</script>

# Map

> 地图组件

## Legend1

<Legend1 :legend-group="layerGroupExample"  />

```vue
<Legend1>
  <template #title>
    图例
  </template>
  <!-- 图例额外内容 -->
</Legend1>
```

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| legendGroup | Array | null | 图例分组 |
| layerList | Array | [] | 图层列表 |

| defineExpose | 说明 |
| --- | --- |
| showLegend | 图例是否显示 |
| getSceneLegend | 获取图例 |

```js
// 图层分组示例
const layerGroupExample = [

  {
    groupTitle: '线路类型',
    legendList: [
      { group: '线路', type: 'icon', code: 'xiexian', title: '500kV', color: '#B94842' },
      { type: 'icon', code: 'xiexian', color: '#2384DD', title: '220kV', group: '线路' },
      { group: '线路', title: '110kV', type: 'icon', code: 'xiexian', color: '#3EC65B' }
    ]
  }
]
```

## Timeline1

<Timeline1 :data="timelineData" />

```vue
<Timeline1 />
```

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data | Array | [] | 时间轴数据 |
| label | String | 'time' | 时间轴标签字段 |
| interval | Number | 500 | 时间轴间隔，单位：毫秒 |

## MapTitle

<div class="relative w-full h-40">
  <MapTitle mainTitle="标题" secondTitle="副标题" thirdTitle="第三标题" />
</div>

```vue
<MapTitle mainTitle="标题" secondTitle="副标题" thirdTitle="第三标题" />
```

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mainTitle | String | 标题 | 标题 |
| secondTitle | String | 副标题 | 副标题 |
| thirdTitle | String | 第三标题 | 第三标题 |

