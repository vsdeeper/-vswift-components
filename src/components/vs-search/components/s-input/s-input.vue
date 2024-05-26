<script setup lang="ts">
import type { SInputProps } from '.'

defineProps<{
  sourceProps?: SInputProps
}>()

const model = defineModel<string>()
</script>

<template>
  <el-input
    v-model="model"
    v-bind="sourceProps"
    :placeholder="sourceProps?.placeholder ?? '请输入'"
    clearable
  ></el-input>
</template>
