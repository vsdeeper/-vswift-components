<script setup lang="ts">
import type { InputProps } from 'element-plus'

defineProps<{
  props?: Partial<InputProps>
}>()

const model = defineModel<string>()
</script>

<template>
  <el-input v-model="model" v-bind="{ ...props, clearable: props?.clearable ?? true }"></el-input>
</template>
