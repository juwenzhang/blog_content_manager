<template>
  <div class="dashboard-header-ele">
    <header class="dashboard-header-ele-header">
      <span>{{ props.title }}</span>
      <el-tooltip :content="props.tooltip" placement="bottom" effect="dark">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </header>
    <main class="dashboard-header-ele-main">
      <span ref="contentRef">{{ FormatNumInstance.render('sign', props.content) }}</span>
    </main>
    <footer class="dashboard-header-ele-footer">
      <span>{{ props.subTitle }}</span>
      <span ref="subContentRef">{{ FormatNumInstance.render('sign', props.content) }}</span>
    </footer>
  </div>
</template>

<script setup lang="ts" name="dashboardHeaderEle">
import { ref, onMounted } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import startCountUp from '@/utils/startCountUp.ts'
import FormatNumInstance from '@/utils/formatNum'

interface PropsType {
  title?: string
  content?: string
  subContent?: string
  subTitle?: string
  tooltip?: string
}
const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  content: '',
  subContent: '',
  subTitle: '',
  tooltip: '',
})

const contentRef = ref<HTMLElement | null>(null)
const subContentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  startCountUp(contentRef.value as HTMLElement, props.content, {
    duration: 1,
  })
  startCountUp(subContentRef.value as HTMLElement, props.content, {
    duration: 1,
  })
})
</script>

<style scoped lang="less">
.dashboard-header-ele {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); // 设置阴影

  .dashboard-header-ele-header {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.45);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    justify-content: space-between;
    align-items: flex-end;
  }

  .dashboard-header-ele-main {
    display: flex;
    margin-left: 0;
    font-size: 26px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .dashboard-header-ele-footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.45);
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
}
</style>
