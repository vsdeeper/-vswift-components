<script setup lang="ts">
import { VsTreeSelectTest, VsSearchTest } from '@/test'
</script>

<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="VsTreeSelect">
      <VsTreeSelectTest />
    </el-tab-pane>
    <el-tab-pane label="VsSearch">
      <VsSearchTest />
    </el-tab-pane>
    <el-tab-pane label="Role" />
    <el-tab-pane label="Task" />
  </el-tabs>
</template>

<style lang="scss" scoped>
.el-tabs {
  display: flex;
  padding: 15px 15px 15px 0;
  :deep(.el-tabs__content) {
    flex: 1;
  }
}
</style>
