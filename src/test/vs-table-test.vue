<script setup lang="ts">
import { VsTable, type VsTableColumnItem } from '@/components'
import { sleep } from 'radash'
import { format } from 'date-fns'

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
    {
      id: 1,
      name: '张三',
      date: +new Date(2024, 4, 6),
      state: '中国',
      city: '武汉',
      address: '硚口区金地悦江时代'
    },
    {
      id: 2,
      name: '李四',
      date: +new Date(2024, 11, 9),
      state: '中国',
      city: '上海',
      address: '浦东新区张江高科'
    }
  ]
}

onMounted(() => {
  getData().then((res) => (data.value = res))
})
</script>

<template>
  <VsTable :columns :data>
    <template #date="{ row }">
      {{ format(row.date, 'yyyy-MM-dd HH:mm:ss') }}
    </template>
    <template #name="{ row }"> {{ row.name }}000 </template>
    <template #state="{ row }"> {{ row.state }}111 </template>
    <template #city="{ row }"> {{ row.city }}222 </template>
    <template #address="{ row }"> {{ row.address }}333 </template>
  </VsTable>
</template>
