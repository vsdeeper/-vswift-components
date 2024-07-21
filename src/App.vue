<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
<template>
  <el-config-provider :locale="zhCn">
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
.el-tabs {
  display: flex;
  :deep(.el-tabs__content) {
    flex: 1;
    padding: 10px;
  }
}
</style>
