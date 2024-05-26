<script setup lang="ts">
import config from '@/components/config'
import type { SSelectProps, SSelectValue } from '.'

defineProps<{
  props?: SSelectProps
}>()

const model = defineModel<SSelectValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-select
      v-model="model"
      v-bind="props"
      :clearable="props?.clearable ?? true"
      :filterable="props?.filterable ?? true"
    >
      <el-option
        v-for="item in props?.options"
        :key="item[props?.itemValue ?? 'id']"
        :label="item[props?.itemLabel ?? 'label']"
        :value="item[props?.itemValue ?? 'id']"
      >
      </el-option>
    </el-select>
  </el-config-provider>
</template>
