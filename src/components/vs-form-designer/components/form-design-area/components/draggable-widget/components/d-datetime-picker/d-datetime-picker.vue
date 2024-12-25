<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DDatetimePickerOptions } from '.'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', val?: any): void
}>()

const model = defineModel<string>()
const options = computed<DDatetimePickerOptions>(() => props.designData.options)

function onChange(val: any) {
  emit('change', val)
}
</script>

<template>
  <el-date-picker
    v-bind="options"
    :type="options.type ?? 'datetime'"
    v-model="model"
    @change="onChange"
  />
</template>
