<template>
  <div class="dashboard-main-echarts" ref="dashBoardEchartsRef"></div>
</template>

<script setup lang="ts" name="dashboard-main-echarts">
import { ref, onMounted } from 'vue'
import MyEcharts from '@/utils/echarts.ts'

interface PropsType {
  config?: any
}
const props = withDefaults(defineProps<PropsType>(), {
  config: {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: 'bar',
        stack: 'x',
      },
      {
        data: [5, 4, 3, 5, 10],
        type: 'bar',
        stack: 'x',
      },
    ],
  },
})

const dashBoardEchartsRef = ref<HTMLElement | null>(null)
onMounted(() => {
  if (dashBoardEchartsRef.value) {
    new MyEcharts(dashBoardEchartsRef.value, props.config, { renderEngine: 'canvas' }).initEcharts()
  }
})
</script>

<style scoped lang="less">
.dashboard-main-echarts {
  height: 500px;
}
</style>
