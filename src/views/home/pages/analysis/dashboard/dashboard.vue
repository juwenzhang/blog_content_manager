<template>
  <div class="analysis-dashboard">
    <header class="analysis-dashboard-header">
      <el-row :gutter="10">
        <template v-for="(item, index) in HeaderConfig" :key="index">
          <el-col :span="6">
            <DashboardHeaderEle v-bind="item" />
          </el-col>
        </template>
      </el-row>
    </header>

    <main class="analysis-dashboard-main">
      <el-row>
        <template v-for="(item, index) in echartsConfigArr" :key="index">
          <el-col :span="6">
            <DashboardMainEcharts :config="item" />
          </el-col>
        </template>
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
        <!--        <el-col :span="6">-->
        <!--          <DashboardMainEcharts/>-->
        <!--        </el-col>-->
      </el-row>
    </main>

    <footer></footer>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import DashboardHeaderEle from '@/views/home/pages/analysis/dashboard/components/dashboard-header-ele.vue'
import HeaderConfig from '@/views/home/pages/analysis/dashboard/configs/header-config.ts'
import DashboardMainEcharts from '@/views/home/pages/analysis/dashboard/components/dashboard-main-echarts.vue'
import { echartsConfigArr } from '@/views/home/pages/analysis/dashboard/configs/echarts-config/echarts-config.ts'
</script>

<style lang="less" scoped>
.analysis-dashboard {
  .analysis-dashboard-main {
    margin-top: 100px;
  }
}
</style>
