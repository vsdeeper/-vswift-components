<script setup lang="ts">
import config from '@/components/config'
import type { SDateProps, SDateValue } from '.'

defineProps<{
  props?: SDateProps
}>()

const model = defineModel<SDateValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-date-picker
      v-model="model"
      v-bind="props"
      :value-format="props?.valueFormat ?? 'x'"
      :clearable="props?.clearable ?? true"
    >
    </el-date-picker>
  </el-config-provider>
</template>
