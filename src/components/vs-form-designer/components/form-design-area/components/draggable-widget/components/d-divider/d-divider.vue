<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DDividerOptions } from '.'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const options = computed<DDividerOptions>(() => props.designData.options)
const slots = useSlots()
</script>

<template>
  <el-divider v-bind="options">
    <template v-if="slots.default" #default>{{ options.text }}</template>
  </el-divider>
</template>
