<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DCheckboxOptions } from '.'
import type { CheckboxGroupValueType, CheckboxValueType } from 'element-plus'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', val?: CheckboxValueType[]): void
}>()

const model = defineModel<CheckboxGroupValueType>()
const options = computed<DCheckboxOptions>(() => props.designData.options)

function onChange(val?: CheckboxValueType[]) {
  emit('change', val)
}
</script>

<template>
  <el-checkbox-group
    v-if="options.options?.length"
    v-bind="options"
    v-model="model"
    @change="onChange"
  >
    <template v-if="options.checkboxType === 'button'">
      <el-checkbox-button
        v-for="item in options.options"
        :key="item[options.itemValue ?? 'value']"
        v-bind="options.checkboxButtonProps"
        :label="item[options.itemLabel ?? 'label']"
        :value="item[options.itemValue ?? 'value']"
      ></el-checkbox-button>
    </template>
    <template v-else>
      <el-checkbox
        v-for="item in options.options"
        :key="item[options.itemValue ?? 'value']"
        v-bind="options.checkboxProps"
        :label="item[options.itemLabel ?? 'label']"
        :value="item[options.itemValue ?? 'value']"
      >
        <template #default>{{ item[options.itemLabel ?? 'label'] }}</template>
      </el-checkbox>
    </template>
  </el-checkbox-group>
  <el-text v-else type="info">暂未配置</el-text>
</template>
