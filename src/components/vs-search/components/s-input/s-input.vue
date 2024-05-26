<script setup lang="ts">
import config from '@/components/config'
import type { SInputProps } from '.'

defineProps<{
  sourceProps?: SInputProps
}>()

const model = defineModel<string>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-input
      v-model="model"
      v-bind="sourceProps"
      :placeholder="sourceProps?.placeholder ?? '请输入'"
      :clearable="sourceProps?.clearable ?? true"
    ></el-input>
  </el-config-provider>
</template>
