<script setup lang="ts">
import { VsSearch, type VsSearchOptions } from '@/components'
import type { SSelectProps } from '@/components/vs-search/components'

const options = ref<VsSearchOptions>([
  { id: 'srk', type: 'input', label: '输入框' },
  {
    id: 'xzk',
    type: 'select',
    label: '选择框',
    sourceProps: {
      options: [
        { id: '1', label: '选项1' },
        { id: '2', label: '选项2' },
        { id: '3', label: '选项3' }
      ],
      itemValue: 'id'
    } as SSelectProps
  }
])
</script>

<template>
  <VsSearch :options="options" />
</template>
