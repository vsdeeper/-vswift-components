<script setup lang="ts">
import config from '@/components/config'
import type { InputProps } from 'element-plus'

defineProps<{
  props?: Partial<InputProps>
}>()

const model = defineModel<string>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-input v-model="model" v-bind="{ ...props, clearable: props?.clearable ?? true }"></el-input>
  </el-config-provider>
</template>
