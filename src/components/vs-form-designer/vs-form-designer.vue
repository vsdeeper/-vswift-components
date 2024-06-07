<script setup lang="ts">
import { Delete, View } from '@element-plus/icons-vue'
import { WidgetOptions } from './components'
import config from '../config'
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-container class="vs-form-designer">
      <el-aside width="320px">
        <el-tabs model-value="widget">
          <el-tab-pane label="组件" name="widget">
            <WidgetOptions />
          </el-tab-pane>
          <el-tab-pane label="表单模板" name="form-template"></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <div class="function-bar">
          <el-button type="primary" text :icon="View">预览</el-button>
          <el-button type="primary" text>导入JSON</el-button>
          <el-button type="primary" text>导出JSON</el-button>
          <el-button type="danger" text :icon="Delete">清空</el-button>
        </div>
        <el-scrollbar height="calc(100vh - 100px)"> fdsaf </el-scrollbar>
      </el-main>
      <el-aside width="320px">
        <el-tabs model-value="widget-settings">
          <el-tab-pane label="组件设置" name="widget-settings"></el-tab-pane>
          <el-tab-pane label="表单设置" name="form-settings"></el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-form-designer {
  overflow: auto;
}
.function-bar {
  display: flex;
  align-items: flex-end;
  height: 40px;
  .el-button + .el-button {
    margin-left: 0;
  }
}
.el-main {
  --el-main-padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 400px;
}
</style>
