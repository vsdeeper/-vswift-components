<script setup lang="ts">
import type { SSelectProps, SSelectValue } from '.'

defineProps<{
  sourceProps?: SSelectProps
}>()

const model = defineModel<SSelectValue>()
</script>

<template>
  <el-select
    v-model="model"
    v-bind="sourceProps"
    :placeholder="sourceProps?.placeholder ?? '请选择'"
    :no-data-text="sourceProps?.noDataText ?? '暂无数据'"
    clearable
    filterable
  >
    <el-option
      v-for="item in sourceProps?.options"
      :key="item[sourceProps?.itemValue ?? 'value']"
      :label="item[sourceProps?.itemLabel ?? 'label']"
      :value="item[sourceProps?.itemValue ?? 'value']"
    >
    </el-option>
  </el-select>
</template>
