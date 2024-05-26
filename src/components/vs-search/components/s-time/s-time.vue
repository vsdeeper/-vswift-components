<script setup lang="ts">
import config from '@/components/config'
import type { STimeProps, STimeValue } from '.'

defineProps<{
  props?: STimeProps
}>()

const model = defineModel<STimeValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-time-picker
      v-model="model"
      v-bind="props"
      :value-format="props?.valueFormat ?? 'x'"
      :clearable="props?.clearable ?? true"
    >
    </el-time-picker>
  </el-config-provider>
</template>
