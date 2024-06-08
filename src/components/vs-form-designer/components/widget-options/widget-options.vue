<script setup lang="ts">
import draggable from 'vuedraggable'
import type { WidgetOptionItem } from '.'
import type { WidgetSetting, WidgetType } from '../..'
import { widgetOptions } from './constants'
import { nanoid5 } from '../../util'
// import type { InputProps } from 'element-plus'

function transformClone(widget: WidgetOptionItem): WidgetSetting | undefined {
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
    // case 'input':
    //   return {
    //     label: '输入框'
    //   } as InputProps
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
      <el-row :gutter="10">
        <el-col v-for="item1 in item.children" :key="item1.value" :span="12">
          <draggable
            :list="item.children"
            :group="{ name: 'draggable-widget-option', pull: 'clone', put: false }"
            :sort="false"
            :clone="(widget: WidgetOptionItem) => transformClone(widget)"
            item-key="value"
          >
            <el-button bg text>{{ item1.label }}</el-button>
          </draggable>
        </el-col>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
.el-button {
  width: 100%;
  font-weight: normal;
  justify-content: flex-start;
  margin-bottom: 10px;
}
</style>
