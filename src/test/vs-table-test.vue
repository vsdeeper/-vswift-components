<script setup lang="ts">
import { VsTable, type VsTableColumnItem } from '@/components'
import { sleep } from 'radash'

const data = ref<Record<string, any>[]>([])
const columns = ref<VsTableColumnItem[]>([
  { label: '日期', prop: 'date' },
  {
    label: '信息',
    children: [
      { label: '名字', prop: 'name' },
      {
        label: '地址',
        children: [
          { label: '国家', prop: 'state' },
          { label: '城市', prop: 'city' },
          { label: '地址', prop: 'address' }
        ]
      }
    ]
  }
])

async function getData() {
  await sleep(1000)
  return [
    { id: 1, name: 'node-1' },
    { id: 2, name: 'node-2' }
  ]
}

onMounted(() => {
  getData().then((res) => (data.value = res))
})
</script>

<template>
  <VsTable :columns :data />
</template>
