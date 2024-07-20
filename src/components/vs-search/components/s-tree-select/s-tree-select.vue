<script setup lang="ts">
import {
  VsTreeSelect,
  type VsTreeSelectProps,
  type VsTreeSelectValue
} from '@/components/vs-tree-select'

defineProps<{
  props?: VsTreeSelectProps
}>()

const model = defineModel<VsTreeSelectValue>()
</script>

<template>
  <VsTreeSelect v-model="model" v-bind="props" />
</template>
