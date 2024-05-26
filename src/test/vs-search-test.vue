<script setup lang="ts">
import { VsSearch, type VsSearchOptionItem } from '@/components'

const options = ref<VsSearchOptionItem[]>([
  { id: '1', type: 'input', label: '输入框', placeholder: '请输入' }
])
</script>

<template>
  <VsSearch :options="options" />
</template>
