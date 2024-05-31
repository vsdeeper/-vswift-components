<script setup lang="ts">
import { VsTable, type VsTableColumnItem } from '@/components'
import { sleep } from 'radash'
import { format } from 'date-fns'

const data = ref<Record<string, any>[]>([])
const loading = ref(false)
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
  loading.value = true
  await sleep(2000)
  loading.value = false
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
    },
    {
      id: 3,
      name: '杨桃',
      date: +new Date(2024, 4, 9),
      state: '中国',
      city: '深圳',
      address: '龙华区三和大神'
    }
  ]
}

onMounted(() => {
  getData().then((res) => (data.value = res))
})
</script>

<template>
  <VsTable :loading :columns :data :table-props="{ stripe: true }">
    <template #table-operate>
      <el-button type="primary">新增</el-button>
      <el-button type="danger">删除</el-button>
    </template>
    <template #date="{ row }">
      {{ format(row.date, 'yyyy-MM-dd HH:mm:ss') }}
    </template>
    <template #name="{ row }"> {{ row.name }}000 </template>
    <template #state="{ row }"> {{ row.state }}111 </template>
    <template #city="{ row }"> {{ row.city }}222 </template>
    <template #address="{ row }"> {{ row.address }}333 </template>
  </VsTable>
</template>
