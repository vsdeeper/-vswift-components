<script setup lang="ts">
import type { CascaderValue, cascaderProps } from 'element-plus'
import type { ExtractPropTypes } from 'vue'

defineProps<{
  props?: Partial<ExtractPropTypes<typeof cascaderProps>>
}>()

const model = defineModel<CascaderValue>()
</script>

<template>
  <el-cascader
    v-model="model"
    v-bind="{
      ...props,
      clearable: props?.clearable ?? true,
      filterable: props?.filterable ?? true,
      props: { ...props?.props, value: props?.props?.value ?? 'id' }
    }"
  >
  </el-cascader>
</template>
