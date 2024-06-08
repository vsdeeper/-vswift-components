<script setup lang="ts">
import { VsTreeSelectTest, VsSearchTest, VsTableTest, VsFormDesignerTest } from '@/test'
</script>

<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="FormDesigner">
      <VsFormDesignerTest />
    </el-tab-pane>
    <el-tab-pane label="Table">
      <VsTableTest />
    </el-tab-pane>
    <el-tab-pane label="Search">
      <VsSearchTest />
    </el-tab-pane>
    <el-tab-pane label="TreeSelect">
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
