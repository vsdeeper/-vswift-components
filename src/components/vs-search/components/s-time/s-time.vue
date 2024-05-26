<script setup lang="ts">
import config from '@/components/config'
import type { STimeProps, STimeValue } from '.'

defineProps<{
  sourceProps?: STimeProps
}>()

const model = defineModel<STimeValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-time-picker
      v-model="model"
      v-bind="sourceProps"
      :value-format="sourceProps?.valueFormat ?? 'x'"
      :clearable="sourceProps?.clearable ?? true"
    >
    </el-time-picker>
  </el-config-provider>
</template>
