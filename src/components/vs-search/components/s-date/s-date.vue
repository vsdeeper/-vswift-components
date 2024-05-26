<script setup lang="ts">
import config from '@/components/config'
import type { SDateProps, SDateValue } from '.'

defineProps<{
  sourceProps?: SDateProps
}>()

const model = defineModel<SDateValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-date-picker
      v-model="model"
      v-bind="sourceProps"
      :placeholder="sourceProps?.placeholder ?? '请选择'"
      :value-format="sourceProps?.valueFormat ?? 'x'"
    >
    </el-date-picker>
  </el-config-provider>
</template>
