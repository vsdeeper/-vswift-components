<script setup lang="ts">
import type { CascaderValue } from 'element-plus'
import type { SCascaderProps } from '.'
import config from '@/components/config'

defineProps<{
  sourceProps?: SCascaderProps
}>()

const model = defineModel<CascaderValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-cascader
      v-model="model"
      v-bind="sourceProps"
      :clearable="sourceProps?.clearable ?? true"
      :filterable="sourceProps?.filterable ?? true"
    >
    </el-cascader>
  </el-config-provider>
</template>
