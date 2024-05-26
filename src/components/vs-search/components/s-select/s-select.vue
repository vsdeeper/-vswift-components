<script setup lang="ts">
import config from '@/components/config'
import type { SSelectProps, SSelectValue } from '.'

defineProps<{
  sourceProps?: SSelectProps
}>()

const model = defineModel<SSelectValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-select
      v-model="model"
      v-bind="sourceProps"
      :placeholder="sourceProps?.placeholder ?? '请选择'"
      :clearable="sourceProps?.clearable ?? true"
      :filterable="sourceProps?.filterable ?? true"
    >
      <el-option
        v-for="item in sourceProps?.options"
        :key="item[sourceProps?.itemValue ?? 'value']"
        :label="item[sourceProps?.itemLabel ?? 'label']"
        :value="item[sourceProps?.itemValue ?? 'value']"
      >
      </el-option>
    </el-select>
  </el-config-provider>
</template>
