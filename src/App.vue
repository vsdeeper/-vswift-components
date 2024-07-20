<script setup lang="ts">
import { VsTreeSelectTest, VsSearchTest, VsTableTest, VsFormDesignerTest } from '@/test'
</script>

<template>
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
</template>

<style lang="scss" scoped>
.el-tabs {
  display: flex;
  :deep(.el-tabs__content) {
    flex: 1;
    padding: 10px;
  }
}
</style>
