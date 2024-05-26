<script setup lang="ts">
import config from '@/components/config'
import type { STreeSelectProps } from '.'
import { VsTreeSelect, type VsTreeSelectValue } from '@/components/vs-tree-select'

defineProps<{
  props?: STreeSelectProps
}>()

const model = defineModel<VsTreeSelectValue>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <VsTreeSelect v-model="model" v-bind="props" />
  </el-config-provider>
</template>
