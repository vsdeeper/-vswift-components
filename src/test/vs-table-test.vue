<script setup lang="ts">
import { VsTable, type VsTableProps } from '@/components'
import { sleep } from 'radash'
import { format } from 'date-fns'

const params = ref({ currentPage: 1, pageSize: 20 })
const permissions = ref(['add', 'edit', 'delete', 'copy', 'permission_config'])
const table = ref<VsTableProps>({
  loading: false,
  data: [],
  total: 100,
  showSelection: true,
  operateColumnProps: { minWidth: 100 },
  columns: [
    { label: '日期', prop: 'date' },
    {
      label: '信息',
      prop: 'info',
      children: [
        { label: '名字', prop: 'name' },
        {
          label: '地址',
          prop: 'addrInfo',
          children: [
            { label: '国家', prop: 'state' },
            { label: '城市', prop: 'city' },
            { label: '地址', prop: 'address' },
          ],
        },
      ],
    },
  ],
  operateOptions: [
    {
      label: '新增',
      value: 'add',
      code: 'add',
      show: code => permissions.value.includes(code!),
    },
    {
      label: '批量删除',
      value: 'batch_delete',
      code: 'delete',
      type: 'danger',
      show: code => permissions.value.includes(code!),
    },
  ],
  rowOperateOptions: [
    {
      label: '编辑',
      value: 'edit',
      code: 'edit',
      show: (code, row) => {
        if (permissions.value.includes(code!)) {
          return [1, 2, 3, 4].includes(row!.status)
        } else return false
      },
    },
    {
      label: '复制',
      value: 'copy',
      code: 'copy',
      show: (code, row) => {
        if (permissions.value.includes(code!)) {
          return [1, 2, 3, 4].includes(row!.status)
        } else return false
      },
    },
    {
      label: '权限设置',
      value: 'permission_config',
      code: 'permission_config',
      show: (code, row) => {
        if (permissions.value.includes(code!)) {
          return [4].includes(row!.status)
        } else return false
      },
    },
    {
      label: '删除',
      value: 'delete',
      code: 'delete',
      type: 'danger',
      show: (code, row) => {
        if (permissions.value.includes(code!)) {
          return [1, 2, 3, 4].includes(row!.status)
        } else return false
      },
    },
  ],
})

async function getData() {
  table.value.loading = true
  await sleep(2000)
  table.value.loading = false
  return [
    {
      id: 1,
      name: '张三',
      date: +new Date(2024, 4, 6),
      state: '中国',
      city: '武汉',
      address: '硚口区金地悦江时代',
      status: 1,
    },
    {
      id: 2,
      name: '李四',
      date: +new Date(2024, 11, 9),
      state: '中国',
      city: '上海',
      address: '浦东新区张江高科',
      status: 2,
    },
    {
      id: 3,
      name: '杨桃',
      date: +new Date(2024, 4, 9),
      state: '中国',
      city: '深圳',
      address: '龙华区三和大神',
      status: 3,
    },
    {
      id: 4,
      name: '陈默',
      date: +new Date(2024, 3, 4),
      state: '中国',
      city: '深圳',
      address: '龙华区三和大神',
      status: 4,
    },
  ]
}

onMounted(() => {
  getData().then(res => (table.value.data = res))
})

function onOperate(...args: any[]) {
  const [key, row] = args
  switch (key) {
    case 'add': {
      console.log('onOperate ->', 'add')
      break
    }
    case 'edit': {
      console.log('onOperate ->', 'edit', row)
      break
    }
    case 'delete': {
      console.log('onOperate ->', 'delete', row)
      break
    }
    case 'batch_delete': {
      console.log('onOperate ->', 'batch_delete')
      break
    }
    case 'copy': {
      console.log('onOperate ->', 'copy', row)
      break
    }
    case 'permission_config': {
      console.log('onOperate ->', 'permission_config', row)
      break
    }
  }
}
</script>

<template>
  <VsTable
    v-model:current-page="params.currentPage"
    v-model:page-size="params.pageSize"
    v-bind="table"
    @operate="onOperate"
  >
    <template #date="{ row }">
      {{ format(row.date, 'yyyy-MM-dd HH:mm:ss') }}
    </template>
    <template #name="{ row }"> {{ row.name }}000 </template>
    <template #state="{ row }"> {{ row.state }}111 </template>
    <template #city="{ row }"> {{ row.city }}222 </template>
    <template #address="{ row }"> {{ row.address }}333 </template>
  </VsTable>
</template>
