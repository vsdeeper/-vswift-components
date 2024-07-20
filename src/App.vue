<script setup lang="ts">
import { VsTreeSelectTest, VsSearchTest, VsTableTest, VsFormDesignerTest } from '@/test'
import config from './components/config'
</script>

<template>
  <el-config-provider :namespace="config.namespace" :locale="config.locale">
    <el-tabs tab-position="left">
      <el-tab-pane label="表单设计">
        <VsFormDesignerTest />
      </el-tab-pane>
      <el-tab-pane label="数据表格">
        <VsTableTest />
      </el-tab-pane>
      <el-tab-pane label="搜索栏">
        <VsSearchTest />
      </el-tab-pane>
      <el-tab-pane label="树形选择器">
        <VsTreeSelectTest />
      </el-tab-pane>
    </el-tabs>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-tabs {
  display: flex;
  :deep(.vs-tabs__content) {
    flex: 1;
    padding: 10px;
  }
}
</style>
