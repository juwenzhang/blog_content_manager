<template>
  <PageSearch
    :form-items="searchConfig.formItems"
    @query-click="queryClickHandler"
    @reset-click="resetClickHandler"
  />
  <PageContent
    :page-name="contentConfig.pageName"
    :props-list="contentConfig.propsList"
    :header="contentConfig.header"
    @show-dialog="showDialogHandler"
    @edit-data="editDataHandler"
    ref="contentRef"
  />
  <PageModel
    :header="modelConfig.header"
    :props-list="modelConfig.propsList"
    ref="modelRef"
  >
    <template #footer>
      <el-button type="primary" @click="showDialogHandler">保存</el-button>
    </template>
  </PageModel>
</template>

<script setup lang="ts" name="department">
import { PageContent, PageModel, PageSearch } from '@/components'
import { contentConfig } from "@/views/home/pages/system/department/config/content.config.ts"
import { modelConfig } from '@/views/home/pages/system/department/config/model.config.ts'
import { searchConfig } from '@/views/home/pages/system/department/config/search.config.ts'
import usePageContentHookReturnType from '@/hooks/usePageContentHook.ts'
import usePageModelHookReturnType from '@/hooks/usePageModelHook.ts'

const { contentRef, resetClickHandler, queryClickHandler } = usePageContentHookReturnType()
const { modelRef, showDialogHandler, editDataHandler } = usePageModelHookReturnType()
</script>

<style scoped lang="less">

</style>
