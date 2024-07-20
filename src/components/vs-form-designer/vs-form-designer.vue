<script setup lang="ts">
import { Delete, View } from '@element-plus/icons-vue'
import config from '../config'

defineProps<{
  height?: string
}>()
</script>

<template>
  <el-config-provider :namespace="config.namespace" :locale="config.locale">
    <el-container class="vs-form-designer" :style="{ height: height ?? '650px' }">
      <el-aside class="left-side" width="320px">
        <el-tabs model-value="widget">
          <el-tab-pane label="组件" name="widget">
            <el-scrollbar>
              <WidgetOptions />
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="表单模板" name="form-template">
            <el-scrollbar> 表单模板 </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <div class="function-bar">
          <el-button type="primary" text :icon="View">预览</el-button>
          <el-button type="primary" text>导入JSON</el-button>
          <el-button type="primary" text>导出JSON</el-button>
          <el-button type="danger" text :icon="Delete">清空</el-button>
        </div>
        <el-scrollbar>
          <FormDesignArea />
        </el-scrollbar>
      </el-main>
      <el-aside class="right-side" width="320px">
        <el-tabs model-value="widget-settings">
          <el-tab-pane label="组件设置" name="widget-settings">
            <el-scrollbar>
              <WidgetDesignArea />
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="表单设置" name="form-settings">
            <el-scrollbar> 表单设置 </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-form-designer {
  overflow: auto;
  .vs-tabs {
    height: 100%;
  }
  :deep(.vs-tabs__content) {
    height: calc(100% - 55px);
  }
  :deep(.vs-tab-pane) {
    height: 100%;
  }
  .left-side {
    :deep(.vs-scrollbar__view) {
      padding: 0 10px;
    }
    :deep(.vs-tabs__content) {
      padding: 0;
    }
  }
  .right-side {
    :deep(.vs-scrollbar__view) {
      padding: 0 10px;
    }
    :deep(.vs-tabs__content) {
      padding: 0;
    }
  }
  .vs-main {
    --vs-main-padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    :deep(.form-design-area) {
      position: relative;
      height: 100%;
      background-color: #fff;
      padding: 8px;
      box-sizing: border-box;
    }
    :deep(.draggable-widget) {
      height: 100%;
      box-sizing: border-box;
      .item {
        position: relative;
        padding: 5px;
        border: 2px solid #fff;
        background-color: #fff;
        &.widget-option.sortable-chosen {
          height: 0;
          padding: 0;
          overflow: hidden;
          border-width: 1px;
          border-color: var(--vs-color-primary);
        }
        &.widget-field {
          &.sortable-chosen {
            border-width: 2px;
            border-style: solid;
            border-color: var(--vs-color-primary);
            box-sizing: border-box;
          }
          .vs-cascader,
          .vs-date-editor,
          .vs-input-number {
            width: 100%;
          }
        }
      }
    }
    .function-bar {
      display: flex;
      align-items: flex-end;
      height: 40px;
      .vs-button + .vs-button {
        margin-left: 0;
      }
    }
    :deep(.vs-scrollbar) {
      box-sizing: border-box;
      border: 3px dotted var(--vs-border-color-light);
      background-color: var(--vs-bg-color-page);
    }
    :deep(.vs-scrollbar__view) {
      height: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
  }
}
</style>
