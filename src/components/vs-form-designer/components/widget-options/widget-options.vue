<script setup lang="ts">
import draggable from 'vuedraggable'
import type { WidgetOptionItem } from '.'
import type { WidgetDesignData, WidgetType } from '../..'
import { widgetOptions } from './constants'
import { nanoid5 } from '../../util'
import type { DInputOptions } from '../form-design-area'
// import type { InputProps } from 'element-plus'

function transformClone(widget: WidgetOptionItem): WidgetDesignData | undefined {
  try {
    const type = widget.value.replace(/-/g, '')
    const id = `${type}${nanoid5()}`
    return {
      id,
      type: widget.value as WidgetType,
      options: genWidgetSettingOptions(widget),
      __selected: false // 组件被选中标识，协助做交互，无实际用途
    }
  } catch (error) {
    console.error('transformClone ->', error)
  }
}

function genWidgetSettingOptions(widget: WidgetOptionItem) {
  switch (widget.value) {
    case 'input':
      return {
        placeholder: '请输入'
      } as DInputOptions
    default:
      return {
        label: widget.label
      } as Record<string, any>
  }
}
</script>

<template>
  <el-collapse class="widget-options" :model-value="widgetOptions.map((e) => e.value)">
    <el-collapse-item
      v-for="item in widgetOptions"
      :key="item.value"
      :title="item.label"
      :name="item.value"
    >
      <div class="draggable-wrap">
        <draggable
          class="draggable-items"
          :list="item.children"
          :group="{
            name: 'draggable-widget-option',
            pull: 'clone',
            put: false
          }"
          :sort="false"
          :clone="(widget: WidgetOptionItem) => transformClone(widget)"
          item-key="value"
        >
          <template #item="{ element: item }">
            <div class="item widget-option">
              <el-button bg text>{{ item.label }}</el-button>
            </div>
          </template>
        </draggable>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
.draggable-wrap {
  .draggable-items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
    .item {
      width: 50%;
      padding: 4px;
      box-sizing: border-box;
      .el-button {
        width: 100%;
        font-weight: normal;
        justify-content: flex-start;
      }
      .el-button + .el-button {
        margin-left: 0;
      }
    }
  }
}
</style>
