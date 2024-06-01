<script setup lang="ts">
import config from '@/components/config'
import type { TimePickerDefaultProps } from 'element-plus'

defineProps<{
  props?: Partial<TimePickerDefaultProps>
}>()

const model = defineModel<Date | [Date, Date] | [number, number] | [string, string]>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-time-picker
      v-model="model"
      v-bind="{
        ...props,
        valueFormat: props?.valueFormat ?? 'x',
        clearable: props?.clearable ?? true
      }"
    >
    </el-time-picker>
  </el-config-provider>
</template>
