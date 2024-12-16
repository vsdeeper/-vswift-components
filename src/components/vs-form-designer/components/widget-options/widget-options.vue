<script setup lang="ts">
import draggable from 'vuedraggable'
import type { WidgetOptionItem } from '.'
import type { WidgetDesignData, WidgetType } from '../..'
import { widgetOptions } from './constants'
import { nanoid5 } from '../../util'
import type {
  DCascaderOptions,
  DDataTableOptions,
  DDatePickerOptions,
  DDatetimePickerOptions,
  DInputOptions,
  DSelectOptions,
  DTimePickerOptions,
} from '../form-design-area'
// import type { InputProps } from 'element-plus'

function transformClone(widget: WidgetOptionItem): WidgetDesignData | undefined {
  try {
    const type = widget.value.replace(/-/g, '')
    const id = `${type}${nanoid5()}`
    return {
      id,
      type: widget.value as WidgetType,
      options: genWidgetDataOptions(widget),
      widgetList: genWidgetDataWidgetList(widget.value),
      __selected: false, // 组件被选中标识，协助做交互，无实际用途
    }
  } catch (error) {
    console.error('transformClone ->', error)
  }
}

function genWidgetDataWidgetList(widgetType: WidgetType): WidgetDesignData[] | undefined {
  switch (widgetType) {
    case 'data-table':
    case 'recursive-area':
      return []
    case 'grid-layout': {
      const id = `gridcol${nanoid5()}`
      return [{ id, type: widgetType, options: {}, widgetList: [] }]
    }
    default:
      return undefined
  }
}

function genWidgetDataOptions(widget: WidgetOptionItem) {
  switch (widget.value) {
    case 'input':
      return {
        label: widget.label,
        placeholder: '请输入',
      } as DInputOptions
    case 'select':
      return { label: widget.label, placeholder: '请选择' } as DSelectOptions
    case 'cascader':
      return { label: widget.label, placeholder: '请选择' } as DCascaderOptions
    case 'date-picker':
      return {
        label: widget.label,
        placeholder: '请选择日期',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
      } as DDatePickerOptions
    case 'datetime-picker':
      return {
        label: widget.label,
        placeholder: '请选择日期时间',
        startPlaceholder: '开始日期时间',
        endPlaceholder: '结束日期时间',
      } as DDatetimePickerOptions
    case 'time-picker':
      return {
        label: widget.label,
        placeholder: '请选择时间',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
      } as DTimePickerOptions
    case 'data-table':
      return {
        label: widget.label,
      } as DDataTableOptions
    default:
      return {
        label: widget.label,
      } as Record<string, any>
  }
}
</script>

<template>
  <el-collapse class="widget-options" :model-value="widgetOptions.map(e => e.value)">
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
            put: false,
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
      button[class*='-button'] {
        width: 100%;
        font-weight: normal;
        font-size: 12px;
        justify-content: flex-start;
        & + button[class*='-button'] {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
