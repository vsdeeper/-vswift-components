<script setup lang="ts">
import config from '@/components/config'
import type { SDateValue } from '.'
import type { DatePickerProps } from 'element-plus'

defineProps<{
  props?: Partial<DatePickerProps>
}>()

const model = defineModel<SDateValue>()
</script>

<template>
  <el-config-provider :namespace="config.namespace" :locale="config.locale">
    <el-date-picker
      v-model="model"
      v-bind="{
        ...props,
        valueFormat: props?.valueFormat ?? 'x',
        clearable: props?.clearable ?? true
      }"
    >
    </el-date-picker>
  </el-config-provider>
</template>
